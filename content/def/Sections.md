---
title: Sections
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Section
  - Section Object
  - Section Objects
  - file-backed Section Object
  - page-file-backed Section Object
---

# Sections

[[Sections]] (or [[Sections|Section Objects]]) are a mechanism to realize [[Shared Memory]]. [[Memory Management|MemMan]] deploys the notion of [[Sections|Section Objects]] to implement [[Shared Memory]]. A [[Sections|Section Object]] surrogates the linear base address of a [[Frames|Page Frame]]. The [[Memory Management|MemMan]] imposes this mechanism between the virtual addresses that a [[Process]] wants to access and the [[physical memory]]. A [[Sections|Section Object]] can be opened by one or many [[Process|Processes]]. This means that [[Sections|Section Objects]] don't necessarily refer to [[Shared Memory]].  
We can also have more than one [[Sections|Section Object]] per [[Process]]. A mapped file can for example be a binary file mapped in [[physical memory]], All [[Sections|Section Objects]] are supported (*backed*) by a kind of disk file like a [[Page File|Page File]] or some other kind of file (like pictures, etc.).

![[image_3.png]]

Here [[Sections|Section Object]] $O_j$ is connected to an open file on disk (called a *[[Sections|file-backed Section Object]]*, the memory part is called a *mapped file*). [[Sections|Section Object]] $O_i$ is called a [[Sections|page-file-backed Section Object]] through associating with committed memory. 

## [[Shared Memory]]

[[Sections|Section Objects]] can also refer to image files (portable executables). Thus, a [[Sections|Section Object]] is also called a *[[File-Mapping-Object]]*.