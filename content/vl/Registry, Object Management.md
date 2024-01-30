---
title: Registry, Object Management
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 7
tags: [vorlesung, wise2324, OSNW, flashcard]
draft: false
date: 2023-10-30
---

# Registry, Object Management

## Registry (con't)

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

## Persisting Registry Entries ([[Registry Hive]])

The [[Windows Registry|Registry]] utilizes a set of supporting files containing backups of its data. *On disks*, these backups are called [[Registry Hive|Hives]]. 

![[Pasted image 20231030081338.png]]

> [!Definition]  
> Conceptually, a [[Registry Hive|Hive]] is a logical group of keys, subkeys and values on the [[Windows Registry|Registry]].

Under `HKEY_LOCAL_MACHINES\SYSTEM\CurrentControlSet\Control\hivelist`. Each contains a [[Windows Registry|Registry]] tree, which has a key that serves as the root or starting point of the tree. Most of the [[Registry Hive|Hive]] files are in the `%SystemRoot%\System32\Config` directory. These files are updated each time a user logs on. The [[Windows Registry|Registry]] can be imported from a [[Registry Hive|Hive]] file. Some [[Registry Hive|Hives]] are *volatile*, meaning after loading, changes made are not saved back to the [[Registry Hive|Hive]] image. The [[Operating System|OS]] creates and manages volatile [[Registry Hive|Hives]] entirely in memory, hence they are temporary. The [[Operating System|OS]] creates volatile [[Registry Hive|Hives]] every time it boots.

### SYSTEM [[Registry Hive]]

When [[Windows]] begins [[Image Loader|Loading]], it reads from the SYSTEM [[Registry Hive]] so that it can determine which *[[Device Drivers]]* need to be loaded to accomplish booting. Further, it scans the in-memory [[Registry Hive]] to locate all the boot [[Device Drivers]].

## [[Configuration Manager]]

> [!Definition]  
> The [[Configuration Manager]] ([[Configuration Manager|CM]]) is responsible for implementing and managing the [[Windows Registry|Registry]].

[[Configuration Manager|CM]] belongs to the [[Windows executive|Executive Layer]] subsystem and has its own view of a [[Registry Hive|Hive]]: It logically divides a [[Registry Hive|Hive]] into allocation units, called *blocks*. [[Configuration Manager|CM]] implements an authoritative model of [[Windows Registry|Registry]] filtering. This allows for monitoring of [[Windows Registry|Registry]] activities, such as *[[Process]] Monitor*.

![[Pasted image 20231030083130.png]]

For any kind of access to a specific key, a [[Process]] can register a callback function with the [[Configuration Manager]]. The [[Configuration Manager|CM]] executes that callback function any time the key is being accessed. In this way, the [[Process]] can [[Audit|audit]] and control access to [[Resources]].  
[[Windows Registry|Registry]] callbacks are also associated with the concept of *altitudes* (priorities). Altitudes are a way for different "vendors" to register a *height*. It enforces and order in which the system calls each callback routine, so callbacks are deterministic and correct. 

> [!Example]  
> This avoids cases in which, for example, an AntiVirus product would be scanning encrypted keys before an encryption product would run its own callback to decrypt them.

## [[Object Management]]

What can the [[Object Management|Object Manager]] ([[Object Management|OM]]) do?

1. Distinctly identify [[Object|Object]]s by means of human-readable names.
2. Sharing [[Object]]s among [[Process|Processes]]
3. Protecting [[Object|Object]]s from unauthorised access
4. Lifecycle Management to recycle an [[Object]] which is no longer in use.

The [[Object Management|OM]] is therefore responsible for

1. creating
2. deleting
3. protecting and
4. tracking

[[Object]]s. It provides a common, uniform mechanism for using system [[Resources]], isolates [[Object]] protection to one location in the [[Kernel]] to ensure a *uniform* and *consistent* [[Object]] access [[Policies|Policy]].  
[[Object Management|OM]] establishes uniform rules for *[[Object]] retentions*, meaning keeping an [[Object]] available until all [[Process|Processes]] have finished using it. The [[Object Management|OM]] provides a mechanism to charge [[Process|Processes]] for their use of [[Object]]s so that limits can be placed on the usage of system [[Resources]].

> [!Info]  
> "[[Object]]s that are not exposed to [[User Application Space|User mode]] (such as driver objects) are usually not protected."

## [[Object Types]]

[[Object]]s are categorised by means of *types*. The [[Object Management|OM]] creates an [[Object]] according to a specific type. To get a list of [[Object Types]] that exist within your [[Operating System|OS]], use WinObj.

### [[Kernel Object|Kernel Objects]]

- SymbolicLink
- Event
- [[Session]]

### Other [[Object Types]]

- Event
- [[Semaphores|Semaphore]]
- [[Mutexes]]

### [[Windows]] Objects

We distinguish between *three* types of [[Windows]] [[Object]]s:

1. *executive Objects*: Executive Objects are implemented by various components of the [[Windows executive|Executive Layer]], such as IO subsystem Objects, [[Process management|Process Manager]] [[Object]]s and [[Memory Management|MemMan]] objects
2. *[[Kernel Object|Kernel Objects]]*: [[Kernel Object|Kernel Objects]] are a more primitive set of objects, implemented by the [[Windows]] [[Kernel]]. [[Kernel Object|Kernel Objects]] provide fundamental capabilities, on which executive objects are build.
3. *[[Graphics Device Interface|GDI]] / user objects*: [[Graphics Device Interface|GDI]] / user objects, on the other hand, belong to the [[Windows]] system `win32k.sys`. They do not interact with the [[Kernel]].

