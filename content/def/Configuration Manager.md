---
title: Configuration Manager
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - CM
---

# Configuration Manager

> [!Definition]  
> The [[Configuration Manager]] ([[Configuration Manager|CM]]) is responsible for implementing and managing the [[Windows Registry|Registry]].

[[Configuration Manager|CM]] belongs to the [[Windows executive|Executive Layer]] subsystem and has its own view of a [[Registry Hive|Hive]]: It logically divides a [[Registry Hive|Hive]] into allocation units, called *blocks*. [[Configuration Manager|CM]] implements an authoritative model of [[Windows Registry|Registry]] filtering. This allows for monitoring of [[Windows Registry|Registry]] activities, such as *[[Process]] Monitor*.

![[Pasted image 20231030083130.png]]

For any kind of access to a specific key, a [[Process]] can register a callback function with the [[Configuration Manager]]. The [[Configuration Manager|CM]] executes that callback function any time the key is being accessed. In this way, the [[Process]] can [[Audit|audit]] and control access to [[Resources]].  
[[Windows Registry|Registry]] callbacks are also associated with the concept of *altitudes* (priorities). Altitudes are a way for different "vendors" to register a *height*. It enforces and order in which the system calls each callback routine, so callbacks are deterministic and correct. 

> [!Example]  
> This avoids cases in which, for example, an AntiVirus product would be scanning encrypted keys before an encryption product would run its own callback to decrypt them.