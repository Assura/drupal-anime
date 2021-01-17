#!/usr/bin/env bash

. "bin/libdeploy.bash"

ensure npm
ensure gulp

pushd scripts/assets
echo "Installing assets building Js"
npm i
gulp
popd
