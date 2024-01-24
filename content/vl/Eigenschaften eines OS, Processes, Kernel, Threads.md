---
title: Eigenschaften Eines OS, Processes, Kernel, Threads
description: 
type: Vorlesung
kurs: Betriebssysteme und Rechnernetze
vorlesungnr: 2
aliases: ["Eigenschaften Eines OS, Processes, Kernel, Threads"]
tags: [vorlesung, OSNW, wise2324, flashcard]
draft: false
date: 2023-09-25
linter-yaml-title-alias: "Eigenschaften Eines OS, Processes, Kernel, Threads"
---

# Eigenschaften Eines [[Operating System|OS]], [[Process|Processes]], [[Kernel]], [[Thread|Threads]]

To recap: a [[General Purpose Operating Systems|GPOS]] is designed for user interaction. Many [[Process|processes]] run concurrently on said [[General Purpose Operating Systems|GPOS]]. There is a constant conflict between a **huge number of mostly concurrenting [[Process|processes]]** and a **limited amount of [[Resources]]**. This conflict is managed by a sophisticated management of critical [[Resources]]. This demands an intricate [[Operating System|OS]]-design, which is

- Much more error-prone
- a much more complicated security risk. 

There are four features that an [[Operating System|OS]] needs to accomplish to manage a tradeoff between the amount of [[Process|processes]] and limited [[Resources]]:

1. reliability
2. security
3. efficiency
4. resilience

An [[Operating System|OS]] needs to be [[Scaleability|scaleable]], because of a highly diversified ecosystem.

## [[Scaleability]]

> [!Definition]  
> [[Scaleability]] is the ability to serve every amount of users from one single user to a large number of clients.

## A Simplified view ([[Operating System architecture]])

Application Code has no or very limited access to system [[Resources]]. However, it has a *well-defined* set of available interfaces to the [[Operating System|OS]]'s [[Resources]], even though it has **no direct access** to the hardware.

![[image_d.png]]

When a [[User Application Space|User Mode]] Program *calls* an [[OS service]], an [[OS service]] translated that call to special instructions for a processor. The processor executes these instructions then to perform the task. When the [[OS service]] completes, the [[Operating System|OS]] switches back to [[User Application Space|User Mode]] and allows the caller app to continue. Doing so allows us to implement all four mentioned features of an [[Operating System|OS]].  
The scale and complexity of an [[Operating System|OS]] ecosystem is a critical factor in any discussion:

- The [[Operating System|OS]] needs to run on thousands of hardware configurations
- There are tens of thousands of software partners
- and hundreds of millions of users trying to use a certain [[Operating System|OS]]. 

For example, [[Windows]] 10 has over 700 Million monthly active devices and over 35 Million application titles with greater than 175 Million application versions. 

