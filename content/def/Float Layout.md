---
title: Float Layout
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
  - Float-Layout
---
# Float Layout

Das Float-Layout beeinflusst, wie sich Elemente bezogen auf den umgebenden Textfluss verhalten. Dafür wird die [[Cascading Style Sheets|CSS]]-Eigenschaft `float` verwendet. Damit lassen sich Elemente an den linken oder rechten Rand des umgebenden [[Hypertext Markup Language|HTML]]-Blocks setzen. Das Float-Layout wurde häufig für das Gesamtlayout verwendet, mittlerweile gibt es aber flexiblere Alternativen (`flexbox` und `grid-layout`).

Siehe hier ein ungestyltes Float-Layout

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

Mit Float-Layout:

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

![[Pasted image 20240315144251.png]]