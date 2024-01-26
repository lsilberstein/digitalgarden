---
title: Synchronisation Objects
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Synchronisation Object
---

# Synchronisation Objects

Usually, several [[Thread|Threads]] are sharing the same [[Resources|resource]], or compete for them. We use a [[Synchronisation Objects|Synchronisation Object]] to manage access to [[Resources]] for multiple [[Thread|Threads]]. 

> [!Info]  
> read-only access to [[subsystem DLLs|DLLs]] requires no [[Synchronisation Objects]]

```mermaid
flowchart TB
e1(memory)
e2(files)
e3((kernel object))

subgraph concurrenting threads in process P12
e4(Thread k)
e5(Thread q)
end

e1 --> e3
e2 --> e3

e4 --> e3
e5 --> e3
```

Serious problems may arise by a mixed read and write access to a [[Resources|resource]]. A *synchronization* is required in this case (called a *race condition*)! No controlled access to shared [[Resources]] means a read/write access.

```mermaid
flowchart TB

subgraph concurrenting threads in process P09
e1(Thread i)
end

e3((synchronisation object)) --> e2((kernel object))

subgraph concurrenting threads in process P12
e4(Thread k)
e5(Thread q)
end

e1 --> e3

e4 --> e3
e5 --> e3
```

Special [[Kernel]] objects, called [[Synchronisation Objects|Synchronisation Objects]] are used to manage [[Thread]] access to such shared [[Resources]]. We allow only one [[Thread]] access to some [[Resources|resource]] via [[Synchronisation Objects]] ([[mutual exclusion]]).  
Sections of code that access a non-shareable [[Resources|resource]] are called *critical sections*. To ensure correct code, only one [[Thread]] at a time can execute in a critical section.

> [!Example]  
> While one [[Thread]] is writing to a file, updating a database or modifying a shared variable, no other [[Thread]] can be allowed to access the same [[Resources|resource]].

The executive objects *[[Mutexes]]* and *[[Semaphores]]* are used for synchronization.