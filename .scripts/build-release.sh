#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
BRANCH=$(git branch --show-current)

pushd "$SCRIPT_DIR" || exit 1

pushd ".."

mkdir -p "./.out"

EXCLUDE=$(xargs -a .gitignore -I{} -d'\n' echo --exclude {})

# We want EXCLUDE to be treated as arguments.
# shellcheck disable=SC2086
tar $EXCLUDE --exclude .gitignore --exclude .forgejo -czvf "./.out/$BRANCH.tar.gz" ./

popd || exit 1
