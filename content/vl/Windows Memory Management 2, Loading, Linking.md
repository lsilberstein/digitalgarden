---
title: Windows Memory Management 2, Loading, Linking
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 5
tags: [OSNW, wise2324, vorlesung]
draft: false
date: 2023-10-16
---

# Windows Memory Management 2, Loading, Linking

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

## [[Virtual Memory address space|Private Virtual Memory]]

![[image_1m.png]]

[[Virtual Memory address space|Private Virtual Memory]] cannot be shared with other [[Process|Processes]]. They are committed [[Pages|Pages]] or also called *private memory*, *private pages* or *private bytes*. The [[Operating System|OS]]'s *commit limit* (this is a [[Policies|Policy]] by the way) bounds the value of how many pages can be committed to a single [[Process]].  
There can be free private process memory. Not all regions in the private address space of a [[Process]] are allocated (*used*). 

## Page Files

> [!Definition]  
> A [[Page File]] (or [[Page File|Paging File]]) is a hidden system file on a hard disk (secondary memory), meaning it should not be visible to the user.

[[Page File|Page Files]] enable the [[Memory Management|MemMan]] to remove infrequently accessed [[Pages]] form [[physical memory]] ([[Pages|Paging]]).

![[image_22.png]]

## Section (Section Objects)

[[Sections]] (or [[Sections|Section Objects]]) are a mechanism to realize [[Shared Memory]]. [[Memory Management|MemMan]] deploys the notion of [[Sections|Section Objects]] to implement [[Shared Memory]]. A [[Sections|Section Object]] surrogates the linear base address of a [[Frames|Page Frame]]. The [[Memory Management|MemMan]] imposes this mechanism between the virtual addresses that a [[Process]] wants to access and the [[physical memory]]. A [[Sections|Section Object]] can be opened by one or many [[Process|Processes]]. This means that [[Sections|Section Objects]] don't necessarily refer to [[Shared Memory]].  
We can also have more than one [[Sections|Section Object]] per [[Process]]. A mapped file can for example be a binary file mapped in [[physical memory]], All [[Sections|Section Objects]] are supported (*backed*) by a kind of disk file like a [[Page File|Page File]] or some other kind of file (like pictures, etc.).

![[image_3.png]]

Here [[Sections|Section Object]] $O_j$ is connected to an open file on disk (called a *[[Sections|file-backed Section Object]]*, the memory part is called a *mapped file*). [[Sections|Section Object]] $O_i$ is called a [[Sections|page-file-backed Section Object]] through associating with committed memory. 

### [[Shared Memory]]

[[Sections|Section Objects]] can also refer to image files (portable executables). Thus, a [[Sections|Section Object]] is also called a *[[File-Mapping-Object]]*.

## [[File-Mapping-Object]]

Use a [[Sections|Section Object]] to map files into a [[Process]] address space. Note that we do not only talk about [[Shared Memory|Shareable Memory]] at this point, but rather the whole process of [[Memory Management]]. The [[Process]] gets access to the [[Sections|Section Object]] instead. This enables reading and writing to [[physical memory]] rather than to the file. What happens when the [[Process]] modifies the [[File-Mapping-Object|Mapped File]]? [[Pages|Paging]] operation. The [[Memory Management|MemMan]] writes the changes back to the [[File-Mapping-Object|Mapped File]] during its normal [[Pages|Paging]] operations.

![[image_13.png]]

