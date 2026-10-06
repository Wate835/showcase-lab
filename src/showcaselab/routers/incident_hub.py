from __future__ import annotations

import asyncio
import logging
from typing import Any

from fastapi import WebSocket

from showcaselab.bl.incidents import snapshots_for_langs, spawn_open_incident
from showcaselab.models.common import Lang

logger = logging.getLogger(__name__)


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

    async def snapshot_clients(self) -> list[tuple[WebSocket, Lang]]:
        async with self._lock:
            return list(self._clients.items())


hub = IncidentHub()


async def broadcast_snapshot() -> None:
    clients = await hub.snapshot_clients()
    langs = {lang for _, lang in clients}
    payloads = await asyncio.to_thread(snapshots_for_langs, langs)
    dead: list[WebSocket] = []
    for ws, lang in clients:
        payload: dict[str, Any] = {"type": "snapshot", "items": payloads.get(lang, [])}
        try:
            await ws.send_json(payload)
        except Exception:
            dead.append(ws)
    for ws in dead:
        await hub.disconnect(ws)


async def incident_feed_loop() -> None:
    """Spawn demo tickets in bl, then push snapshots over WebSocket."""
    while True:
        try:
            await asyncio.to_thread(spawn_open_incident)
            await broadcast_snapshot()
        except asyncio.CancelledError:
            raise
        except Exception:
            logger.exception("incident feed tick failed")
        await asyncio.sleep(4)
