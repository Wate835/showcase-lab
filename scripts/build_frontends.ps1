$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "==> Building @showcase-lab/photo-editor (vanilla bundle)"
Set-Location "$root\packages\photo-editor"
if (-not (Test-Path node_modules)) { npm install }
npm run build:lib

Write-Host "==> Building React"
Set-Location "$root\frontends\react"
if (-not (Test-Path node_modules)) { npm install }
npm run build

Write-Host "==> Building Vue"
Set-Location "$root\frontends\vue"
if (-not (Test-Path node_modules)) { npm install }
npm run build

Write-Host "Done. Artifacts in backend/static/{react,vue}"
