---
title: Ressources
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
  - Ressource
  - Ressourcen
---

# Ressources

REST ist ein Architekturstil und basier im Kern auf [[Ressources|Ressourcen]]. **Alles sind [[Ressources|Ressourcen]]** und Sie müssen lernen, in [[Ressources|Ressourcen]] zu denken. Einige weitere Grundprinzipien von REST machen aus:

- [[Ressources|Ressourcen]] mit eindeutiger Identifikation
- Verknüpfung / [[Hypermedia]]
- Standardmethoden (wie GET, PUT, etc.)
- Unterschiedliche Repräsentationen
- [[Statuslose Kommunikation]] (der Server muss sich keinen Clientstatus merken)

REST ist an sich relative alt, bekommt aber in letzter zeit immer mehr Aufmerksamkeit. u.a. auch durch zunehmende Frustration mit der Webservice Techstack.

## Grundprinzipien

```
http://example.com/orders?year=2008 
http://example.com/customers/1234 
http://example.com/orders/2007/10/776654 
http://example.com/products/4554 
http://example.com/processes/sal-increase-234
```

Alles, was sie verwenden wollen, muss eindeutig identifiziert werden. Man kann dafür ein eigenes Schema benutzen oder URIs nehmen. Die spannendste Entscheidung ist, was eine [[Ressources|Ressource]] ist und damit mit URIs öffentlich gemacht werden soll.  
URIs können lesbar sein (muss nicht sein, hilft aber).

## Wie Werden [[Ressources|Ressourcen]] Verwendet?

Weil jede [[Ressources|Ressource]] die gleiche Schnittstelle den gleichen Satz von Methods unterstützt. Bei http u.a. GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH.

| Method |                                                  Beschreibung |                                                                  Detail |
|:--------|:--------------------------------------------------------------|:------------------------------------------------------------------------|
|     GET |                       holt die Repräsentation einer Resource |  - ist sicher: holt nur, ändert nicht - ist cacheable - ist idempotent: |
|     PUT |                                   Aktualisieren oder Erzeugen |                                             - nicht sicher - idempotent |
|  DELETE |                                                       Löschen |                                             - nicht sicher - idempotent |
|    POST |   Erzeugt neue Resource oder stößt beliebige Verarbeitung an |                                                       - keine Garantien |
|   PATCH |                                         Ändert eine Resource |                                                                         |

Das hier sind nur Kurzzusammenfassungen. Details in der Spezifikation. Wenn Ihre Anwendung für andere Anwendungen REST-konform benutzbar sein soll, müssen Sie diese Prinzipien und Restriktionen einhalten! Anwendungsspezifische Methods werden auf Standard-HTTP-Methoden abgebildet.

| Action |               HTTP |   CRUD |
|:-------|:-------------------|:-------|
| Create |         POST / PUT | INSERT |
|   Read |                GET | SELECT |
| Update | PUT / POST / PATCH | UPDATE |
| Delete |             DELETE | DELETE |

Die Gegenüberstellung ist also *ist möglich* anzusehen und nicht also *äquivalent* zu verstehen.

## [[Ressources|Ressourcen]] & Repräsentationen

Wie weiß der Client, was er mit Antwortdaten machen soll / kann? HTTP-Ansatz: Trennung der Verantwortlichkeiten für Daten und Operationen. Client "wünscht" sich die Repräsentation / das Format.

# [[Ressources|Ressourcen]]-Design

Die [[Ressources|Ressourcen]] der Anwendung beschreiben deren Schnittstelle zur Außenwelt. Wie bei jeden Schnittstellenentwurf gilt: Gedanken machen, was die wichtigen und damit zu veröffentlichten Informationen sind. Die nächsten Unterkategorien sollen die unterschiedlichen [[Ressources|Ressourcen]] besser strukturieren.

## Primärressourcen

Aus fachlicher Domäne relative einfach Reihe von [[Ressources]] identifizierbar. [[Ressources|Ressourcen]] also Konzept lassen keine Rückschlüsse auf Implementierung auf. Im klassischen Anwendungsentwurf häufig Kandidaten für persistente Entitäten.

```
http://example.com/customers/4711 
http://example.com/orders/24571 
http://example.com/accounts/DE1234567890 
http://example.com/reminders/26748452
```

## Subressourcen

```
http://example.com/cusotmers/4711/address http://example.com/orders/4284/1 http://example.com/orders/4284/2 http://example.com/orders/4284/3 http://example.com/orders/4284/shipping-address
```

[[Ressources|Ressourcen]], die Teil einer andern [[Ressources|Ressourcen]] sind. z.B. einzelne Bestelloptionen einer Bestellung, Liefer- , und Rechnungsadresse einer Bestellung.

## Listen

```
http://example.com/customers
http://example.com/orders
```

Für die meisten [[Ressources|Ressourcen]] gibt es in der Regel auch zugehörige Listenressourcen. z.B. Alle Kunden, alle Mahnungen, alle Buchungen. GET für Abfrage, POST für das Anlegen einer neuen Primärressource.

## Filter

Listenressourcen müssen nicht immer sämtliche Primärressourcen einer Kategorie enthalten. Zum Beispiel "alle Kunden aus Berlin ". Filtern u.a. mit Hilfe des Operators `?`. Andere Möglichkeiten sind auch ok.

```
http://example.com/customers/nds
http://example.com/customers?state=nds
http://example.com/orders/2021/june
http://example.com/orders?year=2021&month=june
```

## Paginierung

Manchmal nicht sinnvoll, alle [[Ressources|Ressourcen]] zurückzugeben. In diesem Fall wird paginiert. Suchergebnisse im Web werden typischerweise zum Beispiel seitenweise präsentiert. Paginierung kann für Listen ebenfalls sinnvoll sein. Außerdem Absicherung für große Listen; und die Listen sind *immer* groß.

```
http://example.com/orders?from=1200&to=1300
```

## Projektion

Häufig sinnvoll, nur Teil der verfügbaren Informationen einer Primärressource abzufragen. Daher Attribute auf sinnvolle Teilmenge einschränken. Hauptmotivation ist: Reduktion der zu übertragenen Datenmenge.

## Aggregationen

Zusammenfassung der Attribute verschiedener Primärund Listenressourcen. Hauptmotivation hier ist, die Anzahl notwendiger Client/Server-Interaktionen zu begrenzen.

## Best Practices

|   |                                              best practice | Beispiel |
|:--|:-----------------------------------------------------------|:---------|
| 1 |                                       Slash für Hierarchy |          |
| 2 |                                  Substantive, nicht Verben |          |
| 3 |                                                     Plural |          |
| 4 |                                            Kleinbuchstaben |          |
| 5 |  Zusammengesetzte Wörter mit Bindestrich statt Unterstrich |          |

1. Slash für Hierarchy `https://example.com/articles/authors`
2. Substantive, nicht Verben `https://example.com/api/getProfiles, https://example.com/api/profiles`
3. Plural `https://example.com/api/profiles`
4. Kleinbuchstaben
5. Zusammengesetzte Wörter mit Bindestrich statt Unterstrich `https://example.com/api/profiles/227/first-name`
