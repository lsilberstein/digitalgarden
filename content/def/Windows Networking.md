---
title: Windows Networking
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date:
---
# Windows Networking

![[Pasted image 20231128083105.png]]

We distinguish between server and client side. See here a schematic view of connection oriented client-server-communications. 

![[Pasted image 20231127092153.png]]

After binding an address, a connectionless server is *not different* from a connection-oriented server. It can send and receive data over the socket simply by specifying the remote address with each operation.

[[Windows]] implements several [[Networking]] APIs ([[Windows Networking]]). Why implement so many of them? 

- to provide applications and efficient, portable and standardised functionality
- to provide support for legacy applications
- to gain compatibility with industry standards
- to offer [[Networking]] capabilities that are independent of particular [[Networking|Network]] implementations

Such as

- [[WinSock]]
- Winsock Kernel (WSK)
- Web access APIs
- and so on