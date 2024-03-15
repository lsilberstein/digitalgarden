---
title: Listen
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
  - Liste
---
# Listen

Die Aufzählungszeichen einer Liste können durch [[Cascading Style Sheets|CSS]]-Regeln beeinflusst werden. Für ungeordnete Listen bietet das Attribut `list-style-type` folgende Werte:

- `none` Keine Aufzählungszeichen
- `disc` Schwarzer Kreis (Default)
- `circle` Weißer Kreis mit schwarzem Rahmen
- `square` Schwarzes Quadrat

```html
<ul>
	<li style="list-style-type: none;">Erstes</li>
	<li style="list-style-type: disc;">Zweites</li>
	<li style="list-style-type: circle;">Drittes</li>
	<li style="list-style-type: square;">Viertes</li>
</ul>
```

![[Pasted image 20240314191238.png]]

Für geordnete Listen bietet `list-style-type` unter anderem folgende Werte:

- `decimal` Aufzählung in Dezimalzahlen (1,2,3,…)
- `decimal-leading-zero` Aufzählung in Dezimalzahlen mit vorangestellter 0
- `lower-alpha` Aufzählung in Kleinbuchstaben
- `upper-alpha` Aufzählung in Großbuchstaben
- `lower-roman` Aufzählung in römischen Zahlen
- `upper-roman` Aufzählung in römischen Zahlen
