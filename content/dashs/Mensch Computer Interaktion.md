---
title: Mensch Computer Interaktion
description: Internes Dashboard für den Kurs "Mensch Computer Interaktion"
type: dashboard
kurs: Mensch Computer Interaktion
vorlesungnr: 
tags:
  - sose24
  - dashboard
  - MCI
draft: true
date: 2024-01-13
public dashboard: "[[pubdashs/Mensch Computer Interaktion|Mensch Computer Interaktion]]"
---

# Mensch Computer Interaktion


```dataview
CALENDAR date
FROM "vl"
WHERE kurs = "Mensch Computer Interaktion"
```

```dataview
TABLE title AS Titel, date AS Datum
FROM "vl"
WHERE kurs = "Mensch Computer Interaktion"
SORT vorlesungnr
```
