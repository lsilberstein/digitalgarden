---
title: Einführung JAX-RS
description: 
type: Vorlesung
kurs: Fortgeschrittene Themen des Software Engineering
vorlesungnr: 1
draft: false
date: 2023-10-18
aliases: [Einführung JAX-RS]
tags:
  - wise2324
  - FTSE
  - vorlesung
date created: Wednesday, October 18th 2023, 6:29:40 pm
date modified: Monday, November 20th 2023, 2:39:06 pm
linter-yaml-title-alias: Einführung JAX-RS
---

**Summary**  
  - Alles sind heutzutage [[Microservices]]  
  - Das Web funktioniert dabei auf einigen wenigen Grundprinzipien.  
  - Diese Regeln werden mit Hilfe von HTTP spezifiziert und u.a. in [[JAX-RS]] implementiert.

# Einführung JAX-RS

## Intro

1/3 Projekt, 2/3 Klausur  
Wie sieht das Projekt aus?

1. Ausgabe des Zielsystems bzw. dessen Teile
2. Sie implementieren Ihr System anhand der Spezifikation und also von außen beobachtbare 1:1 Kopie. Details kommen nächste Woche.

**[[Microservices]]**  
  Statt einen Monolithen zu bauen, schreibt man einzelne Skalierbare Services, die im Zusammenhang ein System abbilden.

# [[JAX-RS]] ([[JAX-RS|Jakarta RESTful Web Services]])

Das Web hat isch in den letzten 20 Jahren zum größten verteilten System entwickelt. Es basiert auf sehr wenigen Grundprinzipien:

- Technisch basiert es vor allem auf HTTP und URIs
- Architektur ist nirgendwo festgelegt, sondern ist gewachsen

> hier Auszug aus Architektur of the World Wide Web

## [[Ressources|ressource]]

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

## [[Hypermedia]]

Eine [[Ressources|Ressource]] kann eine Beziehung zu anderen [[Ressources|Ressourcen]]-Informationen haben (links). Man nennt dieses Prinzip *HATEOAS* ([[Hypermedia]] As The Engine Of Application State)

```html
<order self=’http://example.com/orders/12345’ > 
	<amount >23</amount >
	<product ref=’http://example.com/products/4554’ /> 
	<customer ref=’http://example.com/customers/1234’/> 
	<link rel=’cancel’ ref=’./cancellation’ />
</order>
```

Funktioniert Anwendungsübergreifend. Kein Problem, da gültiges Namensschema. Server kann Client über Link mitteilen, welche Aktion also nächstes erlaubt ist.

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

## [[Statuslose Kommunikation]]

Client hält Status oder Status wird vom Server in Ressourcenstatus umgewandelt. Nicht gewollt ist, Client-spezifischer, serverseitig abgelegter Status, damit der Status entweder vollständig auf Client halten, indem Status also Teil der Repräsentation vom Server zum Client übermittelt wird.  
Gründe für der Verzicht auf Sitzungsstatus:

- Skalierbarkeit
- Kopplung von Client an Server verringert: zwei aufeinanderfolgende Anfragen müssen nicht von selber Server-Instanz beantwortet werden
- Server kann zwischenzeitlich herunter-/hochgefahren werden

# [[JAX-RS]]-Methoden Im Überblick

## Subheading

Http-Annotationen binden an entsprechende HTTP-Operationen. Alle im Package `jakarta.ws.rs`.  
Die Verwendung:

```zsh
curl http://localhost:8080/helloworld 
curl -X GET http://localhost:8080/helloworld
curl -X DELETE http://localhost:8080/helloworld
curl	-X POST 
		-H "Content-Type: text/plain"
		--data "@<file >"		http://localhost:8080/helloworld 
curl	-X PUT 
		-H "Content-Type: text/plain"
		--data "@<file>"
http://localhost:8080/helloworld
```

