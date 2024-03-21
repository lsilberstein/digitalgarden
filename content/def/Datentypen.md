---
title: Datentypen
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
# Datentypen

JS bietet einige primitive [[Datentypen]], wie

- Zahlen
- Zeichenketten
- Wahrheitswerte
- Symbol
- `null` und `undefined`

und auch zusammengesetzte [[Datentypen]], wie

- [[Object]]
- Array
- Function

## Zahlen

Ganzzahlen, Gleitkommazahlen und negative Zahlen lassen sich definieren. Der Datentyp ist dabei `number`.

```js
let nummer1 = 5; // Ganzzahl
let nummer2 = 0.45; // Gleitkommazahl
let nummer3 = -23; // negative Zahl
```

## Zeichenketten

Strings in doppelten oder auch einfachen Anführungszeichen sind Zeichenketten in JS. Zusätzlich gibt es auch Template-Strings (mit Variablen) in `backticks`. In JS gibt es keinen Datentyp für einzelne Zeichen (`char`).

```js
let firstName = "Max";
let lastMName = 'Mustermann';
let buchstabe = 'A';
let keineZahl = '23';
let eingebetteterString = "Das 'Haus' steht.";
let templateString = `Franz, ${keineZahl}, sitzt herum.`;
let fehler = "gemischt';
```

## Wahrheitswerte

Ein Datentyp mit zwei Werten "wahr" (`true`) und "falsch" (`false`).

```js
let wahr = false;
let falsch = true;
```

## Null Und Undefined

`null` und `undefined` sind "leere" [[Datentypen]]. `null` hat einen Typ (`object`), aber keinen Wert. Bedeutet, eine Variable wurde deklariert und `null` zugewiesen:

```js
let x = null;
```

`undefined` ist dabei sowohl Wert als auch Typ.

```js
let x;
```

[Null and Undefined in JavaScript - Scaler Topics](https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/)