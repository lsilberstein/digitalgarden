---
title: Key System Components and Policies
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 3
tags: [wise2324, OSNW, vorlesung, flashcard]
draft: false
date: 2023-10-02
---

# Key System Components and Policies

![[Pasted image 20231020172322.png]]

See here an overview of the [[Windows architecture]]. This diagram is a basic view and doesn't show everything. For example, the [[Networking]] components are not shown. Also, none of the various types of [[Device Drivers]] are shown. Each [[OS service]] has its own private [[Process]] address space.

![[Pasted image 20231020195418.png]]

## [[Graphics Device Interface]] ([[Graphics Device Interface|GDI]])

Like almost any other [[General Purpose Operating Systems|GPOS]], [[Windows]] is an interactive and GUI based [[Operating System|OS]]. It uses a subsystem that provides the GUI functions required, which are available in [[Graphics Device Interface|GDI]] components, also called [[Graphics Device Interface|windowing and graphics system]], dealing with 

- windows and dialogs
- controlling the user interface
- drawing

The [[Graphics Device Interface|windowing and graphics system]] is a [[Kernel Address Space|Kernel Mode]] component by design. It is required even on server systems with no interactive users logged on. It is embedded in an [[Operating System|OS]] component called *[[Windows Subsystem]]*, which is itself started by the so called *[[Session Manager]]* and also contains components in [[User Application Space|UAS]].

## [[Session Manager]]

The [[Session Manager]] is the first [[User Application Space|User mode]] [[Process]] created in the system. `Smss.exe` is the corresponding image file, aka executable. `Smss.exe` can create further [[Session|sessions]] at the same time by creating multiple instances of itself during boot-up. 

![[Pasted image 20231020195621.png]]
### [[Client and Server Runtime Subsystem]]

In the [[Windows Subsystem]] there exists an [[User Application Space|User mode]] part as well which is called the *[[Client and Server Runtime Subsystem]]*, also called *[[Client and Server Runtime Subsystem|csrss]]*. For each [[Session]], an instance of *[[Client and Server Runtime Subsystem|csrss]]* is created. Is there a connection between *[[Client and Server Runtime Subsystem|csrss]]* and each user? Yes, this is managed by the [[Operating System|OS]].

![[Pasted image 20231020190916.png]]  
![[Pasted image 20231020192526.png]]

The [[Client and Server Runtime Subsystem|environment subsystem]] ([[Client and Server Runtime Subsystem|csrss]]) loads three [[subsystem DLLs|DLLs]] (`basesrv.dll`, `winsrv.dll` and `csrsrv.dll`). The console host [[Process]] (`conhost.exe`) provides support for console (character cell) applications.

### [[Session]]

> [!Definition]  
> A [[Session]] is the *[[User Application Space|User mode]]-environment*. It provides the visible interface [[Windows]]. A [[Session]] is started by an [[Operating System|OS]] component called the *[[Session Manager]]*.

## [[Ntdll]]

![[Pasted image 20231020195802.png]]

User applications run in [[User Application Space|User mode]] [[Process|Processes]]. [[User Application Space|User mode]] [[Process|Processes]] cannot call (meaning *access*) the [[Windows]] [[Kernel]] [[Process|Processes]] directly, but rather they go through one or more subsystem function libraries, also called *[[subsystem DLLs]]*. These libraries are available as part of [[Client and Server Runtime Subsystem|csrss]]. `ntdll.dll` is a special system support library intended for the use of Windows [[subsystem DLLs]]. *ntdll* translates a documented function into the appropriate internal *native* system [[OS service|service]] calls. These are generally undocumented.

## [[Kernel]]

[[Kernel]] is a [[Kernel Address Space|KAS]] component. It provides the elementary and essential functionality of the [[Operating System|OS]]. For [[Windows]], the [[Kernel]] is just a component among others in [[Kernel Address Space|KAS]]. Moreover, some [[Kernel Address Space|KAS]] components are packed together to build a layer.  
The [[Kernel]] is essential, since all other [[Operating System|OS]] components need these functions to operate. These components use these *elementary* (low-level) functions to implement higher-level operations and mechanisms, such as

- [[Memory Management]]
- [[Process management]]
- Security

