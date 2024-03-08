---
title: Gesetz von Conway
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
# Gesetz Von Conway

Organisationen, die Systeme designen, können nur solche Designs entwerfen, welche die Kommunikationsstruktur dieser Organisationen abbilden. Das geht nicht nur für Software. Die Kommunikationsstruktur ist dabei nicht das Organigramm des Unternehmens.  
Jede organisatorische Einheit entwirft einen bestimmten Teil der Architektur. Wenn eine Schnittstelle zwischen zwei Teilen der Architektur existiert, dann ist eine Abstimmung notwendig und damit Kommunikationsbeziehung zwischen den beiden organisatorischen Einheiten. Daher ist eine Modularisierung des Designs sinnvoll, damit nicht jeder [[Microservices|Microservice]] mit jedem sprechen muss.  
Als Beispiel: Falls nach technischen Aspekten aufgeteilt, gibt es UI, Backend und DB und damit jeweils drei Teams. Vorteil von dieser Aufteilung ist, dass jeweils Experten für entsprechende Technologien im Team vorhanden sind. Nachteile sind aber vielleicht auch, dass Features, die Änderungen in der UI, dem Backend und der Datenbank brauchen sehr viel mehr Zeit brauchen.  
Das Gesetz sollte als Möglichkeit aufgefasst werden. Das Modul in fachliche Komponenten aufteilen. Teams können dann jeweils unabhängig voneinander arbeiten, was *cross-functional* Teams bedingt. Teams sollten als alle benötigten Rollen / Aufgabenaspekte abdecken.