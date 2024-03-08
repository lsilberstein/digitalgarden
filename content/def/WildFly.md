---
title: WildFly
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
# WildFly

Auf [[Docker]] hub: `jboss/wildfly`, aber mittlerweile umgezogen auf quay.io (`quay.io/wildfly/wildfly`). Herunterladen und starten des Images funktioniert über

```bash
docker pull quay.io/wildfly/wildfly
docker run -it quay.io/wildfly/wildfly
```

Das starten eines nicht vorhandenen Containern impliziert das Herunterladen.