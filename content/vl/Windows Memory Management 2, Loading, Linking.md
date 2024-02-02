---
title: Windows Memory Management 2, Loading, Linking
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 5
tags: [OSNW, wise2324, vorlesung, flashcard]
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
A committed (private) [[Pages|Page]] that is accessed for the first time is created as a *zeroed [[Pages|Page]]*.

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

What does a [[File-Mapping-Object]] allow us to do when it comes to reading and writing to memory? #flashcard
It enables reading and writing to [[physical memory]] and letting [[Memory Management|MemMan]] implement operations to other storage devices.
<!--ID: 1706113782336-->

What happens when a [[Process]] modifies a [[File-Mapping-Object|Mapped File]]? #flashcard
[[Memory Management|MemMan]] imposes [[Pages|Paging]] operations.
<!--ID: 1706113782347-->

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

In order to manage [[Pages]], [[Memory Management|MemMan]] created *two dynamically sized* memory pools at system initialisation, aka *[[Kernel Heaps|Heaps]]*, *[[Kernel Heaps|system memory]]* or *[[Kernel Heaps|memory pools]]*. Both [[Kernel Heaps|memory pools]] are located in [[Kernel Address Space|KAS]]. Most [[Windows executive|Executive Layer]] components use these [[Kernel Heaps|memory pools]] to allocate required memory. Besides, memory assignment to [[Virtual Memory address space|Virtual Memory]] of every [[Process]] comes from these [[Kernel Heaps|memory pools]]. 

The *non-paged pool* is dedicated to the system ([[Operating System|OS]]). It consists of ranges of system *virtual addresses*. They are guaranteed to reside in [[physical memory]] at all times and to be accessed at any time without incurring a [[Page Fault Exception|Page Fault Exception]]. This is mainly useful for IO tasks. There is the possibility to access this [[Kernel Heaps|memory pool]] via certain API functions. This is sometimes useful when having to use code at all times (for example when using antivirus-program).  
The *paged pool* is a region of [[Virtual Memory address space|Virtual Memory]]. Its system space that can be paged into and out of the system. [[Memory Management|MemMan]] provides routines to allocate and deallocate from this paged pool.  
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

What *four* main stages of [[Pages]] exist? #flashcard 
- free
- reserved
- committed (or private)
- shareable
<!--ID: 1706104048265-->

Is a *free* [[Pages|Page]] attached to a [[Process]]? #flashcard
No
<!--ID: 1706113782351-->

How does [[Memory Management|MemMan]] maintain a list of free [[Pages]]? #flashcard
It flags *free* [[Pages]]
<!--ID: 1706113782354-->

What does it mean, when a free [[Pages|Page]] is *dirty*? #flashcard
We don't know the contents of this *dirty* [[Pages|Page]].
<!--ID: 1706113782358-->

Why would [[Memory Management|MemMan]] *reserve* a [[Pages|Page]]? #flashcard
Reserving a [[Pages|Page]] for future use.
<!--ID: 1706113782361-->

*Committed* [[Pages]] can be shared with other [[Process|Processes]]. (True or False) #flashcard
False. Committed [[Pages]] are *private*.
<!--ID: 1706113782366-->

What is [[Memory Management|MemMan]]'s responsibility for a *committed* or *shareable* [[Pages|Page]]? #flashcard
It induces [[Memory Management|MemMan]] to translate a [[Pages]] [[Virtual Memory address space|Virtual Memory]] address to a valid [[Frames|PF]] in [[physical memory]].
<!--ID: 1706113782369-->

When should *shareable* [[Pages]] **only** be used? #flashcard
For *read-only* memory.
<!--ID: 1706113782373-->

What is an adequate example for *shareable* Memory? #flashcard
When sharing for example [[subsystem DLLs|DLL]] code.
<!--ID: 1706113782376-->

What is the default stages a [[Pages|Page]] transitions through? #flashcard
![[image_9.png]]
<!--ID: 1706113782379-->

What happens when a [[Thread]] attempts to access *free* or *reserved* [[Pages]]? #flashcard
An [[Exception]] arises.
<!--ID: 1706113782383-->

How are [[Virtual Memory address space]]s assigned to a [[Thread]]? #flashcard
By the [[Thread]] calling an API-function to set aside a *range of continuous virtual addresses*.
<!--ID: 1706113782386-->

What is a *region of [[Pages]]* also called? #flashcard
A *range of continuous virtual addresses*.
<!--ID: 1706113782390-->

[[Memory Management|MemMan]] *commits* **all** reserved memory for a single [[Process]] during its initialisation. (True or False) #flashcard
False. [[Memory Management|MemMan]] commits portions of the reserved space as needed as the [[Process]] executes.
<!--ID: 1706113782393-->

