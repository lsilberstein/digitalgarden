---
title: Memory Management
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Memory Manager
  - Memory Management
  - MemMan
---
# Memory Management

[[Memory Management|Memory Manager]] is a component in [[Kernel Address Space|KAS]]. As part of the [[Windows executive|Windows Executive]] in [[Kernel Address Space]], the [[Memory Management|Memory Manager]] has two primary tasks:

1. Translating or mapping addresses from a [[Process]]'s [[Virtual Memory address space|Virtual Memory Address Space]] into [[physical memory]], so that when a [[Thread]] of that [[Process]] reads from or writes to a region from the VM, the correct physical address can be found.
2. If a running [[Thread]] from a user or [[Operating System|OS]] [[Process]] is trying to use a *memory byte* that is currently not available in [[physical memory]], the [[Memory Management|Memory Manager]] needs to [[Pages|Page]] some of the contents of memory to disk and bring the content back into [[physical memory]] when needed.

![[Pasted image 20231022192205.png]]