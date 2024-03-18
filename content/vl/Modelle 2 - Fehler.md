---
title: Modelle 2 - Fehler
description: 
type: Vorlesung
kurs: Mensch Computer Interaktion
vorlesungnr: 17
tags:
  - sose24
  - MCI
  - vorlesung
draft: false
date: 2024-03-27
---

# Modelle 2 - [[Fehler]]

Mit [[Fehler|Fehlern]] meinen wir [[Fehler]] beim Benutzen einer Software oder eines Systems. Also wenn der Nutzer eine andere Erwartung an das System hat. Siehe hier eine schematische Darstellung für die Ausführung einer zielgerichteten Handlung.

![[Pasted image 20240318155111.png]]

Bei der Rückmeldung des Systems an den Nutzer spricht man von einem *Gulf of evaluation*, während die andere Seite ein *Gulf of execution* ist.

## Arten Von Fehlern

[[Fehler]] sind entweder ein 

- Irrtum: eine falsche Handlung
- Fehlleistung: Ein richtiger Plan, jedoch falsch ausgeführt.

Beide Probleme haben als Grund, dass die [[Modelle|mentalen Modelle]] die zugrundeliegen, falsch sind. Zusätzlich gibt es unterschiedliche Arten von Fehlleistungen:

- Fangfehler: Eine Aktion die selten ausgeführt wird, wird abgefangen durch eine, die häufig ausgeführt wird. 
- Beschreibungsfehler: Sachen die ähnlich sind, werden nicht richtig unterschieden.
- Datengesteuerte [[Fehler]]: Als Beispiel, wenn eine falsche Ziffer eingegeben wird.
- [[Fehler]] durch assoziierte Aktionen: Kann vorkommen, wenn mehrere Aktionen gleichzeitig ausgeführt werden.
- Aktivierungsverlust: Bei Verlust des Kontextes
- Modusfehler: Falsche Anwendung beendet

## Fehler vermeiden

Wie können [[Fehler]] jeglicher Art vermieden werden?

1. Redundanz
2. Robustheit
3. Einfachheit

## [[Murphys Gesetz]]

Alles, was schiefgehen kann, wird auch schiefgehen. Also, wenn es mehrere Möglichkeiten gibt, eine Aufgabe zu erledigen, und eine davon in einer Katastrophe endet oder sonstwie unerwünschte Konsequenzen nach sich zieht, dann wird es jemand genau so machen. 