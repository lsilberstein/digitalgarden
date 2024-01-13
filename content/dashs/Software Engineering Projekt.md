---
title: Software Engineering Projekt
description: Internes Dashboard für den Kurs "Software Engineering Projekt"
type: dashboard
kurs: Software Engineering Projekt
vorlesungnr: 
tags:
  - sose24
  - dashboard
  - SOEP
draft: true
date: 2024-01-13
public dashboard: "[[pubdashs/Software Engineering Projekt|Software Engineering Projekt]]"
---
# Software Engineering Projekt


```dataview
CALENDAR date
FROM "vl"
WHERE kurs = "Software Engineering Projekt"
```

```dataview
TABLE title AS Titel, date AS Datum
FROM "vl"
WHERE kurs = "Software Engineering Projekt"
SORT vorlesungnr
```
