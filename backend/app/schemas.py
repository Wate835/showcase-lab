from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


Framework = Literal["vanilla", "react", "vue"]


class ExperienceItem(BaseModel):
    company: str
    role: str
    period: str
    highlights: list[str]


class ProfileOut(BaseModel):
    name: str
    title: str
    city: str
    summary: str
    about: str
    email: str
    telegram: str
    github: str
    skills: list[str]
    experience: list[ExperienceItem]


class ProjectOut(BaseModel):
    id: int
    title: str
    description: str
    tags: list[str]
    year: str
    url: str | None = None


class ScoreCreate(BaseModel):
    player_name: str = Field(min_length=1, max_length=40)
    time_ms: int = Field(ge=1, le=3_600_000)
    framework: Framework = "vanilla"


class ScoreOut(BaseModel):
    id: int
    player_name: str
    time_ms: int
    framework: Framework
    created_at: datetime

    model_config = {"from_attributes": True}


class IncidentOut(BaseModel):
    id: int
    title: str
    severity: str
    service: str
    description: str
    resolved: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class GuestbookCreate(BaseModel):
    author: str = Field(min_length=1, max_length=40)
    message: str = Field(min_length=1, max_length=500)
    framework: Framework = "vanilla"


class GuestbookOut(BaseModel):
    id: int
    author: str
    message: str
    framework: Framework
    created_at: datetime

    model_config = {"from_attributes": True}


class ChallengeFixOut(BaseModel):
    id: str
    code: str


class ChallengeOut(BaseModel):
    id: str
    file: str
    title: str
    hint: str
    lines: list[str]
    fixes: list[ChallengeFixOut]


class ChallengesResponse(BaseModel):
    framework: Framework
    total: int
    items: list[ChallengeOut]


class CheckLineIn(BaseModel):
    framework: Framework
    line: int = Field(ge=1, le=200)


class CheckFixIn(BaseModel):
    framework: Framework
    fix_id: str = Field(min_length=1, max_length=40)


class CheckOut(BaseModel):
    ok: bool