What is the *definition* of a *zeroed [[Pages|Page]]*? #flashcard
A zeroed [[Pages|Page]] is a [[Pages|Page]] that is initialised with zeros, also called *demand-zero*.
<!--ID: 1706113782396-->

What happens when a committed (private) [[Pages|Page]] is accessed for the first time? #flashcard
That [[Pages|Page]] will be created as a *zeroed [[Pages|Page]]*.
<!--ID: 1706113782400-->

What types of private [[Resources]] are stores in a corresponding [[Frames|PF]] of a [[Process]] in [[physical memory]]? #flashcard 
- data
- code
<!--ID: 1706113782403-->

As what types of memory are *shareable* and *unmodified data [[Pages]]* mapped? #flashcard
As execute-only (or *read-only*) memory
<!--ID: 1706113782407-->

When is a [[Pages|Page]] *in standby*? #flashcard
When a [[Pages|Page]] has been used by a [[Process]] but later has been removed from the VM of that [[Process]].
<!--ID: 1706113782410-->

Why might the *Standby* status be useful, when it comes to [[Thread|Threads]]? #flashcard
*Standby* prevents [[Thread|Threads]] having to reserve and commit [[Pages]] very early on an then not using them for a long time. 
<!--ID: 1706113782413-->

What might be some additional status for a [[Pages|Page]] (besides free, reserved, committed and shareable)? #flashcard 
- unused
- valid
- dirty
- inactive
<!--ID: 1706113782417-->

Is [[Virtual Memory address space|Private Virtual Memory]] shareable with other [[Process|Processes]]? #flashcard
No
<!--ID: 1706113782420-->

What are some terms for [[Virtual Memory address space|Private Virtual Memory]] [[Pages]]? #flashcard 
- private memory
- private pages
- private bytes
<!--ID: 1706113782424-->

Which [[Policies|Policy]] bounds the value of how many pages can be committed to a single [[Process]]? #flashcard
The [[Operating System|OS]]'s *commit limit*
<!--ID: 1706113782427-->

What is the *definition* of a [[Page File]] or [[Page File|Paging File]]? #flashcard
A [[Page File]] (or [[Page File|Paging File]]) is a hidden system file on a hard disk. which enables the [[Memory Management|MemMan]] to remove infrequently accessed [[Pages]] from [[physical memory]] ([[Pages|Paging]]).
<!--ID: 1706113782431-->

What are [[Sections]] (or [[Sections|Section Objects]]) used for? #flashcard
They are used to realize [[Shared Memory|Shared Memory]].
<!--ID: 1706113782434-->

A [[Sections|Section Object]] can only be opened by **one** [[Process]] at a time. (True or False) #flashcard
False. A [[Sections|Section Object]] can be opened by one or many [[Process|Processes]].
<!--ID: 1706113782437-->

Which component deploys the notion of [[Sections|Section Objects]]? #flashcard
[[Memory Management|Memory Manager]]
<!--ID: 1706113782441-->

A [[Sections|Section Object]] **always** refers to [[Shared Memory]]. (True or False) #flashcard
False, since a [[Sections|Section Object]] can also be opened by only one [[Process]].
<!--ID: 1706113782444-->

How is a [[Sections|Section Object]] used to implement [[Shared Memory|Shared Memory]]? #flashcard
A [[Sections|Section Object]] surrogates the linear base address of a [[Frames|Page Frame]]. 
<!--ID: 1706113782447-->

It is possible for a [[Process]] to refer to more than one [[Sections|Section Object]]. (True or False) #flashcard
True.
<!--ID: 1706113782451-->

To what kinds of *Files* can a [[Sections|Section Object]] refer to? #flashcard 
- A [[Page File]]
- some other kind of file, such as pictures
<!--ID: 1706113782454-->

What types of [[Sections|Section Objects]] are shown here? ![[image_3.png]] #flashcard 
- $O_j$ is a [[Sections|file-backed Section Object]]
- $O_i$ is a [[Sections|page-file-backed Section Object]]
<!--ID: 1706113782459-->

What is a *view* in the context of [[Shared Pages]]? #flashcard
A *view* is a selected part of a [[File-Mapping-Object|Mapped File]].
<!--ID: 1706113782462-->

To which destination do [[Shared Pages]] usually map? #flashcard
To a *view of a [[Sections|Section Object]]*
<!--ID: 1706113782466-->

What happens when a [[Shared Pages|Shared Page]] is firstly accessed by a [[Process]]? #flashcard
It will read from the associated [[File-Mapping-Object|Mapped File]].
<!--ID: 1706113782469-->

