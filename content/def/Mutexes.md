---
title: Mutexes
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Mutex
  - Mutant
  - Mutants
---

# Mutexes

> [!Definition]  
> [[Mutexes|Mutexes]] are synchronisation mechanisms used to serialise access to a [[Resources|resource]] (meaning exclusive usage).
>  

A [[Mutexes]] status is set to *signaled* when it is not owned by any [[Thread]] and *nonsignaled* when it is owned. Also called [[Mutexes|Mutant]] internally. Only one [[Thread]] at a time can own a [[Mutexes|Mutex]] object.

> [!Example]  
> For example, to prevent two [[Thread|Threads]] from writing to [[Shared Memory|Shared Memory]] at the same time, each [[Thread]] *waits* for ownership of a [[Mutexes|Mutex]] object before executing the code that accesses the memory. After writing to the [[Shared Memory]], the [[Thread]] *releases* the [[Mutexes|Mutex]] object. 
 
[[Thread|Threads]] in other [[Process|Processes]] can open a [[Handle]] to an existing named [[Mutexes|Mutex]] by specifying its name.  
What if a [[Thread]] terminated without releasing its ownership of a [[Mutexes|Mutex]] object? The [[Mutexes|Mutex]] object is considered to be *abandoned*. An *abandoned* [[Mutexes|Mutex]] object indicated that an error has occurred. Any shared [[Resources|resource]] being protected by that [[Mutexes|Mutex]] object is considered to be in an undefined state.