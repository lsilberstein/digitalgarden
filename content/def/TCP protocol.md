---
title: TCP Protocol
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - TCP Protocol
  - TCP
  - Transport Control Portocol
linter-yaml-title-alias: TCP Protocol
---

# TCP Protocol

## [[TCP protocol|TCP]] Essentials

[[TCP protocol|TCP]] is the most widely used transport [[Protocol]]. [[Process|Processes]] deliver data to [[TCP protocol|TCP]] and a *stream* of [[Packets]] [[Stream Interface]], which can be arbitrarily large. A [[TCP protocol|TCP]] connection has *two* endpoints, meaning its [[Port Numbers|Port]] to [[Port Numbers|Port]].

[[TCP protocol|TCP]] break streams into [[Segment|Segments]]:

1. The original stream is numbered by bytes
2. [[Segment|Segments]] contain *Sequence numbers* of data bytes
3. A payload for the [[IP protocol|IP Protocol]]

*Full duplex* exchanges data in both directions simultaneously.

## [[TCP protocol|TCP]] Background

![[Pasted image 20231106190426.png]]

A [[TCP protocol|TCP]] connection has two endpoints. [[TCP protocol|TCP]] has different views to each adjacent layers.

- [[TCP protocol|TCP]] in from [[Application Layer|L7]]: [[TCP protocol|TCP]] gets its payload as a chunk of bytes from [[Application Layer|L7]].
- [[TCP protocol|TCP]] out to [[Network Layer|L3]]: A [[Stream Interface|Byte Stream]] consists of [[Segment|Segments]] as payload to [[Network Layer|L3]]. The [[Network Layer|L3]] [[Protocol]], e.g. [[IP protocol|IP]] treats [[TCP protocol|TCP]] like data and does not interpret any contents of the [[TCP protocol|TCP]] message.
- [[TCP protocol|TCP]] to [[TCP protocol|TCP]]: a [[TCP protocol|TCP]] receiver sends acknowledgements (ACKs) for [[Segment|Segments]] received correctly from the sender. A [[TCP protocol|TCP]] sender expects AKCs afterwards.

In most cases, we use an additional [[Protocol]] between [[TCP protocol|TCP]] and [[Application Layer|L7]] ([[Presentation Layer|L6]]), also called the [[Transport Layer Security]] ([[Transport Layer Security|TLS]]) which provides encrypted [[Application Layer|L7]] data. [[Transport Layer Security|TLS]] has its own records with its own headers.

[[TCP protocol|TCP]] provides reliable delivery and ensures the *integrity* of data being transferred. It provides sequencing of bytes transferred in [[Packets]] (also called [[Segment|Segments]]) and provides retransmission, if necessary. Must familiar [[Application Layer|L7]] [[Protocol|Protocols]] use [[TCP protocol|TCP]], such as

- Web browsing ([[Hyper Text Transfer Protocol|HTTP]])
- Secure Shell ([[Secure Shell|SSH]])
- File Transfer ([[File Transfer Protocol|FTP]])
- Email (SMTP, POP, IMAP)
- Network Management ([[Simple Network Management Protocol|SNMP]])

## Header