```java
@Path("/helloworld") 
public class Bezeichner1 {
	
	@GET
	@Produces("text/plain") 
	public String bezeichner2 () {
		return "Bei HTTP-GET aufgerufen\n"; 
	}

	@DELETE 
	@Produces("text/plain") 
	public String bezeichner3 () {
		return "Bei HTTP-DELETE aufgerufen\n"; 
	}

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	public String bezeichner4(InputStream is) {
		String read = new Scanner(is).useDelimiter("\\Z").next();
		return "Mit HTTP-POST aufgerufen. Gelesen: "+read; 
	}

	@PUT
	@Produces(MediaType.TEXT_PLAIN)
	public String bezeichner5(InputStream is) {
		String read = new Scanner(is).useDelimiter("\\Z").next();
		return "Mit HTTP-PUT aufgerufen. Gelesen: "+read;
	}
}
```

## Repräsentationen Mit `@Produces`

```java
@Path("/rep")
public class Representation {

	@GET 
	@Produces("text/plain") 
	public String asText () {
		return "Einfacher Text\n"; 
	}

	// besser mit Klasse MediaType:
	@GET 
	@Produces(MediaType.TEXT_PLAIN) 
	public String asText () {
	return "Einfacher Text\n";
	}

	@GET 
	@Produces(MediaType.TEXT_HTML) 
	public String asHtml () {
		return
			"<html><head><title>Der Titel</title></head><body>Einfaches HTML</body></html>\n"; 
	}

	@GET 
	@Produces(MediaType.APPLICATION_XML) 
	public String asXml() {
		return 
			"<?xml version=\"1.1\"?><hello>Einfaches XML</hello>\n";
	}
}
```

MediaType interessant!  
Die Verwendung

```zsh
curl http://localhost:8080/rep
curl -H "Accept: text/plain" http://.../rep
curl -H "Accept: text/html" http://.../rep
curl -H "Accept: application/xml" http://.../rep

```

## Erzeugen Eines Entities Mit Hilfe Von `@Comsumes`

`@Valid` annotation ist eine "Bean validation" → validiere das gesamte Object

```java
@POST
@Consumes(MediaType.APPLICATION_JSON) 
@Produces(MediaType.APPLICATION_JSON)
public Response create(@Valid Actor actor) {
	actorService.persist(actor);
	return Response.ok(actor).links(link).build(); 
}
```

## Weitere Beispiele (Response Im Client)

```java
// this might be some kind of Integration Test
Client client = ClientBuilder.newClient(); 
WebTarget target = client.target(Config.SERVER + "/actors"); 
Actor actor = new Actor (...);
Response response = target.request(MediaType.APPLICATION_JSON) .post(Entity.json(actor), Response.class);
Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
```

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

# [[JAX-RS]]-Methoden

Beispiele beruhen auf BIRTs Beispieldaten  
![image.png](files/image_1e.png)

## GET

```java
@Path("/verbs/employees") 
public class EmployeeResource {

	@Inject
	EmployeeService employeeService;
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEmployee(@PathParam("id") Integer id){
		Employee employee = employeeService.find(id); 
		if (employee == null) {
			return Response.status(Response.Status.NOT_FOUND).build(); 
		} else {
			employee.setCustomers(null);
			employee.setOffice(null);
		return Response.ok(employee, MediaType.APPLICATION_JSON).build();
	}
}
```

