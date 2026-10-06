import json

from sqlalchemy import delete, func, select
from sqlalchemy.orm import Session

from showcaselab.clients.db.models import GuestbookEntry, Incident, Profile, Project, Score
from showcaselab.locale import dump_i18n

PROFILE = {
    "name": {"ru": "Антон Кудрявцев", "en": "Anton Kudryavcev"},
    "title": {"ru": "Fullstack-разработчик", "en": "Fullstack developer"},
    "city": {"ru": "Санкт-Петербург", "en": "Saint Petersburg"},
    "summary": {
        "ru": (
            "Fullstack с упором на Vue 2/3 и TypeScript, ~5 лет во фронтенде. "
            "Около года пишу бэкенд на Python (FastAPI/Pydantic/SQLAlchemy); "
            "точечно касался PHP/Yii2. Делаю SPA, CRM/ERP и сопутствующий DevOps."
        ),
        "en": (
            "Fullstack with a focus on Vue 2/3 and TypeScript, ~5 years in frontend. "
            "About a year of Python backend (FastAPI/Pydantic/SQLAlchemy); "
            "occasional PHP/Yii2. I build SPAs, CRM/ERP, and the surrounding DevOps."
        ),
    },
    "about": {
        "ru": (
            "Работал в командах до 10 человек: фронт на Vue 3 и legacy React, "
            "бэкенд на Python, CI/CD и документация. "
            "Сейчас веду разработку ERP end-to-end: UI, API, немного деплоя и процессов. "
            "Этот сайт — Showcase Lab: один API и три фронта на выбор."
        ),
        "en": (
            "I have worked in teams of up to 10: Vue 3 and legacy React on the front, "
            "Python on the back, plus CI/CD and docs. "
            "I currently own an ERP end-to-end: UI, API, a bit of deploy and process. "
            "This site is Showcase Lab: one API and three frontends to pick from."
        ),
    },
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
        "PHP / Yii2",
        "CI/CD",
    ],
    "experience": [
        {
            "company": "Красивый город",
            "role": {"ru": "Fullstack-разработчик", "en": "Fullstack developer"},
            "period": {"ru": "май 2025 — настоящее время", "en": "May 2025 — present"},
            "highlights": [
                {
                    "ru": "Разработка ERP: фронтенд (Vue 2/3, legacy React), бэкенд на Python, точечно PHP/Yii2",
                    "en": "ERP development: frontend (Vue 2/3, legacy React), Python backend, occasional PHP/Yii2",
                },
                {
                    "ru": "Новые модули, поддержка legacy, интеграция с API и смежными сервисами",
                    "en": "New modules, legacy support, API and adjacent-service integrations",
                },
                {
                    "ru": "UI-kit и Storybook — как часть ERP (формы, таблицы, модалки, тема)",
                    "en": "UI kit and Storybook as part of the ERP (forms, tables, modals, theme)",
                },
                {
                    "ru": "CI/CD: линт, type-check, автодеплой, changelog; документация и onboarding",
                    "en": "CI/CD: lint, type-check, auto-deploy, changelog; docs and onboarding",
                },
            ],
        },
        {
            "company": "ООО Арбат",
            "role": {"ru": "Frontend-разработчик", "en": "Frontend developer"},
            "period": {"ru": "апрель 2023 — май 2025", "en": "April 2023 — May 2025"},
            "highlights": [
                {
                    "ru": "Разработка CRM: модули интерфейса, роутинг, состояние, интеграция с REST API",
                    "en": "CRM development: UI modules, routing, state, REST API integration",
                },
                {
                    "ru": "Среди задач — веб-фоторедактор (обрезка, ресайз, фильтры) как часть продукта",
                    "en": "Including a web photo editor (crop, resize, filters) as a product feature",
                },
                {
                    "ru": "SPA на Vue.js + Vue Router + Vuex, оптимизация и рефакторинг компонентов",
                    "en": "SPA on Vue.js + Vue Router + Vuex, component optimization and refactoring",
                },
            ],
        },
        {
            "company": "Web Industry Pro",
            "role": {"ru": "Frontend-разработчик", "en": "Frontend developer"},
            "period": {"ru": "февраль 2019 — июль 2020", "en": "February 2019 — July 2020"},
            "highlights": [
                {
                    "ru": "Адаптивная и кроссбраузерная вёрстка (HTML/CSS/JS, Bootstrap)",
                    "en": "Responsive and cross-browser layout (HTML/CSS/JS, Bootstrap)",
                },
                {
                    "ru": "Интеграция макетов в WordPress/Joomla, Sass/Less, SEO-разметка",
                    "en": "Integrating layouts into WordPress/Joomla, Sass/Less, SEO markup",
                },
            ],
        },
    ],
}

