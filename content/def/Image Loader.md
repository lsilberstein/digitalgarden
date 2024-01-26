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

A [[Process Object]] cannot be executed. Rather, the [[Thread|Threads]] which are part of that [[Process]] are being executed. Within an image file, there is an array of data structures, one per imported [[subsystem DLLs|DLL]]. The [[Import Address Table]] provides a list of all [[subsystem DLLs|DLLs]] and functions that the executable uses.

All [[Process|Processes]] are subject to the same behaviour (*with some minor differences*). The [[Image Loader]] initializes the [[User Application Space|User mode]] state for the application, creating

- The initial [[Virtual Memory address space|VAS]]
- [[Thread|Threads]] (meaning code to be executed) and initialized static data and constants.
- Other [[Resources]], such an (icons, configs and images)
- [[subsystem DLLs|DLL]] related import and export tables ([[Import Address Table|IAT]] relevant data)

![[Pasted image 20231023165758.png]]

The [[Image Loader]] parses the **[[Import Address Table|Import Address Table]]** of the application to look for all [[subsystem DLLs|DLLs]] that are required. The [[Image Loader]] uses [[Sections|Section Objects]] to map executable images, [[subsystem DLLs|DLLs]] and other [[Resources]]. The [[Image Loader]] recursively parses the [[Import Address Table|IAT]] of each [[subsystem DLLs|DLL]], followed by parsing the export tables of the [[subsystem DLLs|DLLs]] to make sure that each needed function is being loaded. This is important when certain [[subsystem DLLs|DLLs]] use another function from other [[subsystem DLLs|DLLs]].
