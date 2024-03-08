---
title: Events, Interceptoren, BeanValidation
description: 
type: Vorlesung
kurs: Fortgeschrittene Themen des Software Engineering
vorlesungnr: 4
draft: false
date: 2023-11-07
tags:
  - wise2324
  - FTSE
  - vorlesung
date created: Tuesday, November 7th 2023, 11:49:31 am
date modified: Monday, November 20th 2023, 2:39:06 pm
---

# Events, Interceptoren, BeanValidation
# [[Events]]

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

# [[Interceptoren]]

Ist analog zu EJB-Interceptoren. Wir deklarieren eine zusätzliche Annotation zur Deklaration der Interceptor-Bindung und dann `@AroundInvoke` wie EJBs.

```java nums
@InterceptorBinding
@Target({TYPE, METHOD})
@Retention(RUNTIME)
public @Interface Monitored {
}
```

```java nums
@Monitored  
@Interceptor  
public class MonitoringInterceptor {

@AroundInvoke  
	public Object monitor(InvocationContext context) throws Exception {
		// only options, not a real implementation:
		... = context.getParameters(); 
		...  
		context.setParameters(...); 
		logger.info("AroundInvoke for " context.getTarget() + "." + context.getMethod()); 
		Object result = context.proceed();
		...
		return result;
	}
}
```

