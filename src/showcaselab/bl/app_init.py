from sqlalchemy.orm import Session

from showcaselab.bl.seed import seed_database
from showcaselab.clients.db import client as db_client
from showcaselab.clients.db import models as _orm_models  # noqa: F401
from showcaselab.clients.db.client import Base


def init_database() -> None:
    db_client.migrate_sqlite_schema()
    Base.metadata.create_all(bind=db_client.engine)
    db: Session = db_client.SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
