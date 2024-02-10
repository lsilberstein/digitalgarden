---
title: Routing
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Route
---

# Routing

> [!Definiton]  
> [[Routing]] is the process of forwarding [[Packets]] from a source to a destination.

Specialised hardware devices used for [[Routing]] are called [[Router|Routers]].

See here a route, a [[Datagram]] took:

![[Pasted image 20231120081404.png]]

One, or usually, more [[Router|Routers]] are used to direct a [[Packets|packet]] to its destination. [[Router|Routers]] only know what network the *host* is a member of. They use information stored in their [[Routing Tables|Routing Table]] to determine how to get to [[Packets|packet]] to the destinations host [[Networking|Network]].

## Static and Dynamic [[Routing]]

[[Routing]], more precisely is the process of moving [[Packets]] from one [[Networking|Network]] to another one in a relatively efficient way. We distinguish between:

1. *Static configured routing* uses a setting that explicitly specifies the route to use for [[Packets]], which need manual configuration and mainly uses manual [[Routing Tables]].
2. *Dynamic Routing protocols*: [[Router|Routers]] themselves determine the *most efficient* path that [[Packets]] go through negotiation. Used [[Routing Protocols]] create and update dynamic [[Routing Tables]] (such an [[Routing Information Protocol]] ([[Routing Information Protocol|RIP]]), [[Open Shortest Path First]] ([[Open Shortest Path First|OSPF]]) and [[Interior Gateway Protocol|IGP]]). This allows the discovery of other [[Router|Routers]], calculating the best path and acquiring and updating path information.

### Static Routing

Static Routing is a setting that explicitly specifies the route to use for [[Packets]].

1. *[[Source Routing]]*: The [[Packets]] source [[IP Address]] and or destination [[IP Address]]. Here we distinguish between *Strict SR*, the sender specifies the exact route and *Loose Source Record Route* (LSRR), one or more hops that the [[Packets]] must go through.
2. *[[Service Routing]]*: The [[Networking|Network]] service used to send the [[Packets|packet]].