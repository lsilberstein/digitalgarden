---
title: Transactional-Annotation
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
  - Transactional
---
# Transactional-Annotation

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

Wie bei Enterprise Beans wird bei `RunTimeExceptions` ein rollback ausgeführt, bei checked Exceptions nicht. Anders als bei Enterprise Beans kann mit den Attributen `rollbackOn` und `dontRollBackOn` jeweils ein Array von Exceptions angegeben werden, bei deren Auftreten zurück, bzw. nicht zurückgerollt werden soll.