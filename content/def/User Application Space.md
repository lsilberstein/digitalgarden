---
title: User Application Space
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - UAS
  - User mode
---

# User Application Space

[[User Application Space]] ([[User Application Space|UAS]]) is an unprivileged processor mode, called *[[User Application Space|User mode]]*. [[User Application Space|User Mode]] code has very restricted access to system [[Resources]], Realized through a limited set of available interfaces to [[Operating System|OS]] [[Resources]]. [[User Application Space|User Mode]] has **no direct access to hardware**. When [[User Application Space|User Mode]] calls an [[OS service]], the processor executes a special instruction that switches the calling [[Thread]] to [[Kernel Address Space|Kernel Mode]].