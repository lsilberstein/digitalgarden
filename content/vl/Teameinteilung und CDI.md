---
title: Teameinteilung und CDI
description: 
type: Vorlesung
kurs: Software Engineering Projekt
vorlesungnr: 3
tags:
  - sose24
  - SOEP
  - vorlesung
draft: false
date: 2024-03-22
---
# Teameinteilung Und CDI

## DataTable

```xhtml
<h:dataTable value="#{messageController.getAllMessages()}" var="message">
	<h:column>
		#{message.text}
	</h:column>
</h:dataTable>
```

[dataTable (Jakarta Server Faces 3.0.0 VDL Documentation)](https://redesign--jakartaee.netlify.app/specifications/faces/3.0/vdldoc/html_basic/datatable)

## Java Style Guide

[Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)

## Session Beans

Es gibt einige Arten von Session Beans:

1. Zustandslos `@Stateless`
2. Zustadsbehaftet (Client-spezifischer Zustand, der über eine Folge von Methodenaufrufen erhalten bleibt) `@Stateful`
3. Pro Anwendung (nicht Cluster) maximal einmal vorhanden `@Singleton`

## Scopes und Kontexte

Siehe Hier [[Scopes|Scope]]