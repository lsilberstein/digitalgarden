---
title: Shorthand Property
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
  - Shorthand Properties
---
# Shorthand Property

Ein *Shorthand Property* kombiniert verschiedene [[Cascading Style Sheets|CSS]]-Eigenschaften. Es spart Schreibarbeit, wenn die Eigenschaft nur einmal definiert werden muss und für viele Elemente gleich bleibt, wie zum Beispiel:

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
