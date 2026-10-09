from fastapi.testclient import TestClient


def test_health(client: TestClient) -> None:
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_profile(client: TestClient) -> None:
    response = client.get("/api/profile", params={"lang": "en"})
    assert response.status_code == 200
    body = response.json()
    assert "name" in body
    assert "skills" in body


def test_projects(client: TestClient) -> None:
    response = client.get("/api/projects", params={"lang": "ru"})
    assert response.status_code == 200
    items = response.json()
    assert isinstance(items, list)
    assert items
    assert "title" in items[0]
    urls = {item.get("url") for item in items}
    assert "/photo-editor" in urls
    assert "https://arbat.life/" in urls
    assert "https://www.k-gorod.ru/" in urls
    assert not any(
        isinstance(item.get("url"), str) and "github.io/photo-editor" in item["url"]
        for item in items
    )


def test_challenges_hides_bug_line(client: TestClient) -> None:
    response = client.get("/api/challenges", params={"framework": "vanilla", "lang": "ru"})
    assert response.status_code == 200
    body = response.json()
    assert body["framework"] == "vanilla"
    assert body["total"] > 0
    assert "bug_line" not in body["items"][0]
    assert "correct" not in body["items"][0]["fixes"][0]


def test_challenges_unknown_framework(client: TestClient) -> None:
    response = client.get("/api/challenges", params={"framework": "angular", "lang": "en"})
    assert response.status_code == 422


def test_check_line_true_and_false(client: TestClient) -> None:
    ok = client.post(
        "/api/challenges/v01/check-line",
        json={"framework": "vanilla", "line": 3},
    )
    assert ok.status_code == 200
    assert ok.json() == {"ok": True}

    bad = client.post(
        "/api/challenges/v01/check-line",
        json={"framework": "vanilla", "line": 1},
    )
    assert bad.status_code == 200
    assert bad.json() == {"ok": False}


def test_check_line_unknown_challenge(client: TestClient) -> None:
    response = client.post(
        "/api/challenges/missing/check-line",
        json={"framework": "vanilla", "line": 1},
    )
    assert response.status_code == 404


def test_check_fix_true_and_false(client: TestClient) -> None:
    ok = client.post(
        "/api/challenges/v01/check-fix",
        json={"framework": "vanilla", "fix_id": "a"},
    )
    assert ok.status_code == 200
    assert ok.json() == {"ok": True}

    bad = client.post(
        "/api/challenges/v01/check-fix",
        json={"framework": "vanilla", "fix_id": "b"},
    )
    assert bad.status_code == 200
    assert bad.json() == {"ok": False}


def test_check_fix_unknown(client: TestClient) -> None:
    response = client.post(
        "/api/challenges/v01/check-fix",
        json={"framework": "vanilla", "fix_id": "zzz"},
    )
    assert response.status_code == 404


def test_guestbook_rejects_short_message(client: TestClient) -> None:
    response = client.post(
        "/api/guestbook",
        json={"author": "Anton", "message": "x", "framework": "vanilla"},
        params={"lang": "en"},
    )
    assert response.status_code == 400
    detail = response.json()["detail"]
    assert detail["code"] == "too_short"
    assert "short" in detail["message"].lower()


def test_guestbook_happy_path(client: TestClient) -> None:
    created = client.post(
        "/api/guestbook",
        json={"author": "Anton", "message": "Nice lab demo", "framework": "react"},
        params={"lang": "en"},
    )
    assert created.status_code == 201
    body = created.json()
    assert body["author"] == "Anton"
    assert body["message"] == "Nice lab demo"
    assert body["framework"] == "react"
    assert "id" in body

    listed = client.get("/api/guestbook", params={"lang": "en"})
    assert listed.status_code == 200
    assert any(item["id"] == body["id"] for item in listed.json())


