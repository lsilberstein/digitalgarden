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

[[Kernel]] is a [[Kernel Address Space|KAS]] component. It provides the elementary and essential functionality of the [[Operating System|OS]]. For [[Windows]], the [[Kernel]] is just a component among others in [[Kernel Address Space|KAS]]. Moreover, some [[Kernel Address Space|KAS]] components are packed together to build a layer.  
The [[Kernel]] is essential, since all other [[Operating System|OS]] components need these functions to operate. These components use these *elementary* (low-level) functions to implement higher-level operations and mechanisms, such as

- [[Memory Management]]
- [[Process management]]
- Security

The [[Kernel]] also provides a primitive set of objects (e.g. data) that the other [[Operating System|OS]] components use to implement their higher-level mechanisms. To put it in a nutshell, [[Windows]] [[Kernel]] provides elementary and essential functionality of the [[Operating System|OS]]. The [[Kernel]] supports low-level hardware that depends on the CPU architecture. Functions that are architecture-specific are implemented in the [[Kernel]]. 

## Monolithic Kernel

Most [[Operating System|OS]]'s are *monolithic* with a huge amount of LoC (Lines of Code) and are composed of **tightly coupled** components which do not seem to have different modules with different characteristics. All [[Kernel]] components are fully protected from errant user [[Operating System|OS]] [[Thread|Threads]]. Aside from the [[Operating System|OS]] itself, no other code has direct access to the [[Kernel Address Space|KAS]].  
*Drawback*: Failure or deficit in any [[Operating System|OS]] component can potentially affect other components or the whole [[Operating System|OS]]'s functionality.  
*Solution*: [[Windows]] for example implements several *dedicated protection mechanisms.* This protection is one reason why a monolithic [[Operating System|OS]] is both robust and stable (as an application server and workstation), yet fast and nimble from the perspective of core [[OS service|OS services]] such as 

- [[Memory Management]]
- IO

[[Windows]]'s monolithic [[Kernel]] is a file (`Ntoskrnl.exe`), which is a set of functions. 