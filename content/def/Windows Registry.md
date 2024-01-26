---
title: Windows Registry
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Registry
  - Configuration Management
---

# Windows Registry

> [!Defintion]  
> The *[[Windows Registry|Registry]]* is a system-defined hierarchical data repository. Its data structure is in a tree format. The [[Operating System|OS]] stores and retrieves configuration data in it, such as 
> 
> - for applications
> - its own components

[[Kernel]] and user [[Process|Processes]] use the [[Windows Registry|Registry]]. The [[Windows Registry|Registry]] is one of the fundamental mechanisms in the [[Windows]] [[Operating System|OS]]. It is critical of the [[Operating System|OS]] management and config.

1. Within the initial phase of [[Operating System|OS]] booting and before initializing the [[Kernel]]: The bootloader reads configuration data and loads the list of boot [[Device Drivers]] into memory.
2. During the *[[Kernel]] boot process*, the [[Kernel]] reads settings that specify which [[Device Drivers|device drivers]] to load and how the [[Memory Management|Memory Manager]] and [[Process management|Process Manager]] configure themselves.
3. During *logon*, [[Operating System|OS]] components read per-user preferences from the [[Windows Registry|Registry]] such as desktop wallpaper, icon placement, which startup programs to launch and which files were most recently accessed.
4. During *app startup*, applications read systemwide settings as well as per-user settings, such as licensing data and a list of most-used recently accessed documents.