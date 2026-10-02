"""Simple guestbook moderation: profanity + light spam heuristics."""

from __future__ import annotations

import re
import time
from collections import defaultdict

# Stems / whole words (RU + EN). Intentionally short demo list.
BAD_PATTERNS = [
    r"хуй",
    r"хуе",
    r"хуё",
    r"хуи",
    r"пизд",
    r"ебан",
    r"ёбан",
    r"ебал",
    r"ёбал",
    r"ебл",
    r"ёбл",
    r"бля",
    r"бляд",
    r"блять",
    r"блят",
    r"сука",
    r"суки",
    r"мудак",
    r"мудил",
    r"гандон",
    r"залуп",
    r"fuck",
    r"fuk",
    r"shit",
    r"bitch",
    r"asshole",
    r"dick",
    r"cunt",
]

_BAD_RE = re.compile("|".join(BAD_PATTERNS), re.IGNORECASE)
_REPEAT_RE = re.compile(r"(.)\1{9,}")
_URL_RE = re.compile(r"https?://|www\.", re.IGNORECASE)

# ip -> list of timestamps
_recent_posts: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT_SECONDS = 12
RATE_LIMIT_MAX = 2


def normalize(text: str) -> str:
    return " ".join(text.lower().replace("ё", "е").split())


def find_profanity(text: str) -> bool:
    return bool(_BAD_RE.search(normalize(text)))


def is_spammy(message: str) -> str | None:
    cleaned = message.strip()
    if len(cleaned) < 2:
        return "Сообщение слишком короткое."
    if _REPEAT_RE.search(cleaned):
        return "Похоже на спам: слишком много повторов."
    urls = _URL_RE.findall(cleaned)
    if len(urls) >= 3:
        return "Слишком много ссылок — похоже на спам."
    return None


def check_rate_limit(client_key: str) -> str | None:
    now = time.time()
    bucket = [t for t in _recent_posts[client_key] if now - t < RATE_LIMIT_SECONDS]
    _recent_posts[client_key] = bucket
    if len(bucket) >= RATE_LIMIT_MAX:
        return "Слишком часто. Подожди пару секунд."
    return None


def remember_post(client_key: str) -> None:
    _recent_posts[client_key].append(time.time())


def moderate_guestbook(author: str, message: str, client_key: str = "anon") -> str | None:
    """Return error message or None if ok. Profanity uses a fixed friendly phrase."""
    if find_profanity(author) or find_profanity(message):
        return "Ругаться плохо"
    spam = is_spammy(message)
    if spam:
        return spam
    rate = check_rate_limit(client_key)
    if rate:
        return rate
    return None
