---
title: Process
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Processes
---

# Process

Any application consists of one or more [[Process|processes]].

> [!Definition]  
> A [[Process]] is a container for a set of [[Resources]]

A *[[Process]] is a container* for a set of [[Resources]] used when executing the instance of the program. In this case [[Resources]] mean

- private [[Virtual Memory address space|Virtual Memory Address Space]]
- A list of open [[Handle|Handles]] (pointers) to various system [[Resources]]
- An access token to identify users, security groups, privileged, etc.
- A unique identifier, call a *process ID*
- A least one [[Thread]] of execution