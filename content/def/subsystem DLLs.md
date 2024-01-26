---
title: Subsystem DLLs
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Subsystem DLLs
  - DLL
  - DLLs
  - Dynamic Link Library
  - Dynamic Link Libraries
linter-yaml-title-alias: Subsystem DLLs
---

# Subsystem DLLs

> [!Definition]  
> A [[subsystem DLLs|Dynamic Link Library]] ([[subsystem DLLs|DLL]]) is a [[Windows]] executable. It follows the same structure as an `.exe`, the portable executable format, file. A [[subsystem DLLs|DLL]] exports functions (*routines*) that can be used by any executable (*importing*).

A [[subsystem DLLs|DLL]] man provide variables (attributes) as well. [[Windows]] provides many important standard [[subsystem DLLs|DLLs]], like for example the [[Kernel]] `kernel32.dll`.

## Known [[subsystem DLLs|DLLs]]

There exist some *known [[subsystem DLLs|DLLs]]*, meaning they have already been loaded at [[Operating System|OS]] startup. Thats why there is no need to search and load them again! 

![[Pasted image 20231023082417.png]]

Some [[subsystem DLLs|DLLs]] are on the list of *known [[subsystem DLLs|DLLs]]* for the version of [[Windows]] on which the application is running. The system uses it (loaded) copy of the known [[subsystem DLLs|DLL]] instead of searching for it. The *known [[subsystem DLLs|DLLs]]* dependent [[subsystem DLLs|DLLs]] are considered as well.

## Searching for a [[subsystem DLLs|DLL]]

Where can one locate a [[subsystem DLLs|DLL]] on a secondary storage device? The [[Image Loader|Ldr]] examines these related directories when searching for a [[subsystem DLLs|DLL]]:

1. The directory from which the application was launched.
2. The native [[Windows]] system directory (e.g. `C:\Windows\System32`)
3. The 16-Bit [[Windows]] system directory (e.g. `C:\Windows\System`)
4. The [[Windows]] directory (e.g. `C:\Windows`)
5. The current directory at launch time
6. Any directories specified by the `%PATH%` environment variable

The [[Image Loader|Ldr]] then creates a *loader data table entry* for this [[subsystem DLLs|DLL]] and inserts it into the database. After each [[subsystem DLLs|DLL]] is loaded, the [[Image Loader|Ldr]] continues to parse the [[Import Address Table|IAT]] for further [[subsystem DLLs|DLLs]] to be imported. The *[[subsystem DLLs|DLL]] search path* is recomputed for each subsequent [[subsystem DLLs|DLL]] load operation.