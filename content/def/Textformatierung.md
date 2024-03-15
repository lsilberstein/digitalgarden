---
title: Textformatierung
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - sose24
  - WEBPROG
draft: false
date:
---
# Textformatierung
## Farben

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

## Schriftart

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

## Schriftgröße

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

## Schriftschnitt

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

## Weitere

Umwandlung in *uppercase* oder *lowercase* mit `text-transform`. Durchstreichen, unterstreichen oder blinken lassen mit `text-decoration`. Zeilenabstand mit `line-height` ändern. Buchstabenabstand über `letter-spacing` steuerbar. Wortabstand per `word-spacing` festlegen. Horizontale Ausrichtung mit `text-align` beeinflussen, vertikale Ausrichtung mit `vertical-align`. Einrückung mit `text-indent` und Schatteneffekte mit `text-shadow`.