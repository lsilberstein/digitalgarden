---
title: TCPIP and OSI
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 7
tags:
  - OSNW
  - vorlesung
  - wise2324
draft: false
date: 2023-10-30
---

# TCPIP and OSI

What are some basic requirements for [[Networking]]?

```mermaid
flowchart LR
e1(Thread A) --- e2(Thread B)
```

How can we identify the software that contains [[Thread]] A or B? In addition, we need to answer the following questions?

- A [[Thread|Threads]] role
- Its location
- Its communication speed
- The type of access
- The type of service

Communication over [[Networking|Networks]] is a complex task. [[TCPIP protocol stack|TCPIP]] is designed to break down the problem into smaller tasks. 

## [[OSI reference model]]

See here Computer communication over a [[Networking|Network]].

![[Pasted image 20231030182613.png]]

In the late 1970s, *ISO* (International Standards for Business, Government and Society) developed the [[OSI reference model|OSI]] ([[OSI reference model|Open Systems Interconnection]]). 

> [!Info]  
> [[OSI reference model|OSI]] implements Communication between systems by means of dedicated *layers*.

Each layer realizes certain tasks and functions. Exchange of [[Packets]] (structured bytes) takes place at each layer. Except for one layer, communication between each layer is called a *virtual communication*.

![[Pasted image 20231030182912.png]]

Sending data is divided into seven different layers according to the [[OSI reference model]]. $Thread_w$ prepares data from the lower layer for the receiving [[Process]] while $Thread_s$ receives data from a [[Process]] and prepares it for the lower layer. Each of the middle layers is dedicated to prepare data for a further layer. This is called the [[OSI reference model]]. Each layer is also called a[[Protocol]] * layer*.  
Some important functions of the [[OSI reference model]] are

- effective addressing
- headers: adding meta information to data for subsequent interpretation
- segmentation and reassembly of byte sequences
- establish and (gracefully) terminating a connection
- control the amount of data transmission
- ordered delivery of byte sequences
- error control
- further transmission services

### [[Protocol]]

> [!Definition]  
> A [[Protocol]] is a standard of concepts and procedures that are required to properly describe how a layer should prepare data for virtual transmission, even for L1.

## [[OSI reference model|OSI]] Layers

### Layer 7: [[Application Layer]]

> [!Note]  
> End user applications reside above the [[OSI reference model]] altogether!

Generic application [[OS service|Services]] like [[File Transfer Protocol|FTP]] or E-Mail capability reside in [[Application Layer|Layer 7]]. This layer establishes communication between [[Process|Processes]] and applications. It provides facilities that allow user apps to easily use the lower layers.

### Layer 6: [[Presentation Layer]]

Different methods of local data representation reside in Layer 6 as well as compression of data and data encryption.

### Layer 5: [[Session Layer]]

A layer where connections are established, managed and torn down. [[Session Layer]] holds ongoing communications. The standard did not clearly state what a [[Session]] is and what differentiates it from a *connection*. This decision is more political than technical. 

### Layer 4: [[Transport Layer]]

Its main purpose is the communication between two certain [[Process|Processes]]. There is the possibility to shield higher layers from having to deal with details of network behaviour such as

- dropped [[Packets]]
- [[Packets]] delivered out of sequence
- [[Packets]] corrupted by error

[[Transport Layer]] allows to be a Error-free delivery [[OS service|Service]], a Sequence and a guaranteed delivery [[OS service|Service]]. Or just fast P2P delivery without all the *operational overhead* mentioned above. 

### Layer 3: [[Network Layer]]

To move data from *host-to-host*, across network cores (interconnected mesh or routers). The layer for the most important [[Protocol]] of the internet is [[IPv4 protocol|IP Protocol]] which is a *connectionless* internetworking [[Protocol]]: No [[Session]] is established before exchanging data.  
It makes a *best effort* attempt to deliver a [[Packets|packet]]. A [[Packets|packet]] might be lost, delivered out of service, duplicated or delayed. A [[Network Layer|L3]] [[Protocol]] like [[IPv4 protocol|IPv4]] does not attempt to recover from these types of errors. The acknowledgement of [[Packets]] being delivered is the responsibility of a higher-level [[Protocol]].

### Layer 2: [[Data Link Layer]]

[[Data Link Layer|L2]] is basically the [[Local Area Network]] ([[Local Area Network|LAN]]) layer to move data across one *hop*. We use a *point-to-point* or a *one-to-many* transfer. It prepares [[Frames]] for the physical transmission and provides a mean to identify the real hosts (sender and receiver), as well as error detection.

### Layer 1: [[Physical Layer]]

[[Physical Layer|L1]] transmits bits (signals) across a physical medium, such as

- Fiber optic
- copper cable
- wireless
- etc.

It includes signal decoders and encoders. It synchronizes signal communication via a clock circuit. Concerned with the actual properties of the transmission medium, such as 

- Cabling types
- network interfaces
- cabling distance factors.

## From [[OSI reference model]] to [[TCPIP protocol stack|TCPIP]]

David Chappell was involved in the development of the [[OSI reference model]].

> The bottom three layers - [[Physical Layer]], [[Data Link Layer]] and [[Network Layer]] - were intended to reflect the tree layers of the then-new X.25 [[Protocol]] for [[Wide Area Networks]].  
> The slightly more modern idea of a connectionless internetworking [[Protocol]] such as [[IPv4 protocol|IP Protocol]] was seen as *heresy* by the model's creators.

\- David Chappell

## Layers from [[TCPIP protocol stack|TCPIP]]'s Perspective

![[Pasted image 20231030105217.png]]