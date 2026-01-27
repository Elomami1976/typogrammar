#!/usr/bin/env bash
# Create a deployment zip of the contents of dist/
# Usage: from project root: bash scripts/zip-dist.sh

set -euo pipefail
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_PATH="$PROJECT_ROOT/dist"
DEST_ZIP="$PROJECT_ROOT/dist-deploy.zip"

if [ ! -d "$DIST_PATH" ]; then
  echo "dist/ folder not found. Run 'npm run build' first or check you are in the project root."
  exit 1
fi

if [ -f "$DEST_ZIP" ]; then
  rm -f "$DEST_ZIP"
fi

echo "Creating $DEST_ZIP from contents of dist/"
cd "$DIST_PATH"
zip -r "$DEST_ZIP" ./*

echo "Zip created: $DEST_ZIP"
echo "Upload this zip to Hostinger (public_html) and extract so index.html is directly inside public_html."