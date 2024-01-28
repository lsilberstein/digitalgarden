---
title: Kernel Object
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Kernel Objects
---
# Kernel Object

>[!Definition]
>A [[Kernel Object]] is a data structure containing specific files.

The internal structure of an [[Kernel Object]] is opaque in contrast to an ordinary data structure. A [[Thread]] cannot directly read or change data inside an [[Object]]. To access a [[Kernel Object]], a [[Thread]] calls an *object [[OS service|Service]]*:

- to read data from it
- to put data into it

Each [[Kernel Object]] has its own create, open and query [[OS service|Services]]. No direct access means: Object implementation can be changed easily over time.