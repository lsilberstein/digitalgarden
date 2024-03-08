---
title: Events
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
  - Event
---

# Events

Wurden im Allgemeinen schon einmal bei Huhn in Software Engineering gemacht. Hier sollen einmal die Konzepte von vorne besprochen werden.  
Laut Design Patterns Observer-Pattern: Die Beziehung zwischen Objekten, die Änderungen an einem Objekt (Subjekt) an mehrere andere Objekte (Observer) weitergemeldet. In Java unter `java.util.Observable` und `java.util.Oberserver` mit Java 9 deprecated. In [[CDI]] ist dieses Pattern vollständig entkpoppelt.

## Einfache Event-producer Und Observer

Ein Produces injiziert ein Event, Ruft `fire()` auf. Payload übergibt beliebiges POJO (Plain Old Java Object).

```java nums
@Named
@ViewScoped
public class CustomerController implements Serializable {
	private Customer customer;

	@Inject
	Event<Customer> customerEvent;

	public CustomerController(){
		this.customer = new Customer();
	}

	public void save() {
		// JPA persist() or similar
		customerEvent.fire(customer);
	}
}
```

Wie wird ein Observer gebaut? Dieser wird mit dem `@Observes` annotiert. Der Klassenund Methodenname sind dabei beliebig. Das ist schon alles

```java nums
public class CustomerManagement {
	private void onCustomerEvent(@Observes Customer customer) {
		// do Something meaningful here
	}
}
```

## Bedingte Observer

Bedingte Obsever bedeutet, dass Observer nur aufgerufen werden, falls eine Bean schon im aktuellen Kontext schon existiert. Das funktioniert durch den Annotationsparameter `receive = IF_EXISTS`, Default ist `ALWAYS`.

```java
kundeBEarbeitet(@OBserves(receive = IF_EXISTS) Customer c)
```

## Events Und [[Transaktionen]]

Attrubut `during` von `@Observes` ist mit möglichen Werten ist möglich:

| Wert              | Observer-Aufruf                                        |
| ----------------- | ------------------------------------------------------ |
| AFTER_COMPLETION  | nach Abschluss der Transaktion, unabhängig vom Ausgang |
| AFTER_FAILURE     | nach Abschluss der Transaktion im Fehlerfall           |
| AFTER_SUCCESS     | nach Abschluss der Transaktion im Erfolgsfall          |
| BEFORE_COMPLETION | vor Abschluss der Transaktion                          |
| IN_PROGRESS       | beim Veröffentlichen des Events (Default)              |
