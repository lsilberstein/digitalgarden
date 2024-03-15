---
title: Grid-Layout
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
  - Grid Layout
---
# Grid-Layout

Für komplexere Layouts bietet sich das ebenfalls neuere Grid-[[Layout]] an. Statt wie beim [[Flexbox-Layout|Flexbox Layout]] verwendete eindimensionales [[Layout]], gibt es nun ein zweidimensionales Grid.

![[Pasted image 20240315150652.png]]

und in Kombination mit Media Queries.

![[Pasted image 20240315150716.png]]

```css nums
.grid {
	display: grid;
	grid-template-rows: 150px auto auto auto 100px;
	grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
}
```

![[Pasted image 20240315150841.png]]

![[Pasted image 20240315150856.png]]

![[Pasted image 20240315150907.png]]

![[Pasted image 20240315150924.png]]