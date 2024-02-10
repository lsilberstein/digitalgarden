---
title: Network Address Translation
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - NAT
---

# Network Address Translation

As defined in [RFC 1631](http://www.faqs.org/rfcs/rfc1631.html). Our Problem: A shortage of [[IPv4]] addresses and not enough [[IPv4]] addresses to go around. A possible solution was: Internet [[Networking|Networks]] use *illegal* or unroutable (private addresses). A private [[IP Address]] is the outcome of an [[IP protocol|IP]] Header manipulation and a checksum modification as well. 

![[Pasted image 20231120102313.png]]

## [[Network Address Translation|NAT]] Devices

[[Network Address Translation|NAT]] devices set aside addresses such as `10.x.y.z` and `192.168.x.y`. Such addresses cannot be unique. Thus they are called *private* or *unroutable*. A dedicated device is required to map private [[IP Address|IP Addresses]] to valid [[IP Address|IP Addresses]] and vice versa.

## [[Network Address Translation|NAT]] Realisation

![[Pasted image 20231121082904.png]]

Outgoing: A Gateway replaces internal addresses with valid [[IP Address|IP Addresses]]. Incoming: A Gateway replaces valid [[IP Address|IP Addresses]] with an internal one. Note that the [[Network Address Translation|NAT]] device must remember. [[Network Address Translation|NAT]] might be a [[Router]] function. The [[Router]] may replace at the boundary of a private [[Networking|Network]] [[IP Address|IP Addresses]] (and possibly [[Port Numbers]]) of [[IP protocol|IP]] [[Datagram]]s. A [[Network Address Translation|NAT]] [[Router]] creates a [[Local Area Network|LAN]] of private [[IP Address|IP Addresses]] and interconnects the [[Local Area Network|LAN]] to the Internet. [[Network Address Translation|NAT]] [[Router|Routers]] are usually also [[Dynamic Host Configuration Protocol|DHCP]] servers as well. 

- automatically assigned [[IP Address|IP Addresses]]
- send a *broadcast* throughout the [[Local Area Network|LAN]] using a special Ethernet broadcast address without knowing anything else about the [[Local Area Network|LANs]] configuration.

## [[Network Address Translation|NAT]] In a Corporate [[Networking|Network]]

![[Pasted image 20231121083508.png]]

Usually, a pool of legitimate [[IP Address|IP Addresses]] are available. Mapping an unregistered [[IP Address]] to a registered [[IP Address]] happens on a *one-to-one* basis, also called *inbound mapping*.

## Dynamically Allocate Addresses

To map a larger number of local [[IP Address|IP Addresses]] to a small pool of valid [[IP Address|IP Addresses]]. This mechanism is not a popular, as other approaches. Dynamic [[Network Address Translation|NAT]] also establishes a one-to-one mapping between unregistered and registered [[IP Address|IP Addresses]], but the mapping could vary. Depending on the registered address being available in the pool at the tim of communication, i.e. translate an unregistered [[IP Address]] to the first available registered [[IP Address]] from the range of available [[IP Address|IP Addresses]].

## Overloading

> [!Definition]  
> Overloading is a form of dynamic [[Network Address Translation|NAT]]. It maps several unregistered [[IP Address|IP Addresses]] to a single registered [[IP Address]]. Also called *IP Masquerading*, by using different [[Port Numbers|Ports]].

![[Pasted image 20231121083508.png]]

This is also called *PAT* ([[Port Numbers|Port]] Address Translation), single address [[Network Address Translation|NAT]] or [[Port Numbers|Port]]-level multiplexed [[Network Address Translation|NAT]].

![[Pasted image 20231120104517.png]]

*PAT* translates *several real addresses* to a single real [[IP Address]] by translating the real address and source [[Port Numbers|Port]] to the mapped address and a *unique [[Port Numbers|Port]]*.

![[Pasted image 20231121083913.png]]

## Carrier Grade [[Network Address Translation|NAT]] ([[Network Address Translation|NAT]]444)

![[Pasted image 20231121084127.png]]

[[Carrier]] Grade [[Network Address Translation|NAT]] adds a secondary stage of address translation between the [[Carrier]] and its customers.

## [[Network Address Translation|NAT]] Is not a Proxy

Obvious differences exist:

- [[Network Address Translation|NAT]] is a [[Network Layer|L3]] [[Protocol]]
- Proxy Servers usually work at [[Transport Layer|L4]] or higher, working at a higher layer makes proxy servers slower than [[Network Address Translation|NAT]] device in most cases
- [[Network Address Translation|NAT]] is transparent to the source and destination. Neither one realises that it is dealing with a third device.
- Proxy servers are not transparent. The source [[Process]] knows that it is making a request to the proxy server and must be configured to do so. The destination [[Process]] thinks that the proxy server is the source [[Process]] and deals with it directly.

## [[Network Address Translation|NAT]] And Security

[[Network Address Translation|NAT]] hides internal [[IP Address|IP Addresses]] which might be much harder for attackers to map [[Networking|Network]] topology. On the other hand, [[Network Address Translation|NAT]] is of limited security value:

- An attacker could take over a [[Network Address Translation|NAT]] device
- An attacker could try to guess the addressing / mapping scheme
- What about insiders?