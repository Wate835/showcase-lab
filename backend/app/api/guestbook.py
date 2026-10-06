from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.locale import Lang, get_lang, loc
from app.models import GuestbookEntry
from app.moderation import moderate_guestbook, remember_post
from app.schemas import GuestbookCreate, GuestbookOut

router = APIRouter(prefix="/api", tags=["guestbook"])

ERROR_MESSAGES = {
    "profanity": {"ru": "Ругаться плохо", "en": "Please keep it civil"},
    "too_short": {"ru": "Сообщение слишком короткое.", "en": "Message is too short."},
    "repeats": {
        "ru": "Похоже на спам: слишком много повторов.",
        "en": "Looks like spam: too many repeated characters.",
    },
    "links": {
        "ru": "Слишком много ссылок — похоже на спам.",
        "en": "Too many links — looks like spam.",
    },
    "rate": {
        "ru": "Слишком часто. Подожди пару секунд.",
        "en": "Too fast. Wait a couple of seconds.",
    },
}


def _entry_out(row: GuestbookEntry, lang: Lang) -> GuestbookOut:
    return GuestbookOut(
        id=row.id,
        author=row.author,
        message=loc(row.message, lang),
        framework=row.framework,  # type: ignore[arg-type]
        created_at=row.created_at,
    )


@router.get("/guestbook", response_model=list[GuestbookOut])
def list_guestbook(
    db: Session = Depends(get_db),
    lang: Lang = Depends(get_lang),
    limit: int = 30,
) -> list[GuestbookOut]:
    stmt = (
        select(GuestbookEntry)
        .order_by(GuestbookEntry.created_at.desc())
        .limit(min(limit, 100))
    )
    return [_entry_out(row, lang) for row in db.scalars(stmt).all()]


@router.post("/guestbook", response_model=GuestbookOut, status_code=201)
def create_guestbook_entry(
    payload: GuestbookCreate,
    request: Request,
    db: Session = Depends(get_db),
    lang: Lang = Depends(get_lang),
) -> GuestbookOut:
    client = request.client.host if request.client else "anon"
    reason = moderate_guestbook(payload.author, payload.message, client)
    if reason:
        code = "profanity" if reason == "profanity" else reason
        message = loc(ERROR_MESSAGES.get(code, {"ru": reason, "en": reason}), lang)
        raise HTTPException(status_code=400, detail={"code": code, "message": message})

    row = GuestbookEntry(
        author=payload.author.strip(),
        message=payload.message.strip(),
        framework=payload.framework,
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    remember_post(client)
    return _entry_out(row, lang)
