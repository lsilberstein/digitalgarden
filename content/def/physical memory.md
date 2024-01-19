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
---
# Physical Memory


## Physical Memory Segregation

In most multi-user [[General Purpose Operating Systems|GPOS]]'s, a [[User Application Space|user mode]] code or application is separated from the [[Operating System|OS]] itself. It is realized by dividing the available [[physical memory]], which is in fact hardware, into two separate partitions: 

1. [[User Application Space]] ([[User Application Space|UAS]]) 
2. [[Kernel Address Space]] ([[Kernel Address Space|KAS]])

> [!Warning]  
> Certain parts of the [[Operating System|OS]] code runs in [[User Application Space|UAS]] as well! *In other words*, most parts of the [[Operating System|OS]] code is executed in the [[User Application Space|UAS]], whereas specific functions of the [[Operating System|OS]] are realized in [[Kernel Address Space|KAS]].

![[image_24.png]]  
![[image_1y.png]]