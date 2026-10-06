import json

from sqlalchemy import select
from sqlalchemy.orm import Session

from showcaselab.bl.errors import NotFoundError
from showcaselab.clients.db.models import Profile
from showcaselab.locale import loc, loc_list
from showcaselab.models.common import Lang
from showcaselab.models.profile import ExperienceItem, ProfileResponse


def get_profile(db: Session, lang: Lang) -> ProfileResponse:
    profile = db.scalars(select(Profile).limit(1)).first()
    if not profile:
        raise NotFoundError("Profile not found")

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
    return ProfileResponse(
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
