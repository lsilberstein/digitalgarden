---
title: physical memory
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Physical Memory
  - Physical Address Space
---
# Physical Memory


![[Pasted image 20231022155830.png]]

See here [[physical memory]] with $2^4$ addressable bytes. The data-bus is used to transfer bytes from inside the [[physical memory]] to other parts of the PC. The address space that a 32-bit processor can address it its *address bus* is roughly $4$ Gigabytes ($2^{32}$ bytes). This address space is *flat*, meaning it is not differentiated.

## Physical Memory Segregation

In most multi-user [[General Purpose Operating Systems|GPOS]]'s, a [[User Application Space|user mode]] code or application is separated from the [[Operating System|OS]] itself. It is realized by dividing the available [[physical memory]], which is in fact hardware, into two separate partitions: 

1. [[User Application Space]] ([[User Application Space|UAS]]) 
2. [[Kernel Address Space]] ([[Kernel Address Space|KAS]])

> [!Warning]  
> Certain parts of the [[Operating System|OS]] code runs in [[User Application Space|UAS]] as well! *In other words*, most parts of the [[Operating System|OS]] code is executed in the [[User Application Space|UAS]], whereas specific functions of the [[Operating System|OS]] are realized in [[Kernel Address Space|KAS]].

![[image_24.png]]  
![[image_1y.png]]

## Separation of [[Kernel Address Space|KAS]] and [[User Application Space|UAS]]

How does one separate the [[Kernel Address Space]] from the [[User Application Space]]? There are two levels to consider:

1. Code (e.g. instructions) whose code ([[User Application Space|UAS]] or [[Kernel Address Space|KAS]]) could execute certain machine instructions and whose code may access which parts of [[physical memory]] or other hardware access (IO).
2. Data (e.g. memory architecture) which data is dedicated solely to the [[Kernel]] or which data is accessible to [[User Application Space|UAS]].

A very simple method to *differentiate memory* is by using a few bits additionally to the address bits:

- for memory usage 
- for memory access by code 

```mermaid
flowchart LR
	e1(Ring Bits, segmentation) --> e2(address Descriptor)
```

## [[Physical Memory]] Limits

Limits on memory and address space may vary by platform and [[Operating System|OS]].

| Version | Limit in x86 | Limit in x64 |
| ---- | ---- | ---- |
| Windows 10 Enterprise | 4GB | 6TB |
| Windows 10 Education | 4GB | 2TB |
| Windows 10 Pro for Workstations | 4GB | 6TB |
| Windows 10 Pro | 4GB | 2TB |
| Windows 10 Home | 4GB | 128GB |

[Memory Limits for Windows and Windows Server Releases - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/memory/memory-limits-for-windows-releases)