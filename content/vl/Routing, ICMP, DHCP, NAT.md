---
title: Routing, ICMP, DHCP, NAT
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 10
tags: [OSNW, vorlesung, wise2324, flashcard]
draft: false
date: 2023-11-20
---

# Routing, ICMP, DHCP, NAT

## [[Routing]]

[[Router|Routers]] direct [[Packets]] to their proper destination an connect different media.

![[Pasted-image-20231114082928.png]]

[[Router|Routers]] are hardware devices that specialise in sending [[Packets]] over [[Wide Area Networks|WAN]]

- interconnecting [[Networking|Networks]] by *selecting the best path* for forwarding [[Packets]] to destination
- deploy [[Routing Tables]]
- need dedicated [[Routing Protocols]]

See here a [[Routing Tables|Routing Table]]. [[Router|Routers]] use a [[Routing Tables|Routing Table]] like a map to discover the best path for a given address.

![[Pasted image 20231120075820.png]]

## [[Routing]]

See here a route, a [[Datagram]] took:

![[Pasted image 20231120081404.png]]

One, or usually, more [[Router|Routers]] are used to direct a [[Packets|packet]] to its destination. [[Router|Routers]] only know what network the *host* is a member of. They use information stored in their [[Routing Tables|Routing Table]] to determine how to get a [[Packets|packet]] to the destinations host [[Networking|Network]].

## [[Wifi-Router]]

> [!Definition]  
> A [[Router]] that combines the [[Networking]] functions of a [[Wireless Access Point]] and a [[Router]] is called a [[Wifi-Router]].

## [[Wireless Access Point]]

> [!Definition]  
> A [[Wireless Access Point]] is hardware that allows Wifi-devices to connect to a wired [[Networking|Network]].

## [[Satellite Wifi]]

[[Router|Routers]] can be added to *[[Satellite Wifi|Satellites]]* to [[Routing|Route]] traffic to, from and between [[Satellite Wifi|Satellites]], granting

- low [[Bandwidth]]
- high [[Latency]]
- undefined high [[Jitter]]
- weather conditioned
- extremely sensitive to physical barriers on the ground

## Static and Dynamic [[Routing]]

[[Routing]], more precisely is the process of moving [[Packets]] from one [[Networking|Network]] to another one in a relatively efficient way. We distinguish between:

1. *Static configured routing* uses a setting that explicitly specifies the route to use for [[Packets]], which need manual configuration and mainly uses manual [[Routing Tables]].
2. *Dynamic Routing protocols*: [[Router|Routers]] themselves determine the *most efficient* path that [[Packets]] go through negotiation. Used [[Routing Protocols]] create and update dynamic [[Routing Tables]] (such an [[Routing Information Protocol]] ([[Routing Information Protocol|RIP]]), [[Open Shortest Path First]] ([[Open Shortest Path First|OSPF]]) and [[Interior Gateway Protocol|IGP]]). This allows the discovery of other [[Router|Routers]], calculating the best path and acquiring and updating path information.

### Static Routing

Static Routing is a setting that explicitly specifies the route to use for [[Packets]].

1. *[[Source Routing]]*: The [[Packets]] source [[IP Address]] and or destination [[IP Address]]. Here we distinguish between *Strict SR*, the sender specifies the exact route and *Loose Source Record Route* (LSRR), one or more hops that the [[Packets]] must go through.
2. *[[Service Routing]]*: The [[Networking|Network]] service used to send the [[Packets|packet]].

### [[Routing Information Protocol]]

> [!Definiton]  
> [[Routing Information Protocol]] determines optimal route for the [[Packets|packet]] to reach destination by hop count.

### [[Open Shortest Path First]]

> [!Definition]  
> [[Open Shortest Path First]] uses information about [[Bandwidth]] and delay of other [[Router|Routers]] to calculate the best path with no hop counts.

## [[Autonomous System]]

> [!Definiton]  
> A [[Autonomous System]] is a collection of [[Networking|Networks]] under a single administrative control such as
> - IPs
> - enterprise organisation

All [[Router|Routers]] inside the same [[Autonomous System|AS]] share the same [[Routing Tables|Routing Table]] information. 

## [[Interior Gateway Protocol]]

> [!Definition]  
> [[Interior Gateway Protocol]] is a type of [[Routing Protocols|Routing Protocol]] that handles [[Routing]] *within* an [[Autonomous System|AS]].

## [[Exterior Gateway Protocol]]

> [!Defintion]  
> [[Exterior Gateway Protocol]] is another [[Protocol]] type that handles [[Routing]] *between different* [[Autonomous System|AS]].

