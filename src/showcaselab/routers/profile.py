from fastapi import APIRouter

from showcaselab.bl.profile import get_profile
from showcaselab.models.profile import ProfileResponse
from showcaselab.routers._common import DbSession, LangDep

router = APIRouter(prefix="/api", tags=["profile"])


@router.get("/profile", response_model=ProfileResponse)
def profile(db: DbSession, lang: LangDep) -> ProfileResponse:
    return get_profile(db, lang)
