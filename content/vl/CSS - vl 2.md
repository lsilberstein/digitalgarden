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

### Vertiefung

- [[Float Layout]]
- [[Flexbox-Layout]]
- [[Grid-Layout]]

### [[Float Layout]]

Das [[Float Layout|Float-Layout]] beeinflusst, wie sich Elemente bezogen auf den umgebenden Textfluss verhalten. Dafür wird die [[Cascading Style Sheets|CSS]]-Eigenschaft `float` verwendet. Damit lassen sich Elemente an den linken oder rechten Rand des umgebenden [[Hypertext Markup Language|HTML]]-Blocks setzen. Das [[Float Layout|Float-Layout]] wurde häufig für das Gesamtlayout verwendet, mittlerweile gibt es aber flexiblere Alternativen (`flexbox` und `grid-layout`).

Siehe hier ein ungestyltes [[Float Layout|Float-Layout]]

```html
<form>
	<label for="firstName">Vorname</label>
	<input id="firstName" type="text">
	<label for="lastName">Nachname</label>
	<input id="lastName" type="text">
	<label for="birthday">Geburtsdatum</label>
	<input id="birthday" type="date">
	<label for="email">E-Mail</label>
	<input id="email" type="email">
	<button>Abschicken</button>
</form>
```

![[Pasted image 20240315144004.png]]

Mit [[Float Layout|Float-Layout]]:

```css nums {15, 18,19, 26, 27}
body { 
	font-family: sans-serif; 
	font-size: 0.9em; 
} 
* { 
	box-sizing: border-box 
} 
form { 
	padding: 1em; 
	background: #f9f9f9; 
	border: 1px solid lightgrey; 
	margin: 3rem auto auto auto; 
	max-width: 600px; 
	border-radius: 5px; 
	overflow: hidden; 
} 
input { 
	float: left; 
	width: calc(100% - 200px); 
	margin-bottom: 1rem; 
	background: white; 
	border: 1px solid darkgray; 
	padding: 0.7em; 
}
button { 
	float: right; 
	width: calc(100% - 200px); 
	background: lightgrey; 
	padding: 0.8em; 
	border: 0; 
}
button:hover { 
	background: rosybrown; 
} 
input:focus { 
	outline: 3px solid deepskyblue; 
} 
label { 
	text-align: right; 
	display: block; 
	padding: 0.5em 1.5em 0.5em 0; 
	float: left; 
	width: 200px; 
}
```

![[Pasted image 20240315144251.png]]#

### [[Flexbox-Layout]]

[[Flexbox-Layout]] wurde mit CSS3 eingeführt. Dieses ist flexibler als Float- oder Standard-[[Layout]] (block und inline). Das Elternelement kann die Höhe und Breite der Kindelemente dynamisch anpassen, um den Platz optimal zu nutzen. Der Flex-[[Container]] enthält dabei die Kindelemente (Flex-Items). Dies Verhindert üebrlaufen, kann horizontal und vertikal (Ausrichtung) verwendet werden, bestimmt die Größe / Ausdehnung der Kindelemente und deren Anordnung.

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

#### Fließrichtung

Die [[Cascading Style Sheets|CSS]]-Eigenschaft `flex-direction` gibt die Fließrichtung an:

- `row` (default)
- `row-reverse`
- `column`
- `columns-reverse`

Oder per [[Cascading Style Sheets|CSS]]-Eigenschaft `order` die Reihenfolge direkt angeben.

![[Pasted image 20240315145107.png]]

#### Umbruch

Eine Verkleinerung der Elemente sieht irgendwann nicht mehr gut aus; hier kann dann automatisch die Zeile umgebrochen werden mit Hilfe der [[Cascading Style Sheets|CSS]]-Eigenschaft `flex-wrap`:

- `nowrap` (default)
- `wrap`
- `wrap-reverse`

>[!Info]
>`flex-flow` ist die Kurzform von `flex-direction` und `flex-wrap`:
>
>```css
>flex-flow: row-wrap;
>```

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

#### Flex-Items anpassen

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

#### Flex-Items ausrichten

Falls Items nicht wachsen oder schrumpfen sollen kann man die Ausrichtung entlang der Hauptachse festlegen mit der [[Cascading Style Sheets|CSS]]-Eigenschaft `justify-content` und entlang der Querachse mit `align-items`.

![[Pasted image 20240315150104.png]]

![[Pasted image 20240315150112.png]]

#### Eigenschaften

![[Pasted image 20240315150210.png]]

### [[Grid-Layout]]

Für komplexere Layouts bietet sich das ebenfalls neuere Grid-Layout an. Statt wie beim [[Flexbox-Layout|Flexbox Layout]] verwendete eindimensionales Layout, gibt es nun ein zweidimensionales Grid.

![[Pasted image 20240315150652.png]]

und in Kombination mit Media Queries.

![[Pasted image 20240315150716.png]]

```css nums
.grid {
	display: grid;
	grid-template-rows: 150px auto auto auto 100px;
	grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
}
```

![[Pasted image 20240315150841.png]]

![[Pasted image 20240315150856.png]]

![[Pasted image 20240315150907.png]]

![[Pasted image 20240315150924.png]]