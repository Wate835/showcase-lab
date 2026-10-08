from collections.abc import Generator
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from showcaselab.bl import moderation
from showcaselab.clients.db.client import configure_database
from showcaselab.config import settings
from showcaselab.main import app


@pytest.fixture()
def client(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> Generator[TestClient, None, None]:
    db_path = tmp_path / "test.db"
    configure_database(f"sqlite:///{db_path.resolve().as_posix()}")
    monkeypatch.setattr(settings, "incident_feed_enabled", False)
    moderation._recent_posts.clear()

    with TestClient(app) as test_client:
        yield test_client

    moderation._recent_posts.clear()
