---
title: Scopes
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
  - Scope
---
# Scopes

Welche Scopes gibt es? Ein Client fragt einen Server an und bekommt eine Response. Der Server weiß aber nichts über den Client. Bei Anwendungen wäre es zum Beispiel nett, wenn man sich nur mit einer Request authentifizieren muss. Oder aber auch, dass Konzepte, wie Warenkörbe funktionieren. Z.b. über einen Cookie kann sich jetzt ein Client mit einem Server authentifizieren. Dafür brauchen wir Scopes.

- `@ApplicationScoped`
- `@Sessionscoped`
- `@RequestScoped`
- (`@ConversationScoped`) ist eine build-in Scope in der CDI Spezifikation
- `@Dependent`  
sind als *Scope* gültig. In CDI wird das über Annotationen gelöst. Diese Annotationen bestimmen die Lebensdauer eines Objektes. Zum Beispiel existiert ein Object mit der Annotation `@SessionScoped` solange ein Client eine Session hat.  

![[Pasted image 20240108101643.png]]

1. der Standard-Konstruktor wird ausgeführt
2. Alle injections werden gesucht  
3. `@PostConstruct` wird aufgerufen, falls vorhanden  
In [[JSF]] gibt es die Annotation `@Named`, ist hier aber nicht wichtig. `@Inject` statt dem `new`-Statement benutzen. Sonst gibts dick ärger! Für jeden Client wird die passende Instanz je nach Scope gefunden. Mit `@PostContruct` wird eine Methode deklariert (die void returned), die nach den Injections ausgeführt wird. Mit `@Predestroy` kann eine Methode annotiert werden, die ausgeführt wird, wenn CDI dran ist, bestimmte Objekte zu löschen.