Der [Invocationkontext](https://docs.oracle.com/javaee/7/api/javax/interceptor/InvocationContext.html) gibt an, in welchem Kontext die [[Audit|monitor]]-Methode aufgerufen wird. Die proceed()-Methode ruft, falls vorhanden, den nächsten Interceptor auf. Falls nicht, wird die originale Methode aufgerufen. Fehlt dieser Aufruf im Interceptor, wird die originale Methode nicht aufgerufen!

```java nums
public class MethodPool {
	@Monitored
	public int foo(int ... args) {
		return Arrays.stream(args).sum();
	}
}
```

Interceptoren müssen aktiviert werden in `beans.xml`

```xml
<beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	   ...>
	<interceptors>
		<class>
			de.jsfpraxis.cdi.interceptors.MonitoringInterceptor
		</class>
	</interceptors>
</beans>
```

# [[Bean Validation]]

[[Validierung]] ist zentraler Baustein einer jeden Anwendung, Häufig, aber nicht zentral realisiert, z.B. in Präsentationsund Persistenzschicht separat und verschieden gemacht.  
Mit Bean Validation geht das aber. Die Idee: [[Properties]] des Geschäftsobjekts (POJO) werden Validierungsannotationen versehen. Diese werden unabhängig von der Verwendung des Objekts überwacht.

| Annotation       | Beschreibung                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| @Null            | Element muss `null` sein                                                                           |
| @NotNull         | Element darf nicht `null` sein                                                                     |
| @AssertTrue      | Element muss `true` sein                                                                           |
| @AssertFalse     | Element muss `false` sein                                                                          |
| @Min             | Element ist größer oder gleich Wert von `value` sein                                               |
| @Max             | Element ist kleiner oder gleich Wert von `value`                                                   |
| @DecimalMin      | Element ist größer oder gleich Wert von `value`                                                    |
| @DecimalMax      | Element ist kleiner oder gleich Wert von `value`                                                   |
| @Negative        | Element muss negativ sein                                                                          |
| @NegativeOrZero  | Element muss negativ oder 0 sein                                                                   |
| @Positive        | Element muss positiv sein                                                                          |
| @PositiveOrZero  | Element muss positiv oder 0 sein                                                                   |
| @Size            | Größe des Elements muss zwischen `min` oder `max` liegen                                           |
| @Digits          | Element darf nicht mehr Vorund Nachkommastellen haben, als in `integer` und `fraction` angegeben |
| @Past            | Element muss ein Datum in der Vergangenheit sein                                                   |
| @PastOrPresent   | Element muss Datum in der Vergangenheit oder Gegenwart sein                                        |
| @Future          | Element muss ein Datum in der Zukunft sein                                                         |
| @FutureOrPresent | Element muss ein Datum in der Zukunft oder Gegenwart sein                                          |
| @Pattern         | Element muss Pattern in `regexp` entsprechen.                                                      |
| @NotEmpty        | Element darf nicht `null` oder leer sein                                                           |
| @NotBlank        | Element darf nicht `null` sein und muss mindestens einen Nicht-Leerraum enthalten                  |
| @Email           | Element muss E-Mail-Syntax entsprechen                                                             |

Wenn Objekte übergeben werden sollen, so kann mit @Valid ein gesamtes übergebenes Objekt überprüft werden.

## Anwendungsdefinierte Constraints

Wir können mit der Definition einer eigenen Annotation und einem verbundenen Constraint-Validierer (Implementierung eines Interfaces) eigene Constraints definieren. Zum Beispiel das Constraint: Volljährig

```java nums
@Constraint(validatedBy = VolljähringValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Volljährig {
	String message() default "Nicht volljähring";
	Class<?>[] groups() default {};
	Class<? extends Payload>[] payload() default {};
}
```

```java nums
public class VolljaehrigValidator implements ConstraintValidator<Volljaehrig, LocalDate> {

	@Override
	public boolean isValid(LocalDate date, ConstraintValidatorConstext context) {
		return LocalDate
			.from(date)
			.until(LocalDate.now(), ChronoUnit.YEARS) >= 18;
	}
}
```

Die Verwendung sieht dann wie folgt aus:

```java nums
@NotNull
@Volljaehrig
private LocalDate obb;
```

# [[Transaktionen]]

Jakarta [[Transaktionen]] definieren eine Schnittstelle zwischen dem Transaktion-Manager und denen in einem verteilten System beteiligten Parteien:

- der Anwendung
- dem [[Ressources]]-Manager
- dem Application Server  
Es wird sowohl eine programmatische als auch eine deklarative, auf Annotationen basierte Schnittstelle bereitgestellt. Neben normalen [[Transaktionen]] können auch z.B. 2PC verwendet werden. [Two-Phase-Commit-Protocol](https://en.wikipedia.org/wiki/Two-phase_commit_protocol)

## [[Interface UserTransaction]]

Das Interface UserTransactions erlaubt es, Transaktionsgrenzen programmatisch zu steuern. Man erhält ein Objekt über Injektion oder JNDI-Lookup:

```java nums
@Resource 
UserTransaction userTransaction;
// oder
@Inject
UserTransaction userTransaction;
// oder; Why would you even do this??
InitialContext context = new InitialContext();
UserTransaction userTransaction = (UserTransaction) context.lookup("java:comp/UserTransaction");
```

Die Verwendung sieht wie folgt aus:

```java
userTransaction.begin();
// do some work
userTransaction.commit();
// oder
userTransaction.rollback();
```

[UserTransactionDoc](https://docs.oracle.com/javaee/7/api/javax/transaction/UserTransaction.html)

## [[Transactional-Annotation]]

Die Verwendung der [[Transactional-Annotation]] ermöglicht deklarative Transaktionsgrenzen auf CDI-Beans, aber auch auf anderen managed Beans, wie Servlets oder [[JAX-RS]]-[[Ressources|Ressourcen]]. Hier die Annotation:

```java
@Inherited
@InterceptorBinding
@Target({TYPE, METHOD})
@Retention(RUNTIME)
public @interface Transactional {}
```

Diese darf für Klassen und Methoden verwendet werden.  
Die [[Transactional-Annotation]] wird nur für Business-, aber nicht für Lebenszyklus-Methoden verwendet. Priorität ist `Interceptor.Priority.PLATFORM_BEFORE + 200`. Die Werte des Enums `Transactional.TxType` sind für das Attribut `value` erlaubt und steuern des Transaktionskontext feiner zum Beispiel durch:

| TxType   | Outside transaction context                                                                                                                                                                                       | Inside transaction context                                                            |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| REQUIRED | The interceptor must begin a new Jakarta Transactions transaction, the manages bean method execution must then continue inside this transaction context, and the transaction must be completed by the interceptor | The managed bean method must then continue inside the transaction context             |
| NEVER    | The managed bean method execution must then continue outside a transaction context                                                                                                                                | A `TransactionalException` with a nested `InvalidTransactionException` must be thrown |

## Exceptions

Wie bei Enterprise Beans wird bei `RunTimeExceptions` ein rollback ausgeführt, bei checked Exceptions nicht. Anders als bei Enterprise Beans kann mit den Attributen `rollbackOn` und `dontRollBackOn` jeweils ein [[Array]] von Exceptions angegeben werden, bei deren Auftreten zurück, bzw. nicht zurückgerollt werden soll.

## [[Transaktions-Scope]]

Die Transactions-API definiert eigene [[Scopes]]. Diese sind gebunden an die gerade aktive Jakarta Transactions Transaktion (`@TransactionsScoped`).
