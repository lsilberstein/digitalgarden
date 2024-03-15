---
title: Vererbung
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - WEBPROG
  - sose24
draft: false
date:
---

# Vererbung

Einige [[Cascading Style Sheets|CSS]]-Eigenschaften vererben sich an untergeordnete Elemente, wie zum Beispiel Schriftart oder Farbe. Andere [[Cascading Style Sheets|CSS]]-Eigenschaften vererben sich nicht an untergeordnete Elemente, wie `border` oder `background-image`; das wäre auch nicht sinnvoll.

> [!Info]  
> Achtung bei der Vererbung und Angabe relativer Größen, z.B. Schriftgröße von 70% in Eltern- und Kindelement ergibt "49%" Schriftgröße im Kind.

```html
<head>
	<title>CSS</title>
	<style type="text/css">
		body {
			color: blueviolet;
			border: thin solid black;
		}
	</style>
</head>
<body>
	<h1>Teyt1</h1>
	Text2
	<p>Text3</p>
</body>
```

![[Pasted image 20240314095829.png]]