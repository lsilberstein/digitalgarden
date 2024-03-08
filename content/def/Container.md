---
title: Container
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

# Container

[[Container]] erlauben es, Software isoliert laufen zu lassen. Im Gegensatz zur Virtualisierung wird in einem [[Container]] kein vollständiges [[Operating System]] benötigt, da das Host-[[Operating System]] ja vorhanden ist. Damit erreicht man sehr leichtgewichtige und in sich abgeschlossene Systeme, die damit auch portabel sind.

## Virtualisierung vs. Container

![[Pasted-image-20231114182331.png]]

Unser Ziel ist die Portabilität von Anwendungen. Das klappt meist sehr gut, aber [[Operating System (OS)|OS]]' wie [[Windows]] müssen dann auch Linux(-teile) nachbauen.

> Seit 5/2019 volle Systemaufruf-Kompatibilität durch WSL

## Technische Grundlagen Der Isolation

| Begriff        | Detail                                  |
| -------------- | --------------------------------------- |
| PID-Namensraum | Prozess-ids und Fähigkeiten             |
| UTS-Namensraum | Hostund Domänenname                     |
| MNT-Namensraum | Dateisystemstruktur und -zugriff        |
| IPC-Namensraum | Prozesskommunikation über [[Shared Memory]] |
| NET-Namensraum | Netzwerzugriff und -struktur            |
| USR-Namensraum | Benutzernamen und Ids                   |
| chroot()       | Kontrolle der Dateisystemwurzel         |
| cgroups        | Ressourcenschutz                        |

# Container Layering

![[Pasted image 20231114182604.png]] 

[[Container]] werden aus Layern von Images erzeugt. Das [[Operating System (OS)|OS]] ist das unterste [[Image]] und nur Teil des Betreibssystems (z.B. fehlt [[Kernel]]). Darauf dann andere Images für verschiedene Funktionalitäten. Es muss nur jeder [[Image]]-Layer, nicht aber das Gesamt-[[Image]] gespeichert werden. Daher ist es sinnvoll, die Anwendung in einem kleinen Layer oben drauf zu packen.
