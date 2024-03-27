---
title: KNIME
description: 
type: 
kurs: 
vorlesungnr: 0
tags: 
draft: true
date:
---

# KNIME

[KNIME](https://www.knime.com/) ist ein Open Source GUI-basiertes Datenanalysetool. Unter anderem setzt sich KNIME von anderen Tools, wie Python und R davon ab, dass KNIME keine Programmierkenntnisse voraussetzt. Insgesamt wird muss in KNIME keine Zeile Code geschrieben werden. Der folgende Screenshot zeigt ein leeres, neu erstelltes Projekt in KNIME.

![[Screenshot 2024-03-26 at 4.18.30 PM.png]]

Sogenannte "Nodes" bilden dabei die Grundbausteine eines "Workflows", also der Verarbeitungsabfolge eines oder aber auch mehrerer Datensätze. Einige simple "Nodes" werden dabei vorab von KNIME bereitgestellt. Eine ausführliche Info für eine beliebige Node kann per Klick auf das Fragezeichen-Icon neben jeder Node gefunden werden, oder auch im Community Hub von KNIME selber. Siehe [hier](https://hub.knime.com/knime/extensions/org.knime.features.ext.poi/latest/org.knime.ext.poi3.node.io.filehandling.excel.reader.ExcelTableReaderNodeFactory) beispielsweise, um die Funktionalität der Excel Readers von KNIME zu sehen. 

![[Pasted image 20240326162526.png]]

Ist ein Node einmal in einen Workflow eingefügt, muss dieser Konfiguriert (Zahnrad-Icon) werden. Im Fall des CSV-Readers sind vor allem Parameter, wie der Speicherort der csv-Datei, Delimiter und ob der Datensatz einen Header besitzt wichtig. Andere Nodes können dabei natürlich andere Parameter besitzen. Die folgende Abbildung zeigt dabei, wie der *iris*-Datensatz eingelesen werden könnte.

![[Screenshot 2024-03-26 at 4.27.52 PM.png]]

KNIME benutzt ein Ampelsystem, um den Zustand eines jeden Nodes zu zeigen. Rot bedeutet dabei, dass die Node noch nicht richtig Konfiguriert wurde, Gelb, dass die Node bereit ist, aber noch nicht ausgeführt wurde und Grün, falls die Node ausgeführt wurde. Ein Klick auf eine fertig ausgeführte Node lässt die entstandene Ausgabe anzeigen. 

![[Screenshot 2024-03-26 at 4.33.22 PM.png]]

Dieser Output kann dann als Eingabe in einem anderen Node weitergereicht werden. Die folgende Abbildung zeigt beispielsweise einen Workflow der einmal des Iris Datensatz in einem Dichte-Plot und zudem diesen filtert und aus dem gefilterten Ergebnis einen Box-Plot erzeugt.

![[Screenshot 2024-03-26 at 4.36.22 PM.png]]

## Zusätzliche Funktionalität durch KNIME Community Nodes

Im allgemeinen sind die von KNIME bereitgestellten Nodes recht simpel gehalten. Stellt sich dann nur die Frage, wie zum Beispiel Data Science Algorithmen, für beispielsweise Clustering oder Partitionierung eines Datensatzes erfolgt. Dafür bietet KNIME den sogenannten [Community Hub](https://hub.knime.com) bereit. Alle hier bereitgestellten Nodes können per Drag and Drop in den eigenen Workflow gezogen werden. Beispielsweise wird im folgenden Workflow der Iris-Datensatz in einen Test und Trainingsdatensatz geteilt, und dann K-Means angewendet. 

![[Screenshot 2024-03-26 at 4.42.44 PM.png]]

| Vorteile                                                                                                | Nachteile                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| KNIME erlaubt es sehr schnell Workflows aufzubauen.                                                     | KNIME bietet durch sein grafisches User Interface weniger Konfigurationsmöglichkeiten, wie Python oder auch R.                                   |
| Da KNIME komplett auf Code verzichtet kann die Software auch ohne Programmierkenntnisse bedient werden. | Persönliche Erfahrung hat ergeben, dass individuelle Probleme nicht so einfach durch das Durchforsten von Forumsbeiträgen gelöst werden konnten. |