PROJECTS = [
    {
        "title": {"ru": "Showcase Lab (этот сайт)", "en": "Showcase Lab (this site)"},
        "description": {
            "ru": (
                "Портфолио-лаборатория: FastAPI + SQLAlchemy API и три фронта "
                "(Vanilla / React / Vue 3) с разными палитрами и общими игрушками."
            ),
            "en": (
                "A portfolio lab: FastAPI + SQLAlchemy API and three frontends "
                "(Vanilla / React / Vue 3) with different palettes and the same toys."
            ),
        },
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
        "year": {"ru": "2026", "en": "2026"},
        "sort_order": 1,
    },
    {
        "title": {"ru": "ERP-платформа", "en": "ERP platform"},
        "description": {
            "ru": (
                "End-to-end разработка ERP: фронт на Vue 2/3 (+ legacy React), "
                "бэкенд на Python, CI/CD и эксплуатация. Внутри — UI-kit, Storybook, "
                "модули форм/таблиц и поставка фич вместе с бэком и PM."
            ),
            "en": (
                "End-to-end ERP: Vue 2/3 frontend (+ legacy React), Python backend, "
                "CI/CD and operations. Inside: UI kit, Storybook, form/table modules, "
                "and shipping features with the backend and PM."
            ),
        },
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
        "year": {"ru": "2025 — настоящее время", "en": "2025 — present"},
        "sort_order": 2,
    },
    {
        "title": {"ru": "CRM-система", "en": "CRM system"},
        "description": {
            "ru": (
                "Разработка CRM на Vue: модули UI, навигация, Vuex, работа с REST. "
                "В продукт входил и браузерный фоторедактор (см. отдельный кейс)."
            ),
            "en": (
                "Vue CRM: UI modules, navigation, Vuex, REST. "
                "The product also included a browser photo editor (see a separate case)."
            ),
        },
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
        "year": {"ru": "2023–2025", "en": "2023–2025"},
        "url": None,
        "sort_order": 3,
    },
    {
        "title": {"ru": "Веб-фоторедактор", "en": "Web photo editor"},
        "description": {
            "ru": (
                "Браузерный редактор изображений на Vue 3 + Konva: цвет (яркость, "
                "контраст, насыщенность), поворот, кадрирование, отражение, undo/redo. "
                "Сделан как продуктовая фича в CRM; есть публичное демо."
            ),
            "en": (
                "Browser image editor on Vue 3 + Konva: color (brightness, contrast, "
                "saturation), rotate, crop, flip, undo/redo. "
                "Shipped as a CRM product feature; public demo available."
            ),
        },
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
        "year": {"ru": "2023–2024", "en": "2023–2024"},
        "url": "https://wate835.github.io/photo-editor/",
        "sort_order": 4,
    },
    {
        "title": {"ru": "CMS Landing Factory", "en": "CMS Landing Factory"},
        "description": {
            "ru": "Серия адаптивных лендингов и вёрстка по макетам с интеграцией в WordPress/Joomla.",
            "en": "A series of responsive landings and layout-from-mockups, integrated into WordPress/Joomla.",
        },
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
        "year": {"ru": "2019–2020", "en": "2019–2020"},
        "url": None,
        "sort_order": 5,
    },
]