## [[Source Routing]]

When a static route is based on the [[Packets]] source, it is called a *source route*. 

> [!Example]  
> A possible deployment for [[Source Routing|SR]] is for load balancing between two internet conections. For instance, if you have an Accounting departments and a Marketing department. Lets assign each department a separate Internet connection for outgoing traffic. $WAN_A$ and $WAN_M$. [[Source Routing|SR]] config then specifies that traffic originating from the Accounting department should be sent via $WAN_A$ and another one lets all traffic coming from the Marketing Department through $WAN_M$.

## [[Service Routing]]

A static route that is based on the [[Networking|Network]] service used to send the [[Packets|packet]] is called a *Service Route*. [[Service Routing]] is useful for directing all traffic of a particular type to a specific Internet connection. 

> [!Example]  
> For example, you can choose all [[Hyper Text Transfer Protocol|HTTP]] traffic to a secondary Internet connection $WAN_2$, while [[Routing]] all other traffic to the primary Internet connection $WAN_1$. This can be realised using dedicated [[Routing Protocols]] such as [[Open Shortest Path First|OSPF]].

In sum, [[Service Routing]] enables [[Protocol]] dependent [[Routing]].

## [[IPv4]] Header Fields

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

# [[Internet Control Message Protocol]] ([[Internet Control Message Protocol|ICMP]])

As defined in [[Request for Comments|RFC]] 792: The [[Internet Control Message Protocol]] is part of the [[Network Layer]]. [[Internet Control Message Protocol|ICMP]] messages are encapsulated as [[IP protocol|IP]] [[Datagram]]s. See here the Header structure of [[Internet Control Message Protocol|ICMP]]

![[Pasted image 20231120093401.png]]

[[Internet Control Message Protocol|ICMP]]s realisation is by nature quite minimal. [[Internet Control Message Protocol|ICMP]] is an integral part of any [[IP Network]] realising:

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

## [[IP Network]]

> [!Definition]  
> An [[IP Network]] is a [[Networking|Network]] that connects to other parts of the Internet by using [[IP protocol|IP]] at the [[OSI reference model|OSI]] [[Network Layer]]. 

[[IP Network|IP Networking]] required *three* kinds of [[Protocol|Protocols]]:

1. [[IP protocol|IP]] for host-to-host communication
2. [[Routing Protocols]] to let [[Router|Routers]] move [[Packets]] from one [[Networking|Network]] to another in an efficient way
3. [[Internet Control Message Protocol|ICMP]] to control and maintain [[Routing]]

# [[Dynamic Host Configuration Protocol]] ([[Dynamic Host Configuration Protocol|DHCP]])

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

# [[Network Address Translation|Network Address Translation]] ([[Network Address Translation|NAT]])

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

### [[Carrier]]

> [!Definition]  
> [[Carrier|Carriers]] are [[Carrier|Service Providers]] such as
> - ISPs
> - Fibre Broadband providers
> - Mobil Operators

# Anki

What structure are [[Router|Routers]] using to determine how to get a [[Packets|packet]] to the destinations host [[Networking|Network]]? #flashcard
A [[Routing Tables|Routing Table]]
<!--ID: 1707673387038-->


What is the *definition* of a [[Wifi-Router]]? #flashcard
A [[Router]] that combines the [[Networking]] functions of a [[Wireless Access Point]] and a [[Router]] is called a [[Wifi-Router]]. 
<!--ID: 1707673387041-->


What is a [[Wireless Access Point]]? #flashcard
A [[Wireless Access Point]] is hardware that allows Wifi-devices to connect to a wired [[Networking|Network]].
<!--ID: 1707673387042-->


What *two* ways of [[Routing]] exist? #flashcard 
- *Static configured Routing*
- *Dynamic Routing*
<!--ID: 1707673387043-->


What does is mean when using a *Static configured Routing*? #flashcard
Explicitly specify the route to use for [[Packets]]. 
<!--ID: 1707673387044-->


What does *Dynamic Routing* mean? #flashcard
[[Router|Routers]] themselves determine the *most efficient* path that [[Packets]] go through.
<!--ID: 1707673387045-->


What [[Protocol|Protocols]] are used for creating dynamic [[Routing Tables]]? #flashcard 
- [[Routing Information Protocol|RIP]]
- [[Open Shortest Path First|OSPF]]
- [[Interior Gateway Protocol|IGP]]
<!--ID: 1707673387046-->


Which *two* types of *Static Routing* do exist? #flashcard 
1. [[Source Routing]]
2. [[Service Routing]] 
<!--ID: 1707673387047-->


