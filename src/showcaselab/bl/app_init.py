from sqlalchemy.orm import Session

from showcaselab.bl.seed import seed_database
from showcaselab.clients.db import models as _orm_models  # noqa: F401
from showcaselab.clients.db.client import Base, SessionLocal, engine, migrate_sqlite_schema


def init_database() -> None:
    migrate_sqlite_schema()
    Base.metadata.create_all(bind=engine)
    db: Session = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
