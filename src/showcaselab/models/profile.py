from pydantic import BaseModel


class ExperienceItem(BaseModel):
    company: str
    role: str
    period: str
    highlights: list[str]


class ProfileResponse(BaseModel):
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