INCIDENTS = [
    {
        "title": {
            "ru": "Latency spike на /api/projects",
            "en": "Latency spike on /api/projects",
        },
        "severity": "warning",
        "service": "api-gateway",
        "description": {
            "ru": "p95 вырос до 820ms. Похоже на холодный старт SQLite после idle.",
            "en": "p95 rose to 820ms. Looks like a cold SQLite start after idle.",
        },
    },
    {
        "title": {
            "ru": "Bug Hunt: дубликаты time_ms",
            "en": "Bug Hunt: duplicate time_ms",
        },
        "severity": "critical",
        "service": "game-service",
        "description": {
            "ru": "Два POST времени забега за 200ms. Нужна лёгкая дедупликация на клиенте.",
            "en": "Two run-time POSTs within 200ms. Need light client-side dedup.",
        },
    },
    {
        "title": {"ru": "Storybook preview 404", "en": "Storybook preview 404"},
        "severity": "info",
        "service": "cdn",
        "description": {
            "ru": "Старый hash ассета в кэше. Не прод, но бесит дизайнеров.",
            "en": "Stale asset hash in cache. Not prod, but it annoys designers.",
        },
    },
    {
        "title": {"ru": "Vue chunk load failed", "en": "Vue chunk load failed"},
        "severity": "warning",
        "service": "frontend-vue",
        "description": {
            "ru": "После деплоя часть пользователей держит старый index.html.",
            "en": "After deploy some users keep an old index.html.",
        },
    },
    {
        "title": {
            "ru": "Guestbook spam filter offline",
            "en": "Guestbook spam filter offline",
        },
        "severity": "info",
        "service": "moderation",
        "description": {
            "ru": "Фильтр шуток про PHP временно отключён. Yii2 в порядке.",
            "en": "The PHP-joke filter is temporarily off. Yii2 is fine.",
        },
    },
]


def _i18n_plain_values(value) -> set[str]:
    if isinstance(value, dict):
        return {str(v) for v in value.values() if v is not None and str(v)}
    if value is None:
        return set()
    text = str(value)
    return {text} if text else set()


def _is_unilingual_blob(value) -> bool:
    return not str(value or "").lstrip().startswith("{")


def _match_unilingual_seed_incident(row) -> dict | None:
    """Upgrade leftover plain-text seed tickets; never match spawned tickets by service alone."""
    if not _is_unilingual_blob(row.title):
        return None
    title = str(row.title)
    service = row.service
    for item in INCIDENTS:
        if item["service"] != service:
            continue
        if title in _i18n_plain_values(item["title"]):
            return item
    return None


def seed_database(db: Session) -> None:
    """Refresh profile/projects from code; keep scores/guestbook/incidents if present."""
    profile = db.scalars(select(Profile).limit(1)).first()
    payload = dict(
        name=dump_i18n(PROFILE["name"]),
        title=dump_i18n(PROFILE["title"]),
        city=dump_i18n(PROFILE["city"]),
        summary=dump_i18n(PROFILE["summary"]),
        about=dump_i18n(PROFILE["about"]),
        email=PROFILE["email"],
        telegram=PROFILE["telegram"],
        github=PROFILE["github"],
        skills_json=json.dumps(PROFILE["skills"], ensure_ascii=False),
        experience_json=json.dumps(PROFILE["experience"], ensure_ascii=False),
    )
    if profile is None:
        db.add(Profile(**payload))
    else:
        for key, value in payload.items():
            setattr(profile, key, value)

    db.execute(delete(Project))
    for item in PROJECTS:
        db.add(
            Project(
                title=dump_i18n(item["title"]),
                description=dump_i18n(item["description"]),
                tags_json=json.dumps(item["tags"], ensure_ascii=False),
                year=dump_i18n(item["year"]),
                url=item.get("url"),
                sort_order=item["sort_order"],
            )
        )

    open_incidents = list(db.scalars(select(Incident).where(Incident.resolved.is_(False))).all())
    if not open_incidents:
        for item in INCIDENTS:
            db.add(
                Incident(
                    title=dump_i18n(item["title"]),
                    severity=item["severity"],
                    service=item["service"],
                    description=dump_i18n(item["description"]),
                    resolved=False,
                )
            )
    else:
        for row in open_incidents:
            match = _match_unilingual_seed_incident(row)
            if match:
                row.title = dump_i18n(match["title"])
                row.description = dump_i18n(match["description"])

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
                message=dump_i18n(
                    {
                        "ru": "Добро пожаловать в лабораторию. Выбери стек — и палитра изменится.",
                        "en": "Welcome to the lab. Pick a stack — the palette will change.",
                    }
                ),
                framework="vanilla",
            )
        )

    db.commit()
