---
title: Objektlebenszyklus
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
# Objektlebenszyklus

Persistente Objekte werden durch den [[Identität|Entity]]-Manager verwaltet. Dieser ist verantwortlich, dass die [[Identität|Entities]] und die Datenbank konsistent sind. Er stellt sicher, dass [[Identität|Entity]] mit primary Keys nur einmal existiert (in diesem EM). Der [[Identität|Entity]]-Manager verwaltet den *Persistenzkontext *und stellt Methods zum persistieren, lesen, aktualisieren und löschen von [[Identität|Entities]] bereit.*  
![image.png](files/image_2z.png)