## [[Handle]]

> [!Definition]  
> A [[Handle]] is some opaque value that has meaning only to the API which produced it.

- It might be a pointer to a memory region
- In particular cases it might be an index into some [[Kernel]] internal Array.

## [[Kernel Object]]

> [!Definition]  
> A [[Kernel Object]] is a data structure containing specific files.

The internal structure of an [[Kernel Object]] is opaque, in contrast to an ordinary data structure. A [[Thread]] cannot directly read or change data inside an [[Object]]. To access a [[Kernel Object]], a [[Thread]] calls an *object [[OS service|Service]]*:

- to read data from it
- to put data into it

Each [[Kernel Object]] has its own creation, open and query [[OS service|Services]]. No direct access means: Object implementation can be changed easily over time.

# Anki

What interface do the [[Kernel]] and [[Process|Processes]] use to retrieve, modify or delete [[Windows Registry|Registry]] data? #flashcard
The [[Windows Registry|Registry]] API
<!--ID: 1706471468341-->


The data stored in the [[Windows Registry|Registry]] is equal in each version of [[Windows]]. (True or False) #flashcard
False
<!--ID: 1706471468343-->


What is the equivalent to *keys* in the [[Windows Registry|Registry]] in a filesystem? #flashcard
*Keys* are similar to a directory
<!--ID: 1706471468344-->


What is the equivalent to *values* in the [[Windows Registry|Registry]] in a filesystem? #flashcard
Files
<!--ID: 1706471468345-->


Which *six* Root Keys are there in the [[Windows Registry|Registry]]? #flashcard 
- `HKCU`
- `HKU`
- `HKCR`
- `HKLM`
- `HKPD`
- `HKCC`
<!--ID: 1706471468346-->


What is the *definition* of a [[Registry Hive]]? #flashcard
Conceptually, a [[Registry Hive|Hive]] is a logical group of keys, subkeys and values on the [[Windows Registry|Registry]].
<!--ID: 1706471468347-->


What is the *usage* of a [[Registry Hive]]? #flashcard
The [[Windows Registry|Registry]] utilizes a set of [[Registry Hive|Hives]] containing *backups* of its data on disks.
<!--ID: 1706471468348-->


What is a *volatile [[Registry Hive|Hive]]*? #flashcard
A *volatile* [[Registry Hive|Hive]] is only maintained in memory. Changes to that [[Registry Hive|Hive]] will afterwards be lost.
<!--ID: 1706471468349-->


What is the *usage* for the SYSTEM [[Registry Hive]]? #flashcard
[[Windows]] reads from the SYSTEM [[Registry Hive]] in order to determine which [[Device Drivers]] are needed to be loaded to accomplish booting.
<!--ID: 1706471468351-->


What is the *definition* of the [[Configuration Manager]]? #flashcard
The [[Configuration Manager]] is responsible for implementing and managing the [[Windows Registry|Registry]].
<!--ID: 1706471468352-->


What does the *abbreviation* [[Configuration Manager|CM]] mean? #flashcard
[[Configuration Manager]]
<!--ID: 1706471468353-->


How does the view of a [[Registry Hive|Hive]] look like for the [[Configuration Manager]]? #flashcard
The [[Configuration Manager]] divides a [[Registry Hive|Hive]] into allocation units, called *blocks*.
<!--ID: 1706471468354-->


Where does [[Configuration Manager]] reside? #flashcard
[[Windows executive|Executive Layer]]
<!--ID: 1706471468355-->


When are callback functions, registered in [[Configuration Manager]], being called? #flashcard
Any time a certain key is being accessed.
<!--ID: 1706471468356-->


What is the *task* of the [[Object Manager]]? #flashcard 
1. creating
2. deleting
3. protecting
4. tracking of [[Object]]s
<!--ID: 1706471468357-->


What does the *abbreviation* [[Object Management|OM]] mean? #flashcard
[[Object Manager]]
<!--ID: 1706471468358-->


The [[Object Management|Object Manager]] provides a common, uniform mechanism for using system [[Resources]]. (True or False) #flashcard
True
<!--ID: 1706471468359-->


Which *three* types of [[Object Types]] are there? #flashcard 
- [[Kernel Object|Kernel Objects]]
- [[Windows]] Objects
- Other [[Object Types]], such as [[Semaphores]] and [[Mutexes]]
<!--ID: 1706471468360-->


What is the *definition* of a [[Handle]]? #flashcard
A [[Handle]] is some opaque value that has a meaning only to the API which produced it (Mainly some pointer).
<!--ID: 1706471468361-->


What is the *definition* on a [[Kernel Object]]? #flashcard
A [[Kernel Object]] is a data structure containing specific files.
<!--ID: 1706471468362-->


Any [[Thread]] can directly access any[[Kernel Object]]. (True or False) #flashcard
False. To access a [[Kernel Object]], a [[Thread]] calls an *object [[OS service|Service]]*.
<!--ID: 1706471468363-->


Why might no direct access to [[Kernel Object|Kernel Objects]] be useful? #flashcard
Object implementation can be changed easily over time.
<!--ID: 1706471468364-->
