# Showcase Lab

Портфолио Антона Кудрявцева: один FastAPI-бэкенд и три фронта на выбор.

| Стек | Палитра | URL |
|------|---------|-----|
| Vanilla JS | amber | `/app/vanilla/` |
| React | cyan | `/app/react/` |
| Vue 3 | emerald | `/app/vue/` |

Экраны: About, Projects, **Photo Editor**, Bug Hunt, Incident Board, Guestbook.

Редактор вынесен в пакет `packages/photo-editor` (`@showcase-lab/photo-editor`): Vue подключает `PhotoEditorShell`, React — `mountPhotoEditor()`, Vanilla грузит ESM-бандл с `/app/photo-editor/`.

## Локальный запуск

Нужны **Node.js 18+** (лучше 20) и [uv](https://docs.astral.sh/uv/). Если стоит nvm: `nvm use 20`.

Собрать фронты и поднять бэк одной командой (из корня репозитория):

```powershell
.\scripts\dev.ps1
```

Открой http://127.0.0.1:8000/ — лендинг с выбором стека. React/Vue и бандл фоторедактора уже лежат в `static/`.

Повторно, если статика уже собрана:

```powershell
.\scripts\dev.ps1 -SkipBuild
```

### Только бэкенд

```powershell
uv sync
uv run uvicorn showcaselab.main:app --reload --reload-dir src --host 127.0.0.1 --reload-exclude "*.db"
```

Vanilla с `:8000` работает и без сборки. React/Vue на этом порту — после `.\scripts\dev.ps1` или сборки ниже.

### Фронты (dev)

```powershell
cd frontends\react
npm install
npm run dev
# http://127.0.0.1:5173/app/react/  (проксирует /api на :8000)

cd frontends\vue
npm install
npm run dev
# http://127.0.0.1:5174/app/vue/
```

### Сборка React + Vue в static

```powershell
.\scripts\build_frontends.ps1
```

Скрипт также собирает бандл редактора в `static/photo-editor/` (нужен для Vanilla).

После сборки FastAPI отдаёт их с `/app/react/`, `/app/vue/` и `/app/photo-editor/`.

## Деплой на Render (бесплатно)

1. Зарегистрируйся на https://render.com через GitHub.
2. **New → Web Service** → выбери репо `Anton_Kudryavcev`.
3. Runtime: **Docker** (используется корневой `Dockerfile`).
4. Дождись деплоя → открой `https://<name>.onrender.com`.

Замечания free-тира:
- после простоя сервис «засыпает» (первый запрос ~30–60 сек);
- SQLite может обнулиться при редеплое — для игрушек это ок.

## Стек бэкенда

FastAPI · Pydantic · SQLAlchemy · SQLite · uv

Пакет приложения: `src/showcaselab/` (`routers` → `bl` → `clients` / `models`). Тесты — в `tests/`.
