# Showcase Lab

> **Сайт:** [anton-kudryavcev.ru](https://anton-kudryavcev.ru)

Портфолио: один FastAPI API и три одинаковых по экранам фронта.

| Стек | Палитра | URL |
|------|---------|-----|
| Vanilla JS | amber | `/app/vanilla/` |
| React | cyan | `/app/react/` |
| Vue 3 | emerald | `/app/vue/` |

Экраны: About, Projects, Photo Editor, Bug Hunt, Incident Board, Guestbook.

Тема и локаль (`ru` / `en`) общие для всех фронтов. На `/` выбирается стек (cookie `fw`).

## Стек

- **Backend:** Python 3.12+, FastAPI, Pydantic v2, SQLAlchemy, SQLite, uv, Uvicorn
- **Frontend:** Vite 6, TypeScript (React / Vue), Tailwind; Vanilla без сборки
- **Shared:** `packages/photo-editor` (`@showcase-lab/photo-editor`) — Vue + Konva

Подключение редактора:

- Vue — `PhotoEditorShell`
- React — `mountPhotoEditor()`
- Vanilla — ESM с `/app/photo-editor/`

## Структура

```text
src/showcaselab/     FastAPI: routers → bl → clients / models
tests/               pytest (временная SQLite, без incident feed)
frontends/
  landing/           выбор стека
  vanilla/           SPA без сборки
  react/             Vite → static/react
  vue/               Vite → static/vue
  shared/            theme, i18n, boot
packages/photo-editor/
scripts/             dev / build (PowerShell и bash)
static/              собранные React, Vue, бандл редактора
```

## Запуск

Нужны **Node.js 20+** (в Docker — 22) и [uv](https://docs.astral.sh/uv/).

Из корня репозитория:

```powershell
.\scripts\dev.ps1
```

```bash
./scripts/dev.sh
```

Открой http://127.0.0.1:8000/ — лендинг. Скрипт синхронизирует Python-зависимости, собирает фронты в `static/` и поднимает Uvicorn.

Если статика уже собрана:

```powershell
.\scripts\dev.ps1 -SkipBuild
```

```bash
./scripts/dev.sh --skip-build
```

### Только бэкенд

```powershell
uv sync
uv run uvicorn showcaselab.main:app --reload --reload-dir src --host 127.0.0.1 --reload-exclude "*.db"
```

Vanilla на `:8000` работает без сборки. React / Vue и бандл редактора — после `dev` или отдельной сборки.

### Фронты в режиме Vite

Бэкенд должен уже слушать `:8000` (прокси `/api`).

```powershell
cd frontends\react
npm install
npm run dev
# http://127.0.0.1:5173/app/react/
```

```powershell
cd frontends\vue
npm install
npm run dev
# http://127.0.0.1:5174/app/vue/
```

### Сборка в `static/`

```powershell
.\scripts\build_frontends.ps1
```

```bash
./scripts/build_frontends.sh
```

Собирает React, Vue и бандл `packages/photo-editor` → `static/photo-editor/` (нужен Vanilla).

## Тесты и CI

```powershell
uv sync --group dev
uv run ruff check .
uv run pytest
```

Каждый тест поднимает временную SQLite и отключает фоновый incident feed (`INCIDENT_FEED_ENABLED=false`), прод-файл `showcase.db` не трогается.

Typecheck фронтов (после `npm install` в соответствующем каталоге):

```powershell
cd frontends\react; npm run typecheck
cd frontends\vue; npm run typecheck
```

GitHub Actions (`.github/workflows/ci.yml`): на push/PR в `dev` и `main` гоняются ruff, pytest, typecheck и build React/Vue.

## API (кратко)

| Метод | Путь |
|-------|------|
| GET / HEAD | `/api/health` |
| GET | `/api/profile`, `/api/projects`, `/api/scores`, `/api/challenges`, `/api/incidents`, `/api/guestbook` |
| POST | `/api/scores`, `/api/guestbook`, `/api/challenges/{id}/check-line`, `.../check-fix`, `/api/incidents/{id}/resolve` |
| WS | `/api/ws/incidents` |

Локаль: query `lang=ru|en` или `Accept-Language`.
