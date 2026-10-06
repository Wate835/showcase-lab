from datetime import datetime

from pydantic import BaseModel, Field

from showcaselab.models.common import Framework


class GuestbookRequest(BaseModel):
    author: str = Field(min_length=1, max_length=40)
    message: str = Field(min_length=1, max_length=500)
    framework: Framework = "vanilla"


class GuestbookResponse(BaseModel):
    id: int
    author: str
    message: str
    framework: Framework
    created_at: datetime

    model_config = {"from_attributes": True}
