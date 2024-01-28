---
title: Windows Registry
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - Registry
  - Configuration Management
---

# Windows Registry

> [!Defintion]  
> The *[[Windows Registry|Registry]]* is a system-defined hierarchical data repository. Its data structure is in a tree format. The [[Operating System|OS]] stores and retrieves configuration data in it, such as 
> 
> - for applications
> - its own components

[[Kernel]] and user [[Process|Processes]] use the [[Windows Registry|Registry]]. The [[Windows Registry|Registry]] is one of the fundamental mechanisms in the [[Windows]] [[Operating System|OS]]. It is critical of the [[Operating System|OS]] management and config.

1. Within the initial phase of [[Operating System|OS]] booting and before initializing the [[Kernel]]: The bootloader reads configuration data and loads the list of boot [[Device Drivers]] into memory.
2. During the *[[Kernel]] boot process*, the [[Kernel]] reads settings that specify which [[Device Drivers|device drivers]] to load and how the [[Memory Management|Memory Manager]] and [[Process management|Process Manager]] configure themselves.
3. During *logon*, [[Operating System|OS]] components read per-user preferences from the [[Windows Registry|Registry]] such as desktop wallpaper, icon placement, which startup programs to launch and which files were most recently accessed.
4. During *app startup*, applications read systemwide settings as well as per-user settings, such as licensing data and a list of most-used recently accessed documents.

The [[Kernel]] and user [[Process|Processes]] use the *[[Windows Registry|Registry]] API* to retrieve, modify or delete [[Windows Registry|Registry]] data (both systemwide and per-user settings, such as initialisation data or configuration data).

> [!Info]  
> The data stored in the [[Windows Registry|Registry]] varies according to the version of [[Windows]].

## Keys, Subkeys and Values

The [[Windows Registry|Registry]]'s tree structure is similar to that of a disk volume. *Keys* are similar to a disks' directory, *values* are comparable with files on a disk, while a *key* is a container that can consist of other keys and values.

![[Pasted image 20231030075931.png]]

## Root Keys

There are six *root keys*, and you cannot add new *root keys* or delete existing ones.

| Acronym | Root Key | Description |
| ---- | ---- | ---- |
| `HKCU` | `HKEY_CURRENT_USER` | Stores data associated with the currently logged in user. |
| `HKU` | `HKEY_USERS` | Stores information about all the accounts on the machine |
| `HKCR` | `HKEY_CLASSES_ROOT` | Stores files association and Component Object Model (COM) object registration information |
| `HKLM` | `HKEY_LOCAL_MACHINE` | Stores system-related information |
| `HKPD` | `HKEY_PERFORMANCE_DATA` | Stores performance information |
| `HKCC` | `HKEY_CURRENT_CONFIG` | Stores information about the current hardware |

The Root Key names represent [[Windows]] *[[Handle|Handles]] (H)* to *keys (key)*. `HKCU` stores preferences and software configuration of the user being logged in. `HKCU` is also used to map the users key under `HKEY_USERS`. Mapping happens whenever a user profile is loaded, e.g. at logon time.  
Under Current users, we find information, such as:

| Subkey | Description |
| ---- | ---- |
| Keyboard Layout | Keyboard layout settings for example, US or UK |
| Network | Network Drive Mappings and settings |
| Printers | Printer connection settings |

`HKPD` stores performance information. You won't find `HKPD` by looking in the [[Windows Registry|Registry]] Editor. This key is only available through the [[Windows Application Programming Interface|Win API]] [[Windows Registry|Registry]] functions, such as `RegQueryValueEx`.