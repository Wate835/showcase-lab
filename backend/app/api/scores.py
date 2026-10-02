from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Score
from app.schemas import ScoreCreate, ScoreOut

router = APIRouter(prefix="/api", tags=["scores"])


@router.get("/scores", response_model=list[ScoreOut])
def list_scores(
    db: Session = Depends(get_db),
    limit: int = 10,
    framework: str | None = None,
) -> list[Score]:
    stmt = select(Score)
    if framework:
        stmt = stmt.where(Score.framework == framework)
    stmt = stmt.order_by(Score.time_ms.asc(), Score.created_at.asc()).limit(min(limit, 50))
    return list(db.scalars(stmt).all())


@router.post("/scores", response_model=ScoreOut, status_code=201)
def create_score(payload: ScoreCreate, db: Session = Depends(get_db)) -> Score:
    row = Score(
        player_name=payload.player_name.strip(),
        time_ms=payload.time_ms,
        framework=payload.framework,
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    return row
