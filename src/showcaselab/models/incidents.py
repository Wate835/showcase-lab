from datetime import datetime

from pydantic import BaseModel


class IncidentResponse(BaseModel):
    id: int
    title: str
    severity: str
    service: str
    description: str
    resolved: bool
    created_at: datetime

    model_config = {"from_attributes": True}
