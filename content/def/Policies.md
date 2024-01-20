---
title: Policies
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Policy
  - Policymaking
---

# Policies

One fundamental task of an [[Operating System|OS]] is to *enforce [[Policies]]* to regard with its own operation. [[Policies]] may be

- **Criteria**: operative standards of qualitative nature, such as *access [[Policies]]* to [[Resources]] outside the [[Kernel Address Space|KAS]] or *security checks* to protect [[Resources]]
- **Rules**: mostly quantitative guidelines, such as *power management (consumption limit)* for [[Device Drivers]] or [[Resources|resource]] quotas to be determined when they are created, e.g. *Maximum Memory allowed (x64): 2097152*.
- **Constraints**: is used to restrict, check or enforce the fulfilment or prevention of particular actions, such as managing processor cores, e.g. *No addition of [[physical memory|Physical Memory]] allowed.*

To shape or organize an [[Operating System|OS]] state of being. To see available [[Policies]] under [[Windows]] use `Slpolicy.exe`.  
The [[Kernel]] has little to do with *[[Policies|policymaking]]*, since it separates itself from the [[Windows executive|Executive]] component by implementing the basic [[Operating System|OS]] mechanisms and avoiding *[[Policies|policymaking]]*. The [[Kernel]] leaves nearly all [[Policies|policy]] decisions to the [[Windows executive|Executive Layer]] except for *thread scheduling* and *thread dispatching*.