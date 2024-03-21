---
title: Operatoren
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
# Operatoren

Variablen werden genutzt, um Werte zu speichern. [[Operatoren]] werden dagegen genutzt, um mit den Werten zu arbeiten und Variablenwerte zu ändern:

- Arithmetische [[Operatoren]]
- Zuweisung
- Verkettung
- Logische [[Operatoren]]
- Bitweise [[Operatoren]]
- Vergleichsoperatoren

> [!Warning]  
> Vorsicht bei der Vermischung von Typen. ([The Best JavaScript Meme I've Ever Seen, Explained in detail](https://www.freecodecamp.org/news/explaining-the-best-javascript-meme-i-have-ever-seen/))

## Zuweisungsoperator

Dieser wurde schon bei der Initialisierung von Variablen und Konstanten kennengelernt:

```js
let wahr = true;
let keineZahl = '23';
```

## Arithmetische [[Operatoren]]

Arithmetische [[Operatoren]] arbeiten nur mit numerischen Werten

```js
let x = 10 + 4; // Addition
let y = 3-0.6; // Subtraktion
let z = x * y; // Multiplikation
let n = 10/3; // Division
let m = 15%4; // Modulo
let o = -n; // Negation
let p = 2**10; // Exponentiation
x++; // x = x + 1;
x--; // x = x - 1;
let q = true + x; // ??
```

## Verkettungsoperator

Der Operator `+` ist überladen. Für Zeichenketten bewirkt er eine Konkatenation (Verkettung)

```js
let r = "Hello ";
r += "World";
```

Weitere String-Operationen sind u.a. 

```js
r.charAt(1); // Zeichen an der Position 2 (beginnt bei 0)
r.substring(0,4); // Teilzeichenkette
r.length; // Länge String
r.replace("h","w"); // Suchen und Ersetzen
```

## Logische [[Operatoren]]

Logische [[Operatoren]] arbeiten mit Wahrheitswerten

```js
let s = true && false;
s = s || true;
s = !s;
```

## Bitweise [[Operatoren]]

Rechnung auf Bitebene

```js
var bin1 = 0b1000;
var bin2 = 0b1010;
var bin3 = bin1 & bin2; // bitweises Und
var bin4 = bin1 | bin2; // bitweises Oder
var bin5 = bin1 ^ bin2; // bitweises Xor
var bin6 = ~bin1; // bitweise Negation
var bin7 = bin1 << 2; // Linksverschiebung
var bin8 = bin1 >> 2; // Rechtsverschiebung mit Vorzeichen, >>> auffüllen von Nullen
var hex = 0xF; // hex = 15
```

## Vergleichsoperatoren

Vergleich von Werten

```js
var t = 5 < 12; // kleiner
t = 5 > 12; // größer
t = 3 <= 23; // kleiner gleich
t = 234 >= 3 // größer gleich
t = 4 == 5; // gleich
t = 3 === 3; // strikte Gleichheit (Typ)
t = 3 != 3; // ungleich
t = 4 !== 3; // strikte Ungleichheit
t = 0 == false;
console.log(t);
t = 0 === false;
console.log(t);
```