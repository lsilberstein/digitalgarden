---
title: Operating System Architecture
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Operating System Architecture
linter-yaml-title-alias: Operating System Architecture
---

# Operating System Architecture

Application Code has no or very limited access to system [[Resources]]. However, it has a *well-defined* set of available interfaces to the [[Operating System|OS]]'s [[Resources]], even though it has **no direct access** to the hardware.

![[image_d.png]]

When a [[User Application Space|User Mode]] Program *calls* an [[OS service]], an [[OS service]] translated that call to special instructions for a processor. The processor executes these instructions then to perform the task. When the [[OS service]] completes, the [[Operating System|OS]] switches back to [[User Application Space|User Mode]] and allows the caller app to continue. Doing so allows us to implement all four mentioned features of an [[Operating System|OS]].  
The scale and complexity of an [[Operating System|OS]] ecosystem is a critical factor in any discussion:

- The [[Operating System|OS]] needs to run on thousands of hardware configurations
- There are tens of thousands of software partners
- and hundreds of millions of users trying to use a certain [[Operating System|OS]]. 

For example, [[Windows]] 10 has over 700 Million monthly active devices and over 35 Million application titles with greater than 175 Million application versions. 

[Windows 10 Quality approach for a complex ecosystem | Windows Experience Blog](https://blogs.windows.com/windowsexperience/2018/11/13/windows-10-quality-approach-for-a-complex-ecosystem/)