from __future__ import annotations

import asyncio
from typing import Any

from fastapi import WebSocket
from sqlalchemy import select

from app.db import SessionLocal
from app.models import Incident
from app.schemas import IncidentOut


class IncidentHub:
    def __init__(self) -> None:
        self._clients: set[WebSocket] = set()
        self._lock = asyncio.Lock()

    async def connect(self, ws: WebSocket) -> None:
        await ws.accept()
        async with self._lock:
            self._clients.add(ws)

    async def disconnect(self, ws: WebSocket) -> None:
        async with self._lock:
            self._clients.discard(ws)

    async def broadcast_json(self, payload: dict[str, Any]) -> None:
        async with self._lock:
            clients = list(self._clients)
        dead: list[WebSocket] = []
        for ws in clients:
            try:
                await ws.send_json(payload)
            except Exception:
                dead.append(ws)
        for ws in dead:
            await self.disconnect(ws)


hub = IncidentHub()


def fetch_open_incidents() -> list[dict[str, Any]]:
    db = SessionLocal()
    try:
        stmt = (
            select(Incident)
            .where(Incident.resolved.is_(False))
            .order_by(Incident.id.desc())
            .limit(20)
        )
        rows = db.scalars(stmt).all()
        return [IncidentOut.model_validate(row).model_dump(mode="json") for row in rows]
    finally:
        db.close()


async def broadcast_snapshot() -> None:
    items = await asyncio.to_thread(fetch_open_incidents)
    await hub.broadcast_json({"type": "snapshot", "items": items})
