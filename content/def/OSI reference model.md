---
title: OSI Reference Model
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - OSI Reference Model
  - OSI
  - Open Systems Interconnection
linter-yaml-title-alias: OSI Reference Model
---

# OSI Reference Model

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