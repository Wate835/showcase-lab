from pydantic import BaseModel


class ProjectResponse(BaseModel):
    id: int
    title: str
    description: str
    tags: list[str]
    year: str
    url: str | None = None
