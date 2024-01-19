---
title: Windows
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date:
---

# Windows

[[Windows]] was designed with *[[networking]]* in mind. In [[Windows]], there are four basic types of network software components:

- [[Windows]] network services
- [[Windows]] network APIs
- Network protocols
- Drivers for network adapters

[[Windows]] was designed from the start to be secure. To meet the requirements of various formal US government and industry security criteria. It was designed to work on a variety of hardware architecture. (*[[Portability]]*).

[[Windows]] keeps **every** single entity under constant surveillance / [[Audit]] in order to 
1. gain oversight of access, and it can
2. [[Audit]] any type of access to almost any [[Resources|resource]]. 

## Key System Components

[[Windows]], or any other [[Operating System|OS]], consists of several *well-defined* components. They are interrelated and cooperating. These components are distributed throughout the [[Kernel Address Space|KAS]] and [[User Application Space|UAS]]. Some related components might be grouped together to form a *layer*. For example, [[Windows]] has a layered design. [[Windows]]'s monolithic [[Kernel]] is a file (`Ntoskrnl.exe`), which is a set of functions. 

![[image_0.png]]

![[image_8.png]]