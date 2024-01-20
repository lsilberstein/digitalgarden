---
title: OS service
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - OS services
  - Windows Service
  - OS service
  - Windows Services
  - Service
  - Services
  - daemon process
  - daemon processes
---
# OS Service

There are two different types of [[Operating System|OS]] [[Process|Processes]] that exist in [[User Application Space|UAS]]:

- [[System support Processes]]
- [[Service Processes]]

[[OS service|OS services]] (in [[Windows]]) or *[[OS service|daemon processes]]* (in Unix) are [[Operating System|OS]] [[Process|Processes]]. These are defined and implemented according to certain predefined rules being started by the component *[[Service Control Manager]]* ([[Service Control Manager|SCM]]).

![[Pasted image 20231020195926.png]]

By means of configuration, a [[OS service|Service]] can be started automatically at system boot time without requiring an interactive logon or manually by an application by calling the [[Windows]] `StartService` function.

### What is a [[OS service|Windows Service]]?

[[OS service|Windows Services]] are indeed a special type of [[Operating System|OS]] [[Process]], started by the [[Service Control Manager|SCM]]. There is a corresponding image file existent: `%SystemRoot%\System32\Services.exe`, being responsible for starting, stopping and interacting with [[Service Processes]]. See here a generic [[Process]] of [[OS service|Service]] hosts:

![[Pasted image 20231020185715.png]]

> [!Info]  
> Note that [[Service Control Manager|SCM]] only *starts* a [[Process]].

To host [[OS service|OS services]]; an enabler for code sharing among [[OS service|Services]]. For example, `audiodg.exe` hosts the audio engine for [[Windows]] 7. A `SvcHost` might serve multiple [[OS service|Services]] that run as `.exe` or [[subsystem DLLs|DLLs]]. These [[OS service|Service]] Hosts are dedicated to native [[OS service|OS services]] and not intended for non-[[OS service|Windows Services]]. [[OS service|Services]] are defined in the [[Windows Registry|Registry]] under `HKLM\SYSTEM\CurrentControlSet\Services`. [[OS service|Services]] have three names:

1. The [[Process]] name you see, running on the system
2. The internal name in the [[Windows Registry|Registry]]
3. The display name shown in the [[Services Administrative Tool]]

[[OS service|Services]] can be configured to start automatically at system boot time without requiring an interactive logon. They can also be started manually, e.g. by running the [[Services Administrative Tool]] or by calling the [[Windows]] `StartServiceA()` function. Typically, [[OS service|Services]] do not interact with the logged-on user, although there are special conditions when this is possible.