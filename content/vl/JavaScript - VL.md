---
title: JavaScript - VL
description: 
type: Vorlesung
kurs: Webprogrammierung
vorlesungnr: 4
tags:
  - WEBPROG
  - vorlesung
  - sose24
draft: false
date: 2024-03-20
---

# JavaScript - VL

[[Javascript]] Skripte werden typischerweise separat in der Verzeichnisstruktur des Projekts verwaltet. Im Folgenden heißt der Ordnet für die Skripte `js`. Dort werden die Dateien abgelegt. In der Regel gibt es ebenfalls einen Ordner für die Stylesheets, z.B. [[Cascading Style Sheets|CSS]] oder `styles`. 

## JavaScript Einbinden

Siehe hier eine Beispielhafte [[JavaScript]] Datei:

```js
"use strict";
alert("Hello World!");
```

In der [[Hypertext Markup Language|HTML]] Datei wird die JS Datei dann wie folgt eingefügt:

```html
<body>
	<script src="js/main.js"></script>
</body>
```

Das Skript kann auch innerhalb einer [[Hypertext Markup Language|HTML]] Datei definiert werden (ist aber nicht ratsam!).

```html
<script>
	alert("Hello World!");
</script>
```

## NoScript

Das `<noscript>`-Element wird vom Browser nur dargestellt, wenn [[JavaScript]] abgeschaltet ist oder nicht unterstützt wird. Das ist aber nur noch selten der Fall.

## JavaScript - Allgemein

[[JavaScript]] ist eine höhere, interpretierte Programmiersprache und Multi-Paradigma (imperativ, OO, funktional) und dynamisch typisiert.

![[Pasted image 20240321122652.png]]

## Variablen Und Konstanten

Variablen werden mit dem Schlüsselwort `let` (block [[Scopes|scope]]) oder `var` (function [[Scopes|scope]]) eingeführt. Konstanten mit `const` deklariert und initialisiert.

```js
"use strict";
let firstName;
firstName = 'Max';
let lastName = 'Mustermann';
var x;
x = 2;
const MAXIMUM = 1000;
```

## Reservierte Wörter

[JavaScript/Bezeichner – SELFHTML-Wiki](https://wiki.selfhtml.org/wiki/JavaScript/Bezeichner#Reservierte_W.C3.B6rter)

## [[Datentypen]]

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

### Zahlen

Ganzzahlen, Gleitkommazahlen und negative Zahlen lassen sich definieren. Der Datentyp ist dabei `number`.

```js
let nummer1 = 5; // Ganzzahl
let nummer2 = 0.45; // Gleitkommazahl
let nummer3 = -23; // negative Zahl
```

### Zeichenketten

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

### Wahrheitswerte

Ein Datentyp mit zwei Werten "wahr" (`true`) und "falsch" (`false`).

```js
let wahr = false;
let falsch = true;
```

### Null Und Undefined

`null` und `undefined` sind "leere" [[Datentypen]]. `null` hat einen Typ (`object`), aber keinen Wert. Bedeutet, eine Variable wurde deklariert und `null` zugewiesen:

```js
let x = null;
```

`undefined` ist dabei sowohl Wert als auch Typ.

```js
let x;
```

[Null and Undefined in JavaScript - Scaler Topics](https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/)

## [[Operatoren]]

Variablen werden genutzt, um Werte zu speichern. [[Operatoren]] werden dagegen genutzt, um mit den Werten zu arbeiten und Variablenwerte zu ändern:

- Arithmetische [[Operatoren]]
- Zuweisung
- Verkettung
- Logische [[Operatoren]]
- Bitweise [[Operatoren]]
- Vergleichsoperatoren

> [!Warning]  
> Vorsicht bei der Vermischung von Typen. ([The Best JavaScript Meme I've Ever Seen, Explained in detail](https://www.freecodecamp.org/news/explaining-the-best-javascript-meme-i-have-ever-seen/))

### Zuweisungsoperator

Dieser wurde schon bei der Initialisierung von Variablen und Konstanten kennengelernt:

```js
let wahr = true;
let keineZahl = '23';
```

### Arithmetische [[Operatoren]]

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

### Verkettungsoperator

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

### Logische [[Operatoren]]

Logische [[Operatoren]] arbeiten mit Wahrheitswerten

```js
let s = true && false;
s = s || true;
s = !s;
```

### Bitweise [[Operatoren]]

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

### Vergleichsoperatoren

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

## [[Kontrollstrukturen]]

Es gibt dabei zwei Große Arten von [[Kontrollstrukturen]]. Code soll entweder nur unter bestimmten Bedingungen durchlaufen werden: `if - then - else`. Oder aber Code soll wiederholt durchlaufen werden: Schleifen: `for, while, do`.

### Bedingte Anweisungen

Der Inhalt der `if`-Zweigs wird nur ausgeführt, wenn die Bedingung zu `true` ausgewertet wird, andernfalls wird der `else`-Zweig ausgeführt (optional).

```js
let password = document.getElementById('passwd').value;
let passwordTooShort = password.length < 10;
let message = '';

if (passwordTooShort) {
	message = 'Das Passwort muss min. 10 Zeichen enthalten.';
} else {
	message = 'Das Passwort erfüllt die Bedingungen.';
}

document.getElementById('info').textcontent = message;
```

Mehrere Bedingungen lassen sich dabei mit `else if` prüfen:

```js 
if (passwordTooShort) {
	message = 'Das Passwort muss min. 10 Zeichen enthalten.';
} else if (passwordTooLong) {
	message = 'Ein Passwort darf maximal 50 Zeichen lang sein.';
} else {
	message = 'Das Passwort erfüllt die Bedingungen.';
}
```

### Nullish Coalescing Operator

Die Rückgabe des zweiten Operanden, wenn der der erste Operand `null` oder `undefined` ist.

```js
let nullValue = null; // or undefined
let result = nullValue ?? "ein default Wert";
```

### [[Switch]] Statement

Gleiche Bedingungen, aber viele "Verzweigungen".

```js
switch(testResult) { // Prüfe das Testergebnis
	case 0: // Hat dieses den Wert 0,
		icon = 'pass.png'; // wird der Bildname "pass.png" verwendet.
		break; // Abbruch der switch-Anweisung
	default:
		icon = 'unknown.png';
}
```

### For-Schleife

Auch Zählschleife genannt; Initialisierung, Bedingung, Schleifenrumpf, Inkrementierung.

```js
for (let i = 1; i <= 10; i++) {
	console.log(i);
}
```

Ebenfalls möglich als For-Each-Schleife

```js
let autos = ["Fiat", "VW", "Ford", "Opel"];
for (let a in autos) {
	console.log(a); // Ausgabe?
}
```

### While Und Do-While Schleifen

I think there is nothing more to say here:

```js
let i = 1; // Init
while (i <= 10) { // Bedingung
	console.log(i); // Anweisung
	i++; // Inkrementierung
}```

```js
let j = 10;
do {
	console.log(j);
	j--;
} while (j >= 0)
```