The [[Kernel]] also provides a primitive set of objects (e.g. data) that the other [[Operating System|OS]] components use to implement their higher-level mechanisms. To put it in a nutshell, [[Windows]] [[Kernel]] provides elementary and essential functionality of the [[Operating System|OS]]. The [[Kernel]] supports low-level hardware that depends on the CPU architecture. Functions that are architecture-specific are implemented in the [[Kernel]]. 

## [[Hardware Abstraction Layer]] ([[Hardware Abstraction Layer|HAL]])

The *[[Hardware Abstraction Layer|Hardware Abstraction Layer]]* ([[Hardware Abstraction Layer|HAL]]) is a layer of code. The [[Kernel]] uses [[Hardware Abstraction Layer|HAL]] to access the hardware. [[Hardware Abstraction Layer|HAL]] provides a *low-level-interface* to the hardware platform on which the [[Operating System|OS]] is running. [[Hardware Abstraction Layer|HAL]] isolates the [[Kernel]], [[Device Drivers]] and the rest of the [[Windows executive]] from platform specific hardware differences. [[Hardware Abstraction Layer|HAL]] and the [[Kernel]] together provide [[Operating System|OS]] [[Portability]], i.e. another processor means a modified [[Hardware Abstraction Layer|HAL]] and (only slight) modifications of the [[Kernel]], when for example using different mainboards.  
Functions can differ among systems within the same architecture (e.g. different mainboards) and are implemented in [[Hardware Abstraction Layer|HAL]]. 

## [[Windows executive]]

The [[Windows executive]] contains the base [[Operating System|OS]] operations and mechanisms such as 

- [[Memory Management]]
- [[Process management]]
- [[Process management|Thread Management]]
- Security Management
- IO
- [[Networking]]
- [[Inter Process Communication]] ([[Inter Process Communication|IPC]])

The [[Windows executive|Executive]] contains functions that are *exported* and callable from [[User Application Space|User mode]] as well as functions that can be called from [[Kernel Address Space|Kernel Mode]]. Some of them are documented, some of them are not. Major components of the [[Windows]] [[Operating System|OS]] are placed in the [[Windows executive|Executive Layer]]. The [[Kernel]] provides to [[Windows executive|Executive]] components a set of routines and implements a primitive set of objects that the [[Windows executive|Executive]] uses to implement higher-level mechanisms. These primitive objects are not visible to [[User Application Space|User mode]], but are created and used only within the [[Windows executive|executive]].  
A Useful tool might be *Windows Debugger*.  
The [[Kernel]] separated itself from the [[Windows executive|executive]]'s components by avoiding *[[Policies|policymaking]]*.

## [[Policies]]

One fundamental task of an [[Operating System|OS]] is to *enforce [[Policies]]* to regard with its own operation. [[Policies]] may be

- **Criteria**: operative standards of qualitative nature, such as *access [[Policies]]* to [[Resources]] outside the [[Kernel Address Space|KAS]] or *security checks* to protect [[Resources]]
- **Rules**: mostly quantitative guidelines, such as *power management (consumption limit)* for [[Device Drivers]] or [[Resources|resource]] quotas to be determined when they are created, e.g. *Maximum Memory allowed (x64): 2097152*.
- **Constraints**: is used to restrict, check or enforce the fulfilment or prevention of particular actions, such as managing processor cores, e.g. *No addition of [[physical memory|Physical Memory]] allowed.*

To shape or organize an [[Operating System|OS]] state of being. To see available [[Policies]] under [[Windows]] use `Slpolicy.exe`.  
The [[Kernel]] has little to do with *[[Policies|policymaking]]*, since it separates itself from the [[Windows executive|Executive]] component by implementing the basic [[Operating System|OS]] mechanisms and avoiding *[[Policies|policymaking]]*. The [[Kernel]] leaves nearly all [[Policies|policy]] decisions to the [[Windows executive|Executive Layer]] except for *thread scheduling* and *thread dispatching*.

## [[Device Drivers]]

[[Device Drivers]] include both [[Device Drivers|hardware device drivers]] and non-[[Device Drivers|hardware device drivers]]. [[Device Drivers|Hardware device Drivers]] translate their IO function calls into specific hardware device IO requests. Some examples for non-[[Device Drivers|hardware device drivers]] are file system and network [[Device Drivers|drivers]]. 

