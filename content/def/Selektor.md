---
title: Selektor
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
  - Selektoren
---
# Selektor

Es gibt verschiedene Möglichkeiten, zu selektieren, welche [[Hypertext Markup Language|HTML]]-Elemente von einer [[Cascading Style Sheets|CSS]]-Regel betroffen sind. Selektion erfolgt anhand des Typs, einer Klasse, der ID, etc..

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

`.` wählt die Elemente anhand von [[Cascading Style Sheets|CSS]]-Klassen aus, also Elemente deren Wert des `class`-Attribut dem Wert hinter dem Punkt im Selektor entspricht.

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

## ID-Selektor

`#` wählt die Elemente aus, deren Wert des `id`-Attributs dem Wert hinter dem Rautesymbol im Selektor entspricht. `id`-Attribute sollten bezogen auf eine [[Webseite]] eindeutig sein.

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

## Angrenzende Geschwister-Selektoren

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

## Allgemeine Geschwister-Selektoren

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

`>` wählt Elemente aus, die direkt Kindelemente des anderen im Selektor definierten Elements sind.

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

## Nachfahren-Selektoren

` ` wählt Elemente aus, die Nachfahren des anderen im Selektor definierten Elements sind (innerhalb aber nicht unbedingt direkte Kindelemente).

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

Selektoren können kombiniert werden, um komplexe Selektionsregeln zu implementieren.

```css
form#order-detail > input.important[type="text"] {
	color: green;
}
```
