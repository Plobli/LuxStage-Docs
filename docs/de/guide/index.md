# Übersicht

LuxStage ist eine App für Beleuchtungsdokumentation am Theater oder auf Events — als Web-App und iOS-App.

### LuxStage-Server

Der Server verwaltet die Datenbank mit Shows, Vorlagen usw. Außerdem stellt der Server die Web-App bereit, welche über einen beliebigen Browser aufgerufen werden kann.

Die Installation des selbstgehosteten Servers erfolgt mit wenigen Befehlen z.B. auf einem Raspberry Pi 4 oder eigenem VPS.

::: tip Kein eigener Server gewünscht?
Diese Anleitung gilt für Self-Hosting. Alternativ gibt es LuxStage als gehosteten Service unter [luxstage.app](https://luxstage.app) — ganz ohne eigene Server-Installation.
:::

### LuxStage im Browser

Die Web-Anwendung läuft im Browser auf Mac, Windows, iPad oder jedem anderen Gerät. Hier wird die Dokumentation der Show angelegt.

### LuxStage für iOS

Die App für iPhone und iPad zum Aufrufen der Dokumentation und Steuerung von Scheinwerfern

- Optimiert für iPhone & iPad
- Echtzeit-Sync mit dem Server
- Offline-Lesemodus
- OSC-Steuerung von ETC Lichtpulten
- Einleuchtmodus mit Notizen zu jeder Position und 1-Klick-Steuerung der Scheinwerfer

## Schnellstart in 10 Minuten

Nach der [Installation](./installation) — diese Reihenfolge führt am schnellsten zur ersten Show:

### 1. Spielort-Vorlage anlegen
[Spielort-Vorlage anlegen](/de/webapp/spielstaette-vorlage) — Kanalstruktur einmal definieren (per CSV-Import oder manuell), bei jeder neuen Produktion sofort verfügbar. Optional: Beim Self-Hosting sinnvoll direkt nach der Installation, bevor die erste Show angelegt wird.

### 2. Show anlegen
[Shows](/de/webapp/shows) — neue Show erstellen und optional der Spielort-Vorlage zuordnen. Kanalstruktur und Grundriss werden automatisch übernommen.

### 3. Kanäle planen & einleuchten
[Aus EOS importieren](/de/webapp/import-eos) oder [Kanäle](/de/webapp/kanaele) manuell befüllen. iOS-App und Web-App sind synchron – alle Beleuchter sehen immer denselben Stand.

### 4. Exportieren & archivieren
[PDF exportieren](/de/webapp/export-pdf) zum Ausdrucken, Show bei Abschluss [archivieren](/de/webapp/archiv) — mit vollständigem [Versionsverlauf](/de/webapp/versionsverlauf) für später.

## Nächste Schritte

- [Installation](./installation) — Server einrichten
- [Web-App](/de/webapp/) — Anleitung für die Browser-Anwendung
- [iOS-App](/de/ios/) — Anleitung für iPhone & iPad
- [FAQ](/de/faq) — häufige Fragen
