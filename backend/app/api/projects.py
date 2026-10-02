import json

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Project
from app.schemas import ProjectOut

router = APIRouter(prefix="/api", tags=["projects"])


@router.get("/projects", response_model=list[ProjectOut])
def list_projects(db: Session = Depends(get_db)) -> list[ProjectOut]:
    rows = db.scalars(select(Project).order_by(Project.sort_order.asc())).all()
    return [
        ProjectOut(
            id=row.id,
            title=row.title,
            description=row.description,
            tags=json.loads(row.tags_json),
            year=row.year,
            url=row.url,
        )
        for row in rows
    ]
