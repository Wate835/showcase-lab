from datetime import datetime

from sqlalchemy import Boolean, DateTime, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from showcaselab.clients.db.client import Base


class Profile(Base):
    __tablename__ = "profiles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(120))
    title: Mapped[str] = mapped_column(Text)
    city: Mapped[str] = mapped_column(String(200))
    summary: Mapped[str] = mapped_column(Text)
    about: Mapped[str] = mapped_column(Text)
    email: Mapped[str] = mapped_column(String(120))
    telegram: Mapped[str] = mapped_column(String(120))
    github: Mapped[str] = mapped_column(String(255))
    skills_json: Mapped[str] = mapped_column(Text)
    experience_json: Mapped[str] = mapped_column(Text)


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(Text)
    description: Mapped[str] = mapped_column(Text)
    tags_json: Mapped[str] = mapped_column(Text)
    year: Mapped[str] = mapped_column(String(80))
    url: Mapped[str | None] = mapped_column(String(255), nullable=True, default=None)
    sort_order: Mapped[int] = mapped_column(Integer, default=0)


class Score(Base):
    __tablename__ = "scores"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    player_name: Mapped[str] = mapped_column(String(40))
    time_ms: Mapped[int] = mapped_column(Integer)
    framework: Mapped[str] = mapped_column(String(20), default="vanilla")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class Incident(Base):
    __tablename__ = "incidents"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(Text)
    severity: Mapped[str] = mapped_column(String(20))
    service: Mapped[str] = mapped_column(String(80))
    description: Mapped[str] = mapped_column(Text)
    resolved: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class GuestbookEntry(Base):
    __tablename__ = "guestbook_entries"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    author: Mapped[str] = mapped_column(String(40))
    message: Mapped[str] = mapped_column(Text)
    framework: Mapped[str] = mapped_column(String(20), default="vanilla")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
