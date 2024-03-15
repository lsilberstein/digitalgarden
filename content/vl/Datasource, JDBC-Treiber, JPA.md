---
title: Datasource, JDBC-Treiber, JPA
description: 
type: Vorlesung
kurs: Software Engineering Projekt
vorlesungnr: 2
tags:
  - sose24
  - vorlesung
  - SOEP
draft: false
date: 2024-03-15
---

# Datasource, JDBC-Treiber, JPA

## [[Datasource]]

Wie benutzen eine [[Datasource]], um eine Verbindung zu einer Datenbank aufzubauen. Eine [[Datasource]] wird dabei zu einer Verbindung abgekapselt. Eine [[Datasource]] ist ein sog. Pool. 

Im [StudIp](https://studip.ostfalia.de/dispatch.php/course/files?cid=2279f0257d96e0246328dc2444390b27) gibt es eine Beispiel-xml, um die [[Datasource]] einzubinden:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<datasources xmlns="http://www.jboss.org/ironjacamar/schema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.jboss.org/ironjacamar/schema http://docs.jboss.org/ironjacamar/schema/datasources_1_0.xsd">

  <datasource jndi-name="java:jboss/datasources/sep" pool-name="sep" enabled="true" use-java-context="true">
    <connection-url>jdbc:postgresql://localhost:5432/sep</connection-url>
    <driver>postgresql-42.7.2.jar</driver>
    <security>
      <user-name>postgres</user-name>
      <password>dummy</password>
    </security>
  </datasource>
</datasources>
```

In `src/main/WEB-INF` ablegen.

In der `persistence.xml` wird dabei angegeben, gegen welche [[Datasource|Datasources]] gearbeitet werden soll (`jta-data-source`).

## [[JDBC-Treiber]]

[[JDBC-Treiber|Java Database Connectivity Treiber]] sind Treiber, um die Verbindung zwischen Datenbank und Java Programm zu ermöglichen. 

[Introduction to JDBC (Java Database Connectivity) - GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-jdbc/)

## [[Jakarta Persistence API|JPA]]

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

### Callback-Methoden

Zusätzlich gibt es Callback-Annotationen, die nach bestimmten Aktionen aufgreufen werden. 

- `@PrePersist`
- `@PostPersist`
- `@PreRemove`
- `@PostRemove`
- `@PreUpdate`
- `@PostUpdate`
- `@PostLoad`

### Beziehungen

Beziehungen sind bekannt aus der [[Identität|Entity]]-Relation Modellierung durch eine Relationsalgebra (1:1, 1:n, n:1, n:m). Diese werden auch in [[Jakarta Persistence API|JPA]] unterstützt.

- `@OneToOne`
- `@OneToMany`
- `@ManyToOne`
- `@ManyToMany`
- `@ElementCollection`, seit 2.0

### Vererbung

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

### Named Queries

Queries sind oft verstreut. Deshalb ist eine sinnvolle Zusammenfassung beim Entity wünschenswert. Außerdem kann so zum Deploy-Zeitpunkt geparst / optimiert werden. Das wird realisiert über `@NamedQuery`.

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

### Parameter in Abfragen

`setParameter()`, für Zeit / Datum mit TemporalType.

```java
TypedQuery<Konto> query = em.createQuery(  
	"select k from Konto k where k.nummer = :nummer", Konto.class);

query.setParameter("nummer", <some number >); 
List<Konto> konten = query.getResultList();
```