[Windows 10 Quality approach for a complex ecosystem | Windows Experience Blog](https://blogs.windows.com/windowsexperience/2018/11/13/windows-10-quality-approach-for-a-complex-ecosystem/)

## [[Windows]]

[[Windows]] was designed with *[[networking]]* in mind. In [[Windows]], there are four basic types of network software components:

- [[Windows]] network services
- [[Windows]] network APIs
- Network protocols
- Drivers for network adapters

[[Windows]] was designed from the start to be secure. To meet the requirements of various formal US government and industry security criteria. It was designed to work on a variety of hardware architecture. (*[[Portability]]*).

## [[Portability]]

> [!Definition]  
> In this context, *[[Portability]]* is the ability to work on a variety of hardware architectures.

## [[Android]]

[[Android]] was designed to be *open*, which means that its purpose is to run all sorts of devices. It doesn't make any assumptions of a device's screen size, its resolution, etc. A majority of [[Android]]'s code is open source. It utilizes a custom JVM that was designed to optimize memory and hardware [[Resources]]. Its ecosystem is fragmented due to differences of various [[Android]] devices.

## Essential Concepts

### [[Kernel]]

A [[Kernel]] is the core component of any [[Operating System|OS]]. It consists of a set of specific libraries to realize the essential functionality of any [[Operating System|OS]]. 

![[image_1a.png]]

### [[Multi-Threading]]

A multi-user, interactive and connective system can only be realized with [[Multi-Threading]]. Multiple independent paths of execution are simultaneously in use.  

![[image_1i.png]]  
![[image_4.png]]  

[[Kernel|Kernels]] offer direct support for the underlying processor, thus functionality of an [[Operating System|OS]] is *tightly coupled* to a processor.

### Physical Memory Segregation

In most multi-user [[General Purpose Operating Systems|GPOS]]'s, a [[User Application Space|user mode]] code or application is separated from the [[Operating System|OS]] itself. It is realized by dividing the available [[physical memory]], which is in fact hardware, into two separate partitions: 

1. [[User Application Space]] ([[User Application Space|UAS]]) is an unprivileged processor mode, called *[[User Application Space|User mode]]*. 
2. Most [[Kernel]] related code is executed in the [[Kernel Address Space]] ([[Kernel Address Space|KAS]]), which is essential [[Operating System|OS]] code that runs in a privileged processor mode (referred to as *[[Kernel Address Space|kernel mode]]*).

> [!Warning]  
> Certain parts of the [[Operating System|OS]] code runs in [[User Application Space|UAS]] as well! *In other words*, most parts of the [[Operating System|OS]] code is executed in the [[User Application Space|UAS]], whereas specific functions of the [[Operating System|OS]] are realized in [[Kernel Address Space|KAS]].

![[image_24.png]]  
![[image_1y.png]]

[[User Application Space|User Mode]] code has very restricted access to system [[Resources]], Realized through a limited set of available interfaces to [[Operating System|OS]] [[Resources]]. [[User Application Space|User Mode]] has **no direct access to hardware**. When [[User Application Space|User Mode]] calls an [[OS service]], the processor executes a special instruction that switches the calling [[Thread]] to [[Kernel Address Space|Kernel Mode]].

### Process

Any application consists of one or more [[Process|processes]].

> [!Definition]  
> A [[Process]] is a container for a set of [[Resources]]

### Thread

> [!Definition]  
> A [[Thread]] is a *unit of execution* inside a [[Process|Process]].

Only [[Thread|Threads]] can be executed. All [[Thread|Threads]] of a [[Process]] share its address space and system [[Resources]]. 

![[image_o.png]]  
![[image_16.png]]

### Monolithic Kernel

Most [[Operating System|OS]]'s are *monolithic* with a huge amount of LoC (Lines of Code) and are composed of **tightly coupled** components which do not seem to have different modules with different characteristics. All [[Kernel]] components are fully protected from errant user [[Operating System|OS]] [[Thread|Threads]]. Aside from the [[Operating System|OS]] itself, no other code has direct access to the [[Kernel Address Space|KAS]].  
*Drawback*: Failure or deficit in any [[Operating System|OS]] component can potentially affect other components or the whole [[Operating System|OS]]'s functionality.  
*Solution*: [[Windows]] for example implements several *dedicated protection mechanisms.* This protection is one reason why a monolithic [[Operating System|OS]] is both robust and stable (as an application server and workstation), yet fast and nimble from the perspective of core [[OS service|OS services]] such as 

- [[Memory Management]]
- IO

## Key System Components

[[Windows]], or any other [[Operating System|OS]], consists of several *well-defined* components. They are interrelated and cooperating. These components are distributed throughout the [[Kernel Address Space|KAS]] and [[User Application Space|UAS]]. Some related components might be grouped together to form a *layer*. For example, [[Windows]] has a layered design. [[Windows]]'s monolithic [[Kernel]] is a file (`Ntoskrnl.exe`), which is a set of functions. 

![[image_0.png]]

![[image_8.png]]

([[Graphics Device Interface|GDI]]: [[Graphics Device Interface]])

Like almost any other [[Operating System|OS]], [[Windows]] is an interactive [[Operating System|OS]], meaning it's a GUI based [[Operating System|OS]]. It uses a subsystem that provides the GUI functions required, also called *[[Graphics Device Interface|windowing and graphics system]]* dealing with

- Windows and dialogues
- User interface controls
- Drawing

# Anki

What is the definition of *[[Scaleability]]*? #flashcard
[[Scaleability]] is the ability to serve every amount of users from one single user to many clients.
<!--ID: 1705739704784-->


Why does an [[Operating System|OS]] need to be [[Scaleability|Scaleable]]? #flashcard
Because of a highly diversified ecosystem.
<!--ID: 1705739704787-->


What *four* features need to be accomplished by an [[Operating System|OS]] to manage a tradeoff between the amount of [[Process|Processes]] and limited [[Resources]]? #flashcard
- reliability
- security
- efficiency
- resilience
<!--ID: 1705739704789-->


How does a [[General Purpose Operating Systems|GPOS]] solve a conflict between a huge number of mostly concurrenting [[Process|Processes]] and a limited amount of [[Resources]]? #flashcard
It is managed by a sophisticated management of critical [[Resources]].
<!--ID: 1705739704791-->


What is the definition of a [[Thread]]? #flashcard
A [[Thread]] is a *unit of execution* inside a [[Process]].
<!--ID: 1705739518602-->

Can [[Process|Processes]] by executed? #flashcard
No
<!--ID: 1705739518605-->

What do all [[Thread|Threads]] of a single [[Process]] share? #flashcard
Its address space and system [[Resources]].
<!--ID: 1705739518606-->

What is the definition of a [[Process]]? #flashcard
A [[Process]] is a container for a set of [[Resources]].
<!--ID: 1705739518607-->

What is the minimum and maximum amount of [[Process|Processes]], any application must consist of? #flashcard
one or more
<!--ID: 1705739518608-->

How can Application Code gain access to [[Operating System|OS]] [[Resources]]? #flashcard
It uses a *well-defined* set of available interfaces.
<!--ID: 1705739612821-->

Does Application code have limited access to system [[Resources]]? #flashcard
Yes
<!--ID: 1705739612823-->

Does Application Code have direct access to hardware? #flashcard
No
<!--ID: 1705739612825-->

What happens, when a [[User Application Space|User mode]] program call an [[OS service]]? #flashcard
An [[OS service]] translated that call to special instructions for a processor and switches to [[Kernel Address Space|Kernel Mode]]. The processor then executed these instructions to perform the task. Afterwards, the [[Operating System|OS]] switches back to [[User Application Space|User mode]]. 
<!--ID: 1705739612827-->

What do we accomplish by switching between [[User Application Space|User mode]] and [[Kernel Address Space|Kernel Mode]]? #flashcard
It allows us to make the [[Operating System|OS]] reliable, efficient, secure and resilient.
<!--ID: 1705739612829-->

What was the intention behind making [[Windows]] [[Portability|portable]]? #flashcard
To make it work on a variety of hardware architectures.
<!--ID: 1705739612831-->

What *four* basic types of network software components are implemented in [[Windows]]? #flashcard
- [[Windows]] network services 
- [[Windows]] network APIs 
- network protocols and 
- Drivers for network adapters.
<!--ID: 1705739612832-->

What is the definition of [[Portability]]? #flashcard
[[Portability]] is the ability to work on a variety of hardware architecture.
<!--ID: 1705739612834-->

What are *three* properties, a modern [[Operating System|OS]] should be? #flashcard
- multi-user
- interactive and 
- connected
<!--ID: 1705739612835-->

What does a [[Kernel]] in any [[Operating System|OS]] consist of? #flashcard
A set of specific libraries to realize the essential functionality of any [[Operating System|OS]].
<!--ID: 1705739612836-->

What is necessary to realize a multi-user, interactive and connective system? #flashcard
By implementing [[Multi-Threading]].
<!--ID: 1705739612837-->

What is [[Multi-Threading]]? #flashcard
Multiple independent paths of execution are simultaneously in use.
<!--ID: 1705739612838-->

What does the term "The functionality of an [[Operating System|OS]] is *tightly coupled* to a processor" mean? #flashcard
[[Kernel|Kernels]] offer direct support for the underlying processor.
<!--ID: 1705739518610-->

How is [[User Application Space|User mode]] code separated from the [[Operating System|OS]]? #flashcard
By dividing the available [[physical memory|Physical Memory]] into separate partitions. ([[User Application Space|UAS]] and [[Kernel Address Space|KAS]])
<!--ID: 1705739518611-->

What is [[User Application Space]]? #flashcard
[[User Application Space|UAS]] is an unprivileged processor mode, also called [[User Application Space|User mode]].
<!--ID: 1705739518612-->

Where is [[Kernel]] related code executed? #flashcard
In [[Kernel Address Space]].
<!--ID: 1705739518613-->

What is [[Kernel Address Space]]? #flashcard
[[Kernel Address Space|KAS]] is a privileged processor more (also referred to as [[Kernel Address Space|Kernel Mode]]).
<!--ID: 1705739518614-->

How could a rudimentary segregation of [[physical memory]] into [[User Application Space|UAS]] and [[Kernel Address Space|KAS]] look like, and what types of services reside where? #flashcard
![[image_1y.png]]
<!--ID: 1705739518615-->

How is access to system [[Resources]] realized for [[User Application Space|User mode]] code? #flashcard
It is realized through a set of available interfaces to [[Operating System|OS]] [[Resources]].
<!--ID: 1705739518616-->

What happens when [[User Application Space|User mode]] calls an [[OS service]]? #flashcard
The processor executed a special instruction that switches the calling [[Thread]] to [[Kernel Address Space|Kernel Mode]].
<!--ID: 1705739518617-->

What are properties of a *monolithic* [[Kernel]] or [[Operating System architecture|Operating System Architecture]]? #flashcard
A huge amount of LoC with **tightly coupled** components which do not seem to have different modules with different characteristics.
<!--ID: 1705739518618-->

What code have direct access to [[Kernel Address Space|KAS]]? #flashcard
Only the [[Operating System|OS]] itself.
<!--ID: 1705739518619-->

What are *the drawbacks* of a monolithic [[Kernel]]? #flashcard
Failure or deficit in any [[Operating System|OS]] component can potentially affect other components or the whole [[Operating System|OS]]'s functionality.
<!--ID: 1705739518620-->

How does [[Windows]] deal with the drawbacks of a monolithic kernel design? #flashcard
It implements several *dedicated protection mechanisms*.
<!--ID: 1705739518621-->

What functionality is provided by the [[Graphics Device Interface|windowing and graphics system]]? #flashcard
- Windows and dialogues
- User interface controls and 
- Drawing
<!--ID: 1705739518622-->

What does the abbreviation *[[Graphics Device Interface|GDI]]* stand for? #flashcard
[[Graphics Device Interface]]
<!--ID: 1705739518623-->

What file represents [[Windows]]'s monolithic [[Kernel]]? #flashcard
`Ntoskrnl.exe`
<!--ID: 1705739518624-->

What is the relation between an [[Operating System|OS]]'s several *well-defined* components? #flashcard
They are interrelated and cooperating and distributed throughout [[Kernel Address Space|KAS]] and [[User Application Space|UAS]]. 
<!--ID: 1705739518625-->
