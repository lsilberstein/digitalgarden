---
title: CSS - Vl
description: 
type: Vorlesung
kurs: Webprogrammierung
vorlesungnr: 2
aliases: [CSS - Vl]
tags:
  - sose24
  - WEBPROG
  - vorlesung
draft: false
date: 2024-03-13
linter-yaml-title-alias: CSS - Vl
---

# CSS - Vl

## Typselektor

Der Typselektor wählt alle Elemente aus, die den gegebenen Typ (=[[Hypertext Markup Language|HTML]]-Element) haben.

```html
<head>
	<title>CSS</title>
	<style type = "text/css">
		input {
			color: pink;
		}
		h1, h2 {
			color: green;
		}
	</style>
</head>
<body>
	<h1>Die Überschrift</h1>
	<input type = "text" id = "fname" name = "fname"/>
</body>
```

![[Pasted image 20240314084958.png]]

## Klassenselektor

`.` wählt die Elemente anhand von [[Cascading Style Sheets|CSS]]-Klassen aus, also Elemente deren Wert des `class`-Attribut dem Wert hinter dem Punkt im [[Selektor]] entspricht.

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		.niceCls {
			color: pink;
		}
		input.otherCls {
			color: green;
		}
	</style>
</head>
<body>
	<h1 class="niceCls">Die Überschrift</h1>
	<h2>Die andere Überschrift</h1>
	<input class="otherCls" type="text" id="fname" name="fname">
	<input type="text" id="sname" name="sname">
</body>
```

![[Pasted image 20240314085210.png]]

## ID-[[Selektor]]

`#` wählt die Elemente aus, deren Wert des `id`-Attributs dem Wert hinter dem Rautesymbol im [[Selektor]] entspricht. `id`-Attribute sollten bezogen auf eine [[Webseite]] eindeutig sein.

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		#head1 {
			color: pink;
		}
		h2#head2 {
			color: green;
		}
	</style>
</head>
<body>
	<h1 id="head1">Erste Überschrift</h1>
	<h2 id="head2">Zweite Überschrift</h2>
</body>
```

![[Pasted image 20240314085359.png]]

## Universalselektor

`*` wählt alle Elemente aus

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		* {
			color: green;
		}
	</style>
</head>
<body>
	<h1>Erste Überschrift</h1>
	<h2>Zweite Überschrift</h2>
</body>
```

![[Pasted image 20240314085512.png]]

## Attributselektor

`[]` wählt die Elemente anhand des Wertes eines ihrer Attribute aus. Dafür gibt es einige Varianten:

| Variante                | Detail                                                                   |
| ----------------------- | ------------------------------------------------------------------------ |
| `[attribute]`           | Das Attribut kommt vor                                                   |
| `[attribute = "value"]` | Das Attribut hat den Wert `value`                                        |
| `[attribute~="value"]`  | Das Attribut enthält als Wert eine Liste und ein Wert entspricht `value` |
| `[attribute\|="value"]` | Das Attribut beginnt mit dem Wert `value` (gefolgt von `-`)              |
| `[attribute$="value]`   | Das Attribut hat einen Wert, der mit `value` endet                       |
| `[attribute*="value"]`  | Das Attribut hat einen Wert, der mindestens einmal `value` enthält       |

```html
<head>
	<title>CSS</title>
	<style type = "text/css">
		[type = "button"] {
			color: green;
		}
	</style>
</head>
<body>
	<input type = "text"/>
	<input type = "button" value = "Click"/>
</body>
```

![[Pasted image 20240314090123.png]]

## Angrenzende Geschwister-[[Selektor|Selektoren]]

`+` wählt Elemente aus, die einem anderen Element unmittelbar folgen (sog. Geschwisterelemente).

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		h1 + p {
			color: blueviolet;
		}
	</style>
</head>
<body>
	<h1>Erste Überschrift</h1>
	<p>Punkt, Absatz, neue Zeile.</p>
	<h1>Zweite Überschrift</h1>
	Link
	<p>Absatz2</p>
	<p>Absatz3</p>
</body>
```

![[Pasted image 20240314090305.png]]

## Allgemeine Geschwister-[[Selektor|Selektoren]]

`~` wählt Elemente aus, die einem anderen Element folgen (aber nicht unbedingt unmittelbar).

```html
<head>
<title>CSS</title>
	<style type="text/css">
		h1 ~ p {
			color: blueviolet;
		}
	</style>
</head>
<body>
	<h1>Erste Überschrift</h1>
	<p>Punkt, Absatz, neue Zeile.</p>
	<h1>Zweite Überschrift</h1>
	<a>Link</a>
	<p>Absatz2</p>
	<p>Absatz3</p>
</body>
```

![[Pasted image 20240314092207.png]]

## Kind-Selektoren

`>` wählt Elemente aus, die direkt Kindelemente des anderen im [[Selektor]] definierten Elements sind.

```html
<head>
<title>CSS</title>
	<style type="text/css">
		div > p {
			color: blueviolet;
		}
	</style>
