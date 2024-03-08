---
title: Jakarta Persistence API
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
  - JPA
---

# Jakarta Persistence API
> Umgebungsvariablen setzen; Galleon Layers des Wilfly-Servers werden benutz, um u.a. die Datasource zu konfigurieren.

JPA ist Spezifikation. Einige populäre Implementierungen: Hibernate, EclipseLink oder OpenJPA. Hibernate ist im JBoss-AS/Wildfly eingebaut, kann aber auch standalone verwendet werden.

# JPA in Java-SE-Anwendungen

Das folgende Code-Beispiel soll das Allgemeine Vorgehen darstellen:

```
EntityManagerFactory emf = Persistence.createEntityManagerFactory("...");
EntityManager em = emf.createEntityManager(); // Arbeiten mit dem Persistenzkontext ...
em.close(); 
emf.close();
```

## Speichern Von [[Identität|Entities]]

```
em.getTransaction().begin();
Kunde kunde = new Kunde("Heidi", "Mustermann", "22.6.1965");
em.persist(kunde);
em.getTransaction().commit();

```

auch möglich ist es, `em.persist(kunde);` vor dem Begin der Transaction aufzurufen.

## Laden Von [[Identität|Entities]]

```
Kunde kunde = em.find(Kunde.class , 66); // null oder Kunde
// oder:
Kunde kunde =
em.getReference(Kunde.class, 66);// Except. moegl.
System.out.println("Id: " + kunde.getId()); System.out.println(kunde.getNachname());//spaet. hier
```

`getReference()` *kann* einen Proxy zurückliefern. Andernfalls gibt es eine `EntityNotFoundException` bei Nichtexistenz. Der Zeitpunkt des Werfens ist dabei dem JPA-Provider freigestellt. Der Persistenzkontext agiert also JPAs First-Level-Cache. Das bedeutet, dass Objekte, die sich bereits im Persistenzkontext befinden, nicht noch einmal geladen werden. Also Ausnahme hierfür gilt `refresh()`.

## Aktualisieren Von [[Identität|Entities]]

```
em.getTransaction().begin();
Kunde kunde1 = em.find(Kunde.class, <pk>);
// Aenderungen am verwalteten Objekt: 
kunde1.setNachname("Mustermann");
// bei commit wird automatisch synchronisiert 
em.getTransaction().commit();
```

## Löschen Von [[Identität|Entities]]

```
em.getTransaction().begin();
Kunde kunde = em.find(Kunde.class, <pk>); em.remove(kunde);
// alternativ natuerlich auch so moeglich: 
em.remove(em.find(Kunde.class, <pk>)); 
em.getTransaction().commit();
```

## Zusammenfassung (CRUD)

|   CRUD |    SQL | Entity-Manager |
|:-------|:-------|:---------------|
| Create | INSERT |      persist() |
|   Read | SELECT |         find() |
| Update | UPDATE |    automatisch |
| Delete | DELETE |       remove() |

Einige weitere Funktionalität:

- `refresh()` neu lesen aus DB
- `detach()` loslösen
- `merge()` wiedereinfügen eines losgelösten [[Identität|Entities]]