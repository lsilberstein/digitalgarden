---
title: Seminar
description: Internes Dashboard für den Kurs "Seminar"
type: dashboard
kurs: Seminar
vorlesungnr: 
tags:
  - sose24
  - SEMINAR
  - dashboard
draft: true
date: 2024-01-13
public dashboard: "[[pubdashs/Seminar|Seminar]]"
---

# Seminar


```dataview
CALENDAR date
FROM "vl"
WHERE kurs = "Seminar"
```

```dataview
TABLE title AS Titel, date AS Datum
FROM "vl"
WHERE kurs = "Seminar"
SORT vorlesungnr
```
