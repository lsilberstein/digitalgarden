---
title: Windows Executive
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Windows Executive
  - Windows executive
  - Executive
  - Executive Layer
linter-yaml-title-alias: Windows Executive
---

# Windows Executive

The [[Windows executive]] contains the base [[Operating System|OS]] operations and mechanisms such as 

- [[Memory Management]]
- [[Process management]]
- [[Process management|Thread Management]]
- Security Management
- IO
- [[Networking]]
- [[Inter Process Communication]] ([[Inter Process Communication|IPC]])

The [[Windows executive|Executive]] contains functions that are *exported* and callable from [[User Application Space|User mode]] as well as functions that can be called from [[Kernel Address Space|Kernel Mode]]. Some of them are documented, some of them are not. Major components of the [[Windows]] [[Operating System|OS]] are placed in the [[Windows executive|Executive Layer]]. The [[Kernel]] provides to [[Windows executive|Executive]] components a set of routines and implements a primitive set of objects that the [[Windows executive|Executive]] uses to implement higher-level mechanisms. These primitive objects are not visible to [[User Application Space|User mode]], but are created and used only within the [[Windows executive|executive]].  
A Useful tool might be *Windows Debugger*.  
The [[Kernel]] separated itself from the [[Windows executive|executive]]'s components by avoiding *[[Policies|policymaking]]*