---
title: Address Resolution Protocol
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - ARP
---

# Address Resolution Protocol

We use [[Address Resolution Protocol|ARP]] to map a 32 bit [[IP Address]] to a 48 bit unique *Ethernet* address which itself consists of a *Organisationally Unique Identifier* and a [[Media Access Control|MAC]] which is vendor assigned. The [[Address Resolution Protocol|ARP]] is the [[Networking|Network]] [[Protocol]] for resolving [[OSI reference model|OSI]] [[Network Layer|L3]] Addresses (such as [[IPv4]] addresses) to [[OSI reference model|OSI]] [[Data Link Layer|L2]] Addresses. 

```mermaid
flowchart LR
e1(Internet address family AF</br>32 bit IPv4 address) ---> e2(Physical Address</br>48 bit Ethernet address)
```

We transform a *[[Internet Address family]]* (AF) sort of dynamic mapping to a physical address which is transparent to application and user. This mapping is of no concern for system administrators. 

## [[Address Resolution Protocol|ARP]] Role

For Communication between hosts inside a [[Local Area Network|LAN]], their physical addresses ([[Media Access Control|MAC]]) are used. 

- When one host wants to send data to another host
- It looks for the [[Media Access Control|MAC]] Address of the destination host in its [[Address Resolution Protocol|ARP]] cache.

If the address is not there, it send a*broadcast* to retrieve it. Whenever [[Address Resolution Protocol|ARP]] requests are broadcasted, that message is to be read by every machine.

## [[Address Resolution Protocol|ARP]] Pervalance

The combination is [[IPv4]] and Ethernet represents the overwhelming majority of [[Local Area Network|LANs]]. For [[IPv6]] [[Address Resolution Protocol|ARP]] is replaced by the *Neighbour Discovery Protocol* (NDP). Inside a [[Local Area Network|LAN]], the [[Media Access Control|MAC]] address in the Ethernet [[Frames|Frame]] is used to [[Routing|Route]] [[Frames]] from one machine to another.

## [[Address Resolution Protocol|ARP]] Cache

> [!Definiton]  
> The [[Address Resolution Protocol|ARP]] *cache* is a table containing [[IP protocol|IP]] to [[Media Access Control|MAC]] address mappings.

![[Pasted image 20231127080311.png]]

The [[Address Resolution Protocol|ARP]] cache is stored on each system communicating on the [[Local Area Network|LAN]].