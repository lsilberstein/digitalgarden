---
title: Subnet
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Subnets
  - Subnetting
---

# Subnet

An [[IP protocol|IP]] network can be subdivided into smaller [[Networking|Networks]], also called *[[Subnet|Subnets]]*. Each [[Subnet]] is bounded by an [[IP protocol|IP]] [[Router]] and assigned a new [[Networking|Network]] ID, which is a [[Subnet]] of the original network address.

## Why Use [[Subnet|Subnets]]?

There are four reasons for using [[Subnet|Subnets]]:

1. [[Subnet|Subnetting]] is a mean to enable *easier management* of networks.
2. It enhances *security through segmentation*. When a [[Networking|Network]] is divided using [[Subnet|Subnets]], it is *not* possible for the systems on one [[Subnet]] to access systems on another. This gives some level of security and isolation for the systems within a [[Subnet]].
3. [[Subnet|Subnets]] help to *preserve [[IP protocol|IP]] Address space*.
4. [[Subnet|Subnetting]] improves *performance of [[Router|Routers]]*. In a large [[Networking|Network]] (without [[Subnet|Subnets]]) with multiple branches, it is a laborious procedure for the [[Router|Routers]] to store all the [[IP Address|IP Addresses]] used by individual systems in all branches. A [[Router]] that keeps all [[IP Address|IP Addresses]] of a large [[Networking|Network]], requires larger [[physical memory]] to uphold performance and needs more processing capacity to sustain its speed.

> [!Info]  
> [[Subnet|Subnetting]] makes only sense on larger [[Networking|Networks]] (with 255+ hosts).

## [[Subnet]] Masks

Lets assume we use the following [[IP Address]] for a certain system.

```
01101000 00010000 00101101 01100011 104.016.045.099
```

We must find a way to know which part is used as the network address. The remaining part is the host address. Thats why we define a 32-bit number, called a *[[Subnet]] mask*. All bits that belong to the network address are turned *on*, meaning they are set to $1$.

```
11111111 11111111 11110000 00000000 255.255.240.000
```

The rest goes to the *host address in the [[Subnet]]* and turned off (set to `0`). See here an example for a *[[Subnet]] mask*.

```
01101000 00010000 00101101 01100011 104.016.045.099
11111111 11111111 11110000 00000000 255.255.240.000
```

The interpretation of the [[IP Address]] by means of the *[[Subnet]] Mask* with 20 *mask bits* and 12 *subnet bits*.

```
01101000 00010000 00100000 000000000 104.016.032.000 network
```

In this [[Subnet]], $2^{12} -2$ hosts ($=4094$) with unique [[IP Address|IP Addresses]] are possible. One of them for example is `104.16.45.99`. Here possible addresses would be:

```txt
from 01101000 00010000 00100000 00000001 104.16.32.1
to   01101000 00010000 00101111 11111111 104.16.47.255
```

However, the last binary addresses with a host portion of all `1` cannot be used for a host address, since it is reserved for a special purpose: *broadcasting* [[Packets]] to every host on a [[Networking|Network]].  
Thus, the first and last address in any [[Subnet]] cannot be assigned to any individual host. Available addresses would be:

```
from 104.16.32.1
to   104.16.47.254
```
