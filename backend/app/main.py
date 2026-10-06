import asyncio
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy import text

from app.api import challenges, guestbook, incidents, profile, projects, scores
from app.api.incidents import incident_ticker
from app.config import settings
from app.db import Base, SessionLocal, engine
from app.seed import seed_database

ROOT = Path(__file__).resolve().parent.parent.parent
BACKEND_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = BACKEND_DIR / "static"
FRONTENDS_DIR = ROOT / "frontends"
KNOWN_FRAMEWORKS = frozenset({"vanilla", "react", "vue"})


def migrate_sqlite_schema() -> None:
    """SQLite demo helpers: scores time_ms + optional projects.url."""
    with engine.begin() as conn:
        scores = conn.execute(
            text("SELECT name FROM sqlite_master WHERE type='table' AND name='scores'")
        ).fetchall()
        if scores:
            cols = {r[1] for r in conn.execute(text("PRAGMA table_info(scores)")).fetchall()}
            if "time_ms" not in cols:
                conn.execute(text("DROP TABLE scores"))

        projects = conn.execute(
            text("SELECT name FROM sqlite_master WHERE type='table' AND name='projects'")
        ).fetchall()
        if projects:
            cols = {r[1] for r in conn.execute(text("PRAGMA table_info(projects)")).fetchall()}
            if "url" not in cols:
                conn.execute(text("ALTER TABLE projects ADD COLUMN url VARCHAR(255)"))


@asynccontextmanager
async def lifespan(_: FastAPI):
    migrate_sqlite_schema()
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    ticker = asyncio.create_task(incident_ticker())
    try:
        yield
    finally:
        ticker.cancel()
        try:
            await ticker
        except asyncio.CancelledError:
            pass


app = FastAPI(title=settings.app_name, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def no_cache_app_assets(request: Request, call_next):
    response = await call_next(request)
    path = request.url.path
    if path.startswith("/app/") and path.endswith((".js", ".css", ".html")):
        response.headers["Cache-Control"] = "no-store"
    return response

app.include_router(profile.router)
app.include_router(projects.router)
app.include_router(scores.router)
app.include_router(challenges.router)
app.include_router(incidents.router)
app.include_router(guestbook.router)


@app.api_route("/api/health", methods=["GET", "HEAD"])
def health() -> dict[str, str]:
    return {"status": "ok"}


def _mount_dir(url_path: str, directory: Path, name: str) -> None:
    """Mount static dir; create path so reload still serves files added later."""
    directory.mkdir(parents=True, exist_ok=True)
    app.mount(url_path, StaticFiles(directory=directory, html=True), name=name)


# Prefer source vanilla; built copies also work from static/
_mount_dir("/app/shared", FRONTENDS_DIR / "shared", "app-shared")
_mount_dir("/app/vanilla", FRONTENDS_DIR / "vanilla", "app-vanilla")
_mount_dir("/app/react", STATIC_DIR / "react", "app-react")
_mount_dir("/app/vue", STATIC_DIR / "vue", "app-vue")
_mount_dir("/app/photo-editor", STATIC_DIR / "photo-editor", "photo-editor")


@app.api_route("/", methods=["GET", "HEAD"], response_model=None)
def landing(request: Request):
    # ?choose=1 — явный выбор стека (кнопка «Сменить стек»)
    if request.query_params.get("choose") != "1":
        fw = request.cookies.get("fw")
        if fw in KNOWN_FRAMEWORKS:
            return RedirectResponse(url=f"/app/{fw}/")

    landing_file = FRONTENDS_DIR / "landing" / "index.html"
    if landing_file.exists():
        return FileResponse(landing_file)
    return RedirectResponse(url="/app/vanilla/")
