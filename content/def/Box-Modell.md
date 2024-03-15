---
title: Box-Modell
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
  - Box
  - Boxen
---

# Box-Modell

[[Webseite|Webseiten]] bestehen aus Elementen, die als Box aufgefasst werden können.

![[Pasted image 20240314191541.png]]

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			div {
				border: 1px solid red;
			}
			#absatz1 {
				border: 1px dashed black;
				width: 600px;
			}
			#absatz2 {
				border: 2px dashed darkorange;
				width: 600px;
				padding: 5px;
			}
		</style>
	</head>
	<body>	
		<div>
			<p id="absatz1">	
				…
			</p>
			<p id="absatz2">	
				…
			</p>
		</div>
	</body>	
</html>	
```

![[Pasted image 20240314191810.png]]

## Inline-Box-Modell

Der Inhalt einer Box bestimmt die Höhe und Breite (height, width ohne Wirkung).

```html
<style type="text/css">
	em {
		background-color: grey;
		padding: 25px;
		border: 20px solid red;
		margin: 20px;
	}
</style>
```

![[Pasted image 20240314191959.png]]