The [[TCP protocol|TCP]] header format is documented in [RFC 793](https://www.rfc-editor.org/rfc/rfc793). The same header format is used in both directions. A [[Segment]] carries a header along with data.

![[Pasted image 20231106090520.png]]

*Sequence number* (SYN) is used to keep data in proper order. *Acknowledgement number* (ACK) if the ACK Flag is set, the sender expects the set Acknowledgement Number.

## Establishing a Connection

[[TCP protocol|TCP]] is *connection-oriented*. Therefore, [[TCP protocol|TCP]] uses a *[[Three-Way-Handshake]]* to establish such a connection. For a reliable connection establishment and termination. [[TCP protocol|TCP]] utilizes a *reliable connection setup*. The *Thee-Way-Handshake* guarantees a reliable startup. 

*Graceful connection Shutdown*: [[TCP protocol|TCP]] guarantees delivery of all data until endpoint shutdown. [[TCP protocol|TCP]] verifies the correct delivery of data from client to receiver. [[TCP protocol|TCP]] will retransmit lost [[Segment|Segments]].

![[Pasted image 20231106190914.png]]

### [[TCP protocol|TCP]] [[Three-Way-Handshake]]

The initial sequence number (ISN). Handshaking is an ISN exchange, indeed. After handshaking, a connection is established.

![[Pasted image 20231106094643.png]]

Here [[TCP protocol|TCP]] handshake establishes a connection. It is initiated by one [[TCP protocol|TCP]] SYN and responded to by a SYN, ACK.

## Data Communication

![[Pasted image 20231106190426.png]]

The Sequence Number is used to determine the position of the first byte in my [[Segment|Segments]] data. The Acknowledgement number determines the position of the next byte I expect from you. Therefore, we can identify the position of each byte in the sequence.

How does one number bytes within a [[Segment]]:

- The first byte immediately following the header is the lowest numbered
- The following bytes are numbered consecutively.

A fundamental notion in this design is the *every byte of data* sent over a [[TCP protocol|TCP]] connection has a Sequence Number. Since every byte is sequenced, each of them could be acknowledged. However, the acknowledgement mechanism employed is cumulative. So that an ACK of sequence number $X$ confirms all bytes up to but not including $X$ have been received.  
The Acknowledgement Number contains the next Sequence Number that a receiving host is expecting to receive from the sender. The first [[Packets|packet]] in the [[Stream Interface|Stream]] carries the actual payload (here, the clients [[Hyper Text Transfer Protocol|HTTP]] request).

### Parallel [[TCP protocol|TCP]] [[Three-Way-Handshake|Handshake]] in a Single [[Session]]

Such as a parallel [[Hyper Text Transfer Protocol|HTTP]] connection

![[Pasted image 20231106191456.png]]

![[Pasted image 20231106100449.png]]

## Retransmission Layer

When [[TCP protocol|TCP]] transmits a [[Segment]] containing data, it puts a copy in a *retransmission queue* and starts a *retransmission timer*. When the acknowledgement for that data is received, the [[Segment]] is deleted from the queue.

![[Pasted image 20231106192516.png]]

## Keep Alive Timer

Proposed in [[Request for Comments|RFC]] 1122. The Keep Alive Timer allows [[TCP protocol|TCP]] to periodically check whether the other end of the connection is still alive. The default value of this timer is *2 hours*. After the expiration of the timer, probes are sent to the remote end (a keep alive [[Segment]]). The connection is then dropped if the remote does not respond to the probes. The real value depends on the specific implementation.

```mermaid
flowchart LR
e1(OSI Layer) --> e2(Specific Protocol) --> e3(Protocol Implementation)
```

## Other [[TCP protocol|TCP]] Control Bits (flags)

These flags are used together with the new `ECT` and `CE` flags in the [[IP protocol|IP]] header for *[[Explicit Congestion Notification]]* ([[Explicit Congestion Notification|ECN]]), a method for an intermediate [[Router]] to notify the end hosts of impending [[Networking|Network]] congestion.

| Flag | Detail |  |
| ---- | ---- | ---- |
| NS | [[Explicit Congestion Notification\|ECN]] notice |  |
| CWR | Congestion Window Reduced due to [[Networking\|Network]] congestion, reduced window size |  |
| ECE | [[Explicit Congestion Notification\|ECN]] echo: explicit congestion notification echo, connection is experiencing congestion |  |

### URG

Notifies the receiver to process the urgent [[Segment]] before processing all other [[Packets]]. Part of the data within a [[Segment]] are urgent and should be handled with priority. The urgent Pointer in the Header points to the sequence number if the **last** byte + 1 in a sequence of urgent data, counting from the first byte of the [[Segment]] data.

### PSH

Tells the receiver to process these [[Packets]] as they are received, instead of buffering them.

### RST

`RST` Forcefully terminated the connection. Unexpected [[Segment|Segments]] must be sent whenever a [[Segment]] arrives which apparently is not intended for the current connection.

### FIN

`FIN` Means no more data from sender; Request a *graceful* termination of connection.

### Checksum

It is used for error detection. To check if the [[TCP protocol|TCP]] header is ok (or manipulated? Corrupted? …)

### Urgent Pointer

It is used in combination with the `URG` flag. Indicated where the urgent data ends.

### Options

Can be anywhere between $0$ and $32$ bits.

- optional
- predefined
- options for other field or
- related to other [[Protocol|Protocols]]

> [!Example]  
> The Window Field [[Process]] to [[Process]] communication. It is related to the fact that [[TCP protocol|TCP]] [[Segment|Segments]] are payload for [[IP protocol|IP]] [[Packets]].
> 
> ![[Pasted image 20231106104528.png]]

### Data Offset

Determines where the payload ([[Packets|packet]] content) begins, or also header length. The number of 32 bit words up tot the payload. The maximum size for the Header length fields, when all possible options are selected, is $60$ bytes.  
Only a one digit hex value is set aside for indicating the [[TCP protocol|TCP]] header length

$$
\mbox{max possible value} = \mbox{hex F (0xF} = \mbox{decimal }15\mbox{)} = 15 \times4\mbox{-byte chunks} = 60 \mbox{ bytes}
$$

Otherwise, it would be a $20$ bytes header. Therefore, the [[TCP protocol|TCP]] header's length must be a multiple of 4 bytes.