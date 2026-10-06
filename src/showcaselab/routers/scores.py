from fastapi import APIRouter

from showcaselab.bl.scores import create_score, list_scores
from showcaselab.models.scores import ScoreRequest, ScoreResponse
from showcaselab.routers._common import DbSession

router = APIRouter(prefix="/api", tags=["scores"])


@router.get("/scores", response_model=list[ScoreResponse])
def scores(
    db: DbSession,
    limit: int = 10,
    framework: str | None = None,
) -> list[ScoreResponse]:
    return list_scores(db, limit=limit, framework=framework)


@router.post("/scores", response_model=ScoreResponse, status_code=201)
def post_score(payload: ScoreRequest, db: DbSession) -> ScoreResponse:
    return create_score(db, payload)
