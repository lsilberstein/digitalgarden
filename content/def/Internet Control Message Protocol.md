---
title: Internet Control Message Protocol
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - ICMP
---

# Internet Control Message Protocol

As defined in [[Request for Comments|RFC]] 792: The [[Internet Control Message Protocol]] is part of the [[Network Layer]]. [[Internet Control Message Protocol|ICMP]] messages are encapsulated as [[IP protocol|IP]] [[Datagram]]s. See here the Header structure of [[Internet Control Message Protocol|ICMP]]

![[Pasted image 20231120093401.png]]

[[Internet Control Message Protocol|ICMP]]s realisation is by nature quite minima. [[Internet Control Message Protocol|ICMP]] is an integral part of any [[IP Network]] realising:

- feedback to source: [[Routing]] failures
- feedback to source: Whenever the TTL has exceeded its value
- or just checking whether a remote host is available via [[Internet Control Message Protocol|ICMP]] echo and reply messages

[[Internet Control Message Protocol|ICMP]] does not address anything and does not create [[Routing Tables]]. Since it can induce countless security issues, Firewalls preferably block [[Internet Control Message Protocol|ICMP]].

## [[Internet Control Message Protocol|ICMP]] Header

### Type

Type (1 Byte) determines the format of the remaining data. After the [[Internet Control Message Protocol|ICMP]] there is a variable length for a message. See [here](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml) for a table of types:

![[Pasted image 20231120094155.png]]

### Code

Code (1 Byte) further specifies the Type.

### Checksum

Checksum (2 Bytes) is similar to the [[IP protocol|IP]] Header Checksum.