---
title: Pseudoklassen
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
  - Pseudoklasse
---
# Pseudoklassen

> [!Definition]  
> Pseudoklassen wählen Elemente aus, jedoch unter bestimmten Beduingungen, z.B. Position relativ zu Geschwistern oder Zustand.

Durch Pseudoklassen können Elemente ausgewählt werden, die nicht über "normale" [[Selektor|Selektoren]] erreichbar sind. Zum Beispiel Pseudoklassen für besuchte und nicht besuchte Hyperlinks (Auch *Link-Pseudoklassen*)

| Attribute   | Detail                                                                  |
| ----------- | ----------------------------------------------------------------------- |
| `:link`     | bezeichnet unbesuchte Links im [[Hypertext Markup Language\|HTML]]-Code |
| `:visited`  | bezeichent bereits besuchte Links                                       |
| `:any-link` | Elemente mit `href`-Attribut, egal ob besucht oder unbesucht            |

Über Pseudoklassen lassen sich bestimmte Teile eines selektierten Elements ansprechen und teilweise sogar neue Elemente erzeugen.

| Attribut         | Detail                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `::before`       | erzeugt ein Element vor dem Element, das durch den Selektor selektiert wird                                |
| `::after`        | erzeugt ein Element nach dem Element, das durch den [[Selektor]] selektiert wird                               |
| `::first-letter` | bezieht sich auf die erste Zeile des Textes im selektierten Element                                        |
| `::selection`    | bezieht sich auf den Teil des Textes im selektierten Element, der durch den Nutzer gerade ausgewählt wird. |

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			li:first-child {
				font-weight: bold;
			}
			:link {
				font-family: monospace;
			}
			.wichtig:hover {
				font-size: x-large;
				background-color: red;
			}
			ul::before {
				content : "Eine schöne Liste:";
				color : blue;
			}
		</style>
	</head>
	<body>
		<ul>
			<li>Erstes Element</li>
			<li>Zweites Element
				<a href="www.ostfalia.de">Link</a> 
			</li>
			<li class="wichtig">Letztes Element</li>
		</ul>
	</body>
</html>
```

![[Pasted image 20240314094541.png]]

## Dynamische Pseudoklassen

Pseudoklassen für Benutzerinteraktion mit Maus und Tastatur

| Attribut  | Detail                                                        |
| --------- | ------------------------------------------------------------- |
| `:hover`  | bezeichnet Elemente, die gerade mit der Maus "berührt" werden |
| `:active` | bezeichnet Elemente die gerade aktiv sind                     |
| `:focus`  | bezeichnet Inputs, die gerade den Fokus haben                 |

## Statische Pseudoklassen

Mit den Struktur-Pseudoklassen lassen sich Elemente anhand der Position in der Dokumentenstruktur selektieren

| Attribut            | Detail                                                       |
| ------------------- | ------------------------------------------------------------ |
| `:first-child`      | Element, das das erste Kindelement ist                       |
| `:last-child`       | … letztes Kindelement …                                  |
| `nth-child(n)`      | Element, das das n-te Kindelement ist (even und odd möglich) |
| `nth-last-child(n)` | … n-letztes Kindelement ---                                |
| `only-child`        | Element, das das einzige Kindelement ist                     |

Statt `child` ist auch `-of-type` zur Selektion auf einen Typ möglich.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			body p:nth-child(2) {
				border: 1px solid;
			}
			body p:nth-of-type(2) {
				border: 1px dashed;
			}
		</style>
	</head>
	<body>
		<h1> Mit Überschrift</h1>
		<!-- <h2> Unterüberschrift</h2> -->
		<p>
			Erster Absatz
		</p>
		<p>
			Zweiter Absatz
		</p>
	</body>
</html>
```

![[Pasted image 20240314093739.png]]
