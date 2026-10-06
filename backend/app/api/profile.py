import json

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.locale import Lang, get_lang, loc, loc_list
from app.models import Profile
from app.schemas import ExperienceItem, ProfileOut

router = APIRouter(prefix="/api", tags=["profile"])


@router.get("/profile", response_model=ProfileOut)
def get_profile(
    db: Session = Depends(get_db),
    lang: Lang = Depends(get_lang),
) -> ProfileOut:
    profile = db.scalars(select(Profile).limit(1)).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    skills = json.loads(profile.skills_json)
    experience_raw = json.loads(profile.experience_json)
    experience = [
        ExperienceItem(
            company=item.get("company", ""),
            role=loc(item.get("role"), lang),
            period=loc(item.get("period"), lang),
            highlights=loc_list(item.get("highlights") or [], lang),
        )
        for item in experience_raw
    ]
    return ProfileOut(
        name=loc(profile.name, lang),
        title=loc(profile.title, lang),
        city=loc(profile.city, lang),
        summary=loc(profile.summary, lang),
        about=loc(profile.about, lang),
        email=profile.email,
        telegram=profile.telegram,
        github=profile.github,
        skills=skills,
        experience=experience,
    )
