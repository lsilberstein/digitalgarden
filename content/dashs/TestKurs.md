---
kurs: TestKurs
tags: 
title: TestKurs
type: dashboard
draft: true
date: 2024-01-10
description: TestDashboard für einen beliebigen Kurs
---

# TestKurs

```dataview
CALENDAR date
FROM "vl"
WHERE kurs = "TestKurs"
```

## Vorlesungen

```dataview
LIST date
FROM "vl"
WHERE kurs = "TestKurs"
```