## [[OS service|Windows Services]]

There are two different types of [[Operating System|OS]] [[Process|Processes]] that exist in [[User Application Space|UAS]]:

- [[System support Processes]]
- [[Service Processes]]

[[OS service|OS services]] (in [[Windows]]) or *[[OS service|daemon processes]]* (in Unix) are [[Operating System|OS]] [[Process|Processes]]. These are defined and implemented according to certain predefined rules being started by the component *[[Service Control Manager]]* ([[Service Control Manager|SCM]]).

![[Pasted image 20231020195926.png]]

By means of configuration, a [[OS service|Service]] can be started automatically at system boot time without requiring an interactive logon or manually by an application by calling the [[Windows]] `StartService` function.

### What is a [[OS service|Windows Service]]?

[[OS service|Windows Services]] are indeed a special type of [[Operating System|OS]] [[Process]], started by the [[Service Control Manager|SCM]]. There is a corresponding image file existent: `%SystemRoot%\System32\Services.exe`, being responsible for starting, stopping and interacting with [[Service Processes]]. See here a generic [[Process]] of [[OS service|Service]] hosts:

![[Pasted image 20231020185715.png]]

> [!Info]  
> Note that [[Service Control Manager|SCM]] only *starts* a [[Process]].

To host [[OS service|OS services]]; an enabler for code sharing among [[OS service|Services]]. For example, `audiodg.exe` hosts the audio engine for [[Windows]] 7. A `SvcHost` might serve multiple [[OS service|Services]] that run as `.exe` or [[subsystem DLLs|DLLs]]. These [[OS service|Service]] Hosts are dedicated to native [[OS service|OS services]] and not intended for non-[[OS service|Windows Services]]. [[OS service|Services]] are defined in the [[Windows Registry|Registry]] under `HKLM\SYSTEM\CurrentControlSet\Services`. [[OS service|Services]] have three names:

1. The [[Process]] name you see, running on the system
2. The internal name in the [[Windows Registry|Registry]]
3. The display name shown in the [[Services Administrative Tool]]

[[OS service|Services]] can be configured to start automatically at system boot time without requiring an interactive logon. They can also be started manually, e.g. by running the [[Services Administrative Tool]] or by calling the [[Windows]] `StartServiceA()` function. Typically, [[OS service|Services]] do not interact with the logged-on user, although there are special conditions when this is possible.

### [[Service Processes]]

> [!Definition]  
> [[Service Processes]] can usually exists independent of user login. Nevertheless, they provide general [[OS service|services]] that allow slight configuration and administration.
### [[System support Processes]]

> [!Definition]  
> *[[System support Processes]]* are fundamental user-specific [[Operating System|OS]] operations, like for example `Windows Logon`.

# Anki

Does each [[OS service|OS service]] have its own private [[Process]] address space? #flashcard
Yes.
<!--ID: 1705843615263-->

What does the abbreviation [[Graphics Device Interface|GDI]] mean? #flashcard
[[Graphics Device Interface]], or [[Graphics Device Interface|windowing and graphics system]].
<!--ID: 1705843615265-->

[[Windows]] is a GUI based system. True or False? #flashcard
True
<!--ID: 1705843615266-->

Which subsystem is [[Windows]] using to provide GUI functions? #flashcard
[[Graphics Device Interface]] ([[Graphics Device Interface|GDI]])
<!--ID: 1705843615267-->

Where does [[Graphics Device Interface|GDI]] reside ([[Kernel Address Space|Kernel Mode]] or [[User Application Space|User mode]])? #flashcard
[[Kernel Address Space|Kernel Mode]]
<!--ID: 1705843615268-->

In which system is the [[Graphics Device Interface|GDI]] embedded? #flashcard
[[Windows Subsystem]].
<!--ID: 1705843615269-->

Which component starts the [[Windows Subsystem]]? #flashcard
[[Session Manager]]
<!--ID: 1705843615270-->

The [[Session Manager]] is the first [[User Application Space|User mode]] [[Process]] created in the system (True or False)? #flashcard
True
<!--ID: 1705843615271-->

