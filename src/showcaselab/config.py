from pathlib import Path

from pydantic_settings import BaseSettings

_REPO_ROOT = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    app_name: str = "Showcase Lab"
    site_url: str = "https://anton-kudryavcev.ru"
    database_url: str = f"sqlite:///{_REPO_ROOT / 'showcase.db'}"
    cors_origins: list[str] = ["*"]
    incident_feed_enabled: bool = True


settings = Settings()
