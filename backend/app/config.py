from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Showcase Lab"
    database_url: str = f"sqlite:///{Path(__file__).resolve().parent.parent / 'showcase.db'}"
    cors_origins: list[str] = ["*"]


settings = Settings()
