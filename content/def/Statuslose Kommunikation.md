---
title: Statuslose Kommunikation
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

# Statuslose Kommunikation

Client hält Status oder Status wird vom Server in Ressourcenstatus umgewandelt. Nicht gewollt ist, Client-spezifischer, serverseitig abgelegter Status, damit der Status entweder vollständig auf Client halten, indem Status also Teil der Repräsentation vom Server zum Client übermittelt wird.  
Gründe für der Verzicht auf Sitzungsstatus:

- Skalierbarkeit
- Kopplung von Client an Server verringert: zwei aufeinanderfolgende Anfragen müssen nicht von selber Server-Instanz beantwortet werden
- Server kann zwischenzeitlich herunter-/hochgefahren werden