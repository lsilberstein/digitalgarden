---
title: Image Loader
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Loading
  - Ldr
---

# Image Loader

> [!Definition]  
> The [[Image Loader]] is a mechanism that loads an *image file* (aka portable executable or executable) to create a [[Process Object]] from it (also called *[[Image Loader|Ldr]]*).

This mechanism is not only for user [[Process|Processes]], but also the [[Process|Processes]] in [[Kernel Address Space|KAS]]. The system call interface, realised by [[Ntdll|ntdll]] provides the [[Image Loader]] mechanism. Components in [[Kernel Address Space|KAS]] are based on [[Process|Processes]] and thus use the [[Image Loader|Ldr]] as well. [[Ntdll]] is loaded. This ensures that [[Image Loader|Ldr]] is always in [[physical memory]]. To start a [[Process]], the [[Operating System|OS]] employs the [[Image Loader|Ldr]] to create a specific *[[Process Object]]* for it. Indeed this [[Process Object]] is the representation in the [[Process]] container in [[physical memory]].