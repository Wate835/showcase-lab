import json

from sqlalchemy import delete, func, select
from sqlalchemy.orm import Session

from app.models import GuestbookEntry, Incident, Profile, Project, Score


PROFILE = {
    "name": "Антон Кудрявцев",
    "title": "Fullstack-разработчик",
    "city": "Санкт-Петербург",
    "summary": (
        "Fullstack с упором на Vue 2/3 и TypeScript, ~5 лет во фронтенде. "
        "Около года пишу бэкенд на Python (FastAPI/Pydantic/SQLAlchemy); "
        "точечно касался PHP/Yii2. Делаю SPA, CRM/ERP и сопутствующий DevOps."
    ),
    "about": (
        "Работал в командах до 10 человек: фронт на Vue 3 и legacy React, "
        "бэкенд на Python, CI/CD и документация. "
        "Сейчас веду разработку ERP end-to-end: UI, API, немного деплоя и процессов. "
        "Этот сайт — Showcase Lab: один API и три фронта на выбор."
    ),
    "email": "santahoe@mail.ru",
    "telegram": "https://t.me/Antonygoood",
    "github": "https://github.com/Wate835",
    "skills": [
        "Vue 3",
        "TypeScript",
        "React",
        "JavaScript",
        "Pinia / Vuex",
        "Vite",
        "Storybook",
        "REST API",
        "HTML / CSS / Sass",
        "Git",
        "Python",
        "FastAPI / Pydantic / SQLAlchemy",
        "PHP / Yii2 (базово)",
        "CI/CD",
    ],
    "experience": [
        {
            "company": "Красивый город",
            "role": "Fullstack-разработчик",
            "period": "май 2025 — настоящее время",
            "highlights": [
                "Разработка ERP: фронтенд (Vue 2/3, legacy React), бэкенд на Python, точечно PHP/Yii2",
                "Новые модули, поддержка legacy, интеграция с API и смежными сервисами",
                "UI-kit и Storybook — как часть ERP (формы, таблицы, модалки, тема)",
                "CI/CD: линт, type-check, автодеплой, changelog; документация и onboarding",
            ],
        },
        {
            "company": "ООО Арбат",
            "role": "Frontend-разработчик",
            "period": "апрель 2023 — май 2025",
            "highlights": [
                "Разработка CRM: модули интерфейса, роутинг, состояние, интеграция с REST API",
                "Среди задач — веб-фоторедактор (обрезка, ресайз, фильтры) как часть продукта",
                "SPA на Vue.js + Vue Router + Vuex, оптимизация и рефакторинг компонентов",
            ],
        },
        {
            "company": "Web Industry Pro",
            "role": "Frontend-разработчик",
            "period": "февраль 2019 — июль 2020",
            "highlights": [
                "Адаптивная и кроссбраузерная вёрстка (HTML/CSS/JS, Bootstrap)",
                "Интеграция макетов в WordPress/Joomla, Sass/Less, SEO-разметка",
            ],
        },
    ],
}

PROJECTS = [
    {
        "title": "Showcase Lab (этот сайт)",
        "description": (
            "Портфолио-лаборатория: FastAPI + SQLAlchemy API и три фронта "
            "(Vanilla / React / Vue 3) с разными палитрами и общими игрушками."
        ),
        "tags": [
            "FastAPI",
            "Pydantic",
            "SQLAlchemy",
            "SQLite",
            "WebSocket",
            "React",
            "Vue 3",
            "TypeScript",
            "Vanilla JS",
            "Vite",
            "REST API",
        ],
        "year": "2026",
        "sort_order": 1,
    },
    {
        "title": "ERP-платформа",
        "description": (
            "End-to-end разработка ERP: фронт на Vue 2/3 (+ legacy React), "
            "бэкенд на Python, CI/CD и эксплуатация. Внутри — UI-kit, Storybook, "
            "модули форм/таблиц и поставка фич вместе с бэком и PM."
        ),
        "tags": [
            "Vue 2",
            "Vue 3",
            "React",
            "TypeScript",
            "Pinia",
            "Vite",
            "Python",
            "REST API",
            "UI Kit",
            "Storybook",
            "CI/CD",
            "ESLint",
            "PHP",
            "Yii2",
        ],
        "year": "2025 — настоящее время",
        "sort_order": 2,
    },
    {
        "title": "CRM-система",
        "description": (
            "Разработка CRM на Vue: модули UI, навигация, Vuex, работа с REST. "
            "В продукт входил и браузерный фоторедактор (см. отдельный кейс)."
        ),
        "tags": [
            "Vue",
            "Vue Router",
            "Vuex",
            "JavaScript",
            "REST API",
            "SPA",
            "CRM",
            "Axios",
        ],
        "year": "2023–2025",
        "url": None,
        "sort_order": 3,
    },
    {
        "title": "Веб-фоторедактор",
        "description": (
            "Браузерный редактор изображений на Vue 3 + Konva: цвет (яркость, "
            "контраст, насыщенность), поворот, кадрирование, отражение, undo/redo. "
            "Сделан как продуктовая фича в CRM; есть публичное демо."
        ),
        "tags": [
            "Vue 3",
            "TypeScript",
            "Konva",
            "vue-konva",
            "Canvas",
            "Vite",
            "Tailwind",
            "PWA",
            "VueUse",
        ],
        "year": "2023–2024",
        "url": "https://wate835.github.io/photo-editor/",
        "sort_order": 4,
    },
    {
        "title": "CMS Landing Factory",
        "description": (
            "Серия адаптивных лендингов и вёрстка по макетам с интеграцией в WordPress/Joomla."
        ),
        "tags": [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Sass",
            "Less",
            "Bootstrap",
            "БЭМ",
            "Адаптив",
            "Кроссбраузерность",
            "WordPress",
            "Joomla",
            "SEO",
            "Figma",
        ],
        "year": "2019–2020",
        "url": None,
        "sort_order": 5,
    },
]

