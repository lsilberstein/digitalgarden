---
title: Dockerfile
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
# Dockerfile

Eigene Images werden durch eine *Skriptsprache* in einem [[Dockerfile]] definiert. Zum Beispiel:

```Dockerfile
FROM anapsix/alpine-java
COPY ./target/hello-world.jar /home
WORKDIR /home
CMD ["java", "-cp", "hello-world.jar", "de.pdbm.Main"]
```

Das [[Image]] kann dann gebaut und gelaufen werden mit:

```bash
docker build -t hello-app .
docker run -it --rm hello-app
```