---
title: Thread Context
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - "Thread's context switch"
---

# Thread Context

A [[Central Processing Unit|CPU]] often needs to execute multiple [[Thread|Threads]] at the same time, though only one can be handled at a time. [[Thread|Threads]] therefore only have a certain processor time to be executed. How does this handling work? All data in a [[Thread]]'s [[CPU register|Registers]], [[Stack]] and private storage build the [[Thread Context|Thread Context]]. This specific realization depends on the processor architecture, because the hardware realization of a [[Thread Context|Thread Context]] is different for each machine architecture that [[Windows]] runs on. 

> [!Info]  
> The [[Thread|Threads]] of a 32-Bit application running on a 64-Bit version of [[Windows]] will for example contain both 32-Bit and 64-Bit [[Thread Context|Thread Context]]s. `Wow64` will switch the application from running in 32-Bit to a 64-Bit mode when required.