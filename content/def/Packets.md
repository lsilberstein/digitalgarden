---
title: Packets
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - packet
  - PDU
  - Protocol Data Unit
---

# Packets

structured bytes

>[!Definiton]
>A [[Packets|PDU]] is layer and [[Protocol]] specific.

Even though, the the *[[Packets]]* is used for all layers, we should use these specific terms:

| Nr | Layer | Specific Term |
| ---- | ---- | ---- |
| 1 | [[Application Layer]] | [[Packets\|packet]] |
| 2 | [[Transport Layer]] | [[Segment\|Segment]] |
| 3 | [[Network Layer]] | [[Datagram]] |
| 4 | [[Physical Layer]] | [[Frames\|Frame]] |

> [!Info]  
> A [[Packets|packet]] consists always of a *header* and a *dataunit*.