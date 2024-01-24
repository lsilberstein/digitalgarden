---
title: Shared Pages
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Shared Page
  - Shared Pages
---

# Shared Pages

[[Shared Pages|Shared Pages]] are usually mapped to a *view of a [[Sections|Section Object]]*. A view is a selected part of a [[File-Mapping-Object|Mapped File]]. The selection might encompass the whole content or just a portion of the [[Pages|Page]] or data file. All [[Shared Pages]] can potentially be shared with other [[Process|Processes]]. 

![[image_25.png]]

When a [[Shared Pages|Shared Page]] is firstly accessed by a [[Process]], it will be read from the associated [[File-Mapping-Object|Mapped File]]. Later, if it is still resident in [[physical memory]], and other [[Process|Processes]] with rights to get access to is simply use the same [[Pages|Page]] content that is already in memory.