INCIDENTS = [
    {
        "title": "Latency spike на /api/projects",
        "severity": "warning",
        "service": "api-gateway",
        "description": "p95 вырос до 820ms. Похоже на холодный старт SQLite после idle.",
    },
    {
        "title": "Bug Hunt: дубликаты time_ms",
        "severity": "critical",
        "service": "game-service",
        "description": "Два POST времени забега за 200ms. Нужна лёгкая дедупликация на клиенте.",
    },
    {
        "title": "Storybook preview 404",
        "severity": "info",
        "service": "cdn",
        "description": "Старый hash ассета в кэше. Не прод, но бесит дизайнеров.",
    },
    {
        "title": "Vue chunk load failed",
        "severity": "warning",
        "service": "frontend-vue",
        "description": "После деплоя часть пользователей держит старый index.html.",
    },
    {
        "title": "Guestbook spam filter offline",
        "severity": "info",
        "service": "moderation",
        "description": "Фильтр шуток про PHP временно отключён. Yii2 в порядке.",
    },
]


def seed_database(db: Session) -> None:
    """Refresh profile/projects from code; keep scores/guestbook/incidents if present."""
    profile = db.scalars(select(Profile).limit(1)).first()
    if profile is None:
        profile = Profile(
            name=PROFILE["name"],
            title=PROFILE["title"],
            city=PROFILE["city"],
            summary=PROFILE["summary"],
            about=PROFILE["about"],
            email=PROFILE["email"],
            telegram=PROFILE["telegram"],
            github=PROFILE["github"],
            skills_json=json.dumps(PROFILE["skills"], ensure_ascii=False),
            experience_json=json.dumps(PROFILE["experience"], ensure_ascii=False),
        )
        db.add(profile)
    else:
        profile.name = PROFILE["name"]
        profile.title = PROFILE["title"]
        profile.city = PROFILE["city"]
        profile.summary = PROFILE["summary"]
        profile.about = PROFILE["about"]
        profile.email = PROFILE["email"]
        profile.telegram = PROFILE["telegram"]
        profile.github = PROFILE["github"]
        profile.skills_json = json.dumps(PROFILE["skills"], ensure_ascii=False)
        profile.experience_json = json.dumps(PROFILE["experience"], ensure_ascii=False)

    db.execute(delete(Project))
    for item in PROJECTS:
        db.add(
            Project(
                title=item["title"],
                description=item["description"],
                tags_json=json.dumps(item["tags"], ensure_ascii=False),
                year=item["year"],
                url=item.get("url"),
                sort_order=item["sort_order"],
            )
        )

    if (db.scalar(select(func.count()).select_from(Incident)) or 0) == 0:
        for item in INCIDENTS:
            db.add(Incident(**item, resolved=False))

    if (db.scalar(select(func.count()).select_from(Score)) or 0) == 0:
        db.add_all(
            [
                Score(player_name="debugger", time_ms=185_000, framework="vanilla"),
                Score(player_name="hooks-fan", time_ms=162_000, framework="react"),
                Score(player_name="composition", time_ms=148_500, framework="vue"),
            ]
        )

    if (db.scalar(select(func.count()).select_from(GuestbookEntry)) or 0) == 0:
        db.add(
            GuestbookEntry(
                author="Showcase Bot",
                message="Добро пожаловать в лабораторию. Выбери стек — и палитра изменится.",
                framework="vanilla",
            )
        )

    db.commit()
