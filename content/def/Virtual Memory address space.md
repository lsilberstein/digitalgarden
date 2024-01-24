---
title: Virtual Memory Address Space
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Virtual Memory
  - Virtual Memory Address Space
  - VAS
  - Private Virtual Memory
linter-yaml-title-alias: Virtual Memory Address Space
---

# Virtual Memory Address Space

> [!Definition]  
> [[Virtual Memory address space|Virtual Memory]] space is divided into blocks of variable length.  
> ![[Pasted image 20231022230301.png]]
> 
> ![[Pasted image 20231022230756.png]]

[[physical memory|Physical Memory]] is always very scarce. More [[Central Processing Unit|CPU]] power demands more [[physical memory]]. 

```mermaid
flowchart LR
e1(more CPU power) --- demands --->
e2(more processes) -->
e3(more memory is required)
```

That's why we need to amplify [[physical memory]] in some way. One method of doing so is by using a so-called [[Virtual Memory address space]] that can be mapped to [[physical memory]].  
The Intel Architecture has three address spaces: 

- virtual
- linear
- physical

![[Pasted image 20231022170655.png]]

The [[Operating System|OS]] assigns each [[Process]] its own VM. The memory footprint for each [[Process]] looks like a single contiguous block of a large amount of memory. [[Virtual Memory address space|Virtual Memory]] of a [[Process]] can be non-contiguous. 

![[Pasted image 20231022225750.png]]

## How to Map [[Virtual Memory address space|Virtual Memory]] to [[physical memory|Physical Address Space]]

We use a [[Segment]] table to map virtual to linear addresses. In [[Linear Address Space]], we use corresponding block sizes to represent [[Segment|segments]]. Another, more detailed way to map [[Virtual Memory address space|Virtual Memory Address Space]] to [[physical memory|Physical Address Space]] when using multiple [[Process|Processes]] may be implemented via [[Frames]]. In addition, we need a mechanism to keep track of all free [[Frames]].

![[Pasted image 20231022182306.png]]

# Why Use [[Virtual Memory address space|Virtual Memory]] at All?

The x86-64 architecture allows a 64-bit address bus (yet only on paper). $2^{64}$ bytes = 16 exabytes = 16 billion GB. Currently, we usually use a *48 bit address space*, meaning $2^{48} = 281$ TB. Doing so is related to an [[Operating System|OS]], more or less, only theory as well! For the foreseeable future, there are at least three reasons why a flat 64 or 48 bit address works predominantly on paper. 

1. A crucial collateral effect of [[Pages|Paging]] and [[Segment|Segmentation]] is *protection of memory*. Using pure, flat addressing needs efficient and cost-effective new protection mechanisms for both [[Central Processing Unit|CPU]] and [[Operating System|OS]].
2. Power consumption and heat dissipation: As of right now, there is no solution to the relatively enormous power consumption of computers, and the expected vast amount of heat during performing operations. Overheated systems mean shorter maximum life-spans.
3. Money, money, money: a 64-bit address bus would enable the [[Windows architecture]] to implement a flat memory model without [[Pages|Paging]]], meaning a flat 64-bit [[Linear Address Space]]. That much memory is technically not feasible and way too costly. There is simply no point in implementing a full 64-bit address space now. We cannot build a system that could utilize such an address space in full, and motherboards have their own limits on how much [[physical memory]] they can support.

# Private Virtual Memory

![[image_1m.png]]

[[Virtual Memory address space|Private Virtual Memory]] cannot be shared with other [[Process|Processes]]. They are committed [[Pages|Pages]] or also called *private memory*, *private pages* or *private bytes*. The [[Operating System|OS]]'s *commit limit* (this is a [[Policies|Policy]] by the way) bounds the value of how many pages can be committed to a single [[Process]].  
There can be free private process memory. Not all regions in the private address space of a [[Process]] are allocated (*used*). 