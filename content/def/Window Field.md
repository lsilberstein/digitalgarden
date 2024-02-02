---
title: Window Field
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Window Field Scaling
---

# Window Field

Maximum Window size is $2^{16} -1 = 65535$, meaning the size of bytes of buffer space (in bytes) a host (sender or receiver) has available for data it can deal with.  
The receiver governs the amount of data sent by the receiver. The receiving [[TCP protocol|TCP]] reports a *window* to the sending [[TCP protocol|TCP]]. What does the value in the [[Window Field]] tell the other side? It tells it how many bytes it is allowed to send before stop and wait for an acknowledgement. Default Window size is $4128$

```mermaid

flowchart LR

  

e1(Small Windows:<br/>better for unreliable networks) --- e2(maximal size windows:<br/>only useful for a reliable network)

```

Zero means "send no data". No [[Segment|Segments]] should be acceptable except ACK [[Segment|Segments]]