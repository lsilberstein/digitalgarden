---
title: Object Management
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - OSNW
draft: false
date: 
aliases:
  - OM
  - Object Manager
---
# Object Management

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

>[!Info]
>"[[Object]]s that are not exposed to [[User Application Space|User mode]] (such as driver objects) are usually not protected."