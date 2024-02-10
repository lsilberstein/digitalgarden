---
title: IPv4
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
---

# IPv4

## [[IPv4]] Header

Firstly developed in the 1970s. Its [[Request for Comments|RFC]] 791 was published in 1981:

![[Pasted image 20231113090518.png]]

The [[IP Address]] (source and destination) is 32-Bit and is intended to

- identify an individual host on a [[Networking|Network]]
- refer to a specific machine in cyberspace
 
![[Pasted image 20231114082744.png]]

An [[IPv4|IPv4]] address uses a readable *dotted decimal* notation. Every [[IPv4]] address has two parts: A *Network Address component* and a *Host Address component*. One part identifies the [[Networking|Network]] (or a specific [[Local Area Network|LAN]]). The other part identifies the specific *host*. The *embedded structure* helps to create smaller [[Networking|Networks]] (domains). It helps to better utilise the bits in the host address part. An [[IP protocol|IP]] network can be subdivided into smaller [[Networking|Networks]], also called *[[Subnet|Subnets]]*.

![[Pasted image 20231114083720.png]]

### Time to Live 

The maximum number of *hops* remaining, before the [[Packets|packet]] dies. [[Datagram]]s that are destined for a certain destination need to be transferred. Without any ACK, the Sender does not know whether the [[Datagram]] did arrive. Therefore we use *TTL* in order to return [[Datagram]]s which did not arrive accordingly.

### Protocol

The [[Protocol]] being carried in the data, such as [[TCP protocol|TCP]], [[User Datagram Protocol|UDP]] or [[Internet Control Message Protocol|ICMP]].

### Checksum

An Error detection in header (which is recomputed at each [[Router]]).

### Options

The option field is in variable length. There may be zero or more Options up to 40 Bytes. 

![[Pasted image 20231120090417.png]]

The Options field may be used to specify the Route that a [[Packets|packet]] should take through the [[Networking|Network]] ([[Source Routing]]). Route [[Datagram]]s are based on information supplied by the source, such as

- *strict [[Source Routing|SR]]*: The sender specifies the exact route
- *loose source record route*: The sender gives one or more hops that the [[Packets|packet]] must go through.