#!/usr/bin/env bash

set -e
DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -x

bun i

cd redis
docker-compose up -d
sleep 3
../test.js
docker-compose down
