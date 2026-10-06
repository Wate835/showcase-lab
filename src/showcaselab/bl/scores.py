from sqlalchemy import select
from sqlalchemy.orm import Session

from showcaselab.clients.db.models import Score
from showcaselab.models.scores import ScoreRequest, ScoreResponse


def list_scores(db: Session, limit: int = 10, framework: str | None = None) -> list[ScoreResponse]:
    stmt = select(Score)
    if framework:
        stmt = stmt.where(Score.framework == framework)
    stmt = stmt.order_by(Score.time_ms.asc(), Score.created_at.asc()).limit(min(limit, 50))
    return [ScoreResponse.model_validate(row) for row in db.scalars(stmt).all()]


def create_score(db: Session, payload: ScoreRequest) -> ScoreResponse:
    row = Score(
        player_name=payload.player_name.strip(),
        time_ms=payload.time_ms,
        framework=payload.framework,
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    return ScoreResponse.model_validate(row)
