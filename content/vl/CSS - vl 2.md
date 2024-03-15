---
title: CSS - Vl 2
description: 
type: Vorlesung
kurs: Webprogrammierung
vorlesungnr: 3
aliases: [CSS - Vl 2]
tags:
  - WEBPROG
  - sose24
  - vorlesung
draft: false
date: 2024-03-13
linter-yaml-title-alias: CSS - Vl 2
---

# CSS - Vl 2

## [[Textformatierung]]

### Farben

Die Text- bzw. Vordergrundfarbe kann mit dem Attribut `color` angepasst werden. Die Hintergrundfarbe mithilfe von `background-color`. Der Farbwert kann auf unterschiedliche Art und Weise angegeben werden:

- [[RGB Farbraum|RGB]]-Wert, Zusammensetzung auf Rot, Grün und Blau: `rgb(255,255,0)` entspricht zum Beispiel gelb
- Hex-Wert, sechsstelliger hexadezimaler Wert, je zwei Stellen für Rot, Grün, Blau: `#FFFF00` entspricht gelb
- Farbname, siehe dafür [CSS/Properties/color/keywords - W3C Wiki](https://www.w3.org/wiki/CSS/Properties/color/keywords)
- RGBA-Wert, [[RGB Farbraum|RGB]] + Alpha als Deckkraft zwischen 0 und 1
- HSL-Wert, Farbton, Sättigung, Helligkeit: `hsl(60,100,50)` entspricht gelb
- HSLA-Wert: wie RGBA

```html
<h1 style="color: darkblue;">Überschrift1</h1>
<h1 style="color: #ffa500;">Überschrift2</h1>
<h1 style="color: rgb(255,165,0);">Überschrift3</h1>
<h1 style="color: rgb(255,165,0,0.4);">Überschrift4</h1>
<h1 style="color: hsl(40, 100%, 50%);">Überschrift5</h1>
<h1 style="color: hsla(40, 100%, 50%,0.4);">Überschrift6</h1>
<!-- Verwenden Sie bitte je Webseite nur ein h1,
mehrere h2..h6 sind ok. -->
```

![[Pasted image 20240314101252.png]]

### Schriftart

Die Schriftart wird über das Attribut `font-family` angepasst. Zusätzlich können weitere Werte als "fall-back" angegeben werden. Die letzte Angabe sollte eine allgemeine Bezeichnung der Schriftart sein:

| Font-Family  | Detail                                   |
| ------------ | ---------------------------------------- |
| `serif`      | Serifenschrift                           |
| `sans-serif` | Serifenlose Schrift                      |
| `monospace`  | Nichtproportionalschrift, gleiche Breite |
| `cursive`    | Schreibschrift, handschriftlich          |
| `fantasy`    | Schmuckschrift, dekorative Elemente      |

```html
<h1 style="font-family: 'Times New Roman', Times, serif">Überschrift1</h1>
<h1 style="font-family: sans-serif">Überschrift2</h1>
<h1 style="font-family: monospace">Überschrift3</h1>
<h1 style="font-family: cursive">Überschrift4</h1>
<h1 style="font-family: fantasy">Überschrift5</h1>
```

![[Pasted image 20240314101608.png]]

Die Schriftart muss auf dem Rechner des Nutzers verfügbar sein. Alternativ kann mit `@font-face` eine externe Schriftart benutzt werden, aber Lizenz beachten.

### Schriftgröße

Angabe über `font-size`. Wir unterscheiden zwischen *absoluten Einheiten*, wie cm, mm, in, pt, pc, px, die selten sinnvoll sind und *relativen Einheiten*, die für die Darstellungen auf [[Webseite|Webseiten]] zu bevorzugen sind, wie %, em.

```html
<h1 style="font-size: 1.26cm;">Überschrift1</h1>
<h1 style="font-size: 0.5in;">Überschrift2</h1>
<h1 style="font-size: 36pt;">Überschrift3</h1>
<h1 style="font-size: 3pc;">Überschrift4</h1>
<h1 style="font-size: 48px;">Überschrift5</h1>
<h1 style="font-size: 300%;">Überschrift6</h1>
<h1 style="font-size: 3em;">Überschrift7</h1>
```

![[Pasted image 20240314101905.png]]

![[Pasted image 20240314101916.png]]

### Schriftschnitt

Kursiv oder fett gedruckt

```html
<p style="font-style: italic;">Text 1</p>
<p style="font-style: oblique;">Text 2</p>
<p style="font-style: normal;">Text 3</p>
<p style="font-weight: bold;">Text 4</p>
<p style="font-weight: lighter;">Text 5</p>
<p style="font-weight: bolder;">Text 6</p>
```

![[Pasted image 20240314102015.png]]

### Weitere

Umwandlung in *uppercase* oder *lowercase* mit `text-transform`. Durchstreichen, unterstreichen oder blinken lassen mit `text-decoration`. Zeilenabstand mit `line-height` ändern. Buchstabenabstand über `letter-spacing` steuerbar. Wortabstand per `word-spacing` festlegen. Horizontale Ausrichtung mit `text-align` beeinflussen, vertikale Ausrichtung mit `vertical-align`. Einrückung mit `text-indent` und Schatteneffekte mit `text-shadow`.

## [[Listen]]

Die Aufzählungszeichen einer [[Listen|Liste]] können durch [[Cascading Style Sheets|CSS]]-Regeln beeinflusst werden. Für ungeordnete [[Listen]] bietet das Attribut `list-style-type` folgende Werte:

- `none` Keine Aufzählungszeichen
- `disc` Schwarzer Kreis (Default)
- `circle` Weißer Kreis mit schwarzem Rahmen
- `square` Schwarzes Quadrat

```html
<ul>
	<li style="list-style-type: none;">Erstes</li>
	<li style="list-style-type: disc;">Zweites</li>
	<li style="list-style-type: circle;">Drittes</li>
	<li style="list-style-type: square;">Viertes</li>
</ul>
```

![[Pasted image 20240314191238.png]]

Für geordnete [[Listen]] bietet `list-style-type` unter anderem folgende Werte:

- `decimal` Aufzählung in Dezimalzahlen (1,2,3,…)
- `decimal-leading-zero` Aufzählung in Dezimalzahlen mit vorangestellter 0
- `lower-alpha` Aufzählung in Kleinbuchstaben
- `upper-alpha` Aufzählung in Großbuchstaben
- `lower-roman` Aufzählung in römischen Zahlen
- `upper-roman` Aufzählung in römischen Zahlen

## [[Box-Modell]]

[[Webseite|Webseiten]] bestehen aus Elementen, die als [[Box-Modell|Box]] aufgefasst werden können.

![[Pasted image 20240314191541.png]]

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			div {
				border: 1px solid red;
			}
			#absatz1 {
				border: 1px dashed black;
				width: 600px;
			}
			#absatz2 {
				border: 2px dashed darkorange;
				width: 600px;
				padding: 5px;
			}
		</style>
	</head>
	<body>	
		<div>
			<p id="absatz1">	
				…
			</p>
			<p id="absatz2">	
				…
			</p>
		</div>
	</body>	
