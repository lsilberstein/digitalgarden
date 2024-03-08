---
title: Hypermedia
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
---
# Hypermedia

Eine [[Ressources|Ressource]] kann eine Beziehung zu anderen [[Ressources|Ressourcen]]-Informationen haben (links). Man nennt dieses Prinzip *HATEOAS* ([[Hypermedia]] As The Engine Of Application State)

```html
<order self=’http://example.com/orders/12345’ > 
	<amount >23</amount >
	<product ref=’http://example.com/products/4554’ /> 
	<customer ref=’http://example.com/customers/1234’/> 
	<link rel=’cancel’ ref=’./cancellation’ />
</order>
```

Funktioniert Anwendungsübergreifend. Kein Problem, da gültiges Namensschema. Server kann Client über Link mitteilen, welche Aktion also nächstes erlaubt ist.