What is the corresponding image file of the [[Session Manager]]? #flashcard
`Smss.exe`
<!--ID: 1705843615272-->

Can multiple instances of `Smss.exe` exist? #flashcard
Yes. `Smss.exe` can create further [[Session|sessions]] at the same time by creating multiple instances of itself during boot-up.
<!--ID: 1705843615273-->

Describe a visual representation of the boot-up process. #flashcard
![[Pasted image 20231020195621.png]]
<!--ID: 1705843615274-->

What is the name of the component being known as [[Client and Server Runtime Subsystem|csrss]]? #flashcard
[[Client and Server Runtime Subsystem]]
<!--ID: 1705843615275-->

How many [[subsystem DLLs|DLLs]] does the [[Client and Server Runtime Subsystem|environment subsystem]] ([[Client and Server Runtime Subsystem|csrss]]) load? #flashcard
Three
<!--ID: 1705843615276-->

Which [[subsystem DLLs|DLLs]] does the [[Client and Server Runtime Subsystem|environment subsystem]] ([[Client and Server Runtime Subsystem|csrss]]) load? #flashcard
- `basesrv.dll`
- `winsrv.dll` and 
- `csrsrv.dll`
<!--ID: 1705843615277-->

What is the *definition* of a [[Session]]? #flashcard 
> [!Definition]  
> A [[Session]] is the *[[User Application Space|User mode]]-environment*. It provides the visible interface [[Windows]]. A [[Session]] is started by an [[Operating System|OS]] component called the *[[Session Manager]]*.
<!--ID: 1705843615278-->

[[User Application Space|User mode]] [[Process|Processes]] can call (meaning *access*) [[Windows]] [[Kernel]] [[Process|Processes]] directly. (True or False) #flashcard
False
<!--ID: 1705843615279-->

How doe [[User Application Space|User mode]] [[Process|Processes]] call [[Kernel]] [[Process|Processes]]? #flashcard
By going through one or more subsystem function libraries, also called [[subsystem DLLs]].
<!--ID: 1705843615280-->

Where do [[subsystem DLLs]] reside? #flashcard
They are available as part of [[Client and Server Runtime Subsystem|csrss]].
<!--ID: 1705843615281-->

What is the task of [[Ntdll]]? #flashcard
*ntdll* translates a documented function into the appropriate internal *native* system [[OS service|service]] calls. 
<!--ID: 1705843615282-->

What is the [[Kernel]]'s task? #flashcard
It provides the elementary and essential functionality of the [[Operating System|OS]].
<!--ID: 1705843615283-->

Where does the [[Kernel]] reside? #flashcard
in [[Kernel Address Space|KAS]]
<!--ID: 1705843615284-->

The [[Kernel]] is not essential, since all of its functions can be subsidised by other components in [[Kernel Address Space|KAS]] (True or False) #flashcard
False. All other [[Operating System|OS]] components need these functions to operate.
<!--ID: 1705843615285-->

Name a few examples of [[Operating System|OS]] components that use *elementary functions* of the [[Kernel]]. #flashcard
- [[Memory Management]]
- [[Process management]]
- Security.
<!--ID: 1705843615286-->

What is the specific term behind the abbreviation [[Hardware Abstraction Layer|HAL]]? #flashcard
[[Hardware Abstraction Layer]]
<!--ID: 1705843615287-->

What does [[Hardware Abstraction Layer|HAL]] provide? #flashcard
A low-level-interface to the hardware platform on which the [[Operating System|OS]] is running. 
<!--ID: 1705843615288-->

Why is a [[Hardware Abstraction Layer|HAL]] useful when is comes to [[Portability]] of an [[Operating System|OS]]? #flashcard
[[Hardware Abstraction Layer|HAL]] isolated components like the [[Kernel]], [[Device Drivers]] and the rest of the [[Windows executive|Windows Executive]] from platform specific hardware differences. 
<!--ID: 1705843615289-->

Functions can differ among systems within the same architecture (e.g. different mainboards) and are implemented in [[Hardware Abstraction Layer|HAL]]. (True or False) #flashcard
True
<!--ID: 1705843615290-->