</head>
<body>
	<div>
		<p>
			Text1
		</p>
	</div>
	<p>
		Text2
	</p>
</body>
```

![[Pasted image 20240314092323.png]]

## Nachfahren-[[Selektor|Selektoren]]

` ` wählt Elemente aus, die Nachfahren des anderen im [[Selektor]] definierten Elements sind (innerhalb aber nicht unbedingt direkte Kindelemente).

```html
<head>
<title>CSS</title>
	<style type="text/css">
		div p {
			color: blueviolet;
		}
	</style>
</head>
<body>
	<div>
		<span>
			<p>
				Text1
			</p>
		</span>
	</div>
	<p>
		Text2
	</p>
</body>
```

![[Pasted image 20240314092451.png]]

## Kombination

[[Selektor|Selektoren]] können kombiniert werden, um komplexe Selektionsregeln zu implementieren.

```css
form#order-detail > input.important[type="text"] {
	color: green;
}
```

# [[Pseudoklassen]]

> [!Definition]  
> [[Pseudoklassen]] wählen Elemente aus, jedoch unter bestimmten Beduingungen, z.B. Position relativ zu Geschwistern oder Zustand.

Durch Pseudoklassen können Elemente ausgewählt werden, die nicht über "normale" [[Selektor|Selektoren]] erreichbar sind. Zum Beispiel [[Pseudoklassen]] für besuchte und nicht besuchte Hyperlinks (Auch *Link-[[Pseudoklassen]]*)

| Attribute   | Detail                                                                  |
| ----------- | ----------------------------------------------------------------------- |
| `:link`     | bezeichnet unbesuchte Links im [[Hypertext Markup Language\|HTML]]-Code |
| `:visited`  | bezeichent bereits besuchte Links                                       |
| `:any-link` | Elemente mit `href`-Attribut, egal ob besucht oder unbesucht            |

Über [[Pseudoklassen]] lassen sich bestimmte Teile eines selektierten Elements ansprechen und teilweise sogar neue Elemente erzeugen.

| Attribut         | Detail                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `::before`       | erzeugt ein Element vor dem Element, das durch den [[Selektor]] selektiert wird                                |
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

## Dynamische [[Pseudoklassen]]

[[Pseudoklassen]] für Benutzerinteraktion mit Maus und Tastatur

| Attribut  | Detail                                                        |
| --------- | ------------------------------------------------------------- |
| `:hover`  | bezeichnet Elemente, die gerade mit der Maus "berührt" werden |
| `:active` | bezeichnet Elemente die gerade aktiv sind                     |
| `:focus`  | bezeichnet Inputs, die gerade den Fokus haben                 |

## Statische [[Pseudoklassen]]

Mit den Struktur-[[Pseudoklassen]] lassen sich Elemente anhand der Position in der Dokumentenstruktur selektieren

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

# Negation Von [[Cascading Style Sheets|CSS]]-Regeln

Wenn eine Bedingung nicht zutreffen darf, so kann `:not` verwendet werden. Beispielsweise bezieht sich `p:not(.ital)` auf jedes `<p>`, das nicht der Klassen `.ital` angehört und `p :not(.ital)` auf jeden Nachfahren von `<p>`, der nicht der Klassen `.ital` angehört.

## [[Kaskadierung]] Und Spezifität

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

Für zwei unterschiedliche [[Selektor|Selektoren]] gilt. dass der [[Selektor]] mit der höheren [[Kaskadierung|Spezifität]] Vorrang hat. Zum Beispiel ist ein Typselektor spezifischer als ein Universalselektor.

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

### Berechnung Der [[Kaskadierung|Spezifität]]

Die Spezifität eines Selektors basiert auf drei Zählern (A,B,C).

- Initial Wert ist 0 für alle Zähler
- Inkrementiere A für jeden ID-[[Selektor]]
- Inkrementiere B für Vorkommen von Attribut-, Klassenselektor, bzw. [[Pseudoklassen|Pseudoklasse]]
- Inkrementiere C für Typselektor oder Pseudoelement

![[Pasted image 20240314095434.png]]

## [[Vererbung]]

Einige [[Cascading Style Sheets|CSS]]-Eigenschaften vererben sich an untergeordnete Elemente, wie zum Beispiel Schriftart oder Farbe. Andere [[Cascading Style Sheets|CSS]]-Eigenschaften vererben sich nicht an untergeordnete Elemente, wie `border` oder `background-image`; das wäre auch nicht sinnvoll.

> [!Info]  
> Achtung bei der Vererbung und Angabe relativer Größen, z.B. Schriftgröße von 70% in Eltern- und Kindelement ergibt "49%" Schriftgröße im Kind.

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		body {
			color: blueviolet;
			border: thin solid black;
		}
	</style>
</head>
<body>
	<h1>Teyt1</h1>
	Text2
	<p>Text3</p>
</body>
```

![[Pasted image 20240314095829.png]]