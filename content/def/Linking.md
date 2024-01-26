---
title: Linking
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Static Linking
  - Dynamic Linking
---

# Linking

```mermaid
flowchart TB
e1(Linking)
e1 --> e2(static\nwhile loading an executable)
e1 --> e3(dynamic\nwithin execution of a thread)
```

## [[Linking|Static Linking]] Or Load Time [[Linking]]

```mermaid
flowchart TB
e1(Developer)
e2(Source Code)
e3(Compiler)
e4(Object Code)
e5(Linker)
e6(Compiled Libraries)
e7(DLL)
e8(App's IAT)
e9(Application PE File)
e10(Virtual User Address Space)
e11(image loader)
e12(Compiled Libraries on HD)
e13(Shared Memory)
  
c1(the .lib accompanying the .dll\ncontains the import IAT\nfor that .dll)
c2(preparing loadtyime\ndynamic linking, implicit)
c3(during the app loading the OS\n reads the apps IAT and\n lacates the DLLs)
c4(ensures that any additional\nDLLs needed by the PE file\nis being loaded)
  
e1 --> e2 --> e3 --> e4 --> e5
e7 --> e5
e7 --> e6 --> e7
e7 --> e9 --> e10
e7 --> e8
e8 --- e9
e11 --read access--> e8
e11 --read access--> e9
e11 --mapping--> e13
e11 --read access--> e12
  
c2 -.-> e5
c1 -.-> e7
c3 -.-> e8
c4 -.-> e12
```

## [[Linking|Dynamic Linking]]

Dynamic might be useful, when optimising imports of [[subsystem DLLs|DLLs]].

![[Pasted image 20231023171025.png]]