---
title: JAX-RS
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
  - Jakarta RESTful Web Services
---

# JAX-RS

Das Web hat sich in den letzten 20 Jahren zum größten verteilten System entwickelt. Es basiert auf sehr wenigen Grundprinzipien:

- Technisch basiert es vor allem auf HTTP und URIs
- Architektur ist nirgendwo festgelegt, sondern ist gewachsen

hier Auszug aus Architektur of the World Wide Web

# Methoden Im Überblick

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

# JAX-RS Methoden

Beispiele beruhen auf BIRTs Beispieldaten  

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
