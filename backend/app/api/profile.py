import json

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Profile
from app.schemas import ExperienceItem, ProfileOut

router = APIRouter(prefix="/api", tags=["profile"])


@router.get("/profile", response_model=ProfileOut)
def get_profile(db: Session = Depends(get_db)) -> ProfileOut:
    profile = db.scalars(select(Profile).limit(1)).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    skills = json.loads(profile.skills_json)
    experience_raw = json.loads(profile.experience_json)
    return ProfileOut(
        name=profile.name,
        title=profile.title,
        city=profile.city,
        summary=profile.summary,
        about=profile.about,
        email=profile.email,
        telegram=profile.telegram,
        github=profile.github,
        skills=skills,
        experience=[ExperienceItem(**item) for item in experience_raw],
    )