[Sysinternals - Sysinternals | Microsoft Learn](https://learn.microsoft.com/en-gb/sysinternals/)

## [[Shared Pages]]

[[Shared Pages|Shared Pages]] are usually mapped to a *view of a [[Sections|Section Object]]*. A view is a selected part of a [[File-Mapping-Object|Mapped File]]. The selection might encompass the whole content or just a portion of the [[Pages|Page]] or data file. All [[Shared Pages]] can potentially be shared with other [[Process|Processes]]. 

![[image_25.png]]

When a [[Shared Pages|Shared Page]] is firstly accessed by a [[Process]], it will be read from the associated [[File-Mapping-Object|Mapped File]]. Later, if it is still resident in [[physical memory]], and other [[Process|Processes]] with rights to get access to is simply use the same [[Pages|Page]] content that is already in memory.

## [[Working Set]] ([[Working Set|WS]])

> [!Definition]  
> The set of [[Pages]] in [[Virtual Memory address space]] of a [[Process]] that is currently resident in [[physical memory]] is called a [[Working Set]] of a process.

Each [[Process]] has an associated minimum and maximum [[Working Set|WS]] size. Default is 50 [[Pages]] min and 345 [[Pages|Pages]] max, though this depends on the version of [[Windows]]. When a [[Process]] is created, the corresponding [[Working Set|WS]]-size is determined. 

## [[Working Set Manager]]

When [[physical memory]] runs low, the [[Working Set Manager]], initiates automatic [[Working Set]] trimming to increase the amount of free memory available in the system. The [[Working Set Manager]] examines available memory and decides which and if any [[Working Set|WS]] needs to be trimmed. If there is enough memory, it calculates how many [[Pages]] could be removed from [[Working Set|Working Sets]] if necessary.

## [[Kernel Heaps]]

![[image_1m.png]]

In order to manage [[Pages]], [[Memory Management|MemMan]] created *two dynamically sized* memory pools at system initialization, aka *[[Kernel Heaps|Heaps]]*, *[[Kernel Heaps|system memory]]* or *[[Kernel Heaps|memory pools]]*. Both [[Kernel Heaps|memory pools]] are located in [[Kernel Address Space|KAS]]. Most [[Windows executive|Executive Layer]] components use these [[Kernel Heaps|memory pools]] to allocate required memory. Besides, memory assignment to [[Virtual Memory address space|Virtual Memory]] of every [[Process]] comes from these [[Kernel Heaps|memory pools]]. 

The *non-paged pool* is dedicated to the system ([[Operating System|OS]]). It consists of ranges of system *virtual addresses*. They are guaranteed to reside in [[physical memory]] at all times and to be accessed at any time without incurring a [[Page Fault Exception|Page Fault Exception]]. This is mainly useful for IO tasks. There is the possibility to access this [[Kernel Heaps|memory pool]] via certain API functions. This is sometimes useful when having to use code at all times (for example when using an anitvirus-program).  
The *paged pool* is a region of [[Virtual Memory address space|Virtual Memory]] is system space that can be paged into and out of the system. [[Memory Management|MemMan]] provides routines to allocate and deallocate from this paged pool.  
Per default, the [[Operating System|OS]] starts with four pages pools and one non-paged pool. [[Memory Management]] can create more [[Kernel Heaps|memory pools]] up to a maximum of 64. [[Windows]] dynamically chooses the maximum size of the [[Kernel Heaps|memory pools]] and allows a given pool to grow from its initial size to the maximum.

| Pool Type | Maximum of 32-Bit Systems | Maximum on 64-Bit Systems |
| ---- | ---- | ---- |
| Non-paged | 75% of [[physical memory]] or 2GB, whichever is smaller | 75% of [[physical memory]] or 128GB, whichever is smaller |
| Paged | 2GB | 128GB |

## [[Pages|Page]] Sizes

The processors on which [[Windows]] runs might support two [[Pages|Page]] sizes: Small and Large. The actual sizes may vary on the processor architecture.

| Architecture | Small Page Size | Large Page Size | Small Pages per Large Page |
| ---- | ---- | ---- | ---- |
| x86 | 4KB | 4MB | 1024 (512 with PAE) |
| x64 | 4KB | 2MB | 512 |

If a [[Pages|Page]] is too large, memory might not get used. If a [[Pages|Page]] is too small you might need multiple pages which can have an impact on performance. Therefore, a balance between these two aspects is important. 

## Loading and Linking

> [!Definition]  
> The [[Image Loader]] is a mechanism that loads an *image file* (aka portable executable or executable) to create a [[Process Object]] from it (also called *[[Image Loader|Ldr]]*).

This mechanism is not only for user [[Process|Processes]], but also the [[Process|Processes]] in [[Kernel Address Space|KAS]]. The system call interface, realised by [[Ntdll|ntdll]] provides the [[Image Loader]] mechanism. Components in [[Kernel Address Space|KAS]] are based on [[Process|Processes]] and thus use the [[Image Loader|Ldr]] as well. [[Ntdll]] is loaded. This ensures that [[Image Loader|Ldr]] is always in [[physical memory]]. To start a [[Process]], the [[Operating System|OS]] employs the [[Image Loader|Ldr]] to create a specific *[[Process Object]]* for it. Indeed this [[Process Object]] is the representation in the [[Process]] container in [[physical memory]].

> [!Warning]  
> [[Windows]] uses the term *[[Object]]* to refer to the representation for a [[Resources|resource]].  
> ![[image_14.png]]  
> The Term [[Object]] is not equivalent to the OOP term *Object* that refers to structure consisting of attributes and methods. It rather corresponds to the OOP term *Object* by means of a predefined structure. 

Creating a [[Process Object]] does not mean that the execution of [[Thread|Threads]] within that [[Process]] starts. The [[Process Object]] rather represents the [[Process]] and is used to prepare its context and execution requirements.

# Anki

#todo
