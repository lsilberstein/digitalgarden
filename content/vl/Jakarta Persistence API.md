---
title: Jakarta Persistence API
description: 
type: Vorlesung
kurs: Fortgeschrittene Themen des Software Engineering
vorlesungnr: 2
draft: false
date: 2023-10-18
tags:
  - wise2324
  - FTSE
  - vorlesung
date created: Wednesday, October 18th 2023, 6:29:40 pm
date modified: Monday, November 20th 2023, 2:39:07 pm
---

[[Einführung, JAX-RS]]

# Jakarta Persistence API

> Umgebungsvariablen setzen; Galleon Layers des Wilfly-Servers werden benutz, um u.a. die Datasource zu konfigurieren.

JPA ist Spezifikation. Einige populäre Implementierungen: Hibernate, EclipseLink oder OpenJPA. Hibernate ist im JBoss-AS/Wildfly eingebaut, kann aber auch standalone verwendet werden.

# Themen

- [[Identität]] und einfaches Mapping
- [[Objektlebenszyklus]]
- Beziehungen
- Vererbung
- [[Transaktionen]]
- JPQL

# [[Identität]] Und Einfaches Mapping

Mit JPA: Primärschlüssel in DB. In Java also Schlüssel [[Properties|Property]] in Java alles verwendbar. `@Entity` für Entität, `@Id` für Primärschlüssel verwenden, um aus nicht-persistenten Objekten, persistente zu erstellen.

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

# [[Objektlebenszyklus]]

Persistente Objekte werden durch den [[Identität|Entity]]-Manager verwaltet. Dieser ist verantwortlich, dass die [[Identität|Entities]] und die Datenbank konsistent sind. Er stellt sicher, dass [[Identität|Entity]] mit primary Keys nur einmal existiert (in diesem EM). Der [[Identität|Entity]]-Manager verwaltet den *Persistenzkontext *und stellt Methods zum persistieren, lesen, aktualisieren und löschen von [[Identität|Entities]] bereit.*  
![image.png](files/image_2z.png)

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

# JPA in Java-EE-Anwendungen

Funktioniert ähnlich zu Java-SE, aber einfacher. Im allgemeinen ist jede Function bereits in einer Transaktion. Der [[Identität|Entity]]-Manager wird injiziert: `@PersistenceContext`.

```
@Stateless
public class KundeService {

	@PersistenceContext EntityManager em;
	public Kunde suchen(Integer id) { 
		return em.find(Kunde.class , id);
	}
	public void speichern(Kunde kunde) { 
		em.persist(kunde);
	}
...
}
```

## Was Es Sonst Noch so Gibt

- Callback-Methoden mit folgenden Annotationen: `@PrePersist, @PostPersist, @PreRemove, @PostRemove,  
`@PreUpdate, @PostUpdate, @PostLoad`
- Falls nicht im [[Identität|Entity]]: `@EntityListeners`
- Zustands-API:  
	`PersistenceUtil.isLoaded()  
PersistenceUnitUtil.isLoaded()  
PersistenceUnitUtil.getIdentifier()`
- Mapping-Daten in XML. Überschreiben Annotationen

# [[Konfirguration]]

[[Konfirguration|Persistenz]] bauen mit `persistence.xml` in `META-INF`-Verzeichnis. Hier werden die Verbindungsinformationen zur Datenbank sowie [[Identität|Entity]]-Klassen angegeben (Sofern nicht Hibernate verwendet wird).

```
<!-- data source -->
<persistence xmlns="..." ... version="2.0">
	<persistence-unit name="bank" transaction-type="JTA">
		<jta-data-source>java:jboss/datasources/ExampleDS</jta-data-source>
	</persistence-unit>
</persistence >
<!-- provider specific -->
<properties>
	<property name="hibernate.hbm2ddl.auto" value="create-drop"/>
	<property name="hibernate.show_sql" value="true"/>
</properties>
```

Für Provider-spezifische Properties siehe hier:  
[JBoss Community](http://docs.jboss.org/hibernate/orm/4.1/manual/en-%20US/html/ch03.html#configuration-optional)

# [[Transaktionen]]

[[Transaktionen]] sollten ACID befolgen:

- A wie Atomicity: [[Transaktionen]] ganz oder gar nicht
- C wie Consistency: Transaktion überführt DB von einem konsistenten Zustand in einen anderen
- I wie Isolation: [[Transaktionen]] werden so ausgeführt, also wenn sie allein auf der Datenbank operieren würden
- D wie Durability: Eine Transaktion ist nach erfolgreichem Abschluss dauerhaft

Die Transaktionenunterstützung ist in JPA abhängig einmal vom JDBC-Treiben und dem Isolations-Level des Datenbanksystem.

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
