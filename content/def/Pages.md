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

A [[Pages|Page Table]] is needed to translate (map) virtual to physical addresses. Two parts are required to represent an address that can be used by the [[Central Processing Unit|CPU]]:

1. A [[Pages|Page]] number ($p$)
2. A [[Pages|Page]] offset ($d$)

used as an index into a [[Pages|Page Table]] which contains a *base address* of each [[Pages|Page]] in [[physical memory]] combined with the base address to define the [[physical memory|Physical Memory]] address to the memory unit. 

![[Pasted image 20231022231237.png]]

> [!Info]  
> Not all [[Pages]] in [[Virtual Memory address space|Virtual Memory Address Space]] are represented in [[Linear Address Space|Linear Address Space]]. Each [[Pages|Page]] of a [[Process]] in [[Virtual Memory address space|Virtual Memory]] might be in [[physical memory]] or it may be on the hard disk.
> ```mermaid
> flowchart TB
> id1(Required page is available in physical memory?)
> id1 -- No ---> id2(The OS need to go and get that Page)
> id1 -- Yes ---> id3(The OS simply uses that page\nof memory and grabs the data\nbeing requested)
> ```

## States of [[Pages]] in a [[Process]]

There are four stages, a [[Pages|Page]] can be in: 

1. free
2. reserved
3. committed (or private)
4. shareable

A [[Pages|Page]] is firstly *free*, meaning it is not attached to any [[Process]]. The [[Pages|Page]] isn't mapped to any [[Frames|Page Frame]] ([[Frames|PF]]) yet. The [[Memory Management|MemMan]] maintains a list of free pages (flags them). A free [[Pages|Page]] usually contains unspecified *dirty* data (we don't know the contents of this [[Pages|Page]]). A [[Pages|Page]] can be *reserved*, meaning the intermediate state prior to committing, for example for possible future use.  
A [[Pages|Page]] can be *committed*, aka private (*dedicated*: not shareable with other [[Process|Processes]]), accessing a *committed or shareable* [[Pages|Page]] induces the [[Memory Management|MemMan]] to translate its [[Virtual Memory address space|Virtual Memory]] address to a valid [[Frames|PF]] in the [[physical memory]]. A [[Pages|Page]] can also be *shared with other [[Process|Processes]]* (*shareable*). Shareable [[Pages]] should only be used for *read-only* memory (for example, for [[subsystem DLLs|DLLs]]). Here, multiple [[Process|Processes]] can access the same content of a [[Frames|PF]] at the same time, but might be *in use* by only one [[Process]]. This can be *prone to conflicts* between two [[Process|Processes]]. Therefore, we need [[Process|Processes]] to resolve these conflicts.

![[image_9.png]]

> [!Info]  
> [[Virtual Memory address space|VAS]]: [[Virtual Memory address space]] is private and assigned to a [[Process]].

If a [[Thread]] attempts to access free or reserved [[Pages]], an [[Exception]] arises. A [[Thread]] calls an API-function to set aside a *range* of *continuous virtual addresses*, i.e. a region of [[Pages]], consuming negligible system [[Resources]]. What is the size of a [[Pages|Page]]? This is dependent on the [[Operating System|OS]]. The [[Memory Management|MemMan]] commits portions of the reserved space as needed as the [[Process]] executes. Or, if the required space is known in advance, a [[Thread]] can *reserve* and *commit* in the same initial function call.  
A committed (private) [[Pages|Page]] that is accessed for the first time is created as a *zeroed [[Pages|Page]]*

> [!Definition]  
> A *zeroed [[Pages|Page]]* is a [[Pages|Page]] that is initialised with zeros, also called *demand-zero*.

In the [[Process]] of [[Pages|Paging]], the [[Memory Management|MemMan]] automatically writes a private [[Pages|Page]] to a *[[Pages|Paging]] file* to free some [[physical memory]].

### What about Shared [[subsystem DLLs|DLL]] Code?

Each [[Process]] would maintain its *private memory*. In the corresponding [[Frames|PF]]s in [[physical memory]], it stores private [[Resources]] such as data and code. Shareable Pages usually share [[subsystem DLLs|DLL]] code and can also share *unmodified data [[Pages]]*. The [[Memory Management|MemMan]] carries out this kind of sharing automatically, because the code [[Pages]] in executable images are mapped as execute-only (or *read-only*).

### Standby Status

*Standby* is kind of another state. A [[Pages|Page]] that has been used by a [[Process]] but later has been removed from the VM of the [[Process]]. A [[Pages|Page]] that is in this kind of state should be called *in standby*. This prevents [[Thread|Threads]] having to reserve and commit [[Pages]] very early on and then not using them for a long time.

### Additional Status for a [[Pages|Page]]

- Call all [[Pages]] in an allocation [[Frames|Frame]] that are not committed *unused [[Pages]]*. 
- If a VM [[Pages|Page]] maps to a [[Pages|Page]] in a [[Frames|Frame]] it is a *valid [[Pages|Page]]*. 
- A *dirty [[Pages|Page]]* is a [[Frames|Page Frame]] that has been written to.
- *Inactive Memory* is Memory that was allocated to a [[Process]] that is no longer running (status right before *standby*).

![[image_2g.png]]

> PTE = [[Pages|Page Table]] Entry ([[Frames|Page Frame]] number + various Flags)

## Page Sizes 

The processors on which [[Windows]] runs might support two [[Pages|Page]] sizes: Small and Large. The actual sizes may vary on the processor architecture.

| Architecture | Small Page Size | Large Page Size | Small Pages per Large Page |
| ---- | ---- | ---- | ---- |
| x86 | 4KB | 4MB | 1024 (512 with PAE) |
| x64 | 4KB | 2MB | 512 |

If a [[Pages|Page]] is too large, memory might not get used. If a [[Pages|Page]] is too small you might need multiple pages which can have an impact on performance. Therefore, a balance between these two aspects is important. 