param(
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "==> uv sync"
uv sync

if (-not $SkipBuild) {
    & "$PSScriptRoot\build_frontends.ps1"
} else {
    Write-Host "==> Skip frontend build"
}

Write-Host "==> uvicorn http://127.0.0.1:8000/"
Set-Location $root
uv run uvicorn showcaselab.main:app --reload --reload-dir src --host 127.0.0.1 --reload-exclude "*.db"
