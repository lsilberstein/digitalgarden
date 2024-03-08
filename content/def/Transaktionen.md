---
title: Transaktionen
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - FTSE
  - wise2324
draft: false
date: 
aliases:
  - Transaktion
---

# Transaktionen

[[Transaktionen]] sollten ACID befolgen:

- A wie Atomicity: [[Transaktionen]] ganz oder gar nicht
- C wie Consistency: Transaktion überführt DB von einem konsistenten Zustand in einen anderen
- I wie Isolation: [[Transaktionen]] werden so ausgeführt, also wenn sie allein auf der Datenbank operieren würden
- D wie Durability: Eine Transaktion ist nach erfolgreichem Abschluss dauerhaft

Die Transaktionenunterstützung ist in JPA abhängig einmal vom JDBC-Treiben und dem Isolations-Level des Datenbanksystem.

Jakarta [[Transaktionen]] definieren eine Schnittstelle zwischen dem Transaktion-Manager und denen in einem verteilten System beteiligten Parteien:

- der Anwendung
- dem [[Ressources]]-Manager
- dem Application Server  
Es wird sowohl eine programmatische als auch eine deklarative, auf Annotationen basierte Schnittstelle bereitgestellt. Neben normalen [[Transaktionen]] können auch z.B. 2PC verwendet werden. [Two-Phase-Commit-Protocol](https://en.wikipedia.org/wiki/Two-phase_commit_protocol)

## Optimistisches Locking

```
@Entity
public class Kunde {
	
	@Id
	@GeneratedValue
	private Integer id;

	@Version
	private Integer version;

	private Integer kundennummer;
	...

```

Die Idee hier ist, dass keine Operation schief geht. Also soll nur der der Sonderfall (etwas ist schief gegangen) beachtet werden. Diese Art von Locking ist vorzuziehen, da dieser keine Performanzauswirkungen aufweist. In JPA geht dies sehr einfach mit der @Version-Annotation.

## Pessimistisches Locking

Hier wird davon ausgegangen, dass häufig Problem auftreten. Die Idee dahinter ist, dass derjenige, der zuerst liest auch den Satz/ die Tabelle sperrt.

```
Kunde k = em.find(Kunde.class, <pk>, LockModeType.PESSIMISTIC_READ);

```

Ein weiterer Parameter `LockModeType.X` bestimmt die Art des Locks (also Beispiel `PESSIMISTICREAD` oder `PESSIMISTIC\_WRITE`. Wirft `javax.persistence.lock.timeout`-Exception.