---
title: Source Routing
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - SR
---

# Source Routing

When a static route is based on the [[Packets]] source, it is called a *source route*. 

> [!Example]  
> A possible deployment for [[Source Routing|SR]] is for load balancing between two internet conections. For instance, if you have an Accounting departments and a Marketing department. Lets assign each department a separate Internet connection for outgoing traffic. $WAN_A$ and $WAN_M$. [[Source Routing|SR]] config then specifies that traffic originating from the Accounting department should be sent via $WAN_A$ and another one lets all traffic coming from the Marketing Department through $WAN_M$.