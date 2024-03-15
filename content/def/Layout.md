---
title: Layout
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

# Layout

Fragestellung: Wie positioniere ich Elemente auf einer [[Webseite]]? Früher wurden häufig [[Hypertext Markup Language|HTML]]-Tabellen zur Positionierung verwendet; diese sollten aber eigentlich nur zur Darstellung tabellarischer Daten genutzt werden. Eine andere Möglichkeit ist daher: [[Cascading Style Sheets|CSS]]-Layoutsysteme.

Block-Elemente werden dabei im Browser in immer neuen Zeilen dargestellt (die Anordnung ist dabei vertikal). Inline-Elemente werden im Textfluss dargestellt (horizontal). Das Verhalten der Blöcke lässt sich durch die [[Cascading Style Sheets|CSS]]-Eigenschaft `display` anpassen (entweder `block` oder `inline`).

![[Pasted image 20240314192728.png]]

Unabhängig davon, ob das `display` Attribut `block` oder `inline` ist, gibt es verschiedene Arten der Positionierung (durch die Eigenschaft `posotion`):

| Value      | Detail                                                                    |
| ---------- | ------------------------------------------------------------------------- |
| `static`   | Normale Anordnung im [[Hypertext Markup Language\|HTML]]-Fluss            |
| `relative` | Ausgehende von normaler Anordnung verschoben (beeinflusst den Rest nicht) |
| `absolute` | Nicht im normalen Fluss, sondern relativ zum umgebenden Element           |
| `fixed`    | Relativ zum Browserfenster, bzw. Viewport                                 |
| `sticky`   | scrollen bis zu einem gewissen Punkt und bleiben dann im Viewport fixiert |
| `inherit`  | wie das Elternelement                                                     |

![[Pasted image 20240314193047.png]]

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			div {
				padding: 25px; border: 2px solid red; margin: 5px;
				width: 300px; height: 50px;
				background-color: antiquewhite;
			}
			#b2 {
				background-color: azure;
				position: relative;
				top:-30px;
				left: 50px;
			}
		</style>
	</head>
	<body>
		<div id="b1"> Block 1</div>
		<div id="b2"> Block 2</div>
		<div id="b3"> Block 3</div>
		<div id="b4"> Block 4</div>
	</body>
</html>
```

![[Pasted image 20240314193250.png]]

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CSS</title>
		<style type="text/css">
			figure {
				position: relative;
				width: 200px;
				border: 1px solid;
			}
			figcaption {
				position: absolute;
				left:0; top: 0;
				width: 100%;
				text-align: center;
				color: white;
				background: darkblue;
			}
		</style>
	</head>
	<body>
		<figure>
			<img src="./images/cat.png" alt="Eine Katze" width="200">
			<figcaption>Ein Bild einer Katze</figcaption>
		</figure>
	</body>
</html>
```

![[Pasted image 20240314193447.png]]

## Vertiefung

- [[Float Layout|Float-Layout]]
- [[Flexbox-Layout]]
- [[Grid-Layout]]