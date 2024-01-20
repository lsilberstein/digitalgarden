---
title: Graphics Device Interface
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - windowing and graphics system
  - GDI
---

# Graphics Device Interface

Like almost any other [[Operating System|OS]], [[Windows]] is an interactive [[Operating System|OS]], meaning it's a GUI based [[Operating System|OS]]. It uses a subsystem that provides the GUI functions required, also called *[[Graphics Device Interface|windowing and graphics system]]* dealing with

- Windows and dialogues
- User interface controls
- Drawing

The [[Graphics Device Interface|windowing and graphics system]] is a [[Kernel Address Space|Kernel Mode]] component by design. It is required even on server systems with no interactive users logged on. It is embedded in an [[Operating System|OS]] component called *[[Windows Subsystem]]*, which is itself started by the so called *[[Session Manager]]* and also contains components in [[User Application Space|UAS]].