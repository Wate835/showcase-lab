from __future__ import annotations

import random
from datetime import UTC, datetime, timedelta
from typing import Any

from sqlalchemy import func, select
from sqlalchemy.orm import Session

from showcaselab.bl.errors import NotFoundError
from showcaselab.clients.db import client as db_client
from showcaselab.clients.db.models import Incident
from showcaselab.locale import dump_i18n, loc
from showcaselab.models.common import Lang
from showcaselab.models.incidents import IncidentResponse

TEMPLATES = [
    {
        "title": {"ru": "p95 latency на /api/scores", "en": "p95 latency on /api/scores"},
        "severity": "warning",
        "service": "api-gateway",
        "description": {
            "ru": "Ответ замедлился. Проверь холодный старт и индексы SQLite.",
            "en": "Responses slowed down. Check SQLite cold start and indexes.",
        },
    },
    {
        "title": {"ru": "Spam в guestbook", "en": "Spam in guestbook"},
        "severity": "info",
        "service": "moderation",
        "description": {
            "ru": "Похоже на бота. Нужен простой rate-limit по IP.",
            "en": "Looks like a bot. Need a simple IP rate-limit.",
        },
    },
    {
        "title": {
            "ru": "React chunk 404 после деплоя",
            "en": "React chunk 404 after deploy",
        },
        "severity": "warning",
        "service": "frontend-react",
        "description": {
            "ru": "Клиенты держат старый index.html. Сбрось CDN-кэш.",
            "en": "Clients keep an old index.html. Purge the CDN cache.",
        },
    },
    {
        "title": {"ru": "Memory pressure на worker", "en": "Memory pressure on worker"},
        "severity": "critical",
        "service": "uvicorn",
        "description": {
            "ru": "RSS вырос. Похоже на утечку в демо-игре Bug Hunt.",
            "en": "RSS grew. Looks like a leak in the Bug Hunt demo.",
        },
    },
    {
        "title": {"ru": "Yii2 legacy endpoint 500", "en": "Yii2 legacy endpoint 500"},
        "severity": "critical",
        "service": "php-bridge",
        "description": {
            "ru": "Редкий путь в ERP упал. Логи указали на null в DTO.",
            "en": "A rare ERP path crashed. Logs pointed to null in a DTO.",
        },
    },
    {
        "title": {"ru": "Storybook build flaky", "en": "Storybook build flaky"},
        "severity": "info",
        "service": "ci",
        "description": {
            "ru": "Падает на type-check раз в 10 прогонов. Не блокер.",
            "en": "Type-check fails ~1 in 10 runs. Not a blocker.",
        },
    },
    {
        "title": {"ru": "Vue HMR disconnect", "en": "Vue HMR disconnect"},
        "severity": "info",
        "service": "frontend-vue",
        "description": {
            "ru": "Dev-сервер потерял WS. Перезапусти vite.",
            "en": "The dev server lost WS. Restart vite.",
        },
    },
]


def serialize_incident(row: Incident, lang: Lang) -> IncidentResponse:
    return IncidentResponse(
        id=row.id,
        title=loc(row.title, lang),
        severity=row.severity,
        service=row.service,
        description=loc(row.description, lang),
        resolved=row.resolved,
        created_at=row.created_at,
    )


def fetch_open_incidents(db: Session, lang: Lang) -> list[IncidentResponse]:
    stmt = (
        select(Incident)
        .where(Incident.resolved.is_(False))
        .order_by(Incident.id.desc())
        .limit(20)
    )
    return [serialize_incident(row, lang) for row in db.scalars(stmt).all()]


def fetch_open_incidents_dump(lang: Lang = "ru") -> list[dict[str, Any]]:
    db = db_client.SessionLocal()
    try:
        return [item.model_dump(mode="json") for item in fetch_open_incidents(db, lang)]
    finally:
        db.close()


def snapshots_for_langs(langs: set[Lang]) -> dict[Lang, list[dict[str, Any]]]:
    if not langs:
        return {}
    db = db_client.SessionLocal()
    try:
        stmt = (
            select(Incident)
            .where(Incident.resolved.is_(False))
            .order_by(Incident.id.desc())
            .limit(20)
        )
        rows = list(db.scalars(stmt).all())
        return {
            lang: [serialize_incident(row, lang).model_dump(mode="json") for row in rows]
            for lang in langs
        }
    finally:
        db.close()


def maybe_spawn_incident(db: Session) -> bool:
    open_count = db.scalar(
        select(func.count()).select_from(Incident).where(Incident.resolved.is_(False))
    ) or 0
    if open_count >= 6:
        return False

    latest = db.scalars(select(Incident).order_by(Incident.created_at.desc()).limit(1)).first()
    now = datetime.now(UTC)
    if latest and latest.created_at is not None:
        created = latest.created_at
        if created.tzinfo is None:
            created = created.replace(tzinfo=UTC)
        if now - created < timedelta(seconds=4):
            return False

    if random.random() > 0.75 and open_count > 0:
        return False

    template = random.choice(TEMPLATES)
    stamp = now.strftime("%H:%M:%S")
    db.add(
        Incident(
            title=dump_i18n(
                {
                    "ru": f"{template['title']['ru']} ({stamp})",
                    "en": f"{template['title']['en']} ({stamp})",
                }
            ),
            severity=template["severity"],
            service=template["service"],
            description=dump_i18n(template["description"]),
            resolved=False,
        )
    )
    db.commit()
    return True


def spawn_open_incident() -> bool:
    db = db_client.SessionLocal()
    try:
        return maybe_spawn_incident(db)
    finally:
        db.close()


def resolve_incident(db: Session, incident_id: int, lang: Lang) -> IncidentResponse:
    incident = db.get(Incident, incident_id)
    if not incident:
        raise NotFoundError("Incident not found")
    incident.resolved = True
    db.commit()
    db.refresh(incident)
    return serialize_incident(incident, lang)
