from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import GuestbookEntry
from app.moderation import moderate_guestbook, remember_post
from app.schemas import GuestbookCreate, GuestbookOut

router = APIRouter(prefix="/api", tags=["guestbook"])


@router.get("/guestbook", response_model=list[GuestbookOut])
def list_guestbook(db: Session = Depends(get_db), limit: int = 30) -> list[GuestbookEntry]:
    stmt = (
        select(GuestbookEntry)
        .order_by(GuestbookEntry.created_at.desc())
        .limit(min(limit, 100))
    )
    return list(db.scalars(stmt).all())


@router.post("/guestbook", response_model=GuestbookOut, status_code=201)
def create_guestbook_entry(
    payload: GuestbookCreate,
    request: Request,
    db: Session = Depends(get_db),
) -> GuestbookEntry:
    client = request.client.host if request.client else "anon"
    reason = moderate_guestbook(payload.author, payload.message, client)
    if reason:
        code = "profanity" if reason == "Ругаться плохо" else "spam"
        raise HTTPException(status_code=400, detail={"code": code, "message": reason})

    row = GuestbookEntry(
        author=payload.author.strip(),
        message=payload.message.strip(),
        framework=payload.framework,
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    remember_post(client)
    return row
