---
title: Process Object
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
---

# Process Object

To start a [[Process]], the [[Operating System|OS]] employs the [[Image Loader|Ldr]] to create a specific *[[Process Object]]* for it. Indeed this [[Process Object]] is the representation in the [[Process]] container in [[physical memory]]. Creating a [[Process|Process Object]] does not mean that the execution of [[Thread|Threads]] within that [[Process]] starts. The [[Process|Process Object]] rather represents the [[Process]] and is used to prepare its context and execution requirements.