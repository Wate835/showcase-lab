from __future__ import annotations

import asyncio
from typing import Any

from fastapi import WebSocket
from sqlalchemy import select

from app.db import SessionLocal
from app.locale import Lang, loc
from app.models import Incident
from app.schemas import IncidentOut


def serialize_incident(row: Incident, lang: Lang) -> IncidentOut:
    return IncidentOut(
        id=row.id,
        title=loc(row.title, lang),
        severity=row.severity,
        service=row.service,
        description=loc(row.description, lang),
        resolved=row.resolved,
        created_at=row.created_at,
    )


class IncidentHub:
    def __init__(self) -> None:
        self._clients: dict[WebSocket, Lang] = {}
        self._lock = asyncio.Lock()

    async def connect(self, ws: WebSocket, lang: Lang = "ru") -> None:
        await ws.accept()
        async with self._lock:
            self._clients[ws] = lang

    async def disconnect(self, ws: WebSocket) -> None:
        async with self._lock:
            self._clients.pop(ws, None)

    async def broadcast_json(self, payload: dict[str, Any]) -> None:
        async with self._lock:
            clients = list(self._clients.items())
        dead: list[WebSocket] = []
        for ws, _lang in clients:
            try:
                await ws.send_json(payload)
            except Exception:
                dead.append(ws)
        for ws in dead:
            await self.disconnect(ws)


hub = IncidentHub()


def fetch_open_incidents(lang: Lang = "ru") -> list[dict[str, Any]]:
    db = SessionLocal()
    try:
        stmt = (
            select(Incident)
            .where(Incident.resolved.is_(False))
            .order_by(Incident.id.desc())
            .limit(20)
        )
        rows = db.scalars(stmt).all()
        return [serialize_incident(row, lang).model_dump(mode="json") for row in rows]
    finally:
        db.close()


def fetch_open_incident_rows() -> list[Incident]:
    db = SessionLocal()
    try:
        stmt = (
            select(Incident)
            .where(Incident.resolved.is_(False))
            .order_by(Incident.id.desc())
            .limit(20)
        )
        rows = list(db.scalars(stmt).all())
        db.expunge_all()
        return rows
    finally:
        db.close()


async def broadcast_snapshot() -> None:
    rows = await asyncio.to_thread(fetch_open_incident_rows)
    async with hub._lock:
        clients = list(hub._clients.items())
    dead: list[WebSocket] = []
    for ws, lang in clients:
        payload = {
            "type": "snapshot",
            "items": [serialize_incident(row, lang).model_dump(mode="json") for row in rows],
        }
        try:
            await ws.send_json(payload)
        except Exception:
            dead.append(ws)
    for ws in dead:
        await hub.disconnect(ws)
