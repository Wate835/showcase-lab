import json

from sqlalchemy import select
from sqlalchemy.orm import Session

from showcaselab.clients.db.models import Project
from showcaselab.locale import loc
from showcaselab.models.common import Lang
from showcaselab.models.projects import ProjectResponse


def list_projects(db: Session, lang: Lang) -> list[ProjectResponse]:
    rows = db.scalars(select(Project).order_by(Project.sort_order.asc())).all()
    return [
        ProjectResponse(
            id=row.id,
            title=loc(row.title, lang),
            description=loc(row.description, lang),
            tags=json.loads(row.tags_json),
            year=loc(row.year, lang),
            url=row.url,
        )
        for row in rows
    ]
