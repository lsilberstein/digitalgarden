---
title: Semaphores
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Semaphore
---

# Semaphores

> [!Definition]  
> A [[Semaphores|Semaphore]] object is a counter that maintains a count between $0$ and a specified maximum value.

Some [[Resources]] can support a limited number of users simultaneously (*shareable*). To allow some maximum number of [[Thread|Threads]] to access the [[Resources]] being protected by the [[Semaphores|Semaphore]], a counter data structure is used. The count is decremented each time a [[Thread]] completes a *wait* for the [[Semaphores|Semaphore]] object, and incremented each time a [[Thread]] *releases* the [[Semaphores|Semaphore]]. The state of a [[Semaphores|Semaphore]] is set to *nonsignaled* when its count is zero and *signaled* when its count is greater than $0$.

> [!Example]  
> An Application might place a limit in the number of windows that it created. Each window is managed by a dedicated [[Thread]]. A [[Semaphores|Semaphore]] is used with a maximum count equal to the window limit, decrementing the count whenever a window is created and incrementing it whenever a window is closed.
> 
> 1. Before creating a new window, i.e. a new [[Thread]], the application uses a specific [[Windows Application Programming Interface|Win API]] call to determine whether a [[Semaphores]] current count permits it to do so.
> 2. When the count is $0$ - indicating that the window limit has been reached - the wait function blocks execution of the window-creation code.