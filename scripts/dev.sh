#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> uv sync"
uv sync

if [[ "${1:-}" != "--skip-build" ]]; then
  "$ROOT/scripts/build_frontends.sh"
else
  echo "==> Skip frontend build"
fi

echo "==> uvicorn http://127.0.0.1:8000/"
cd "$ROOT"
uv run uvicorn showcaselab.main:app --reload --reload-dir src --host 127.0.0.1 --reload-exclude "*.db"
