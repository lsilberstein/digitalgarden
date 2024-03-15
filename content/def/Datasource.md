---
title: Datasource
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - sose24
  - SOEP
draft: false
date: 
aliases:
  - Datasources
---

# Datasource

Wie benutzen eine [[Datasource]], um eine Verbindung zu einer Datenbank aufzubauen. Eine [[Datasource]] wird dabei zu einer Verbindung abgekapselt. Eine [[Datasource]] ist ein sog. Pool. 

Im [StudIp](https://studip.ostfalia.de/dispatch.php/course/files?cid=2279f0257d96e0246328dc2444390b27) gibt es eine Beispiel-xml, um die [[Datasource]] einzubinden:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<datasources xmlns="http://www.jboss.org/ironjacamar/schema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.jboss.org/ironjacamar/schema http://docs.jboss.org/ironjacamar/schema/datasources_1_0.xsd">

  <datasource jndi-name="java:jboss/datasources/sep" pool-name="sep" enabled="true" use-java-context="true">
    <connection-url>jdbc:postgresql://localhost:5432/sep</connection-url>
    <driver>postgresql-42.7.2.jar</driver>
    <security>
      <user-name>postgres</user-name>
      <password>dummy</password>
    </security>
  </datasource>
</datasources>
```

In `src/main/WEB-INF` ablegen.

In der `persistence.xml` wird dabei angegeben, gegen welche [[Datasource|Datasources]] gearbeitet werden soll (`jta-data-source`).