import asyncio
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

from showcaselab.bl.app_init import init_database
from showcaselab.bl.errors import NotFoundError, RejectedError
from showcaselab.config import settings
from showcaselab.routers import challenges, guestbook, incidents, profile, projects, scores
from showcaselab.routers.incident_hub import incident_feed_loop

REPO_ROOT = Path(__file__).resolve().parents[2]
STATIC_DIR = REPO_ROOT / "static"
FRONTENDS_DIR = REPO_ROOT / "frontends"
KNOWN_FRAMEWORKS = frozenset({"vanilla", "react", "vue"})


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_database()
    ticker = (
        asyncio.create_task(incident_feed_loop())
        if settings.incident_feed_enabled
        else None
    )
    try:
        yield
    finally:
        if ticker is not None:
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


@app.exception_handler(NotFoundError)
async def not_found_handler(_: Request, exc: NotFoundError) -> JSONResponse:
    return JSONResponse({"detail": exc.detail}, status_code=404)


@app.exception_handler(RejectedError)
async def rejected_handler(_: Request, exc: RejectedError) -> JSONResponse:
    return JSONResponse(
        {"detail": {"code": exc.code, "message": exc.message}},
        status_code=400,
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


FAVICON = FRONTENDS_DIR / "shared" / "favicon.svg"


@app.api_route("/favicon.svg", methods=["GET", "HEAD"])
@app.api_route("/favicon.ico", methods=["GET", "HEAD"])
def favicon() -> FileResponse:
    return FileResponse(FAVICON, media_type="image/svg+xml")


def _mount_dir(url_path: str, directory: Path, name: str) -> None:
    """Mount static dir; create path so reload still serves files added later."""
    directory.mkdir(parents=True, exist_ok=True)
    app.mount(url_path, StaticFiles(directory=directory, html=True), name=name)


_mount_dir("/app/shared", FRONTENDS_DIR / "shared", "app-shared")
_mount_dir("/app/vanilla", FRONTENDS_DIR / "vanilla", "app-vanilla")
_mount_dir("/app/react", STATIC_DIR / "react", "app-react")
_mount_dir("/app/vue", STATIC_DIR / "vue", "app-vue")
_mount_dir("/app/photo-editor", STATIC_DIR / "photo-editor", "photo-editor")


@app.api_route("/", methods=["GET", "HEAD"], response_model=None)
def landing(request: Request):
    if request.query_params.get("choose") != "1":
        fw = request.cookies.get("fw")
        if fw in KNOWN_FRAMEWORKS:
            return RedirectResponse(url=f"/app/{fw}/")

    landing_file = FRONTENDS_DIR / "landing" / "index.html"
    if landing_file.exists():
        return FileResponse(landing_file)
    return RedirectResponse(url="/app/vanilla/")
