---
title: Jakarta Persistence API
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - FTSE
  - wise2324
  - SOEP
draft: false
date: 
aliases:
  - JPA
---

# Jakarta Persistence API

> Umgebungsvariablen setzen; Galleon Layers des [[Wildfly]]-Servers werden benutzt, um u.a. die [[Datasource]] zu konfigurieren.

JPA ist Spezifikation. Einige populäre Implementierungen: Hibernate, EclipseLink oder OpenJPA. Hibernate ist im JBoss-AS/[[Wildfly]] eingebaut, kann aber auch standalone verwendet werden.

# JPA in Java-SE-Anwendungen

Das folgende Code-Beispiel soll das Allgemeine Vorgehen darstellen:

```java
EntityManagerFactory emf = Persistence.createEntityManagerFactory("...");
EntityManager em = emf.createEntityManager(); // Arbeiten mit dem Persistenzkontext ...
em.close(); 
emf.close();
```

## Speichern Von [[Identität|Entities]]

```java
em.getTransaction().begin();
Kunde kunde = new Kunde("Heidi", "Mustermann", "22.6.1965");
em.persist(kunde);
em.getTransaction().commit();
```

auch möglich ist es, `em.persist(kunde);` vor dem Begin der Transaction aufzurufen.

## Laden Von [[Identität|Entities]]

```java
Kunde kunde = em.find(Kunde.class , 66); // null oder Kunde
// oder:
Kunde kunde =
em.getReference(Kunde.class, 66);// Except. moegl.
System.out.println("Id: " + kunde.getId()); System.out.println(kunde.getNachname());//spaet. hier
```

`getReference()` *kann* einen Proxy zurückliefern. Andernfalls gibt es eine `EntityNotFoundException` bei Nichtexistenz. Der Zeitpunkt des Werfens ist dabei dem JPA-Provider freigestellt. Der Persistenzkontext agiert also JPAs First-Level-Cache. Das bedeutet, dass Objekte, die sich bereits im Persistenzkontext befinden, nicht noch einmal geladen werden. Also Ausnahme hierfür gilt `refresh()`.

## Aktualisieren Von [[Identität|Entities]]

```java
em.getTransaction().begin();
Kunde kunde1 = em.find(Kunde.class, <pk>);
// Aenderungen am verwalteten Objekt: 
kunde1.setNachname("Mustermann");
// bei commit wird automatisch synchronisiert 
em.getTransaction().commit();
```

## Löschen Von [[Identität|Entities]]

```java
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

# JPA in Jakarte-EE Anwendungen

In Plain Java können Objekte durch den Konstruktor erzeugt. Löschen können wir dieses Objekt an sich nicht, sondern nur automatisch durch den Garbage-Kollektor.

- [[Objektlebenszyklus]]
- [[Jakarta Persistence API|JPA]]
- [[Transaktionen]]

In Jakarta ist das Vorgehen sehr viel einfacher:

```java
@Stateless
public class KundenService {
	@PersistenceContext(type=TRANSACTION)
	EntityManager em;
}
```

Der Standard Persistenzkontext ist `Transactional`. Dieser detached alle [[Identität|Entities]] am Ende der [[Transaktionen|Transaktion]]. Es gibt aber auch einen erweiterten Persistenzkontext. Dieser detached am Ende der [[Transaktionen|Transaktion]] **nicht**.

```java
@Stateful
public class KundenService {
	@PersistenceContext(type=EXTENDED)
	EntityManager em;
}
```

## Callback-Methoden

Zusätzlich gibt es Callback-Annotationen, die nach bestimmten Aktionen aufgreufen werden. 

- `@PrePersist`
- `@PostPersist`
- `@PreRemove`
- `@PostRemove`
- `@PreUpdate`
- `@PostUpdate`
- `@PostLoad`

## Beziehungen

Beziehungen sind bekannt aus der [[Identität|Entity]]-Relation Modellierung durch eine Relationsalgebra (1:1, 1:n, n:1, n:m). Diese werden auch in [[Jakarta Persistence API|JPA]] unterstützt.

- `@OneToOne`
- `@OneToMany`
- `@ManyToOne`
- `@ManyToMany`
- `@ElementCollection`, seit 2.0

Hier vielleicht noch zeigen, wie 1:n und m:n Beziehungen funktionieren.

## Vererbung

[[Vererbung]] ist in objeltorientierten Programmiersprachen ein zentrales Konzept. RDBMS ist nichts derartiges vorhanden (has-a versus is-a). Es gibt dabei generell drei Realisierungsmöglichkeiten

- Eine Tabelle für eine Vererbungshierarchie
- Eine Tabelle je Unterklasse
- Eine Tabelle je konkrete Klasse

![[Pasted image 20240315103207.png]]

### Queries

Die Methode `find()` alleine reicht oft nicht aus. Der Entitymanager stellt daher einige Fabrikmethoden bereit, mit denen Queries erzeugt werden können.

| Type         | method                                          |
| ------------ | ----------------------------------------------- |
| `Query`      | `createQuery(String sql)`                       |
| `TypedQuery` | `createQuery(String sql, Class cl)`             |
| `Query`      | `createNamedQuery(String name)`                 |
| `TypedQuery` | `createNamedQuery(String name, Class cl)`       |
| `Query`      | `createNativeQuery(String sql)`                 |
| `Query`      | `createNativeQuery(String sql, Class cl)`       |
| `Query`      | `createNativeQuery(String sql, String mapping)` |

```java
Query q = em.createQuery(
	"select k from Kunde k where k.nachname = 'Meier'"
);
TypedQuery<Kunde< tq = em.createQuery(
	"select k from kunde k where k.nachname = 'Meier'",
	Kunde.class
);
List<Kunde> l = (list<Kunde>)q.getResultList();
List<Kunde> tl = tq.getResultList();
```

[How does a relational database execute SQL statements and prepared statements - Vlad Mihalcea](https://vladmihalcea.com/relational-database-sql-prepared-statements/)

## Named Queries

Queries sind oft verstreut. Deshalb ist eine sinnvolle Zusammenfassung beim [[Identität|Entity]] wünschenswert. Außerdem kann so zum Deploy-Zeitpunkt geparst / optimiert werden. Das wird realisiert über `@NamedQuery`.

```java
@NamedQuery(  
	name="Konto.loadSparkonten",  
	query="select k from Sparkonto k where ...")

@NamedQuery(  
	name="Konto.loadGirokonten",  
	query="select k from Girokonto k where ...")

@Entity  
public class Konto { ...
	... = em.createNamedQuery("Konto.loadGirokonten", Girokonto.class);
}
```

## Parameter in Abfragen

`setParameter()`, für Zeit / Datum mit TemporalType.

```java
TypedQuery<Konto> query = em.createQuery(  
	"select k from Konto k where k.nummer = :nummer", Konto.class);

query.setParameter("nummer", <some number >); 
List<Konto> konten = query.getResultList();
```