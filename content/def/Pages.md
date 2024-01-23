---
title: Pages
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Page
  - Pages
  - Page Table
  - Paging
---
# Pages

> [!Definition]  
> A Page is a fixed-size block in [[Virtual Memory address space|Virtual Memory]], which is the same size as [[Frames]].

## Paging Model


> [!Definition]  
> *Paging* is the process of transferring pages between [[physical memory]] and a secondary storage device.

A [[Page Table]] is needed to translate (map) virtual to physical addresses. Two parts are required to represent an address that can be used by the [[Central Processing Unit|CPU]]:

1. A [[Pages|Page]] number ($p$)
2. A [[Pages|Page]] offset ($d$)

used as an index into a [[Page Table]] which contains a *base address* of each [[Pages|Page]] in [[physical memory]] combined with the base address to define the [[physical memory|Physical Memory]] address to the memory unit. 

![[Pasted image 20231022231237.png]]

> [!Info]  
> Not all [[Pages]] in [[Virtual Memory address space|Virtual Memory Address Space]] are represented in [[Linear Address Space|Linear Address Space]]. Each [[Pages|Page]] of a [[Process]] in [[Virtual Memory address space|Virtual Memory]] might be in [[physical memory]] or it may be on the hard disk.
> ```mermaid
> flowchart TB
> id1(Required page is available in physical memory?)
> id1 -- No ---> id2(The OS need to go and get that Page)
> id1 -- Yes ---> id3(The OS simply uses that page\nof memory and grabs the data\nbeing requested)
> ```