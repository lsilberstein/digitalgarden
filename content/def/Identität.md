---
title: Identität
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
  - Entity
  - Entities
---
# Identität

Mit [[Jakarta Persistence API|JPA]]: Primärschlüssel in DB. In Java also Schlüssel [[Properties|Property]] in Java alles verwendbar. `@Entity` für Entität, `@Id` für Primärschlüssel verwenden, um aus nicht-persistenten Objekten, persistente zu erstellen.

```
@Entity
public class Kunde {
	@Id
	private String id;
	private String vorname;
	private String nachname;
...

```

```
EntityManager em = ...
Kunde kunde = new Kunde("AB-4711", "Max", "Mustermann");
em.getTransaction().begin();
// Schreiben
em.persist(kunde)
em.getTransaction().commit();
...
// Lesen
kunde = em.find(Kunde.class, "AB-4711");
```

## Es Werden 5 Generatorarten Unterstützt (Schlüssel Mit @GeneratedValue)

AUTO überlässt der JPA-Implementierung die Wahl des Verfahrens, in der Regel IDENTITY oder SEQUENCE. Die Wahl ist sowohl provideralso auch datenbankabhängig. IDENTITY Verwendet die Datenbankfunktionalität einer selbstinkrementierenden Spalte. Dies sind zum Beispiel die Typ-Zusätze IDENTITY bei H2, SERIAL bei Postgres und AUTO\_INCREMENT bei MySQL. TABLE Verwendet eine zusätzliche Tabelle zur Verwaltung des zuletzt generierten Primärschlüssel. SEQUENCE Verwendet die Datenbankfunktion einer Sequence. Sequences werden von H2, etc. unterstützt. UUID Generiert einen RFC 4122 Universal Unique Identifier vom Typ `java.util.UUID`. Wir verwenden im Folgenden der Einfachheit IDENTITY.

## Welche Generatorart Sollte Verwendet Werden?

![image.png](files/image_2x.png)

## Abweichender Tabellenname

JPA realisiert Convention over Configuration (Tabellenname, Spaltenname,…)

```
@Entity
@Table(
	name = "HV_Kunde",
	uniqueConstraints = @UniqueConstraint(
		columnNames = {"vorname", "nachname"}))
public class Kunde {
	...

```

## Das Mädchen Für Alles: @Column

|         Attribute |     Typ |          Default |                                                              Beschreibung |
|:-----------------|:--------|:-----------------|:--------------------------------------------------------------------------|
|             name |  String |     PropertyName |                                                               Spaltenname |
|           unique | boolean |            false |                                                         Unique-Constraint |
|         nullable | boolean |             true |                                                     NULL-Werte zugelassen |
|       insertable | boolean |             true |                                      Spalte in Insert-Anweisung enthalten |
|       updateable | boolean |             true |                                     Spalte und Update-Anweisung enthalten |
| columnDefinition |  String |               "" |                                          DDL-Anteil für Spaltendefinition |
|            table |  String |  primäre Tabelle | Tabelle der Spalte, falls das Entity auf mehrere Tabellen aufgeteilt wird |
|           length |     int |              255 |                                      Die maximale Länge von Zeichenketten |
|        precision |     int |                0 |                                            Anzahl Ziffern zur Darstellung |
|            scale |     int |                0 |                                                   Anzahl Nachkommastellen |
