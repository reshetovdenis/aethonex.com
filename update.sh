#!/bin/sh
git pull && \
docker build -t aethonex-com . && \
docker compose up -d