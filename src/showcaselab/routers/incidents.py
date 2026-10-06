import asyncio

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from showcaselab.bl.incidents import (
    fetch_open_incidents,
    fetch_open_incidents_dump,
    resolve_incident,
)
from showcaselab.locale import parse_lang
from showcaselab.models.incidents import IncidentResponse
from showcaselab.routers._common import DbSession, LangDep
from showcaselab.routers.incident_hub import broadcast_snapshot, hub

router = APIRouter(prefix="/api", tags=["incidents"])


@router.get("/incidents", response_model=list[IncidentResponse])
def incidents(db: DbSession, lang: LangDep) -> list[IncidentResponse]:
    return fetch_open_incidents(db, lang)


@router.post("/incidents/{incident_id}/resolve", response_model=IncidentResponse)
async def post_resolve_incident(
    incident_id: int,
    db: DbSession,
    lang: LangDep,
) -> IncidentResponse:
    item = resolve_incident(db, incident_id, lang)
    await broadcast_snapshot()
    return item


@router.websocket("/ws/incidents")
async def incidents_ws(websocket: WebSocket) -> None:
    lang = parse_lang(websocket.query_params.get("lang"))
    await hub.connect(websocket, lang)
    try:
        items = await asyncio.to_thread(fetch_open_incidents_dump, lang)
        await websocket.send_json({"type": "snapshot", "items": items})
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        await hub.disconnect(websocket)
    except Exception:
        await hub.disconnect(websocket)
