---
title: GraalVM, Quarkus
description: 
type: Vorlesung
kurs: Fortgeschrittene Themen des Software Engineering
vorlesungnr: 6
draft: false
date: 2023-11-21
tags:
  - wise2324
  - FTSE
  - vorlesung
date created: Tuesday, November 21st 2023, 11:49:47 am
date modified: Tuesday, November 21st 2023, 1:17:42 pm
---

# GraalVM, Quarkus
# [[Microservices]]

Microservices werden oft irgendwo in [[Container|Containern]] in der Cloud deployed. Jetzt ist Skalierbarkeit eines services nicht immer an höchster Stelle stehen. Wenn Skalierbarkeit aber eine Anforderung ist, muss diese in der Architektur mit einbezogen werden. Wenn wir jetzt aber eine Jar oder ähnliches deployen wollen, kann dies ein paar Sekunden oder noch länger dauern. Dieser Zeitaufwand ist bei Applikationen, die skalierbar sein müssen, nicht akzeptierbar. Daher gibt es seit einiger Zeit Vorhaben, z.B. Java-Code in nativen Code zu compilieren, um die Bereitstellung von bestimmten [[Microservices]] zu verschnellern.

## [[Hot Spot]]

Ein Code, der häufig aufgerufen wurde. Ein Profiler prüft, ob eine Methode sehr aufgerufen wird und compiliert diese dann in nativen, optimierten Code ([[Just in Time Compiler|JiT]], [[Just in Time Compiler]]).

## [[GraalVM]]

Vor einigen Jahren gibt es Vorhaben, Java nativ Ahead of Time, zu compilieren ([GraalVM](https://www.graalvm.org)). Einige Features sind:

- [Polyglot](https://www.graalvm.org/22.0/reference-manual/polyglot-programming/): "GraalVM allows users to write polyglot applications that seamlessly pass values from one language to another."

Da in Java relativ viele Dinge dynamisch zur Laufzeit passieren, wie zum Beispiel Reflections und Java Proxies, wird diese Methode jedoch selten verwendet.

## [[Quarkus]]

See [here](https://quarkus.io).

> "A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries and standards."

Mit Quarkus kann die Startzeit einer Anwendung um ein Vielfaches verkürzt werden. Das ist hilfreich, wenn Anwendungen skalierbar sein sollen. Frameworks, wie [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html) unterstützen mittlerweile natives Compilieren.  
Quarkus kümmert sich darum, dass GraalVM komplexere Programme auch nativ kompilieren kann.

# [[Maven]]

## Includes Und Excludes (Maven)

Wir können bestimmte Packages in Maven excluden, bzw. includen. [Maven – Optional Dependencies and Dependency Exclusions](https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html)

## Profiles (Maven)

[Maven – Introduction to build profiles](https://maven.apache.org/guides/introduction/introduction-to-profiles.html) Wir können auch statt mehrere `pom.xml`'s zu benutzen, mehrere Profile benutzen, um unterschiedliche builds zu aktivieren.

# [[Java Reflection]]

Die Klasse [Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html) modelliert eine bestimmte Klasse und all ihre Eigenschaften. Damit können wir dann Eigenschaften einer Klasse bekommen.

```java
Class<?> clazz = Class.forName("SomeClass");
```