[https://datatracker.ietf.org/doc/html/rfc2616#page-53](https://datatracker.ietf.org/doc/html/rfc2616#page-53)  
`@Inject `wird hier nicht weiter besprochen, wird aber benutzt, um einen Service zu injecten.  
Response über `.status(Response.Status)` setzen.  
`employee.setCustomers/Office(null)`: **Assoziationen löschen**, um nichtaufgelöste JPA-Proxies zu vermeiden. Nicht ganz Hierarchien zu serialisieren und nicht in Zyklen zu kommen.  
[https://thorben-janssen.com/dont-expose-entities-in-api/](https://thorben-janssen.com/dont-expose-entities-in-api/)  
Ein Entity ist gedacht für Model und [[Konfirguration|Persistenz]], damit JAP-Annotation ok. Gibt sonst eine ["Monster-Komponente"](https://antoniogoncalves.org/2013/07/03/monster-component-in-java-ee-7/). Also: irgend einen DTO/Mapper-Mechanismus, am besten noch mit HATEOAS

## DELETE

```java
@Path("/verbs/employees") 
public class EmployeeResource {

	@Inject
	EmployeeService employeeService;

	@DELETE 
	@Path("{id}") 
	public Response deleteEmployee(@PathParam("id") Integer id) { 
		employeeService.delete(id);
		return Response.status(Response.Status.NO_CONTENT).build();
	}
	//...
}
```

Das zu löschende Entity mit der `Id` angeben. `@PathParam("id")`  
`Response.Status.NO\_CONTENT` zurückgeben.  
Häufig ist löschen nicht möglich wegen referenzieller Integrität oder gesetzlich nicht erlaubt.→ Daher Historie implementieren.  
`@Audited` für Attribute benutzen, die historisiert werden sollen.

## PUT

Frage: Wie kann ein idempotentes Ändern einer [[Ressources|Ressource]] realisiert werden?  
`@Path('id')` Id, die geändert werden soll  
`@Comsumes`  
zu Ändernde Parameter über JsonArray in den Parametern  
PUT kann neue [[Ressources|Ressourcen]] anlegen oder bestehende ändern.  
In diesem Beispiel ist in dieser Semantik nicht korrekt, da nur Teildaten. Daher wird mit `@PATCH` Abhilfe geschaffen.

```java

@Path("/verbs/employees") 
public class EmployeeResource {

	@Inject
	EmployeeService employeeService;
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response putEmployee(@PathParam("id") Integer id, JsonArray jsonArray ) throws Exception { 
	Employee employee = employeeService.find(id);
	if (employee == null) {
		return Response.status(Response.Status.NOT_FOUND).build();
	} else {
		Employee patchedEmployee = update(employee, jsonArray);
		employeeService.update(patchedEmployee);
		return Response.noContent().build();
	}
}
```

## POST

`Employee` wird angeben.  
DefaultOffice, da `@NotNull`  
`@Context UriInfo` von dem gesamten URI wird "reininitiiert".  
Erfolgreiches Anlegen eines Entities gibt die URI des erstellten Entity zurück!  
Response gibt den Link via `Location` zurück.

```java
@Path("/verbs/employees") 
public class EmployeeResource {
	
	@Context
	UriInfo uriInfo;

	@Inject
	EmployeeService employeeService;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createEmployee(Employee employee) {
		if (employee.getOffice() == null) {
		// default office , da @NotNull employee.setOffice(officeService.find(1));
		}
		employeeService.persist(employee);
		Link link = Link.fromUri(uriInfo.getPath() + "/" + employee.getId()).build();
		return Response.created(link.getUri()).build();
	}
}
```

## HEAD

ähnlich zu GET. Der unterschied: keine Ressourcenrepräsentation zurückgeben, sondern nur Metadaten. [[JAX-RS]]-Implementierung ruft die GET-Methode auf (falls existent), ignoriert aber das Response-Entity.  
Intentionally Left Blank

## PATCH

ähnlich zu PUT. Zu übergeben ist die ID des Entities und zu ändernde Attribute.

## OPTIONS

Der Allow-Response-Header enthält alle HTTP-Methoden, die die [[Ressources|Ressource]] anbietet; Daher ohne Implementierung (wie Header)

# Client-API (Integrationstests)

An sich kommt einfach .get(), bzw. die jeweilige Method für die HTTP Operation dazu.

```
@Path("/helloworld") 
public class Bezeichner1 {

	@GET
	@Produces("text/plain")
	public String bezeichner2() { ... }
}
```

```
//Verwendung
Client client = ClientBuilder.newClient();
WebTarget target = client.target(... + "/helloworld"); 
String response = target.request(MediaType.TEXT_PLAIN).get(String.class);
```

```
@Path("/helloworld") 
public class Bezeichner1 {

	@DELETE
	@Produces("text/plain")
	public String bezeichner3() { ... }
}

```

```
//Verwendung
Client client = ClientBuilder.newClient();
WebTarget target = client.target(... + "/helloworld"); 
String response = target.request(MediaType.TEXT_PLAIN).delete(String.class);
```

```
@Path("/helloworld") 
public class Bezeichner1 {

	@POST
	@Produces("MediaType.TEXT_PLAIN")
	public String bezeichner3 (InputStream is) {
		return new Scanner(is).useDelimiter("\\Z").next();
	}
}

```

```
//Verwendung
Client client = ClientBuilder.newClient();
WebTarget target = client.target(... + "/helloworld"); 
Entity<String> payload = Entity.text("some text");
String response = target.request(MediaType.TEXT_PLAIN).post(String.class);
```

```
@PUT
@Produces(MediaType.TEXT_PLAIN)
public String bezeichner4(InputStream is) {
	return new Scanner(is).useDelimiter("\\Z") .next();
}
```

```
//Verwendung 
Client client = ClientBuilder.newClient();
WebTarget target = client.target(... + "/helloworld"); 
Entity<String> payload = Entity.text("some text"); String response = target .request(MediaType.TEXT_PLAIN) .put(payload, String.class);
```

# URIs, Path-Expressions Und URI-Binding

Die `@Path`-Annotation wird verwendet, um URI-matching-patterns für eingehende HTTP-Requests zu definieren. In der Spezifikation wird dies auf 3 Seiten beschrieben ("Matching Request to Resource Methods). Im folgenden sollen hier einige Beispiele ausreichen.

```
@Path("customers/{id}") 
public String getCustomer(@PathParam("id") int id) {...} 
/* http: //.../ customers /4711 */


@Path("orders/{year}") 
public String getOrders(@PathParam("year") int year) {...}

@Produces(MediaType.TEXT_PLAIN) 
@Path("orders/{year}/{month}") 
public String getOrders(
	@PathParam("year") int year, 
	@PathParam("month") int month) 
{...}

@Path("orders/{year}/{month}/{day}") 
public String getOrders(
	@PathParam("year") int year, 
	@PathParam("month") int month, 
	@PathParam("day") int day) 
{...}
/*
http: //.../ orders /2012
http: //.../ orders /2012/11 
http: //.../ orders /2012/11/23 */

```

Einfache Pfadparameter durch Klammernotation im URI und `@PathParam` in der [[Ressources|Ressource]]-Methode. Dadurch automatische Konvertierung und erlaubt auch primitive Typen, Klassen mit String-Konstruktor, Klassen mit `valueOf(String)`, List, Set, SortedSet.  
`{}` in `@Path`-Annotation.

Mehrfache / wiederholte Pfad-Parameter über `: .+` und Parameter per `List<>`

```
@GET
@Produces(MediaType.TEXT_PLAIN)
@Path("officeorders/{office : .+}")
public String getOrders(@PathParam("office") List<String> offices) {..}
/* http://.../officeorders/Berlin/Hamburg/Stuttgart */

```

```
@Path("customers")
public String getCustomers(
@QueryParam("start") int start, @QueryParam("size") int size) {...}
/* http://.../customers?start=1&size=100 */
```

Query-Parameter nicht in der URI. Stattdessen Injektion mit `@QueryParam`

```
@GET
@Path("orders")
public String getOrders(@MatrixParam("office")
String office) {...}
/* http://.../orders;office=Berlin */
```

Matrix-Parameter injektion mit `@MatrixParam`

reguläre Ausdrücke werden also Pfad-Parameter angegeben. Syntax aus `java.util.regexp.Pattern`

```
@Path("regexp/{id : \\d+}") 
public String getByRegExpDigit(@PathParam("id") int id) {...}

@Path("regexp/{id : \\p{Lower}+}") 
public String getByRegExpLowerAlpha(@PathParam("id") String id) {...}

@Path("regexp/{id : \\p{Upper}+}")
public String getByRegExpUpperAlpha(@PathParam("id") String id) {...}

/*
http://.../regexp/4711 
http://.../regexp/abc 
http://.../regexp/ABC 
http://.../regexp/1aB // gibt’s nicht
*/
```

## Weiter Injektionen

- `@FormParam`: Post-Form Daten
- `@HeaderParam`: HTTP-Request-Header
- `@CookieParam`: Cookies
- `@Context`: Injiziert URI des Requests also UriInfo
- `@DefaultValue`: Default-Wert für Query-Parameter
