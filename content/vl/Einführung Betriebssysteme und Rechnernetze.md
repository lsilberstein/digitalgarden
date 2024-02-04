---
title: Einführung Betriebssysteme Und Rechnernetze
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 1
aliases:
  - Einführung Betriebssysteme Und Rechnernetze
tags: [wise2324, OSNW, vorlesung, flashcard]
draft: false
date: 2023-09-18
linter-yaml-title-alias: Einführung Betriebssysteme Und Rechnernetze
---

# Einführung Betriebssysteme Und Rechnernetze

**Syllabus**: As long as the first part, a [[Operating System]] is concerned, we will study the core functionality of modern [[Operating System|Operating Systems]]:

- A general introduction to [[Operating System|Operating Systems]]
- Key concept of the overall [[Windows architecture]]
- [[Memory Management]]
- [[Process management]] and [[Process management|Thread Management]]
- The [[Image Loader]]
- The [[Windows Registry]]

In the second part of this lecture, *[[Networking]]*, we will see that we need a systematic and well-defined approach to deal with these issues. For this, we first introduce the [[OSI reference model]] and discuss its different layers. The following topics will be discussed after this introduction:

- The [[TCPIP protocol stack]]
- The [[TCP protocol]] 
- The [[IP protocol]] 
- The [[Internet Control Message Protocol]] ([[Internet Control Message Protocol|ICMP]]) protocol
- [[Dynamic Host Configuration Protocol]] ([[Dynamic Host Configuration Protocol|DHCP]])
- [[Network Address Translation]] ([[Network Address Translation|NAT]])
- Active directory as a network-management mechanism
- A short introduction to sockets and [[WinSock]] (not the API, but only the concept)
- The [[IPv6]] protocol (introduction and terminology, header, options in two extension headers, addressing and other extension headers)

![[image_e.png]]

## The Existential Goal of an [[Operating System|OS]]

What is the existential goal of an [[Operating System]]?  
Using some Process and data to manage a bunch of [[Resources]].

## [[Resources|resource]]

[[Resources]] may be

1. Hardware
2. Data
3. Processes

![[image_j.png]]

What types of entities might try to access [[Resources]]?  
External and internal entities might try to *access* these certain [[Resources]].

[[Windows]] keeps **every** single entity under constant surveillance / [[Audit]] in order to 
1. gain oversight of access, and it can
2. [[Audit]] any type of access to almost any [[Resources|resource]]. 

## [[Audit]]

> [!Definition]  
> *Auditing* it the process of monitoring [[Resources]] and inspecting them if necessary, in order to make sure that they have been performing as expected.

## Managing Hardware [[Resources]]

![[image_h.png]]

## Developing Advanced [[Semiconductors]], the Bedrock of Growth and All Technologies Today

Meaning 

1. functional Design and 
2. fabs and or foundries

Some Basic categories of [[Semiconductors|semiconductors]] are

- CPU
- Memory
- (IoT) Sensors
- Power ICs (Integrated Circuits)
- PSPs Digital Signal Processors
- Analogue Chips to get and process waveform (e.g. audio, video)

[Semiconductor Manufacturing Overview - AnySilicon](https://anysilicon.com/semiconductor-manufacturing-overview/)

![[image_x.png]]

## We Differentiate between Two Types of [[Operating System|Operating Systems]]

1. [[General Purpose Operating Systems]] ([[General Purpose Operating Systems|GPOS]]) which is an [[Operating System|OS]] designed for user interactions such as workstations, servers and mobile devices.
2. [[Real Time Operating Systems]] ([[Real Time Operating Systems|RTOS]]) which is an [[Operating System|OS]] specifically designed to run with very precise timing and a high degree of reliability. This type of [[Operating System|OS]] typically only runs one program at a time. For example (network devices), medical devices, IoT, aerospace and so on. There may be some *regulatory compliance* for [[Real Time Operating Systems|RTOSs]] in place in order to guarantee security, safety and scalability.

> [!Info]  
> For example, IoT demands pervasive connectivity, but also exposes devices and systems to more security risks.

There are two choices for software running on [[Real Time Operating Systems|RTOS]]: Timing might be guaranteed within a *margin of error*. A [[Real Time Operating Systems|RTOS]] might guarantee a maximum time for the operations if performs. Otherwise, possible catastrophic implications. (*hard real-time*).  
Timing is assumed to be predictable. A [[Real Time Operating Systems|RTOS]] most likely performs operations in a specified time *(soft real-time)*

## [[Jitter]]

> [!Definition]  
> *[[Jitter]]* is a measure of how much the execution time of a task differs over subsequent iterations (which depends on the amount of errors).

# Anki

What is the definition of *[[Jitter]]* #flashcard
*[[Jitter]]* is a measure of how much the execution time of a task differs over subsequent iterations (which depends on the amount of errors).
<!--ID: 1705588835056-->

For what is a [[General Purpose Operating Systems|general purpose Operating System]] designed? #flashcard
It is designed for user interactions such as workstations, servers and mobile devices.
<!--ID: 1705588835049-->

For what is a [[Real Time Operating Systems|Real Time Operating System]] designed? #flashcard
It is designed to specifically run with very precise timing and a high degree of reliability.
<!--ID: 1705588835050-->

How many programs does a [[Real Time Operating Systems|RTOS]] typically run? #flashcard
One
<!--ID: 1705588835051-->

What is a typical application of a [[Real Time Operating Systems|RTOS]]? #flashcard
- Medical devices 
- IoT, Aerospace 
- and so on.
<!--ID: 1705588835052-->

Why may there be some *regulatory compliance* in place for a [[Real Time Operating Systems|RTOS]]? #flashcard
In order to guarantee 
- security
- safety and 
- scalability.
<!--ID: 1705588835053-->

What does *hard real-time* mean in the Context of a [[Real Time Operating Systems|RTOS]]? #flashcard
A [[Real Time Operating Systems|RTOS]] might guarantee a maximum time for the operations it performs.
<!--ID: 1705588835054-->

What does *soft real-time* mean in the context of a [[Real Time Operating Systems|RTOS]]? #flashcard
Timing is assumed to be predictable. A [[Real Time Operating Systems|RTOS]] most likely performs operations in a specified time.
<!--ID: 1705588835055-->

What are six basic categories of [[semiconductors]]? #flashcard
CPU, Memory, IoT Sensors, Power ICs, PSPs Digital Signal Processors, Analogue Chips to get and process waveforms
<!--ID: 1705588835048-->

What is the definition of *[[Audit]]*? #flashcard
Monitoring [[Resources]] and inspecting them if necessary, in order to make sure that they have been performing as expected.
<!--ID: 1705588835046-->

What is [[Windows]] doing to gain oversight of access of [[resources]]? #flashcard
It [[Audit|audits]] every entity and keeps it under constant surveillance.
<!--ID: 1705588835045-->

What types of Hardware [[Resources|resource]] is an [[Operating System|OS]] supposed to manage? #flashcard
![[image_h.png]]
<!--ID: 1705588835047-->

What types of entities might try to access [[Resources]]? #flashcard
External and internal entities might try to *access* certain [[Resources]].
<!--ID: 1705588835044-->

What types of [[Resources]] can exist? #flashcard
- Hardware
- Data 
- Processes
<!--ID: 1705588835043-->

What is the existential goal of an [[Operating System]]? #flashcard
Using some Process and data to manage a bunch of [[Resources]].
<!--ID: 1705588835040-->