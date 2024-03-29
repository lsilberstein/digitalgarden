---
title: Python
description: 
type: 
kurs: 
vorlesungnr: 0
tags: 
draft: true
date:
---

# Python

Zuerst erschienen, ist Python als Interpretersprache im Jahr 1991. Seitdem wird die Programmiersprache für alle möglichen Anwendungsfälle verwendet. Dazu gehören unter anderem Data Science-Anwendungen, sowie als auch für Web Applikationen und grafische User Interfaces.

Um Python zum laufen zu bekommen muss der Interpreter installiert werden. Dieser ist [hier](https://www.python.org/downloads/) zu finden, kann aber auch durch fast jeden Paketmanager installiert werden.

Sollten bereits andere Programmiersprachen bekannt sein, so sollte auch die Syntax von Python kein Problem darstellen. Eine Besonderheit ist, dass anders als bei Programmiersprachen wie C oder Java, Indentationen eine syntaktische Rolle spielen. An dieser Stelle sei bezüglich der Syntax auf die [Dokumentation](https://docs.python.org/3/) und die [BeginnersGuide](https://wiki.python.org/moin/BeginnersGuide) von Python verwiesen.

Zusätzliche Pakete (oder auch *Libraries* genannt) können jederzeit über das Terminal hinzugefügt werden. Diese werden über den Paket-Manager `pip` verwaltet. Um ein Paket zu installieren kann der Befehl `pip install {package}` verwendet werden. Oft wird eine liste aller benötigten Pakete in einem Projekt mitgeliefert. Alle Pakete einer solchen `requirements.txt` können über den selben Befehl mit `pip install requirements.txt` installiert werden. 

An dieser Stelle sollen einmal für Business Intelligence interessante Pakete beleuchtet werden. Diese sollen hier nur als ein Überblick dienen. Für tieferes Verständnis sei an dieser Stelle auf die jeweiligen Dokumentationen verwiesen.

## Numpy

[NumPy](https://numpy.org) stellt die Funktionalität für weitere uns wichtige Data Science, Machine Learning und Visualisierungs-Bibliotheken bereit. Im Alltag passiert es recht selten, dass direkt Funktionen in Numpy verwendet werden. Trotzdem ist es wichtig, die allgemeinen Datentypen und Funktionen zu kennen, die Numpy bereitstellt, da beispielsweise DataFrames in Pandas durch Numpy-Klassen implementiert werden.

## Matplotlib

[Matplotlib](https://matplotlib.org) ist eine Bibliothek, um Daten visualisieren zu können. In Pandas erstellte DataFrames können hier schnell und mit nur wenigen Methodenaufrufen gerendert werden.

## Pandas

[Pandas](https://pandas.pydata.org) beschreibt sich selber als "a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the [Python](https://www.python.org/) programming language." Pandas stellt unter anderem DataFrames bereit. Diese können im Allgemeinen als ein Tabelle angesehen werden, in der dann Daten manipuliert werden können. DataFrames funktionieren dabei analog zu DataFrames in R.

## Scikit-learn (ehem. Sklearn)

[scikit-learn](https://scikit-learn.org/stable/index.html) stellt mehrere Data Science und Machine Learning Algorithmen bereit. Dazu gehören unter anderem Algorithmen für Clustering, Klassifikationen und auch Regressionen. Die Durchführung einer bestimmten Methodik beschränkt sich damit oft auf nur wenige Methodenaufrufe.

## Jupyter

Die Erkundung und Analyse von Daten findet in Python oft in sogenannten Jupyter Notebooks statt (Endung mit `.ipynb`). Diese bieten die Möglichkeit, einzelne Codeblöcke zusammen mit Markdown Notizen zur besseren Dokumentation und Übersichtlichkeit zusammenzufügen. [Project Jupyter](https://jupyter.org) unterstützt zudem die Darstellung von Plots auf MatPlotLib und DataFrames aus Pandas.

| Vorteile                                                                                                         | Nachteile                                                             |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Dadurch, dass Python sehr weit verbreitet ist, sind Bibliotheken oft sehr gut dokumentiert.                      | Python kann manchmal umständlicher sein, als zum Beispiel Knime.      |
| Als eine sehr allgemein nutzbare Programmiersprache ist Python ein Absprungbrett, das Programmieren zu erlernen. | Vor allem der Start mit Python kann für manche einschüchternd wirken. |
