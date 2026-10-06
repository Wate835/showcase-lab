from fastapi import APIRouter, Request

from showcaselab.bl.guestbook import create_guestbook_entry, list_guestbook
from showcaselab.models.guestbook import GuestbookRequest, GuestbookResponse
from showcaselab.routers._common import DbSession, LangDep

router = APIRouter(prefix="/api", tags=["guestbook"])


@router.get("/guestbook", response_model=list[GuestbookResponse])
def guestbook(
    db: DbSession,
    lang: LangDep,
    limit: int = 30,
) -> list[GuestbookResponse]:
    return list_guestbook(db, lang, limit=limit)


@router.post("/guestbook", response_model=GuestbookResponse, status_code=201)
def post_guestbook(
    payload: GuestbookRequest,
    request: Request,
    db: DbSession,
    lang: LangDep,
) -> GuestbookResponse:
    client = request.client.host if request.client else "anon"
    return create_guestbook_entry(db, payload, lang, client)
