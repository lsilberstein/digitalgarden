---
title: Konfirguration
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
  - Persistenz
---
# Konfirguration
[[Konfirguration|Persistenz]] bauen mit `persistence.xml` in `META-INF`-Verzeichnis. Hier werden die Verbindungsinformationen zur Datenbank sowie [[Identität|Entity]]-Klassen angegeben (Sofern nicht Hibernate verwendet wird).

```
<!-- data source -->
<persistence xmlns="..." ... version="2.0">
	<persistence-unit name="bank" transaction-type="JTA">
		<jta-data-source>java:jboss/datasources/ExampleDS</jta-data-source>
	</persistence-unit>
</persistence >
<!-- provider specific -->
<properties>
	<property name="hibernate.hbm2ddl.auto" value="create-drop"/>
	<property name="hibernate.show_sql" value="true"/>
</properties>
```

Für Provider-spezifische Properties siehe hier:  
[JBoss Community](http://docs.jboss.org/hibernate/orm/4.1/manual/en-%20US/html/ch03.html#configuration-optional)