#!/bin/sh

echo "Starting PexaBot..."

dockerize \
  -template /opt/app/config/default.json.tmpl:/opt/app/config/default.json

exec "$@"