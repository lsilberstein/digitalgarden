---
title: Process Object
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
---

# Process Object

To start a [[Process]], the [[Operating System|OS]] employs the [[Image Loader|Ldr]] to create a specific *[[Process Object]]* for it. Indeed this [[Process Object]] is the representation in the [[Process]] container in [[physical memory]]. Creating a [[Process|Process Object]] does not mean that the execution of [[Thread|Threads]] within that [[Process]] starts. The [[Process|Process Object]] rather represents the [[Process]] and is used to prepare its context and execution requirements.

The state of a running [[Process]] is represented by a dedicated data structure, called an executive [[Process]] structure `eprocess` in [[Kernel Address Space|KAS]]. Inside the [[Windows executive|Windows Executive]], the [[Object Manager]] encapsulates `eprocess` as a [[Process Object]].

![[Pasted image 20231023171159.png]]

`eprocess` Contains many attributes, relating to a [[Process]], such as [[Process]] ID, image filename, flags and counter. It points to a number of other related data structures, such as [[Thread|Threads]] (called `ethreads`). `eprocess` points to [[Process Environment Block|PEB]] in [[User Application Space|User mode]].