---
description: Internes Dashboard für alle Kurse
tags: 
title: Dashboard
type: page
draft: true
date: 2024-01-10
---

# Dashboard

```dataview
TABLE title, description
WHERE type = "dashboard"
```

```dataview
TABLE title, date, description
WHERE type = "vorlesung"
GROUP BY kurs
```
