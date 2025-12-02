#!/usr/bin/env bash

set -e
DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -x

bun i
cd kvrocks

cleanup() {
  docker-compose down
}
trap cleanup EXIT
docker-compose up -d

sleep 3

../test.js

docker-compose down
