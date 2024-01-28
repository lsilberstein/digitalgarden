---
title: Object Types
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date:
---
# Object Types
[[Object]]s are categorised by means of *types*. The [[Object Management|OM]] creates an [[Object]] according to a specific type. To get a list of [[Object Types]] that exist within your [[Operating System|OS]], use WinObj.

## [[Kernel Object|Kernel Objects]]

- SymbolicLink
- Event
- [[Session]]

## Other [[Object Types]]

- Event
- [[Semaphores|Semaphore]]
- [[Mutexes]]

## [[Windows]] Objects

We distinguish between *three* types of [[Windows]] [[Object]]s:

1. *executive Objects*: Executive Objects are implemented by various components of the [[Windows executive|Executive Layer]], such as IO subsystem Objects, [[Process management|Process Manager]] [[Object]]s and [[Memory Management|MemMan]] objects
2. *[[Kernel Object|Kernel Objects]]*: [[Kernel Object|Kernel Objects]] are a more primitive set of objects, implemented by the [[Windows]] [[Kernel]]. [[Kernel Object|Kernel Objects]] provide fundamental capabilities, on which executive objects are build.
3. *[[Graphics Device Interface|GDI]] / user objects*: [[Graphics Device Interface|GDI]] / user objects, on the other hand, belong to the [[Windows]] system `win32k.sys`. They do not interact with the [[Kernel]].