What is [[Source Routing]] and what *two* types of [[Source Routing]] do exist? #flashcard 
1. *Strict SR*: The sender specifies the exact Route
2. *Loose Source Record Routing (LSRR)*: One or more hops that the [[Packets|packet]] must go through
<!--ID: 1707673387048-->


What does the *abbreviation* [[Routing Information Protocol|RIP]] mean? #flashcard
[[Routing Information Protocol]]
<!--ID: 1707673387049-->


How does [[Routing Information Protocol|RIP]] determine the optimal route for a [[Packets|packet]]? #flashcard
By hop count
<!--ID: 1707673387050-->


What does the *abbreviation* [[Open Shortest Path First|OSPF]] mean? #flashcard
[[Open Shortest Path First]]
<!--ID: 1707673387051-->


What information does [[Open Shortest Path First|OSPF]] use to calculate the optimal route for [[Packets]]? #flashcard
information about [[Bandwidth]] and delay of other [[Router|Routers]].
<!--ID: 1707673387052-->


What does the *abbreviation* [[Autonomous System|AS]] mean? #flashcard
[[Autonomous System]]
<!--ID: 1707673387053-->


What is an [[Autonomous System]]? #flashcard
An [[Autonomous System]] is a collection of [[Networking|Networks]] under a single administrative control.
<!--ID: 1707673387054-->


What does the *abbreviation* [[Interior Gateway Protocol|IGP]] mean? #flashcard
[[Interior Gateway Protocol]]
<!--ID: 1707673387055-->


What is the task of [[Interior Gateway Protocol|IGP]]? #flashcard
[[Interior Gateway Protocol]] is a type of [[Routing Protocols|Routing Protocol]] that handles [[Routing]] *within* an [[Autonomous System|AS]].
<!--ID: 1707673387056-->


What is the *definition* of the [[Exterior Gateway Protocol]]? #flashcard
[[Exterior Gateway Protocol]] is another [[Protocol]] type that handles [[Routing]] *between different* [[Autonomous System|AS]].
<!--ID: 1707673387057-->


In sum, what is [[Service Routing]]? #flashcard
[[Service Routing]] enables [[Protocol]] dependent [[Routing]].
<!--ID: 1707673387058-->


What is the usage of the *Time to Live* Header field in the [[IPv4]] [[Protocol]]? #flashcard
The maximum number of hops remaining, before the [[Packets|packet]] dies.
<!--ID: 1707673387059-->


What is the usage of the *Protocol* Header Field in the [[IPv4]] [[Protocol]]? #flashcard
The [[Protocol]] being carried in the data, such as [[TCP protocol|TCP]], [[User Datagram Protocol|UDP]] or [[Internet Control Message Protocol|ICMP]].
<!--ID: 1707673387060-->


When is the *Checksum* Header Field in the [[IPv4]] [[Protocol]] being calculated? #flashcard
At each [[Router]]
<!--ID: 1707673387061-->


What is the maximum length for the *Options* Header field in [[IPv4]]? #flashcard
40 Bytes
<!--ID: 1707673387062-->


What might be an example of data that is stored in the *Options* Header field in [[IPv4]]? #flashcard
It may be used to specify the Route that a [[Packets|packet]] should take through the [[Networking|Network]].
<!--ID: 1707673387063-->


What does the *abbreviation* [[Internet Control Message Protocol|ICMP]] mean? #flashcard
[[Internet Control Message Protocol]]
<!--ID: 1707673387064-->


[[Internet Control Message Protocol|ICMP]] is part of which [[OSI reference model]] layer? #flashcard
[[Network Layer]]
<!--ID: 1707673387065-->


What *three* features does [[Internet Control Message Protocol|ICMP]] provide? #flashcard 
- feedback to source: [[Routing]] failures
- feedback to source: Whenever the TTL has exceeded its value
- or just checking whether a remote host is available via [[Internet Control Message Protocol|ICMP]] echo and reply messages
<!--ID: 1707673387066-->


Firewalls mostly let [[Internet Control Message Protocol|ICMP]] request through with no problem. (True or False) #flashcard
False. Firewalls preferably block [[Internet Control Message Protocol|ICMP]], because it induces countless security issues.
<!--ID: 1707673387067-->


What is an [[IP Network]]? #flashcard
An [[IP Network]] is a [[Networking|Network]] that connects to other parts of the Internet by using [[IP protocol|IP]] at the [[OSI reference model|OSI]] [[Network Layer]].
<!--ID: 1707673387068-->


