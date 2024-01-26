---
title: Page Directory
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - CR3
---

# Page Directory

On non-extended x86 systems, each [[Process]] has a single [[Page Directory]]. We use an extended schema when determining our physical address in order to operate multiple [[Process|Processes]]. 

![[Pasted image 20231022183539.png]]

The [[Central Processing Unit|CPU]] obtains the location of the [[Page Directory]] from a privileged [[Central Processing Unit|CPU]]. As time proceeds, the [[Central Processing Unit|CPU]] must serve other [[Process|Processes]] alike. Thus, the [[Central Processing Unit|CPU]] selects their relevant [[Thread|Threads]] for execution. All the data from the currently executing [[Thread]] will be stored for a later time. This procedure is called a *[[Thread Context|Thread's context switch]]*. Each time a context switch occurs to a [[Thread]] that belongs to a different [[Process]] than that of the currently executing [[Thread]], the [[Kernel]] load `CR3` for the new [[Process]]. Context switches between [[Thread|Threads]] in the same [[Process]] do not result in reloading the `CR3` (physical address of the [[Page Directory]]), since all [[Thread|Threads]] within the same [[Process]] share the same [[Virtual Memory address space]]; The same [[Page Directory]].