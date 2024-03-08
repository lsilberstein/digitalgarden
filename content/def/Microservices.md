---
title: Microservices
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - wise2324
  - FTSE
draft: false
date: 
aliases:
  - Microservice
---

# Microservices

[Microservices Patterns: With examples... by Richardson, Chris](https://www.amazon.com/Microservices-Patterns-examples-Chris-Richardson/dp/1617294543/ref=sr_1_1?crid=GIS02M8NBJO&keywords=microservices+patterns&qid=1701173922&s=books&sprefix=microservices+pa%2Cstripbooks-intl-ship%2C173&sr=1-1)

Ein Versuch:

> [!Definition]  
> [[Microservices]] sind ein Architekturmuster, bei dem komplexe Anwendungen aus unabhängigen Diensten bestehen, die untereinander mit sprachunabhängigen Programmierschnittstellen kommunizieren. Die Dienste sind weitgehende entkoppelt und erledigen eine kleine Aufgabe. So ermöglichen sie einen modularen Aufbau von Anwendungs-Software.

## Historie (Microservices)

Verteilte Systeme sind schon recht als. Mitter der neunziger gab es bereits *Distributed Objects*, die schließlich in CORBA endeten. Verteilte Objekte, müssen dort immer mit anderen Objekten kommunizieren. Das ist kompliziert, fehleranfällig und schnell nicht mehr kompatibel.  
Dann kam *[[Enterprise Java Beans]]* [[Enterprise Java Beans|EJB]] (oder auch CORBA done right), aber nur für Java.  
*[[Simple Object Access Protocol]]* [[Simple Object Access Protocol|SOAP]] (Web-services mit XML). Also von *Distributed Objects* hin zu *Web-services*. [[Simple Object Access Protocol|SOAP]] war kompliziert, da auf [[Hyper Text Transfer Protocol|HTTP]] ein eigenes Protokoll und eine eigene Schnittstelle aufgesetzt werden musste.  
REST, basierend auf Fielding. REST ist auch ein Web-service. Zur Unterscheidung RESTful web services vs. [[Simple Object Access Protocol|SOAP]]-based web services. Konsequenter Schritt daraus war dann: [[Microservices]].  
Diese laufen dann typischerweise in der Cloud. Java-EE hatte keine *explizite* Unterstützung für [[Microservices]] und Cloud. Daher wurden daraufhin Arbeiten zu MicroProfile begonnen, was praktisch von allen Applikationen ([[WildFly]], Payare, TomEE, …) unterstützt wird.

[Retry (microProfile-fault-tolerance-api 2.1 API)](https://download.eclipse.org/microprofile/microprofile-fault-tolerance-2.1/apidocs/org/eclipse/microprofile/faulttolerance/Retry.html#retryOn--)

## Ein Überblick Über Microservices

Ansatz zur Modularisierung. Ein Modul ist dabei ein Programm, das als eigener Prozess läuft. Basis ist die UNIX-Philosophie:

- Ein Programm soll nur eine Aufgabe erledigen, das dann aber gut.
- Programme sollen zusammen arbeiten können und
- nutzen eine universelle Schnittstelle.

[[Microservices]] teilen große Software-Systeme auf und beeinflussen damit betriebliche Organisation und Software-Entwicklungsprozesse. [[Microservices]] können unabhängig voneinander deployed werden. Änderungen an einem Microservice können unabhängig von Änderungen an anderen [[Microservices]] in Produktion gebracht werden.  
[[Microservices]] können in unterschiedlichen Technologien implementiert werden (Sprache, Plattform, …). [[Microservices]] haben einen eigenen Datenhaushalt: entweder zum Beispiel eine eigene Datenbank oder ein getrenntes Schema.  
Sie haben eigene Unterstützungsdienste. Eigenständige Prozesse oder virtuelle Maschinen. Daher müssen [[Microservices]] über Netzwerke kommunizieren. Dazu ein Protokoll, das lose Kopplung unterstützt, z.B. REST oder andere Messaging Lösungen.

## Was Genau Sind Microservices?

Wir betrachten folgende Perspektiven.

- Größe des Microservices
- [[Gesetz von Conway]]
- [[Domain Driven Design (DDD) und Bounded Context]]
- Mit UI?

### Größe Eines Microservices

Offensichtlich sind [[Microservices]] irgendwie "klein". Fachlichkeit und Architektur lassen sich aber nicht in LOC messen. Der Faktor ist daher Modularisierung, um die einzelnen Module damit Komplexität handhabbar zu machen. Nur dadurch kann ein Team produktiv arbeiten. Oft werden Module größer als geplant und dadurch nur schwer zu verstehen und schwer zu warten. Daher: [[Microservices]] möglichst klein halten.

Trade-Offs:  

- Overhead durch Kommunikation über beispielsweise [[Hyper Text Transfer Protocol|HTTP]]
- Um Größenordnungen langsamer als in-memory (etwa den Faktor 1000)
- Aufwand durch Serialisierung / Deserialisierung
- Fehlschlage, falls zum Beispiel das Netzwerk nicht verfügbar ist
- Damit erheblich mehr Aufwand für Implementierungen

Wenn [[Microservices]] UI enthält und einen guten funktionalen Schnitt hat, oft wenig notwendigkeit für Kommunikation, da alle Bestandteile der Fachlichkeit in einem umgesetzt werden. Damit ist die Verwendung einer UI einn weiterer Grund, Systeme fachlich sauber aufzubauen.  
[[Microservices]] nutzen Verteilung auch dazu, Architektur durch Aufteilung nachhaltiger zu gestalten. Es ist viel schwieriger, einen Microservice zu nutzen als eine Klasse zu nutzen. Der Entwickler muss sich mit der Verteilungstechnologie beschäftigen und Schnittstellen nutzen und muss trotzdem Kontakt zu anderen Teams aufnehmen. Refactoring über eine Microservice-Grenze hinweg ist sehr aufwändig. Letztendlich praktisch eine Neuimplementierung.

Die Forderung nach unabhängigen Deployment und Team-Aufteilung ergibt eine obere Grenze für Microservice-Größe. Teams sollten in der Lage sein, Features unabhängig von anderen Teams zu implementieren und in Produktion bringen können. Daumenformel: Drei bis etwa neun Personen pro Team (Bezos' two pizza rule). Ein Microservice darf nicht so groß werden, dass ein Team dieses nicht mehr alleine weiterentwickeln kann.

Continuius Delivery Pipeline als Infrastruktur nutzen. Auführen für alle Stages. Datenbanken, Application-Server.

Ein Microservice sollte möglichst einfach zu ersetzen sein. Monolithen dagegen eher nicht.

Transaktion, Konsistenz und Kompensation muss beachtet werden. ACID bekannt. Über Microserve-Grenzen hinweg praktisch nicht möglich. Konsistenz ebenfalls nicht. Damit als untere Grenze: Wenn [[Transaktionen]] mehrere [[Microservices]] umfassen sollen und Datenkonsistenz über mehrere [[Microservices]] notwendig ist, dann ist der [[Microservices|Microservice]] zu klein gewählt. Als Alternative zu normalen [[Transaktionen]] können aber auch Kompensationstransaktionen oder Business-[[Transaktionen]] verwendet werden.