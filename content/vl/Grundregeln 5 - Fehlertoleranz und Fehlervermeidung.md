---
title: Grundregeln 5 - Fehlertoleranz Und Fehlervermeidung
description: 
type: Vorlesung
kurs: Mensch Computer Interaktion
vorlesungnr: 25
aliases:
  - Grundregeln 5 - Fehlertoleranz Und Fehlervermeidung
tags:
  - sose24
  - MCI
  - vorlesung
draft: false
date: 2024-04-03
linter-yaml-title-alias: Grundregeln 5 - Fehlertoleranz Und Fehlervermeidung
Link: https://lecture2go.ostfalia.de/l2go/-/get/v/nsYKaJbHrFg03O7iXW80dgxx
---

# Grundregeln 5 - Fehlertoleranz Und Fehlervermeidung

## [[Fehlertoleranz]]

[[Fehlertoleranz]] bedeutet, dass das System auf einem [[Fehler]], nicht mit einem katastrophalem Zustand reagiert. Ein katastrophaler Zustand ist ein solcher, bei dem ein System zum Beispiel abstürzt oder aber auch nicht mehr reagiert.

### Aussagekräftige Fehlermeldungen

Diese bezeichnen das Problem möglichst spezifisch und bieten einen konstruktiven Lösungsvorschlag. Die Fehlermeldung muss dabei aus dem [[Modelle|Modell]] des Nutzers [[Sinnesorgane|Sinn]] machen!

![[Pasted image 20240326133504.png]]

### [[Fehler]] rückgängig machen (Undo)

Also die Möglichkeit, etwas Rückgängig zu machen. Zum Beispiel das Einfügen oder Löschen von Texten. Mithilfe eines Undo-Buttons, ist auch die Möglichkeit gegeben, Sachen auszuprobieren, ohne dass die Folgen unbedingt wichtig sind. 

## [[Fehlervermeidung]]

[[Fehlervermeidung]], bedeutet, dass ein [[Fehler]] überhaupt passieren kann. Wie können [[Fehler]] jeglicher Art vermieden werden?

1. Redundanz
2. Robustheit
3. Einfachheit

### Vermeidbare [[Fehler]]

![[Pasted image 20240326133133.png]]

Hier ist der Standardwert 0. Dieser ist aber ungültig.
