---
title: Multi-Threading
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - multi-threading
---
# Multi-Threading

A multi-user, interactive and connective system can only be realized with [[Multi-Threading]]. Multiple independent paths of execution are simultaneously in use.  

![[image_1i.png]]  
![[image_4.png]]  

[[Kernel|Kernels]] offer direct support for the underlying processor, thus functionality of an [[Operating System|OS]] is *tightly coupled* to a processor. There is actually the option to execute multiple [[Thread|Threads]] at once. Nowadays, many [[Central Processing Unit|CPU]]s are ideed multi-[[CPU Core|Core]]. Thus a [[Central Processing Unit|CPU]] with 4 [[CPU Core|Cores]] can execute 4 different [[Thread|Threads]] in parallel. This is called *[[Multi-Threading]]*.