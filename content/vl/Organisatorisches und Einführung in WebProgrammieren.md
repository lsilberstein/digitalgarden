---
title: Organisatorisches Und Einführung in WebProgrammieren
description: 
type: Vorlesung
kurs: Webprogrammierung
vorlesungnr: 1
aliases: [Organisatorisches Und Einführung in WebProgrammieren]
tags:
  - WEBPROG
  - sose24
  - vorlesung
draft: false
date: 2024-03-06
linter-yaml-title-alias: Organisatorisches Und Einführung in WebProgrammieren
---

# Organisatorisches Und Einführung in WebProgrammieren

An erster Stelle sollen hier einmal ein paar Grundbegriffe definiert werden.

## [[Internet]]

*Internet*:= Interconnected [[Networking|Networks]]

Der Vorläufer ARPANET wurde bereits 1969 von amerikanischen Forschungseinrichtungen im Auftrag der Airforce entwickelt. In den 1980er und 1990er Jahren Entwicklung der wichtigsten Internet [[Protocol|Protocols]] ([[TCPIP protocol stack|TCPIP]], [[Domain Name System|DNS]], …) und weltweite Verbreitung.  
Ermöglicht die Nutzung von Diensten, wie [[Wold Wide Web|WWW]], Email, [[File Transfer Protocol|FTP]], [[Secure Shell|SSH]], …

## [[Networking|Networks]]

- [[OSI reference model]]
- [[TCPIP protocol stack|TCPIP]]

## [[Wold Wide Web]]

Auch [[Wold Wide Web|Web]], [[Wold Wide Web|WWW]]. Ein System von verlinkten Dokumenten, den [[Webseite|Webseiten]]. Diese werden über [[Hyper Text Transfer Protocol|HTTP]](s) übertragen. 

## [[Webseite]]

Ein einzelnes Dokument ([[Hypertext Markup Language|HTML]])

### Statische [[Webseite]]

![[Pasted image 20240306163922.png]]

### Dynamische [[Webseite]]

![[Pasted image 20240306163931.png]]

## [[Website]]

Eine Sammlung von Dokumenten, ein Internetauftritt.

## [[Webanwendung]]

Eine Anwendung, die über das [[Wold Wide Web|Web]] erreichbar ist. Auch *rich internet application* genannt.

## [[Client]]

Teil, auf dem der [[Client]] ausgeführt wird, wird auch Frontend genannt. 

![[Pasted image 20240306163040.png]]

## [[Server]]

Teil, auf dem [[Server]] ausgeführt wird. *Backend*

![[Pasted image 20240306163042.png]]

## [[Uniform Resource Locator]]

Die Identifikation von Dokumenten passiert über [[Uniform Resource Locator|URLs]]. Der Host identifiziert den Webserver. 

![[Pasted image 20240306163303.png]]

## [[Domain Name System]]

Der Hostname wird mithilfe des [[Domain Name System|DNS]] ([[Domain Name System]]) in eine [[IP Address]] übersetzt, zu der eine [[Routing|Route]] zum Zielsystem in [[Internet]] gefunden werden kann.

![[Screenshot 2024-03-06 at 4.34.41 PM.png]]

## [[Hypertext Markup Language]]

Definiert die Struktur einer [[Webseite]] durch z.B. Kopf, Fußzeilen und Hauptinhalt, …

[[Hypertext Markup Language|HTML]] ist eine Auszeichnungssprache (deklarativ) und damit keine Programmiersprache. Es legt die *Struktur*, aber nicht das *Layout* einer [[Webseite]] fest.

```html nums
<!DOCtYPE html>
	<html>
		<head>
			<title>Die erste Webseite</title>
		</head>
		<body>
			Noch fast leer.
		</body>
	</html>
```

