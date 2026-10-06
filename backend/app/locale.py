from __future__ import annotations

import json
from typing import Any, Literal

from fastapi import Header, Query

Lang = Literal["ru", "en"]


def parse_lang(value: str | None) -> Lang:
    if not value:
        return "ru"
    v = value.strip().lower()
    if v.startswith("en"):
        return "en"
    return "ru"


def get_lang(
    lang: str | None = Query(None, description="ru | en"),
    accept_language: str | None = Header(None, alias="Accept-Language"),
) -> Lang:
    if lang in ("ru", "en"):
        return lang  # type: ignore[return-value]
    return parse_lang(accept_language)


def loc(value: Any, lang: Lang) -> str:
    """Pick a localized string from a dict, JSON blob, or plain text."""
    if value is None:
        return ""
    if isinstance(value, dict):
        picked = value.get(lang) or value.get("ru") or value.get("en")
        return "" if picked is None else str(picked)
    if isinstance(value, str):
        s = value.strip()
        if s.startswith("{") and '"ru"' in s:
            try:
                return loc(json.loads(s), lang)
            except json.JSONDecodeError:
                return value
        return value
    return str(value)


def loc_list(values: Any, lang: Lang) -> list[str]:
    if not isinstance(values, list):
        return []
    return [loc(item, lang) for item in values]


def dump_i18n(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False)
