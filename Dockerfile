# syntax=docker/dockerfile:1
FROM node:22-bookworm AS frontend
WORKDIR /repo
COPY packages/photo-editor/package.json packages/photo-editor/package-lock.json* ./packages/photo-editor/
COPY frontends/react/package.json frontends/react/package-lock.json* ./frontends/react/
COPY frontends/vue/package.json frontends/vue/package-lock.json* ./frontends/vue/
COPY packages/photo-editor ./packages/photo-editor
RUN cd packages/photo-editor && npm install && npm run build:lib
COPY frontends/shared ./frontends/shared
COPY frontends/react ./frontends/react
COPY frontends/vue ./frontends/vue
RUN cd frontends/react && npm install
RUN cd frontends/vue && npm install
RUN mkdir -p static
RUN cd frontends/react && npm run build
RUN cd frontends/vue && npm run build

FROM python:3.12-slim
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/
WORKDIR /repo
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV UV_NO_CACHE=1
COPY pyproject.toml uv.lock /repo/
RUN uv sync --frozen --no-dev --no-install-project
COPY src /repo/src
RUN uv sync --frozen --no-dev
COPY frontends/landing ./frontends/landing
COPY frontends/shared ./frontends/shared
COPY frontends/vanilla ./frontends/vanilla
COPY --from=frontend /repo/static/react ./static/react
COPY --from=frontend /repo/static/vue ./static/vue
COPY --from=frontend /repo/static/photo-editor ./static/photo-editor
EXPOSE 8000
CMD ["sh", "-c", "uv -q run --frozen --no-dev -- uvicorn showcaselab.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
