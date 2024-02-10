---
title: Dynamic Host Configuration Protocol
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - DHCP
---

# Dynamic Host Configuration Protocol

> [!Definition]  
> [[Dynamic Host Configuration Protocol|Dynamic Host Configuration Protocol]] is a client / server [[Protocol]] to lease [[IP Address|IP Addresses]] (*leasing*). 

[[Dynamic Host Configuration Protocol|DHCP]] automatically delivers a [[Dynamic Host Configuration Protocol|DHCP]] client its [[IP Address]] after a machine boot, usually selected dynamically from a pool (range of addresses). Based on [[Media Access Control|MAC]] Addresses, [[Dynamic Host Configuration Protocol|DHCP]]'s can even provide static [[IP Address|IP Addresses]]. In addition, there are also other related configuration information transferred, such as 

- default gateway
- host name
- name server
- [[Subnet]] mask

A client sends out a broadcast from [[User Datagram Protocol|UDP]] [[Port Numbers|Port]] 68 to [[User Datagram Protocol|UDP]] [[Port Numbers|Port]] 67 to *discover* a [[Dynamic Host Configuration Protocol|DHCP]] server. The server then responds by broadcasting an *offered* [[IP Address]] to the clients [[User Datagram Protocol|UDP]] [[Port Numbers|Port]] 68. These addresses are then *leased*.

![[Pasted image 20231121082316.png]]

If there are no [[Dynamic Host Configuration Protocol|DHCP]] servers on the same [[Local Area Network|LAN]] as the client, then the gateway [[Router]] must be configured to relay [[Dynamic Host Configuration Protocol|DHCP]] requests to a [[Dynamic Host Configuration Protocol|DHCP]] server. 

![[Pasted image 20231120095655.png]]

See here an example filtering `bootp` and `udp port 67 or udp port 68`. Here BOOTP (Bootstrap Protocol) is used instead of [[Dynamic Host Configuration Protocol|DHCP]]. [[Dynamic Host Configuration Protocol|DHCP]] is implemented as an extension of an older [[Protocol]] called BOOTP. A [[Dynamic Host Configuration Protocol|DHCP]] request has a requested [[IP Address]] option to ask for a specific address. This address must already be saved somewhere. Under [[Windows]], this information is stored in the [[Windows Registry|Registry]] via `…\services\Tcpcp\Parameters\Interfaces\{interface-name}`.  
Each [[Dynamic Host Configuration Protocol|DHCP]] message is carried in a [[User Datagram Protocol|UDP]] [[Packets|packet]]. 

![[Pasted image 20231120100132.png]]

To capture under [[Windows]], run 

```cmd
ipconfig /release
ipconfig /renew
```

to release all [[IP Address|IP Addresses]] of all interfaces.

## Why Use [[Dynamic Host Configuration Protocol|DHCP]]?

Without [[Dynamic Host Configuration Protocol|DHCP]], manual configuration is required such as for

- [[IP Address|IP Addresses]] for new devices
- [[IP Address|IP Addresses]] for devices that are moved from one [[Subnet]] to another

[[Dynamic Host Configuration Protocol|DHCP]] automates and manages the entire [[Process]] centrally. These [[IP Address|IP Addresses]] are dynamic *leased* rather than static *permanently assigned*. Addresses no longer in use are automatically returned to the pool for reallocation.