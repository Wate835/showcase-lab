from collections.abc import Generator

from sqlalchemy import Engine, create_engine, text
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from showcaselab.config import settings


def _make_engine(database_url: str) -> Engine:
    connect_args = {"check_same_thread": False} if database_url.startswith("sqlite") else {}
    return create_engine(database_url, connect_args=connect_args)


engine = _make_engine(settings.database_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def configure_database(database_url: str) -> None:
    """Rebind engine/session factory (tests use a temp SQLite file)."""
    global engine, SessionLocal
    settings.database_url = database_url
    previous = engine
    engine = _make_engine(database_url)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    previous.dispose()


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


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
