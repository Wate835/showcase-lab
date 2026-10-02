# syntax=docker/dockerfile:1
FROM node:22-bookworm AS frontend
WORKDIR /repo
COPY packages/photo-editor/package.json packages/photo-editor/package-lock.json* ./packages/photo-editor/
COPY frontends/react/package.json frontends/react/package-lock.json* ./frontends/react/
COPY frontends/vue/package.json frontends/vue/package-lock.json* ./frontends/vue/
COPY packages/photo-editor ./packages/photo-editor
RUN cd packages/photo-editor && npm install && npm run build:lib
COPY frontends/react ./frontends/react
COPY frontends/vue ./frontends/vue
RUN cd frontends/react && npm install
RUN cd frontends/vue && npm install
RUN mkdir -p backend/static
RUN cd frontends/react && npm run build
RUN cd frontends/vue && npm run build

FROM python:3.12-slim
WORKDIR /repo
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend ./backend
COPY frontends/landing ./frontends/landing
COPY frontends/vanilla ./frontends/vanilla
COPY --from=frontend /repo/backend/static/react ./backend/static/react
COPY --from=frontend /repo/backend/static/vue ./backend/static/vue
COPY --from=frontend /repo/backend/static/photo-editor ./backend/static/photo-editor
WORKDIR /repo/backend
EXPOSE 8000
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
