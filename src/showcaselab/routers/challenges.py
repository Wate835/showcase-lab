from fastapi import APIRouter, Query

from showcaselab.bl.challenges import check_fix, check_line, list_challenges
from showcaselab.models.challenges import (
    ChallengesResponse,
    CheckFixRequest,
    CheckLineRequest,
    CheckResponse,
)
from showcaselab.models.common import Framework
from showcaselab.routers._common import LangDep

router = APIRouter(prefix="/api", tags=["challenges"])


@router.get("/challenges", response_model=ChallengesResponse)
def challenges(
    lang: LangDep,
    framework: Framework = Query(...),
) -> ChallengesResponse:
    return list_challenges(framework, lang)


@router.post("/challenges/{challenge_id}/check-line", response_model=CheckResponse)
def post_check_line(challenge_id: str, payload: CheckLineRequest) -> CheckResponse:
    return check_line(challenge_id, payload)


@router.post("/challenges/{challenge_id}/check-fix", response_model=CheckResponse)
def post_check_fix(challenge_id: str, payload: CheckFixRequest) -> CheckResponse:
    return check_fix(challenge_id, payload)
