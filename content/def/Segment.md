---
title: Segment
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Segment
  - Segments
  - Segmentation
---
# Segment

> [!Definition]  
> A [[Segment]] is a region inside [[physical memory]]. We can define "Segments" in order to separate Code and Data.
> 
> ```mermaid
> flowchart LR
> e1(Segment Address, \npoints to some start of a segment)
> e2{+}
> e3(offset)
> e4(Address, \npoints to a certain address \nin physical memory)
> 
> e1 --> e2
> e3 --> e2
> e2 --> e4
> ```

## Segmentation Model

When you want to access a byte in [[Linear Address Space]] you need a [[Segment]] selector and an offset as well as a so-called *base address*, which can be gathered using the *[[Global Descriptor Table]]* ([[Global Descriptor Table|GDT]]).

![[Pasted image 20231022172931.png]]

[[Segment]] descriptors provide the base address of [[Segment|segments]] as well as access rights, type and usage information. It gives the processor the *base address* of the [[Segment]] in [[Linear Address Space]].

# TCP

>[!Definition]
>A [[Segment]] carries a header along with data.

