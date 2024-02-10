---
title: Service Routing
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date:
---
# Service Routing

A static route that is based on the [[Networking|Network]] service used to send the [[Packets|packet]] is called a *Service Route*. [[Service Routing]] is useful for directing all traffic of a particular type to a specific Internet connection. 

> [!Example]  
> For example, you can choose all [[Hyper Text Transfer Protocol|HTTP]] traffic to a secondary Internet connection $WAN_2$, while [[Routing]] all other traffic to the primary Internet connection $WAN_1$. This can be realised using dedicated [[Routing Protocols]] such as [[Open Shortest Path First|OSPF]].

In sum, [[Service Routing]] enables [[Protocol]] dependent [[Routing]].