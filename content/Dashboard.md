---
title: Dashboard
description: Internes Dashboard für alle Kurse
type: page
kurs: 
vorlesungnr: 
tags:
  - dashboard
  - sose24
draft: true
date: 2024-01-10
---

# Dashboard

- [x] Weitere Kurse hinzufügen
- [x] TestKurs entfernen

```dataview
TABLE title AS Titel, description AS Beschreibung, kurs AS Kurs, tags AS Tags
WHERE type = "dashboard"
```
## Tasks

```dataview
TASK
WHERE !completed
```
