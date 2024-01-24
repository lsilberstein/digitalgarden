---
title: Kernel Heaps
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Heaps
  - system memory
  - memory pool
  - memory pools
---

# Kernel Heaps

![[image_1m.png]]

In order to manage [[Pages]], [[Memory Management|MemMan]] created *two dynamically sized* memory pools at system initialization, aka *[[Kernel Heaps|Heaps]]*, *[[Kernel Heaps|system memory]]* or *[[Kernel Heaps|memory pools]]*. Both [[Kernel Heaps|memory pools]] are located in [[Kernel Address Space|KAS]]. Most [[Windows executive|Executive Layer]] components use these [[Kernel Heaps|memory pools]] to allocate required memory. Besides, memory assignment to [[Virtual Memory address space|Virtual Memory]] of every [[Process]] comes from these [[Kernel Heaps|memory pools]]. 

The *non-paged pool* is dedicated to the system ([[Operating System|OS]]). It consists of ranges of system *virtual addresses*. They are guaranteed to reside in [[physical memory]] at all times and to be accessed at any time without incurring a [[Page Fault Exception|Page Fault Exception]]. This is mainly useful for IO tasks. There is the possibility to access this [[Kernel Heaps|memory pool]] via certain API functions. This is sometimes useful when having to use code at all times (for example when using an anitvirus-program).  
The *paged pool* is a region of [[Virtual Memory address space|Virtual Memory]] is system space that can be paged into and out of the system. [[Memory Management|MemMan]] provides routines to allocate and deallocate from this paged pool.  
Per default, the [[Operating System|OS]] starts with four pages pools and one non-paged pool. [[Memory Management]] can create more [[Kernel Heaps|memory pools]] up to a maximum of 64. [[Windows]] dynamically chooses the maximum size of the [[Kernel Heaps|memory pools]] and allows a given pool to grow from its initial size to the maximum.

| Pool Type | Maximum of 32-Bit Systems | Maximum on 64-Bit Systems |
| ---- | ---- | ---- |
| Non-paged | 75% of [[physical memory]] or 2GB, whichever is smaller | 75% of [[physical memory]] or 128GB, whichever is smaller |
| Paged | 2GB | 128GB |
