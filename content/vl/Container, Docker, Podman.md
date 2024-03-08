---
title: Container, Docker, Podman
description: 
type: Vorlesung
kurs: Fortgeschrittene Themen des Software Engineering
vorlesungnr: 5
draft: false
date: 2023-11-14
tags: [wise2324, FTSE, vorlesung]
date created: Tuesday, November 14th 2023, 11:57:00 am
date modified: Monday, November 20th 2023, 2:39:04 pm
---

# Container, Docker, Podman
# [[Container]]

[[Docker]] ist ein Kommandozeilenwerkzeug, um [[Container]] zu verwalten. Diese Art von Containern sind seit vielen Jahren schon in Linux enthalten. [[Container]] erlauben es, [[Software]] isoliert laufen zu lassen. Im Gegensatz zur Virtualisierung wird in einem [[Container]] kein vollständiges [[Operating System (OS)|OS]] benötigt, da das [[Host]]-[[Operating System (OS)|OS]] ja vorhanden ist. Damit erreicht man sehr leichtgewichtige und in sich abgeschlossene Systeme, die damit auch portabel sind.

## Virtualisierung vs. Container

![[Pasted-image-20231114182331.png]]

Unser Ziel ist die Portabilität von Anwendungen. Das klappt meist sehr gut, aber [[Operating System (OS)|OS]]' wie [[Windows]] müssen dann auch Linux(-teile) nachbauen.

> Seit 5/2019 volle Systemaufruf-Kompatibilität durch WSL

## [[Podman]]

[[Docker]] scheint durch [[Podman]] (CRI-O-Umgebung) abgelöst zu werden. Läuft im Standardfall ohne `root` und kein Daemon ist nötig. Das CLI ist dabei (fast) identisch zu [[Docker]]. [[Docker]] allein macht nicht glücklich. Ein Orchestrierer wird benötigt.

## Container-Konzepte

Ein [[Image]] ist ein Template, um einen [[Docker]]-[[Container]] zu erzeugen. Enthält Schritte, um die entsprechende [[Software]] zu betreiben.  
Ein [[Container]] ist eine "virtuelle" Maschine, die durch Befehle eines [[Image]] erzeugt wurden.  
Ein [[Host]] ist das System, das den Daemon / [[Podman]] betreibt und Images und laufende [[Container]] enthält.

## Technische Grundlagen Der Isolation

| Begriff        | Detail                                  |
| -------------- | --------------------------------------- |
| PID-Namensraum | Prozess-ids und Fähigkeiten             |
| UTS-Namensraum | Hostund Domänenname                     |
| MNT-Namensraum | Dateisystemstruktur und -zugriff        |
| IPC-Namensraum | Prozesskommunikation über [[Shared Memory]] |
| NET-Namensraum | Netzwerzugriff und -struktur            |
| USR-Namensraum | Benutzernamen und Ids                   |
| chroot()       | Kontrolle der Dateisystemwurzel         |
| cgroups        | Ressourcenschutz                        |

# [[Container Layering]]

![[Pasted image 20231114182604.png]] 

[[Container]] werden aus Layern von Images erzeugt. Das [[Operating System (OS)|OS]] ist das unterste [[Image]] und nur Teil des Betreibssystems (z.B. fehlt [[Kernel]]). Darauf dann andere Images für verschiedene Funktionalitäten. Es muss nur jeder [[Image]]-Layer, nicht aber das Gesamt-[[Image]] gespeichert werden. Daher ist es sinnvoll, die Anwendung in einem kleinen Layer oben drauf zu packen.

# [[Alpine-Linux]]

[Alpine Linux](https://hub.docker.com/_/alpine)

> A minimal [[Docker]] [[Image]] based on Alpine Linux with a complete package index and only 5MB in size!

```bash
docker run -it alpine /bin/ash
```

[[Docker]] hat Basis-[[Image]] von Ubuntu auf Alpine umgestellt. [JEP 386: Alpine Linux / x86](https://openjdk.java.net/jeps/386)

# Java Images

[Alpine Java](https://hub.docker.com/r/anapsix/alpine-java/)

```bash
docker run -it --rm anapsix/alpine-java java --version
```

# Das Erste [[Dockerfile]]

Eigene Images werden durch eine *Skriptsprache* in einem [[Dockerfile]] definiert. Zum Beispiel:

```Dockerfile
FROM anapsix/alpine-java
COPY ./target/hello-world.jar /home
WORKDIR /home
CMD ["java", "-cp", "hello-world.jar", "de.pdbm.Main"]
```

Das [[Image]] kann dann gebaut und gelaufen werden mit:

```bash
docker build -t hello-app .
docker run -it --rm hello-app
```

## [[Eclipse Temurin]]

[Eclipse Temurin](https://hub.docker.com/_/ecliplse-termurin)

Kann gestartet werden durch:

```bash
ducker run -it --rm eclipse-temurin:latest java -version
```

## JVMs inside Docker

Die JVM merkt, dass diese innerhalb eines Containers läuft.

- [x] Mal die Artikel hier lesen #todo

- [Java 17: Whats new in OpenJDKs container awareness](https://developers.redhat.com/articles/2022/04/19/java-17-whats-new-openjdks-container-awareness)
- [How To Configure Java Heap Size Inside a Docker Container](https://www.baeldung.com/ops/docker-jvm-heap-size)
- [Best Practices: Java Memory Arguments for Containers](https://dzone.com/articles/best-practices-java-memory-arguments-for-container)
- [Container Aware - running java applications inside containers](https://jvmaware.com/container-aware-jvm/)
- [JVM in a Container — How different Java versions behave in a container](https://www.merikan.com/2019/04/jvm-in-a-container/)
- [Container Aware JVM Parameters for Heap Memory](https://www.ronella.xyz/?p=1582)
- [What does UseContainerSupport VM parameter do?](https://stackoverflow.com/questions/54516988/what-does-usecontainersupport-vm-parameter-do)
- [Java in a Container: Resource Allocation Guidelines](https://www.ccampo.me/java/docker/containers/kubernetes/2019/10/31/java-in-a-container.html)
- [Java Heap Sizing in a Container: Quickly and Easily](https://blogs.oracle.com/java/post/java-heap-sizing-in-a-container-quickly-and-easily)

## [[WildFly]]

Auf [[Docker]] hub: `jboss/wildfly`, aber mittlerweile umgezogen auf quay.io (`quay.io/wildfly/wildfly`). Herunterladen und starten des Images funktioniert über

```bash
docker pull quay.io/wildfly/wildfly
docker run -it quay.io/wildfly/wildfly
```

Das starten eines nicht vorhandenen Containern impliziert das Herunterladen.

## [[Postgres]]

Erhältlich im Dockerhub unter [Postgres](https://hub.docker.com/_/postgres). Wir können eine [[Dockerfile]] für ein eigenes [[Image]], dass Postgres benutzt schreiben.

```Dockerfile
FROM postgres:12.4
RUN localedef -i de_DE -c -f UTF-8 -A \ /usr/share/locale/locale.alias de_DE.UTF-8
ENV LANg de_DE.utf-8
COPY ./create.sql /docker-entrypoint-initdb.d
```

Verwendung mit [[Podman]] sieht wie folgt aus:

```bash
podman build --tag foo-db .
podman run --name foo-db -e POSTGRES_PASSWORD=pp \ -p 5555:5432 -d foo-db
psql -h 0.0.0.0 -p 5555 -U postgres
```

# Literatur

- [x] Jeff Nickoloff. Docker in Action. Manning, 2016
