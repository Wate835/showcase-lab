from collections.abc import Generator

from sqlalchemy import create_engine, text
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from showcaselab.config import settings

connect_args = {"check_same_thread": False} if settings.database_url.startswith("sqlite") else {}
engine = create_engine(settings.database_url, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


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
