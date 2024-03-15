---
title: Cascading Style Sheets
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
  - CSS
---

# Cascading Style Sheets

Design und Layout einer [[Webseite]], so wie Textgrößen, -farben, Ränder und Hintergrund.

> [!Definition]  
> [[Cascading Style Sheets|CSS]] ist eine "abgestufte, kaskadierende Stilvorlage".

[Cascading Style Sheets](https://www.w3.org/Style/CSS/)

Bedeutet, [[Cascading Style Sheets|CSS]] ist eine Stilsprache zur Steuerung, wie [[Hypertext Markup Language|HTML]]-Elemente zu visualisieren. Ziel ist es eine Seite attraktiv und ansprechend zu gestalten, so wie UX zu verbessern.  
Idee: Trennung von Struktur ([[Hypertext Markup Language|HTML]]) und optischer Gestaltung ([[Cascading Style Sheets|CSS]]).

![[Pasted image 20240306174805.png]]

## Prinzip

[[Cascading Style Sheets|CSS]]-Regeln bestimmen, wie [[Hypertext Markup Language|HTML]]-Elemente "gestylt" (visualisiert) werden. Diese bestehen aus einem *[[Selektor]]* und der *Deklarationen*. Der [[Selektor]] definiert, welche [[Hypertext Markup Language|HTML]]-Elemente angesprochen werden. Die Deklaration legt die Darstellung fest.

```css
h1 {
	font-family: Arial;
	color: darkblue;
}
```

![[Pasted image 20240306175111.png]]

## Einbinden Von [[Cascading Style Sheets|CSS]]

[[Cascading Style Sheets|CSS]]-Regeln können auf drei Arten und Weisen eingebunden werden:

- Als Externes Stylesheet (External [[Cascading Style Sheets|CSS]]): Separate [[Cascading Style Sheets|Css]]-Datei wird in [[Hypertext Markup Language|HTML]]-Dokument eingebunden.
- Als Internes Stylesheet (Internal [[Cascading Style Sheets|CSS]]): Im Kopfbereich der [[Webseite]] werden Styles innerhalb des `<style>` Elements definiert.
- Als Inline Styles (Inline [[Cascading Style Sheets|CSS]]): [[Cascading Style Sheets|Css]]-Deklarattion direkt in einem [[Hypertext Markup Language|HTML]]-Element

## Negation Von [[Cascading Style Sheets|CSS]]-Regeln

Wenn eine Bedingung nicht zutreffen darf, so kann `:not` verwendet werden. Beispielsweise bezieht sich `p:not(.ital)` auf jedes `<p>`, das nicht der Klassen `.ital` angehört und `p :not(.ital)` auf jeden Nachfahren von `<p>`, der nicht der Klassen `.ital` angehört.

## Vertiefung

- [[Selektor|Selektoren]]
- [[Pseudoklassen]]
- [[Kaskadierung]] und [[Kaskadierung|Spezifität]]
- [[Vererbung]]
- [[Textformatierung]]