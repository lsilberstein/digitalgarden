---
title: File-Mapping-Object
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Mapped File
  - File-Mapping-Object
---

# File-Mapping-Object

Use a [[Sections|Section Object]] to map files into a [[Process]] address space. Note that we do not only talk about [[Shared Memory|Shareable Memory]] at this point, but rather the whole process of [[Memory Management]]. The [[Process]] gets access to the [[Sections|Section Object]] instead. This enables reading and writing to [[physical memory]] rather than to the file. What happens when the [[Process]] modifies the [[File-Mapping-Object|Mapped File]]? [[Pages|Paging]] operation. The [[Memory Management|MemMan]] writes the changes back to the [[File-Mapping-Object|Mapped File]] during its normal [[Pages|Paging]] operations.

![[image_13.png]]

[Sysinternals - Sysinternals | Microsoft Learn](https://learn.microsoft.com/en-gb/sysinternals/)