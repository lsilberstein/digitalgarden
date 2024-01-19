---
title: Kernel
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Kernels
---

# Kernel

A [[Kernel]] is the core component of any [[Operating System|OS]]. It consists of a set of specific libraries to realize the essential functionality of any [[Operating System|OS]]. 

![[image_1a.png]]

## Monolithic Kernel

Most [[Operating System|OS]]'s are *monolithic* with a huge amount of LoC (Lines of Code) and are composed of **tightly coupled** components which do not seem to have different modules with different characteristics. All [[Kernel]] components are fully protected from errant user [[Operating System|OS]] [[Thread|Threads]]. Aside from the [[Operating System|OS]] itself, no other code has direct access to the [[Kernel Address Space|KAS]].  
*Drawback*: Failure or deficit in any [[Operating System|OS]] component can potentially affect other components or the whole [[Operating System|OS]]'s functionality.  
*Solution*: [[Windows]] for example implements several *dedicated protection mechanisms.* This protection is one reason why a monolithic [[Operating System|OS]] is both robust and stable (as an application server and workstation), yet fast and nimble from the perspective of core [[OS service|OS services]] such as 

- [[Memory Management]]
- IO

[[Windows]]'s monolithic [[Kernel]] is a file (`Ntoskrnl.exe`), which is a set of functions. 