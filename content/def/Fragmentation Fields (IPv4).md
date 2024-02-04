---
title: Fragmentation Fields (IPv4)
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - TTL
  - Time To Live
  - Checksum
  - Flag
  - Flags
  - Fragmentation Offset
---

# Fragmentation Fields (IPv4)

Header Checksum is a checksum on the header only. Since some header fields change (e.g. [[Fragmentation Fields (IPv4)|Time To Live]]). This is recomputed and verified at each point that the [[IP protocol|IP]] header is processed. Identification, Flags and Fragment Offset are normally not used due to security concerns.