</html>	
```

![[Pasted image 20240314191810.png]]

### Inline-[[Box-Modell]]

Der Inhalt einer [[Box-Modell|Box]] bestimmt die Höhe und Breite (height, width ohne Wirkung).

```html
<style type="text/css">
	em {
		background-color: grey;
		padding: 25px;
		border: 20px solid red;
		margin: 20px;
	}
</style>
```

![[Pasted image 20240314191959.png]]

## [[Shorthand Property]]

Ein *[[Shorthand Property]]* kombiniert verschiedene [[Cascading Style Sheets|CSS]]-Eigenschaften. Es spart Schreibarbeit, wenn die Eigenschaft nur einmal definiert werden muss und für viele Elemente gleich bleibt, wie zum Beispiel:

- `margin`
- `padding`
- `background`
- `border`
- `font`

```CSS
/* Dünner, durchgehender, schwarzer Rand */ 
border: thin solid #000000;

/* Alternativ, aber mehr Schreibarbeit: */ 
border-width: thin; 
border-style: solid; 
border-color: #000000;

/* Alternativ, aber noch mehr Schreibarbeit: */ 
border-top-width: thin; 
border-right-width: thin; 
border-bottom-width: thin; 
border-left-width: thin; 
border-top-style: solid; 
border-right-style: solid; 
border-bottom-style: solid; 
border-left-style: solid; 
border-top-color: #000000; 
border-right-color: #000000; 
border-bottom-color: #000000; 
border-left-color: #000000;
```

## [[Layout]]

Fragestellung: Wie positioniere ich Elemente auf einer [[Webseite]]? Früher wurden häufig [[Hypertext Markup Language|HTML]]-Tabellen zur Positionierung verwendet; diese sollten aber eigentlich nur zur Darstellung tabellarischer Daten genutzt werden. Eine andere Möglichkeit ist daher: [[Cascading Style Sheets|CSS]]-Layoutsysteme.

Block-Elemente werden dabei im Browser in immer neuen Zeilen dargestellt (die Anordnung ist dabei vertikal). Inline-Elemente werden im Textfluss dargestellt (horizontal). Das Verhalten der Blöcke lässt sich durch die [[Cascading Style Sheets|CSS]]-Eigenschaft `display` anpassen (entweder `block` oder `inline`).

![[Pasted image 20240314192728.png]]

Unabhängig davon, ob das `display` Attribut `block` oder `inline` ist, gibt es verschiedene Arten der Positionierung (durch die Eigenschaft `posotion`):

| Value      | Detail                                                                    |
| ---------- | ------------------------------------------------------------------------- |
| `static`   | Normale Anordnung im [[Hypertext Markup Language\|HTML]]-Fluss            |
| `relative` | Ausgehende von normaler Anordnung verschoben (beeinflusst den Rest nicht) |
| `absolute` | Nicht im normalen Fluss, sondern relativ zum umgebenden Element           |
| `fixed`    | Relativ zum Browserfenster, bzw. Viewport                                 |
| `sticky`   | scrollen bis zu einem gewissen Punkt und bleiben dann im Viewport fixiert |
| `inherit`  | wie das Elternelement                                                     |

![[Pasted image 20240314193047.png]]

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			div {
				padding: 25px; border: 2px solid red; margin: 5px;
				width: 300px; height: 50px;
				background-color: antiquewhite;
			}
			#b2 {
				background-color: azure;
				position: relative;
				top:-30px;
				left: 50px;
			}
		</style>
	</head>
	<body>
		<div id="b1"> Block 1</div>
		<div id="b2"> Block 2</div>
		<div id="b3"> Block 3</div>
		<div id="b4"> Block 4</div>
	</body>
</html>
```

![[Pasted image 20240314193250.png]]

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			figure {
				position: relative;
				width: 200px;
				border: 1px solid;
			}
			figcaption {
				position: absolute;
				left:0; top: 0;
				width: 100%;
				text-align: center;
				color: white;
				background: darkblue;
			}
		</style>
	</head>
	<body>
		<figure>
			<img src="./images/cat.png" alt="Eine Katze" width="200">
			<figcaption>Ein Bild einer Katze</figcaption>
		</figure>
	</body>
</html>
```

![[Pasted image 20240314193447.png]]