#!/usr/bin/env bash
set -euo pipefail

ROOT="${DEPLOY_ROOT:-/opt/showcase-lab}"
DATA_DIR="${DEPLOY_DATA_DIR:-/opt/showcase-data}"
IMAGE="${DEPLOY_IMAGE:-showcase-lab}"
BRANCH="${DEPLOY_BRANCH:-main}"

cd "$ROOT"

echo "==> sync ${BRANCH}"
git fetch origin "$BRANCH"
git checkout -B "$BRANCH" "origin/${BRANCH}"

echo "==> docker build"
docker build -t "$IMAGE" .

echo "==> restart container"
mkdir -p "$DATA_DIR"
docker rm -f showcase-lab 2>/dev/null || true
docker run -d --name showcase-lab --restart unless-stopped \
  -p 127.0.0.1:8000:8000 \
  -e DATABASE_URL=sqlite:////data/showcase.db \
  -v "${DATA_DIR}:/data" \
  "$IMAGE"

echo "==> health"
sleep 2
curl -fsS http://127.0.0.1:8000/api/health
echo
echo "==> deploy ok"
