---
title: Port Numbers
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Port
  - Ports
---

# Port Numbers

Server [[Process|Processes]] *listen* on a [[Port Numbers|Port]]. [[Port Numbers]] uniquely identify a [[Process]] on a computer.

Since [[Port Numbers|Port]] identifiers are selected independently by each [[TCP protocol|TCP]] they might not be unique, but both the server and client must know this. Listening [[Port Numbers|Ports]] are *open*. Non-Listening [[Port Numbers|Ports]] are *closed*. See here some examples of well-known [[Port Numbers]]:

| Tcp Port | Layer | Name | Detail |
| ---- | ---- | ---- | ---- |
| 22 | [[Application Layer\|L7]] | SSH | [[Secure Shell]] |
| 23 | [[Application Layer\|L7]] | Tor | Onion Anonymity Network |
| 53 | [[Application Layer\|L7]] | DNS | Domain Name Server (only for the operation zone transfer) |
| 80 | [[Application Layer\|L7]] | HTTP | [[Hyper Text Transfer Protocol]] |

The basic transfer element of a [[Protocol]] is called a *message*.

![[Pasted-image-20231106185708.png]]

Or here, [[TCP protocol|TCP]] [[Port Numbers|Ports]] for [[File Transfer Protocol|FTP]]. Control Connection means information, such as [[Port Numbers|Port]] commands to tell the server what [[Port Numbers|Port]] the client will be listening on for the data channel connection.

![[Pasted-image-20231106185921.png]]

| [[TCP protocol\|TCP]] [[Port Numbers\|Port]] | Layer | Name | Detail |  |  
| ---- | ---- | ---- | ---- | ---- |  
| 20 | [[Application Layer\|L7]] | [[File Transfer Protocol\|FTP]] | [[File Transfer Protocol]]: data channel |  |  
| 21 | [[Application Layer\|L7]] | [[File Transfer Protocol\|FTP]] | [[File Transfer Protocol]]: command channel |  |

Meaning, a Connection can use mire than just one [[Port Numbers|Port]].

## Communication between [[Process|Processes]]

![[Pasted-image-20231106190039.png]]

[Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)