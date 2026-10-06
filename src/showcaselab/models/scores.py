from datetime import datetime

from pydantic import BaseModel, Field

from showcaselab.models.common import Framework


class ScoreRequest(BaseModel):
    player_name: str = Field(min_length=1, max_length=40)
    time_ms: int = Field(ge=1, le=3_600_000)
    framework: Framework = "vanilla"


class ScoreResponse(BaseModel):
    id: int
    player_name: str
    time_ms: int
    framework: Framework
    created_at: datetime

    model_config = {"from_attributes": True}
