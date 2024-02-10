---
title: Socket
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Sockets
---

# Socket

![[Pasted image 20231128082054.png]]

In the beginning the [[Image Loader]] creates some [[Process|Processes]]. One of these [[Process|Processes]] are sometimes needed to use some services from a remote [[Process]]. To do this,

1. It first needs to locate the other [[Process]]
2. Then it can send a message to ask for the desired service

Assuming that these [[Process|Processes]] want to communicate with each other. What would they need to do so? A [[DNS Infrastructure]].

## Implementing Network Communication

For the initiator, the first step is to locate the target host. While each host must give all others the chance to locate it by using a specific addressing scheme, in this case an [[Internet Address family|Address Family]]. We therefore can call [[IPv4]] Addresses also `AF_INET` addresses. The second step is to find the target. [[Process]] on a specific host.

![[Pasted image 20231128082509.png]]

How can we implement these two steps? An [[Operating System|OS]] implements this concept by using [[Socket|Sockets]]

> [!Definiton]  
> A [[Socket]] is a combination of [[IP Address]] and [[Port Numbers|Port]]. 

A [[Socket]] is a matter of definition. We just define it instead of actually implementing it. 

![[Pasted image 20231128082558.png]]

The same [[Socket]] can be used for sending and receiving messages. A [[Process]] might use more than one [[Port Numbers|Port]]. Each of its [[Port Numbers|Ports]] can be used in an individual [[Socket]]. However, a [[Process]] cannot share the same [[Port Numbers|Port]] with other [[Process|Processes]] on the same host. Thus, there exists no shared [[Socket|Sockets]]. For communication between two [[Socket|Sockets]], any [[Network Layer|L3]] [[Protocol]] can be used. Mostly [[TCP protocol|TCP]], sometime [[User Datagram Protocol|UDP]]. 

# Types of Sockets

There are *three* types of [[Socket|Sockets]] available:

1. [[Datagram Socket]]
2. [[Raw Sockets]]
3. [[Stream Socket]]

## Message Passing

There are *two* basic operations for message passing: 

- send
- receive

A queue is associated with each destination.

## Communication Types

We determine between two communication types

- *synchronous*: blocking basic operations
- *asynchronous*: a non-blocking send operation using an *input buffer* filling in the background. Non-Blocking is more or less theory and very hard to implement.

Transmission in parallel with other tasks in the sending process. 