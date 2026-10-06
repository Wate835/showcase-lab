from typing import Annotated

from fastapi import Depends, Header, Query
from sqlalchemy.orm import Session

from showcaselab.clients.db.client import get_db
from showcaselab.locale import parse_lang
from showcaselab.models.common import Lang

DbSession = Annotated[Session, Depends(get_db)]


def get_lang(
    lang: str | None = Query(None, description="ru | en"),
    accept_language: str | None = Header(None, alias="Accept-Language"),
) -> Lang:
    if lang in ("ru", "en"):
        return lang  # type: ignore[return-value]
    return parse_lang(accept_language)


LangDep = Annotated[Lang, Depends(get_lang)]
