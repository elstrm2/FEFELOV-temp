#!/bin/bash

cd "$(dirname "$0")/.."

npm run watch &
WATCH_PID=$!

python3 -m http.server 8000 &
SERVER_PID=$!

trap "kill $WATCH_PID $SERVER_PID 2>/dev/null" EXIT

wait
