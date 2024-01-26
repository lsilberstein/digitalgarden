---
title: Thread
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Threads
---

# Thread

> [!Definition]  
> A [[Thread]] is a *unit of execution* inside a [[Process|Process]].

Only [[Thread|Threads]] can be executed. All [[Thread|Threads]] of a [[Process]] share its address space and system [[Resources]]. 

![[image_o.png]]  
![[image_16.png]]

## Detail

> [!Definition]  
> A [[Thread]] is the basic unit to which the [[Operating System|OS]] allocates [[Central Processing Unit|CPU]] time. Each [[Process]] is started with a single [[Thread]], often called the *primary Thread*, but can create additional [[Thread|Threads]] from any of its [[Thread|Threads]]. Without at least one [[Thread]] within a [[Process]], it cannot run.

1. From our point of view, a [[Thread]] is essentially a `main()` [[Function Call]], which calls other functions. Each of them may call other functions as well. 
2. From a [[Central Processing Unit|CPU]]s perspective, the contents of a set of [[CPU register]]s representing the state of the processor is called a [[Thread]]. 

## What Else Belongs to a [[Thread]]?

We have two [[Stack|Stacks]] for the [[Thread]]. One to use while executing in [[Kernel Address Space|Kernel Mode]]. The other for executing in [[User Application Space|User mode]].  
How can we identify a [[Thread]]? A unique identifier, also called a *[[Thread]] ID*.