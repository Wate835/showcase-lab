#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/packages/photo-editor"
[ -d node_modules ] || npm install
npm run build:lib
cd "$ROOT/frontends/react"
[ -d node_modules ] || npm install
npm run build
cd "$ROOT/frontends/vue"
[ -d node_modules ] || npm install
npm run build
echo "Done. Artifacts in static/{react,vue}"
