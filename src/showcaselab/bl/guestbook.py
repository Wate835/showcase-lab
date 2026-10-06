from sqlalchemy import select
from sqlalchemy.orm import Session

from showcaselab.bl.errors import RejectedError
from showcaselab.bl.moderation import moderate_guestbook, remember_post
from showcaselab.clients.db.models import GuestbookEntry
from showcaselab.locale import loc
from showcaselab.models.common import Lang
from showcaselab.models.guestbook import GuestbookRequest, GuestbookResponse

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


def _entry_out(row: GuestbookEntry, lang: Lang) -> GuestbookResponse:
    return GuestbookResponse(
        id=row.id,
        author=row.author,
        message=loc(row.message, lang),
        framework=row.framework,  # type: ignore[arg-type]
        created_at=row.created_at,
    )


def list_guestbook(db: Session, lang: Lang, limit: int = 30) -> list[GuestbookResponse]:
    stmt = (
        select(GuestbookEntry)
        .order_by(GuestbookEntry.created_at.desc())
        .limit(min(limit, 100))
    )
    return [_entry_out(row, lang) for row in db.scalars(stmt).all()]


def create_guestbook_entry(
    db: Session,
    payload: GuestbookRequest,
    lang: Lang,
    client_key: str,
) -> GuestbookResponse:
    reason = moderate_guestbook(payload.author, payload.message, client_key)
    if reason:
        code = "profanity" if reason == "profanity" else reason
        message = loc(ERROR_MESSAGES.get(code, {"ru": reason, "en": reason}), lang)
        raise RejectedError(code, message)

    row = GuestbookEntry(
        author=payload.author.strip(),
        message=payload.message.strip(),
        framework=payload.framework,
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    remember_post(client_key)
    return _entry_out(row, lang)
