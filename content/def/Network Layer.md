---
title: Network Layer
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - L3
  - Layer 3
---

# Network Layer

To move data from *host-to-host*, across network cores (interconnected mesh or routers). The layer for the most important [[Protocol]] of the internet is [[IP protocol|IP Protocol]] which is a *connectionless* internetworking [[Protocol]]: No [[Session]] is established before exchanging data.  
It makes a *best effort* attempt to deliver a [[Packets|packet]]. A [[Packets|packet]] might be lost, delivered out of service, duplicated or delayed. A [[Network Layer|L3]] [[Protocol]] like [[IP protocol|IPv4]] does not attempt to recover from these types of errors. The acknowledgement of [[Packets]] being delivered is the responsibility of a higher-level [[Protocol]].