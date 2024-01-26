---
title: Portable Executable
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Portable Executable
  - PE
---
# Portable Executable

## Structure

There are multiple "sections" in each [[Portable Executable|PE]]. 

1. `.text` Represents the code.
2. `.rsrc` Is used by binary data, which is part of that [[subsystem DLLs|DLL]]
3. Multiple data-sections are, for example, used for constants, variables and so on. For each type of data, another section is used. 

![[Pasted image 20231023075426.png]]