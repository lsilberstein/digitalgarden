---
title: Java Reflection
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - FTSE
  - wise2324
draft: false
date:
---
# Java Reflection

Die Klasse [Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html) modelliert eine bestimmte Klasse und all ihre Eigenschaften. Damit können wir dann Eigenschaften einer Klasse bekommen.

```java
Class<?> clazz = Class.forName("SomeClass");
```