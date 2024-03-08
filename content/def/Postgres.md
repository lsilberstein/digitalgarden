---
title: Postgres
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - FTSE
  - wise2324
draft: false
date:
---
# Postgres

Erhältlich im Dockerhub unter [Postgres](https://hub.docker.com/_/postgres). Wir können eine [[Dockerfile]] für ein eigenes [[Image]], dass Postgres benutzt schreiben.

```Dockerfile
FROM postgres:12.4
RUN localedef -i de_DE -c -f UTF-8 -A \ /usr/share/locale/locale.alias de_DE.UTF-8
ENV LANg de_DE.utf-8
COPY ./create.sql /docker-entrypoint-initdb.d
```

Verwendung mit [[Podman]] sieht wie folgt aus:

```bash
podman build --tag foo-db .
podman run --name foo-db -e POSTGRES_PASSWORD=pp \ -p 5555:5432 -d foo-db
psql -h 0.0.0.0 -p 5555 -U postgres
```