def test_guestbook_profanity_i18n(client: TestClient) -> None:
    ru = client.post(
        "/api/guestbook",
        json={"author": "Anton", "message": "fuck this", "framework": "vanilla"},
        params={"lang": "ru"},
    )
    assert ru.status_code == 400
    assert ru.json()["detail"]["code"] == "profanity"
    assert "Ругаться" in ru.json()["detail"]["message"]

    en = client.post(
        "/api/guestbook",
        json={"author": "Anton", "message": "shit happens", "framework": "vanilla"},
        params={"lang": "en"},
    )
    assert en.status_code == 400
    assert en.json()["detail"]["code"] == "profanity"
    assert "civil" in en.json()["detail"]["message"].lower()


def test_guestbook_rate_limit(client: TestClient) -> None:
    payload = {"author": "Anton", "message": "rate limit probe", "framework": "vue"}
    assert client.post("/api/guestbook", json=payload).status_code == 201
    assert client.post("/api/guestbook", json={**payload, "message": "second probe"}).status_code == 201
    third = client.post("/api/guestbook", json={**payload, "message": "third probe"})
    assert third.status_code == 400
    assert third.json()["detail"]["code"] == "rate"


def test_scores_post_get_and_filter(client: TestClient) -> None:
    created = client.post(
        "/api/scores",
        json={"player_name": "Tester", "time_ms": 1234, "framework": "vue"},
    )
    assert created.status_code == 201
    body = created.json()
    assert body["player_name"] == "Tester"
    assert body["time_ms"] == 1234
    assert body["framework"] == "vue"

    client.post(
        "/api/scores",
        json={"player_name": "Other", "time_ms": 9999, "framework": "react"},
    )

    filtered = client.get("/api/scores", params={"framework": "vue"})
    assert filtered.status_code == 200
    items = filtered.json()
    assert items
    assert all(item["framework"] == "vue" for item in items)
    assert any(item["id"] == body["id"] for item in items)


def test_incidents_list_and_resolve(client: TestClient) -> None:
    listed = client.get("/api/incidents", params={"lang": "en"})
    assert listed.status_code == 200
    items = listed.json()
    assert items
    incident_id = items[0]["id"]

    resolved = client.post(f"/api/incidents/{incident_id}/resolve", params={"lang": "en"})
    assert resolved.status_code == 200
    assert resolved.json()["id"] == incident_id
    assert resolved.json()["resolved"] is True

    missing = client.post("/api/incidents/999999/resolve", params={"lang": "en"})
    assert missing.status_code == 404


def test_incidents_ws_snapshot(client: TestClient) -> None:
    with client.websocket_connect("/api/ws/incidents?lang=en") as ws:
        payload = ws.receive_json()
    assert payload["type"] == "snapshot"
    assert isinstance(payload["items"], list)


def test_landing(client: TestClient) -> None:
    response = client.get("/?choose=1")
    assert response.status_code == 200
    html = response.text
    assert 'property="og:image"' in html
    assert "Telegram" in html
    assert "santahoe@mail.ru" in html
    assert 'id="themeToggle"' in html
    assert 'data-theme=' in html


def test_robots_txt(client: TestClient) -> None:
    response = client.get("/robots.txt")
    assert response.status_code == 200
    assert "User-agent: *" in response.text
    assert "Sitemap:" in response.text
    assert "sitemap.xml" in response.text


def test_sitemap_xml(client: TestClient) -> None:
    response = client.get("/sitemap.xml")
    assert response.status_code == 200
    assert "application/xml" in response.headers["content-type"]
    body = response.text
    assert "<urlset" in body
    assert "/app/vanilla/" in body
    assert "/app/react/" in body
    assert "/app/vue/" in body


def test_og_image(client: TestClient) -> None:
    response = client.get("/og-image.svg")
    assert response.status_code == 200
    assert "image/svg" in response.headers["content-type"]


def test_html_404_page(client: TestClient) -> None:
    response = client.get("/no-such-page", headers={"Accept": "text/html"})
    assert response.status_code == 404
    assert "text/html" in response.headers["content-type"]
    assert "Showcase Lab" in response.text
    assert "404" in response.text
    assert "На сайт" in response.text
    assert "лендинг" not in response.text.lower()


def test_api_404_stays_json(client: TestClient) -> None:
    response = client.get("/api/no-such-endpoint", headers={"Accept": "text/html"})
    assert response.status_code == 404
    assert response.headers["content-type"].startswith("application/json")
