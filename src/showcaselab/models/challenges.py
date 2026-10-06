from pydantic import BaseModel, Field

from showcaselab.models.common import Framework


class ChallengeFixResponse(BaseModel):
    id: str
    code: str


class ChallengeResponse(BaseModel):
    id: str
    file: str
    title: str
    hint: str
    lines: list[str]
    fixes: list[ChallengeFixResponse]


class ChallengesResponse(BaseModel):
    framework: Framework
    total: int
    items: list[ChallengeResponse]


class CheckLineRequest(BaseModel):
    framework: Framework
    line: int = Field(ge=1, le=200)


class CheckFixRequest(BaseModel):
    framework: Framework
    fix_id: str = Field(min_length=1, max_length=40)


class CheckResponse(BaseModel):
    ok: bool
