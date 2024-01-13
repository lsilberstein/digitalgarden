---
title: TestKurs
description: TestDashboard für einen beliebigen Kurs
type: dashboard
kurs: TestKurs
vorlesungnr: 0
tags: 
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