What *three* kinds of [[Protocol|Protocols]] does [[IP Network|IP Networking]] require? #flashcard 
1. [[IP protocol|IP]] for host-to-host communication
2. [[Routing Protocols]] to let [[Router|Routers]] move [[Packets]] from one [[Networking|Network]] to another in an efficient way
3. [[Internet Control Message Protocol|ICMP]] to control and maintain [[Routing]]
<!--ID: 1707673387069-->


What does the *abbreviation* [[Dynamic Host Configuration Protocol|DHCP]] mean? #flashcard
[[Dynamic Host Configuration Protocol]]
<!--ID: 1707673387070-->


What is the *definition* of [[Dynamic Host Configuration Protocol|DHCP]]? #flashcard
[[Dynamic Host Configuration Protocol]] is a client / server [[Protocol]] to lease [[IP Address|IP Addresses]].
<!--ID: 1707673387071-->


What *four* additional types of information does a [[Dynamic Host Configuration Protocol|DHCP]] server provide? #flashcard 
- default gateway
- host name
- name server
- [[Subnet]] mask
<!--ID: 1707673387072-->


A [[Dynamic Host Configuration Protocol|DHCP]] server can only provide static [[IP Address|IP Addresses]]. (True or False) #flashcard
False
<!--ID: 1707673387073-->


Why might a *Relay Agent* be useful when using a [[Dynamic Host Configuration Protocol|DHCP]] server? #flashcard
If there are no [[Dynamic Host Configuration Protocol|DHCP]] servers on the same [[Local Area Network|LAN]] as the client, then the gateway [[Router]] must be configured to relay [[Dynamic Host Configuration Protocol|DHCP]] requests.
<!--ID: 1707673387074-->


What are *two* Use-Cases for using [[Dynamic Host Configuration Protocol|DHCP]]? #flashcard
Assigning [[IP Address|IP Addresses]] for new devices and for devices that are moved from one [[Subnet]] to another.
<!--ID: 1707673387075-->


What is another method than using [[Dynamic Host Configuration Protocol|DHCP]] for leasing [[IP Address|IP Addresses]]? #flashcard
Manual assignment of [[IP Address|IP Addresses]].
<!--ID: 1707673387076-->


What does the *abbreviation* [[Network Address Translation|NAT]] mean? #flashcard
[[Network Address Translation]]
<!--ID: 1707673387077-->


How is it possible to have more than 4 billion devices with [[IPv4]] addresses? #flashcard
[[Network Address Translation|NAT]]
<!--ID: 1707673387078-->


What does a [[Network Address Translation|NAT]] device do? #flashcard
A [[Network Address Translation|NAT]] device is required to map private [[IP Address|IP Addresses]] to valid [[IP Address|IP Addresses]] and vice versa.
<!--ID: 1707673387079-->


How could a schematic operation of a [[Network Address Translation|NAT]] device look like? #flashcard
![[Pasted image 20231121082904.png]]
<!--ID: 1707673387080-->


How could a schematic topology of a [[Network Address Translation|NAT]] is a Corporate [[Networking|Network]] look like? #flashcard
![[Pasted image 20231121083508.png]]
<!--ID: 1707673387081-->


What is the *definition* of Overloading ([[Network Address Translation|NAT]])? #flashcard
Overloading is a form of dynamic [[Network Address Translation|NAT]]. It maps several unregistered [[IP Address|IP Addresses]] to a single registered [[IP Address]]. Also called *IP Masquerading*, by using different [[Port Numbers|Ports]].
<!--ID: 1707673387082-->


What are *differences* between [[Network Address Translation|NAT]] and a Proxy? #flashcard 
1. [[Network Address Translation|NAT]] is [[Network Layer|L3]], while a Proxy is [[Transport Layer|L4]]
2. [[Network Address Translation|NAT]] is transparent to the source and destination, while a Proxy is not
<!--ID: 1707673387083-->


What are some security concerns of a [[Network Address Translation|NAT]]? #flashcard 
- An attacker could take over a [[Network Address Translation|NAT]] device
- An attacker could try to guess the addressing / mapping scheme
- What about insiders?
<!--ID: 1707673387084-->


Why might using a [[Network Address Translation|NAT]] be of usage for security? #flashcard
[[Network Address Translation|NAT]] hides internal [[IP Address|IP Addresses]]. 
<!--ID: 1707673387085-->


What is a [[Carrier]]? #flashcard
[[Carrier|Carriers]] are [[Carrier|Service Providers]] such as
- ISPs
- Fibre Broadband providers
- Mobil Operators
<!--ID: 1707673387086-->
