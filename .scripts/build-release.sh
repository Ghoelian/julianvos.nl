#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
BRANCH=$(git branch --show-current)

pushd "$SCRIPT_DIR" || exit 1

pushd ".."

mkdir -p "./.well-known"

rm "./.well-known/matrix/client"
rm "./.well-known/matrix/server"
rm "./.well-known/matrix/support"

curl "https://matrix.julianvos.nl/.well-known/matrix/client" -o "./.well-known/matrix/client"
curl "https://matrix.julianvos.nl/.well-known/matrix/server" -o "./.well-known/matrix/server"
curl "https://matrix.julianvos.nl/.well-known/matrix/support" -o "./.well-known/matrix/support"

mkdir -p "./.out"

EXCLUDE=$(xargs -a .gitignore -I{} -d'\n' echo --exclude {})

# We want EXCLUDE to be treated as arguments.
# shellcheck disable=SC2086
tar $EXCLUDE --exclude .git --exclude .gitignore --exclude .forgejo --exclude .scripts -czvf "./.out/$BRANCH.tar.gz" ./

popd || exit 1
