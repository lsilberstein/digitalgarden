---
title: Global Descriptor Table
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - GDT
  - Global Descriptor Table
---

# Global Descriptor Table

When you want to access a byte in [[Linear Address Space]] you need a [[Segment]] selector and an offset as well as a so-called *base address*, which can be gathered using the *[[Global Descriptor Table]]* ([[Global Descriptor Table|GDT]]).

![[Pasted image 20231022172931.png]]

[[Segment]] descriptors provide the base address of [[Segment|segments]] as well as access rights, type and usage information. It gives the processor the *base address* of the [[Segment]] in [[Linear Address Space]].