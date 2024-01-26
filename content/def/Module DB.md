---
title: Module DB
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Module
  - Modules
  - Module Database
---

# Module DB

> [!Definition]  
> Loaded [[subsystem DLLs|DLLs]] and the primary executable of a [[Process]] are called *[[Module DB|Modules]]*.

The [[Image Loader]] maintains a list of all [[Module DB|Modules]] in the [[Module DB|Module Database]] to check for the presence of a [[subsystem DLLs|DLL]] function. The [[Image Loader|Ldr]] looks at the [[Module DB|Module Database]]. If a [[subsystem DLLs|DLL]] with the same [[Module DB|Module]] name if already loaded in memory, the system uses the loaded [[subsystem DLLs|DLL]], no matter which directory it is in.