Which mechanisms, besides base [[Operating System|OS]] operations does the [[Windows executive]] contain? #flashcard
- [[Memory Management]] 
- [[Process management]]
- [[Process management|Thread Management]]
- Security Management
- IO
- [[Networking]]
- [[Inter Process Communication]]
<!--ID: 1705843615291-->

What is the specific term when the [[Windows executive|Executive]] provides functions that are callable form [[User Application Space|User mode]] as well as [[Kernel Address Space|Kernel Mode]]? #flashcard
*exporting*
<!--ID: 1705843615292-->

All Functions of the [[Windows executive|Executive]] are documented. (True or False) #flashcard
False
<!--ID: 1705843615293-->

What is the difference between the [[Kernel]] and all of the components residing in the [[Windows executive|Windows Executive]]? #flashcard
[[Policies|Policymaking]]
<!--ID: 1705843615294-->

What types of [[Policies]] are there? #flashcard
- criteria
- rules and 
- constraints
<!--ID: 1705843615295-->

What is a *criteria* in regards to [[Policies]]? #flashcard
Operative standards of qualitative nature.
<!--ID: 1705843615296-->

What is a *rule* in regards to [[Policies]]? #flashcard
Mostly quantitative guidelines.
<!--ID: 1705843615297-->

What is a *constraint* in regards to [[Policies]]? #flashcard
They are used to restrict, check or enforce the fulfilment or prvention of particular actions.
<!--ID: 1705843615298-->

Why use [[Policies]] in an [[Operating System|OS]]? #flashcard
To shape or organize an [[Operating System|OS]] state of being.
<!--ID: 1705843615299-->

Which "[[Policies|Policy]] decisions" are managed by the [[Kernel]]? #flashcard
*thread scheduling* and *thread dispatching*.
<!--ID: 1705843615300-->

What types of [[Device Drivers]] are there? #flashcard
[[Device Drivers|hardware device drivers]] and [[Device Drivers|non-hardware device drivers]]
<!--ID: 1705843615301-->

What is the function of [[Device Drivers|hardware device drivers]]? #flashcard
They translate their IO function calls into specific hardware device IO requests.
<!--ID: 1705843615302-->

What are some examples for [[Device Drivers|non-hardware device drivers]]? #flashcard
file system and network [[Device Drivers|drivers]]
<!--ID: 1705843615303-->

Where do [[Operating System|OS]] [[Process|Processes]] reside? ([[User Application Space|UAS]] or [[Kernel Address Space|KAS]]) #flashcard
[[User Application Space|UAS]]
<!--ID: 1705843615304-->

What types of [[Operating System|OS]] [[Process|Processes]] exist in [[User Application Space|UAS]]? #flashcard
[[System support Processes|System Support Process]] and [[Service Processes|Service Processes]]
<!--ID: 1705843615305-->

Which component starts [[OS service|OS services]]? #flashcard
[[Service Control Manager|Service Control Manager]] ([[Service Control Manager|SCM]])
<!--ID: 1705843615306-->

When can [[Service Control Manager|SCM]] start an [[OS service]]? #flashcard
at boot or manually
<!--ID: 1705843615307-->

[[Service Control Manager|SCM]] only starts a [[Process]]. (True or False) #flashcard
True
<!--ID: 1705843615308-->

What *three* names are assigned to [[OS service|Services]]? #flashcard
The [[Process]] name you see, running on the system, The internal name in the [[Windows Registry|Registry]] and the display name shown in the [[Services Administrative Tool]].
<!--ID: 1705843615309-->

Do [[OS service|Services]] typically interact with the logged-on user? #flashcard
No, although there are special condition when they do.
<!--ID: 1705843615310-->

What is a [[Service Processes|Service Process]]? #flashcard
[[Service Processes]] can usually exists independent of user login. Nevertheless, they provide general [[OS service|Services]] that allow slight configuration and administration.
<!--ID: 1705843615311-->

What is a [[System support Processes|System Support Process]]? #flashcard 
> [!Definition]  
> *[[System support Processes]]* are fundamental user-specific [[Operating System|OS]] operations, like for example `Windows Logon`.
<!--ID: 1705843615312-->
