import asyncio
import logging
import random
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.db import SessionLocal, get_db
from app.incident_hub import broadcast_snapshot, fetch_open_incidents, hub
from app.models import Incident
from app.schemas import IncidentOut

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["incidents"])

TEMPLATES = [
    {
        "title": "p95 latency на /api/scores",
        "severity": "warning",
        "service": "api-gateway",
        "description": "Ответ замедлился. Проверь холодный старт и индексы SQLite.",
    },
    {
        "title": "Spam в guestbook",
        "severity": "info",
        "service": "moderation",
        "description": "Похоже на бота. Нужен простой rate-limit по IP.",
    },
    {
        "title": "React chunk 404 после деплоя",
        "severity": "warning",
        "service": "frontend-react",
        "description": "Клиенты держат старый index.html. Сбрось CDN-кэш.",
    },
    {
        "title": "Memory pressure на worker",
        "severity": "critical",
        "service": "uvicorn",
        "description": "RSS вырос. Похоже на утечку в демо-игре Bug Hunt.",
    },
    {
        "title": "Yii2 legacy endpoint 500",
        "severity": "critical",
        "service": "php-bridge",
        "description": "Редкий путь в ERP упал. Логи указали на null в DTO.",
    },
    {
        "title": "Storybook build flaky",
        "severity": "info",
        "service": "ci",
        "description": "Падает на type-check раз в 10 прогонов. Не блокер.",
    },
    {
        "title": "Vue HMR disconnect",
        "severity": "info",
        "service": "frontend-vue",
        "description": "Dev-сервер потерял WS. Перезапусти vite.",
    },
]


def maybe_spawn_incident(db: Session) -> bool:
    open_count = db.scalar(
        select(func.count()).select_from(Incident).where(Incident.resolved.is_(False))
    ) or 0
    if open_count >= 6:
        return False

    latest = db.scalars(select(Incident).order_by(Incident.created_at.desc()).limit(1)).first()
    now = datetime.now(timezone.utc)
    if latest and latest.created_at is not None:
        created = latest.created_at
        if created.tzinfo is None:
            created = created.replace(tzinfo=timezone.utc)
        if now - created < timedelta(seconds=4):
            return False

    if random.random() > 0.75 and open_count > 0:
        return False

    template = random.choice(TEMPLATES)
    stamp = now.strftime("%H:%M:%S")
    db.add(
        Incident(
            title=f"{template['title']} ({stamp})",
            severity=template["severity"],
            service=template["service"],
            description=template["description"],
            resolved=False,
        )
    )
    db.commit()
    return True


def _spawn_in_thread() -> bool:
    db = SessionLocal()
    try:
        return maybe_spawn_incident(db)
    finally:
        db.close()


async def incident_ticker() -> None:
    """Background loop: occasionally spawn + push snapshot over WebSocket."""
    while True:
        try:
            await asyncio.to_thread(_spawn_in_thread)
            await broadcast_snapshot()
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.exception("incident ticker tick failed")
        await asyncio.sleep(4)


@router.get("/incidents", response_model=list[IncidentOut])
def list_incidents(db: Session = Depends(get_db)) -> list[Incident]:
    stmt = (
        select(Incident)
        .where(Incident.resolved.is_(False))
        .order_by(Incident.id.desc())
        .limit(20)
    )
    return list(db.scalars(stmt).all())


@router.post("/incidents/{incident_id}/resolve", response_model=IncidentOut)
async def resolve_incident(incident_id: int, db: Session = Depends(get_db)) -> Incident:
    incident = db.get(Incident, incident_id)
    if not incident:
        raise HTTPException(status_code=404, detail="Incident not found")
    incident.resolved = True
    db.commit()
    db.refresh(incident)
    await broadcast_snapshot()
    return incident


@router.websocket("/ws/incidents")
async def incidents_ws(websocket: WebSocket) -> None:
    await hub.connect(websocket)
    try:
        items = await asyncio.to_thread(fetch_open_incidents)
        await websocket.send_json({"type": "snapshot", "items": items})
        while True:
            # Keep connection alive; clients may send ping/text.
            await websocket.receive_text()
    except WebSocketDisconnect:
        await hub.disconnect(websocket)
    except Exception:
        await hub.disconnect(websocket)
