---
title: Client and Server Runtime Subsystem
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - csrss
  - environment subsystem
---
# Client and Server Runtime Subsystem

In the [[Windows Subsystem]] there exists an [[User Application Space|User mode]] part as well which is called the *[[Client and Server Runtime Subsystem]]*, also called *[[Client and Server Runtime Subsystem|csrss]]*. For each [[Session]], an instance of *[[Client and Server Runtime Subsystem|csrss]]* is created. Is there a connection between *[[Client and Server Runtime Subsystem|csrss]]* and each user? Yes, this is managed by the [[Operating System|OS]].

![[Pasted image 20231020190916.png]]
![[Pasted image 20231020192526.png]]

The [[Client and Server Runtime Subsystem|environment subsystem]] ([[Client and Server Runtime Subsystem|csrss]]) loads three [[subsystem DLLs|DLLs]] (`basesrv.dll`, `winsrv.dll` and `csrsrv.dll`). The console host [[Process]] (`conhost.exe`) provides support for console (character cell) applications.