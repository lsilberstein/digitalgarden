---
title: Kontrollstrukturen
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

# Kontrollstrukturen

Es gibt dabei zwei Große Arten von [[Kontrollstrukturen]]. Code soll entweder nur unter bestimmten Bedingungen durchlaufen werden: `if - then - else`. Oder aber Code soll wiederholt durchlaufen werden: Schleifen: `for, while, do`.

## Bedingte Anweisungen

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

## Nullish Coalescing Operator

Die Rückgabe des zweiten Operanden, wenn der der erste Operand `null` oder `undefined` ist.

```js
let nullValue = null; // or undefined
let result = nullValue ?? "ein default Wert";
```

## [[Switch]] Statement

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

## For-Schleife

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

## While Und Do-While Schleifen

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