---
title: Flexbox-Layout
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - sose24
  - WEBPROG
draft: false
date: 
aliases:
  - Flexbox Layout
---

# Flexbox-Layout

Flexbox-Layout wurde mit CSS3 eingeführt. Dieses ist flexibler als Float- oder Standard-[[Layout]] (block und inline). Das Elternelement kann die Höhe und Breite der Kindelemente dynamisch anpassen, um den Platz optimal zu nutzen. Der Flex-[[Container]] enthält dabei die Kindelemente (Flex-Items). Dies Verhindert üebrlaufen, kann horizontal und vertikal (Ausrichtung) verwendet werden, bestimmt die Größe / Ausdehnung der Kindelemente und deren Anordnung.

```html nums {10}
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			.card-container {
				max-width: 67.5em;
				margin: 0 auto;
				padding: 10px;
				display: flex;
			}
			.card-container .card {
				margin: 10px;
				box-shadow: 0 0 2px 2px rgba(0, 0, 0, .05);
			}
			.card-container .card img {
				width: 100%;
				padding: 0;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<section class="card-container">
			<div class="card">
				<img src="./images/IMG_7046.jpg" alt="Bild-1">
				<div class="content">
					<h3>Am Strand</h3>
					<p>..</p>
				</div>
			</div>
			<div class="card">
				<img src="./images/IMG_7080.jpg" alt="Bild-2">
				<div class="content">
					<h3>..</p>
				</div>
			</div>
			<div class="card">
				<img src="./images/IMG_7321.jpg" alt="Bild-3">
				<div class="content">
					<h3>Den Haag</h3>
					<p>..</p>
				</div>
			</div>
		</section>
	</body>
</html>
```

![[Pasted image 20240315144925.png]]

## Fließrichtung

Die [[Cascading Style Sheets|CSS]]-Eigenschaft `flex-direction` gibt die Fließrichtung an:

- `row` (default)
- `row-reverse`
- `column`
- `columns-reverse`

Oder per [[Cascading Style Sheets|CSS]]-Eigenschaft `order` die Reihenfolge direkt angeben.

![[Pasted image 20240315145107.png]]

## Umbruch

Eine Verkleinerung der Elemente sieht irgendwann nicht mehr gut aus; hier kann dann automatisch die Zeile umgebrochen werden mit Hilfe der [[Cascading Style Sheets|CSS]]-Eigenschaft `flex-wrap`:

- `nowrap` (default)
- `wrap`
- `wrap-reverse`

> [!Info]  
> `flex-flow` ist die Kurzform von `flex-direction` und `flex-wrap`:
> 
> ```css
> flex-flow: row-wrap;
> ```

```css
.card-container {
	max-width: 67.5em;
	...
	flex-wrap: wrap;
}
.card-container .card {
	...
	width: 20em;
}
```

## Flex-Items Anpassen

1. Wachtumsfaktor mit `flex-grow`: Wenn es im Flex-[[Container]] mehr Platz gibt, als die Items benötigen, dann können Sie wachsen.
2. Schrumpffaktor mit `flex-shrink`: Wenn im [[Container]] zu wenig Platz ist, dann können sie schrumpfen.
3. Anfangsgröße mit `flex-basis`

```css nums {11-13}
.card-container {
	max-width: 67.5em;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
}
.card-container .card {
	margin: 10px; 
	box-shadow: 0 0 2px 2px rgba(0,0,0,.05);
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 30%;
}
.card-container .card img {
	width: 100%;
	padding: 0;
	margin: 0;
}
```

![[Pasted image 20240315145932.png]]

## Flex-Items Ausrichten

Falls Items nicht wachsen oder schrumpfen sollen kann man die Ausrichtung entlang der Hauptachse festlegen mit der [[Cascading Style Sheets|CSS]]-Eigenschaft `justify-content` und entlang der Querachse mit `align-items`.

![[Pasted image 20240315150104.png]]

![[Pasted image 20240315150112.png]]

## Eigenschaften

![[Pasted image 20240315150210.png]]