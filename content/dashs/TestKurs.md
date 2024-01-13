---
title: TestKurs
description: TestDashboard für einen beliebigen Kurs
type: dashboard
kurs: TestKurs
vorlesungnr: 
tags:
  - sose24
  - testkurs
  - dashboard
draft: true
date: 2024-01-10
---

# TestKurs

```dataview
CALENDAR date
FROM "vl"
WHERE kurs = "TestKurs"
```

```dataview
TABLE title AS Titel, date AS Datum
FROM "vl"
WHERE kurs = "TestKurs"
SORT vorlesungnr
```
