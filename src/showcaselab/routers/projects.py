from fastapi import APIRouter

from showcaselab.bl.projects import list_projects
from showcaselab.models.projects import ProjectResponse
from showcaselab.routers._common import DbSession, LangDep

router = APIRouter(prefix="/api", tags=["projects"])


@router.get("/projects", response_model=list[ProjectResponse])
def projects(db: DbSession, lang: LangDep) -> list[ProjectResponse]:
    return list_projects(db, lang)
