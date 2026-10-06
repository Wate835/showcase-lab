from fastapi.testclient import TestClient

from showcaselab.main import app


def test_health() -> None:
    with TestClient(app) as client:
        response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_profile() -> None:
    with TestClient(app) as client:
        response = client.get("/api/profile", params={"lang": "en"})
    assert response.status_code == 200
    body = response.json()
    assert "name" in body
    assert "skills" in body


def test_projects() -> None:
    with TestClient(app) as client:
        response = client.get("/api/projects", params={"lang": "ru"})
    assert response.status_code == 200
    items = response.json()
    assert isinstance(items, list)
    assert items
    assert "title" in items[0]


def test_challenges() -> None:
    with TestClient(app) as client:
        response = client.get("/api/challenges", params={"framework": "vanilla", "lang": "ru"})
    assert response.status_code == 200
    body = response.json()
    assert body["framework"] == "vanilla"
    assert body["total"] > 0
    assert "bug_line" not in body["items"][0]


def test_guestbook_rejects_short_message() -> None:
    with TestClient(app) as client:
        response = client.post(
            "/api/guestbook",
            json={"author": "Anton", "message": "x", "framework": "vanilla"},
        )
    assert response.status_code == 400
    assert response.json()["detail"]["code"] == "too_short"


def test_landing() -> None:
    with TestClient(app) as client:
        response = client.get("/?choose=1")
    assert response.status_code == 200
