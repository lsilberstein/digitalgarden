---
title: Ntdll
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - ntdll
---
# Ntdll

![[Pasted image 20231020195802.png]]

User application run in [[User Application Space|User mode]] [[Process|Processes]]. [[User Application Space|User mode]] [[Process|Processes]] cannot call (meaning *access*) the [[Windows]] [[Kernel]] [[Process|Processes]] directly, but rather they go through one or more subsystem function libraries, also called *[[subsystem DLLs]]*. These libraries are available as part of [[Client and Server Runtime Subsystem|csrss]]. `ntdll.dll` is a special system support library intended for the use of Windows [[subsystem DLLs]]. *ntdll* translates a documented function into the appropriate internal *native* system [[OS service|service]] calls. These are generally undocumented.