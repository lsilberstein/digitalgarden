---
title: Registry Hive
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Hive
  - Hives
---

# Registry Hive

The [[Windows Registry|Registry]] utilises a set of supporting files containing backups of its data. *On disks*, these backups are called [[Registry Hive|Hives]]. 

![[Pasted image 20231030081338.png]]

> [!Definition]  
> Conceptually, a [[Registry Hive|Hive]] is a logical group of keys, subkeys and values on the [[Windows Registry|Registry]].

Under `HKEY_LOCAL_MACHINES\SYSTEM\CurrentControlSet\Control\hivelist`. Each contains a [[Windows Registry|Registry]] tree, which has a key that serves as the root or starting point of the tree. Most of the [[Registry Hive|Hive]] files are in the `%SystemRoot%\System32\Config` directory. These files are updated each time a user logs on. The [[Windows Registry|Registry]] can be imported from a [[Registry Hive|Hive]] file. Some [[Registry Hive|Hives]] are *volatile*, meaning after loading, changes made are not saved back to the [[Registry Hive|Hive]] image. The [[Operating System|OS]] creates and manages volatile [[Registry Hive|Hives]] entirely in memory, hence they are temporary. The [[Operating System|OS]] creates volatile [[Registry Hive|Hives]] every time it boots.

## SYSTEM [[Registry Hive]]

When [[Windows]] begins [[Image Loader|Loading]], it reads from the SYSTEM [[Registry Hive]] so that it can determine which *[[Device Drivers]]* need to be loaded to accomplish booting. Further, it scans the in-memory [[Registry Hive]] to locate all the boot [[Device Drivers]].