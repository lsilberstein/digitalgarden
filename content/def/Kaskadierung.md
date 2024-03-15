---
title: Kaskadierung
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - WEBPROG
  - sose24
draft: false
date: 
aliases:
  - Spezifität
---

# Kaskadierung

*Kaskade*:= Ein Wasserfall, der über mehrere Stufen fällt.

Das Prinzip bei [[Cascading Style Sheets|CSS]]: Regeln lassen sich auf einer Stufe definieren, so dass die Regeln für viele darunter liegende Elemente gilt. Für ein Element können also möglicherweise mehrere [[Cascading Style Sheets|CSS]]-Regeln gelten. Welche Regel dabei Vorrang hat, wird im Standard genau festgelegt.

Für zwei gleicht [[Selektor|Selektoren]] gilt, dass der zweite Vorrang hat. Das heißt, dass die Reihenfolge im Code entscheidend ist.

```html
<!DOCTYPE html
>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			h1 {
				color: blue;
				background-color: yellow;
			}
			h1 {
				color: green;
			}
		</style>
	</head>
	<body>
		<h1>Hello Title</h1>
	</body>
</html>
```

![[Pasted image 20240314095001.png]]

Für zwei unterschiedliche [[Selektor|Selektoren]] gilt. dass der [[Selektor]] mit der höheren Spezifität Vorrang hat. Zum Beispiel ist ein Typselektor spezifischer als ein Universalselektor.

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		h1.chapter{
			color: orange;
		}
		h1 {
			color: green;
		}
		* {
			color: blue;
			background-color: yellow;
		}
	</style>
</head>
<body>
	<h1 class="chapter">Ein Kapitel</h1>
	<h1>Eine Überschrift</h1>
</body>
```

![[Pasted image 20240314095214.png]]

## Berechnung Der Spezifität

Die Spezifität eines Selektors basiert auf drei Zählern (A,B,C).

- Initial Wert ist 0 für alle Zähler
- Inkrementiere A für jeden ID-[[Selektor]]
- Inkrementiere B für Vorkommen von Attribut-, Klassenselektor, bzw. [[Pseudoklassen|Pseudoklasse]]
- Inkrementiere C für Typselektor oder Pseudoelement

![[Pasted image 20240314095434.png]]
