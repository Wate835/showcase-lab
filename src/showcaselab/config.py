from pathlib import Path

from pydantic_settings import BaseSettings

_REPO_ROOT = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    app_name: str = "Showcase Lab"
    site_url: str = "https://anton-kudryavcev.ru"
    database_url: str = f"sqlite:///{_REPO_ROOT / 'showcase.db'}"
    # Browser origins allowed to call the API (override via CORS_ORIGINS).
    cors_origins: list[str] = [
        "https://anton-kudryavcev.ru",
        "http://127.0.0.1:8000",
        "http://localhost:8000",
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://127.0.0.1:5174",
        "http://localhost:5174",
    ]
    incident_feed_enabled: bool = True


settings = Settings()
