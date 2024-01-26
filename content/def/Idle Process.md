---
title: Idle Process
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Idle
  - Idle Thread
---

# Idle Process

The *Idle Process* is a system [[Process]] with a specified task. This [[Process]] contains a single [[Thread]] `PID 0`. Each [[Central Processing Unit|CPU]] has its own dedicated idle [[Thread]]. Its purpose is to keep precise record of processor time when the [[Operating System|OS]] isn't executing other [[Thread|Threads]]. When no runnable [[Thread]] exists on a [[Central Processing Unit|CPU]], [[Windows]] dispatches that [[Central Processing Unit|CPU]]s idle thread. Idle shows indeed how much isn't being used by other [[Process|Processes]].

- The *Idle Process* has no real image
- The *Idle Process* has no [[User Application Space|User mode]] address space. 

The initial idle [[Thread]] and *idle process* structures are statically allocated before bootstrapping (initializing) the system to participate in bootstrapping the system, meaning the existence before the [[Process management|Process Manager]] and the [[Object Manager]] are initialized.