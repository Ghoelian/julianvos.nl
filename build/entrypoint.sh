#!/bin/sh
set -e

npm react-env --env RECAPTCHA_SECRET

exec "$@"
