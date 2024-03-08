---
title: Interface UserTransaction
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
  - UserTransaction
---
# Interface UserTransaction

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