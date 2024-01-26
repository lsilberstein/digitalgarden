---
title: System Worker Thread
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - System Worker Threads
---

# System Worker Thread

The "System" [[Process]] `PID 4` is the container for a special kind of [[Thread]] that runs only in [[Kernel Address Space|Kernel Mode]], which is a [[Kernel Address Space|Kernel Mode]] [[Thread]]. During system initialization, [[Windows]] creates several [[Thread|Threads]] in the *System process*, called [[System Worker Thread|System Worker Threads]], which exists solely to perform work on behalf of other [[Thread|Threads]] to perform operations that require system [[Thread Context]], such as 

- issuing and waiting for IO
- creating [[Object]]s
- polling a device
- writing dirty [[Pages]] to the [[Page File]] or mapped files by [[Memory Management|MemMan]]

By default, system Threads are owned by the System process, but a drive can create a [[System Worker Thread]] in any [[Process]]. However, most [[Thread|Threads]] use [[System Worker Thread|System Worker Threads]] instead.