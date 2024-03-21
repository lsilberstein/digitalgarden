---
title: JavaScript
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - WEBPROG
  - sose24
draft: false
date:
---

# JavaScript

Programmiersprache, um Anwendungslogik und Interaktion auf der [[Webseite]] zu bringen. Wir zum Beispiel benutzt, um 

- Felder zu validieren
- Sortieren / Filtern von Tabellen
- dynamisches Generieren von Inhalten
- …

[[JavaScript]] ist eine höhere, interpretierte Programmiersprache und Multi-Paradigma (imperativ, OO, funktional) und dynamisch typisiert.

![[Pasted image 20240321122652.png]]

[[Javascript]] Skripte werden typischerweise separat in der Verzeichnisstruktur des Projekts verwaltet. Im Folgenden heißt der Ordnet für die Skripte `js`. Dort werden die Dateien abgelegt. In der Regel gibt es ebenfalls einen Ordner für die Stylesheets, z.B. [[Cascading Style Sheets|CSS]] oder `styles`. 

## JavaScript Einbinden

Siehe hier eine Beispielhafte [[JavaScript]] Datei:

```js
"use strict";
alert("Hello World!");
```

In der [[Hypertext Markup Language|HTML]] Datei wird die JS Datei dann wie folgt eingefügt:

```html
<body>
	<script src="js/main.js"></script>
</body>
```

Das Skript kann auch innerhalb einer [[Hypertext Markup Language|HTML]] Datei definiert werden (ist aber nicht ratsam!).

```html
<script>
	alert("Hello World!");
</script>
```

## NoScript

Das `<noscript>`-Element wird vom Browser nur dargestellt, wenn [[JavaScript]] abgeschaltet ist oder nicht unterstützt wird. Das ist aber nur noch selten der Fall.

## Variablen Und Konstanten

Variablen werden mit dem Schlüsselwort `let` (block [[Scopes|scope]]) oder `var` (function [[Scopes|scope]]) eingeführt. Konstanten mit `const` deklariert und initialisiert.

```js
"use strict";
let firstName;
firstName = 'Max';
let lastName = 'Mustermann';
var x;
x = 2;
const MAXIMUM = 1000;
```

## Reservierte Wörter

[JavaScript/Bezeichner – SELFHTML-Wiki](https://wiki.selfhtml.org/wiki/JavaScript/Bezeichner#Reservierte_W.C3.B6rter)