[W3Schools Online Web Tutorials](https://www.w3schools.com/)

### Element

Eine Komponente der [[Webseite]], mit denen die Struktur festgelegt wird. Ein öffnendes und schließendes `<Tag/>` (auch kombinierbar wenn kein Inhalt gewünscht, jedoch von älteren Browsern u.U. nicht vollständig unterstützt).  
Als Beispiel ist `<h2>` ein öffnendes Tag für eine Überschrift auf zweiter Ebene und `</h2>` das schließende Tag dazu passend.

### Attribut

Um zusätzliche Informationen und Parameter an Tags hinzuzufügen können Attribute hinzugefügt werden. 

```html
<a href = "http://www.ostfalia.de">Hier geht es zu einer Homepage</a>
```

### Textauszeichnungen

- Überschriften, sechs Ebenen (`<h1>` .. `<h6>`)
- Absätze - etwas Abstand zwischen zwei Zeilen `<p>`
- Kursiv, italic `<i>`
- Fett gedruckt, bold `<b>`
- Hervorhebung, Betonung `<em>` und `<strong>`, standardmäßig kursiv bzw. fett
- Hoch- und tiefstellen `<sup>` bzw. `<sub>`
- Zeilenumbruch `<br> <br/>`
- Zitate, Quellenangaben mit `<blockquote>`, `<q>` und `<cite>`
- Abkürzungen `<abbr>`
- Begriffsdefinition `<dfn>`

### Listen

| Name                              | Code   | Beispiel                                  |
| --------------------------------- | ------ | ----------------------------------------- |
| Geordnete Listen mit Nummerierung | `<ol>` | ![[Pasted image 20240306171125.png\|200]] |
| Ungeordnete Listen                | `<ul>` | ![[Pasted image 20240306201259.png\|200]] |
| Definitionslisten                 | `<dl>` | ![[Pasted image 20240306201338.png\|200]] |

### Links

Verweise von einer [[Webseite]] auf eine andere. Es gibt verschiedene Arten von Links

- Externe Links
- Relative Links
- Interne Links

Alle Links werden mit dem `<a>`-Element und dem `href` Attribut erzeugt:

```html
<a href="http://www.ostfalia.de">Hier geht es zu einer Homepage</a>
```

### Bilder

Verschiedene Dateiformate mit unterschiedlichen Eigenschaften. Das `<img>`-Element ist wie `<br>` ein *leeres* Element. [[Hypertext Markup Language|HTML]] unterstützt auch das `figure`-Element, mit Bild und Bildunterschrift (`figcaption`).

```html
<img
	 src = "images/Mona_Lisa.jpg"
	 alt = "Mona Lisa"
	 title = "Die Mona Lisa"
/>
```

| Bildformat | Kompression     | Farbspektrum              | Transparent                               | Animationen          | Skalierung | Kommentar                                           |
| ---------- | --------------- | ------------------------- | ----------------------------------------- | -------------------- | ---------- | --------------------------------------------------- |
| JPG / JPEG | verlustbehaftet | ca. 16.8 Millionen Farben | nein                                      | -                    | -          | Viele Farben; daher häufig genutzt für Fotographien |
| GIF        | verlustfrei     | maximal 256 Farben        | einfache Transparenz                      | einfache Animationen | -          | In Kombination mit Social Media                     |
| PNG-8      | verlustfrei     | maximal 256 Farben        | 4-Bit Transparenz mit 16 Stufen pro Pixel | -                    | -          | Ähnlich zu JPG + Transparenz                        |
| PNG-24     | velustfrei      | ca. 16,8 Millionen Farben | einfache Transparenz                      | -                    | -          | s.o.                                                |
| PNG-32     | verlustfrei     | ca. 16,8 MIllionen Farben | Alpha-Kanal                               | -                    | -          | Möglichkeiten wie JPG und GIF                       |
| SVG        | verlustfrei     | ca. 16,8 Millionen Farben | Alpha-Kanal                               | Animationen möglich  | ja         | Vektorgrafik, beliebig Skalierbar                   |
| WebP       | verlustfrei     | ca. 16.8 Millionen Farben | Alpha-Kanal                               | Animationen möglich  | -          | -                                                   |
| WebP       | verlustbehaftet | ca. 16.8 MIllionen Farben | Alpha-Kanal                               | Animationen möglich  | -          | -                                                   |

### Video, Audio

Einfach möglich mit [[Hypertext Markup Language|HTML]], früher Flash. Entsprechende Elemente sind vorhanden. MP4 wird weitgehend unterstützt, ggf. alternatives Format anbieten. Dazu existieren einige Attribute zur Steuerung wie `autoplay`, `muted`, `loop`, `controls`.

```html
<video controls height="360" width="640">
	<source src="my-video.mp4" type="video/mp4" >
	<source src="my-video.ogg" type="video/ogg" >
	<p>Der verwendete Browser unterstützt HTML5-Video nicht</p>
</video>
<audio controls>
	<source src="my-audio.m4a" type="audio/x-aac" />
	<source src="my-audio.mp3" type="audio/mpeg" />
</audio>
```

### Tabellen

Tabellen bestehen aus *Spalten* und *Zeilen*. Das Tag `<table>` definiert eine neue Tabelle. `<tr>` leitet eine neue Zeile ein. `<td>` fügt eine Zelle ein. Spalten sind implizit. Die Kopfzeile der Tabelle wird mit dem Tag `<th>` ausgewiesen.  
Zellen können sich auch über mehrere Zeilen oder mehrere Spalten erstrecken. Dafür können die Attribute `colspan` und `rowspan` verwendet werden. 

> [!Warning]  
> Tabellen sollen nicht genutzt werden, um die Struktur der Seite zu beschreiben!

### Formulare (Forms)

Formulare dienen dazu, Benutzeingaben an den Webserver zu schicken. Basierend auf den gesendeten Daten kann der Webserver dann eine Antwort generieren (z.B. Suchergebnisse liefern). Einige Eingabeelemente sind:

- Textfelder zur Eingabe eines kurzen Texts
- Passwortfelder
- Textbereiche zur Eingabe längerer Texte
- Radiobuttons, Checkboxes zur Auswahl von Optionen
- Auswahllisten
- Dateiuploads
- Schaltflächen bzw. Buttons

```html
<form action="/service/process-form" method="POST">
	<fieldset>
		<legend>Persönliche Angabe</legend>
		<label>
			Vorname:
			<input type="text" name= "firstname" size="20" maxlength="50"/>
		</label>
		<br/>
		<label>
			Nachname:
			<input type="text" name="lastname" size="30" maxlength="70"/>
		</label>
		<br/>
		<label>
			E-Mail:
			<input type="email" name="email" size="30" maxlength="70"/>
		</label>
		<br/>
		<label>
			Passwort:
			<input type="password" name="password" size="20" maxlength="30"/>
		</label>
		<br/>
	</fieldset>
</form>
```

Über das `action`-Attribut wird festgelegt, an welche [[Uniform Resource Locator|URL]] die Formulardaten geschickt werden sollen. Die `method` gibt an, welche [[Hyper Text Transfer Protocol|HTTP]]-Methode verwendet wird. `submit` als type wird benötigt, um eine Schaltfläche zu erzeugen, die zum Absenden des Formulars führt. Formulardaten werden als Name-Wert-Paar and den Webserver gesendet. Hierfür wurde das Attribut `name` jeweils definiert.

### Misc

- Blockelemente vs. Inline-Elemente: Die Darstellung beginnt in neuer Zeile vs. in der aktuellen Zeile
- Gruppierungen: `<div>` Text und Elemente als Block, `<span>` zur Gruppierung inline.
- Besondere Attribute: `id` ist wichtig für [[Cascading Style Sheets|CSS]], damit Element referenziert werden kann. IDs identifizieren genau ein Element; `class`: Zuordnung des Elements zu einer Klasse, die mit [[Cascading Style Sheets|CSS]] einheitlich gestylt wird. Klassen identifizieren mindestens ein Element.
- Maskierung oder Escape-Codes: z.B: `<` oder `>`
- Kommentare: `<!-- -->`
- Metadaten: Innerhalb des `head`-Tags über `meta`-Tag können Metadaten abgelegt werden, zum Beispiel zur Suchmaschinenoptimierung.
- Strukturelle Elemente: Seit HTML5 sind weitere Elemente zur Beschreibung der Struktur der [[Webseite]], z.B. `header`, `footer`, `article`, `nav`, `aside`, `section` vorhanden.

## [[Cascading Style Sheets]]

Design und Layout einer [[Webseite]], so wie Textgrößen, -farben, Ränder und Hintergrund.

> [!Definition]  
> [[Cascading Style Sheets|CSS]] ist eine "abgestufte, kaskadierende Stilvorlage".

[Cascading Style Sheets](https://www.w3.org/Style/CSS/)

Bedeutet, [[Cascading Style Sheets|CSS]] ist eine Stilsprache zur Steuerung, wie [[Hypertext Markup Language|HTML]]-Elemente zu visualisieren. Ziel ist es eine Seite attraktiv und ansprechend zu gestalten, so wie UX zu verbessern.  
Idee: Trennung von Struktur ([[Hypertext Markup Language|HTML]]) und optischer Gestaltung ([[Cascading Style Sheets|CSS]]).

![[Pasted image 20240306174805.png]]

### Prinzip

[[Cascading Style Sheets|CSS]]-Regeln bestimmen, wie [[Hypertext Markup Language|HTML]]-Elemente "gestylt" (visualisiert) werden. Diese bestehen aus einem *Selektor* und der *Deklarationen*. Der Selektor definiert, welche [[Hypertext Markup Language|HTML]]-Elemente angesprochen werden. Die Deklaration legt die Darstellung fest.

```css
h1 {
	font-family: Arial;
	color: darkblue;
}
```

![[Pasted image 20240306175111.png]]

### Einbinden von [[Cascading Style Sheets|CSS]]

[[Cascading Style Sheets|CSS]]-Regeln können auf drei Arten und Weisen eingebunden werden:

- Als Externes Stylesheet (External [[Cascading Style Sheets|CSS]]): Separate [[Cascading Style Sheets|Css]]-Datei wird in [[Hypertext Markup Language|HTML]]-Dokument eingebunden.
- Als Internes Stylesheet (Internal [[Cascading Style Sheets|CSS]]): Im Kopfbereich der [[Webseite]] werden Styles innerhalb des `<style>` Elements definiert.
- Als Inline Styles (Inline [[Cascading Style Sheets|CSS]]): [[Cascading Style Sheets|Css]]-Deklarattion direkt in einem [[Hypertext Markup Language|HTML]]-Element

### Selektoren

Es gibt verschiedene Möglichkeiten, zu selektieren, welche [[Hypertext Markup Language|HTML]]-Elemente von einer [[Cascading Style Sheets|CSS]]-Regel betroffen sind. Selektion erfolgt anhand des Typs, einer Klasse, der ID, etc..
## [[JavaScript]]

Programmiersprache, um Anwendungslogik und Interaktion auf der [[Webseite]] zu bringen. Wir zum Beispiel benutzt, um 

- Felder zu validieren
- Sortieren / Filtern von Tabellen
- dynamisches Generieren von Inhalten
- …

## [[Software-Stacks]]

*Stack*:= Stapel

Ein Software-Stack ist eine aufeinander aufbauende Menge von Anwendungen und Plattformen, die im Zusammenspiel die Lösung bilden. Webentwicklung unterscheidet of zwischen Clientseitigem Stack.