What happens when the content of a [[Shared Pages|Shared Page]] is already in [[physical memory]] because of some other [[Process]]? #flashcard
The next [[Process]] will use the same [[Pages|Page]] content that is already in [[physical memory]].
<!--ID: 1706113782472-->

What is the definition of a [[Working Set]]? #flashcard
The set of [[Pages]] in [[Virtual Memory address space|Virtual Memory Address Space]] of a [[Process]] that is currently resident in [[physical memory]] is called a [[Working Set]] of a [[Process]].
<!--ID: 1706113782476-->

What are the default minimum and maximum [[Working Set]] sizes? #flashcard
50 min and 345 max
<!--ID: 1706113782479-->

What does the *abbreviation* [[Working Set|WS]] mean? #flashcard
[[Working Set]]
<!--ID: 1706113782482-->

When is the [[Working Set]] size of a [[Process]] determined? #flashcard
When that [[Process]] is created.
<!--ID: 1706113782486-->

What are the *two* tasks of the [[Working Set Manager]]? #flashcard 
1. Initiate [[Working Set|WS]] trimming when [[physical memory]] runs low
2. calculate how many [[Pages]] could be removed from [[Working Set|Working Sets]] if necessary when there is enough memory
<!--ID: 1706113782489-->

What are *three* other terms for [[Kernel Heaps]]? #flashcard 
- [[Kernel Heaps|Heaps]]
- [[Kernel Heaps|system memory]]
- [[Kernel Heaps|memory pool]]
<!--ID: 1706113782492-->

How many, and which *dynamically sized* memory pools are created by [[Memory Management|MemMan]] at system initialization? #flashcard
Two, a *non-paged pool* and a *paged pool*.
<!--ID: 1706113782495-->

Where do [[Kernel Heaps]] exist? #flashcard
in [[Kernel Address Space|KAS]].
<!--ID: 1706113782498-->

Do [[Windows executive|Executive Layer]] components use [[Kernel Heaps]]? #flashcard
Yes. To allocate required memory.
<!--ID: 1706113782501-->

To what types of [[Process|Processes]] is the *non-paged pool* dedicated? #flashcard
It is dedicated to system ([[Operating System|OS]]) [[Process|Processes]].
<!--ID: 1706113782505-->

Why is the *non-paged [[Kernel Heaps|memory pool]]* guaranteed to reside in [[physical memory]] at all times? And why might that be useful? #flashcard
To not incur any [[Page Fault Exception|Page Fault Exception]]. This is mainly useful for *IO tasks*.
<!--ID: 1706113782508-->

What is the *paged [[Kernel Heaps|memory pool]]*? #flashcard
It's a region of [[Virtual Memory address space|Virtual Memory]] that can be paged into and out of the system.
<!--ID: 1706113782511-->

What are the default amount of [[Kernel Heaps|memory pools]] at system startup? #flashcard 
- four paged pools
- one non-paged pool
<!--ID: 1706113782515-->

What is the maximum [[Kernel Heaps|memory pools]] that [[Memory Management|MemMan]] can create? #flashcard
up to a maximum of 64

What *two* types of [[Pages|Page]] sizes exist? #flashcard 
- small
- large
<!--ID: 1706113782518-->

What are drawbacks of [[Pages]] that are too large or too small? #flashcard
If a [[Pages|Page]] is too large, memory might not get used. If a [[Pages|Page]] is too small you might need multiple pages which can have an impact on performance. Therefore, a balance between these two aspects is important. 
<!--ID: 1706113782521-->

What is the actual term for the *abbreviation* [[Image Loader|Ldr]]? #flashcard
[[Image Loader]] or [[Image Loader|Loading]]
<!--ID: 1706113782524-->

What is the *definition* for [[Image Loader]]? #flashcard
The [[Image Loader]] is a mechanism that loads an *image file* to create a [[Process Object]] from it. 
<!--ID: 1706113782528-->

Which system call interface realises the [[Image Loader]] mechanism? #flashcard
[[Ntdll]]
<!--ID: 1706113782531-->

The [[Image Loader]] mechanism is not only for user [[Process|Processes]], but also the [[Process|Processes]] in [[Kernel Address Space|KAS]]. (True or False) #flashcard
True. Components in [[Kernel Address Space|KAS]] are based on [[Process|Processes]] and thus use the [[Image Loader|Ldr]] as well.
<!--ID: 1706113782534-->

What does the term [[Object]] refer to in [[Windows]]? #flashcard
The *representation* of a [[Resources|resource]].
<!--ID: 1706113782538-->
