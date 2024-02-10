---
title: WinSock
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - WinSock
  - Windows Socket
---
# WinSock

The original [[WinSock]] was Microsoft's implementation of [[BSD Sockets]]. [[WinSock]] offers most of the functionality of [[BSD Sockets]], but also includes Microsoft specific enhancements. [[WinSock]] enables reliable, conneciton-oriented communication. [[WinSock]] supports unreliable, connectionless communication as well. Since version 2.2, [[WinSock]] adds numerous features beyond the [[BSD Sockets]] specification.

### Server Operations

1. Initialise [[WinSock]]
2. Create a [[Socket]] via `create()`. A created [[Socket]] is still unconnected.
3. Via `listen()` we place the [[Socket]] in a listening state for an incoming client connection request
4. `bind()` *binds* it to a local address to enable clients connecting to the server. This varies on the [[Protocol]] selected.
5. Performs an `accept()` operation to allow a client to connect to the [[Socket]]. 
6. After a connection is made, the `accept()` function returns a new [[Socket]]. It represents the real end of the connection. The original [[Socket]] used for listening is not used for communication, but only for receiving connection requests.
7. Shutdown the connection if no more data will be sent.
8. Cleanup

### Client Operations

1. Initialise [[WinSock]]
2. Create a [[Socket]] for connecting to the server via `create()`
3. We use a [[Protocol]]-independent translation from an ANSI host name to an [[IP Address]] using `getaddinfo()`. This resolves the server address and [[Port Numbers|Port]] with DNS. [[WinSock]] is a [[Protocol]]-independent API. Therefore, an address can be specified for any [[Protocol]] installed on the system over which [[WinSock]] operates. 
4. Use the client [[Socket]] and *try* to connect to a server [[Socket]] via `connect()`. Attempt to connect to an address until one succeeds. 
5. Perform `receive()` and `send()` operations.
6. Connect to the server
7. Send data from an initial buffer, receive until the peer closes the connection and fill up the buffer and continue sending.
8. Shutdown the connection since no more data will be sent
9. Cleanup

### [[WinSock]] Extensions

Microsoft has added a handful of functions that are not part of the [[BSD Sockets]] Standard, e.g. to achieve better performance for Web servers on [[Windows]]. 