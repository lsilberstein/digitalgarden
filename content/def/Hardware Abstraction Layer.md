---
title: Hardware Abstraction Layer
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - HAL
---

# Hardware Abstraction Layer

The *[[Hardware Abstraction Layer|Hardware Abstraction Layer]]* ([[Hardware Abstraction Layer|HAL]]) is a layer of code. The [[Kernel]] uses [[Hardware Abstraction Layer|HAL]] to access the hardware. [[Hardware Abstraction Layer|HAL]] provides a *low-level-interface* to the hardware platform on which the [[Operating System|OS]] is running. [[Hardware Abstraction Layer|HAL]] isolates the [[Kernel]], [[Device Drivers]] and the rest of the [[Windows executive]] from platform specific hardware differences. [[Hardware Abstraction Layer|HAL]] and the [[Kernel]] together provide [[Operating System|OS]] [[Portability]], i.e. another processor means a modified [[Hardware Abstraction Layer|HAL]] and (only slight) modifications of the [[Kernel]], when for example using different mainboards.  
Functions can differ among systems within the same architecture (e.g. different mainboards) are implemented in [[Hardware Abstraction Layer|HAL]]. 