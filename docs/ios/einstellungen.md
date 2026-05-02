# Einstellungen (iOS)

Die **Einstellungen** sind über den gleichnamigen Tab in der globalen Tab-Leiste erreichbar (von der Shows-Übersicht aus, nicht innerhalb einer Show).

<img src="./img/einstellungen.png" alt="Einstellungen" class="ios-screenshot">

## Server

Im Feld **Server** wird die URL des LuxStage-Servers eingetragen, z. B. `http://192.168.1.100:8090`. Ohne gültige Server-URL kann die App keine Shows laden.

## Sprache

Über das **Sprache**-Menü lässt sich die Anzeigesprache der App wählen (z. B. Deutsch).

## OSC pro Bühne

Jede Spielstätte kann eine eigene EOS-IP-Adresse erhalten. Diese Zuordnung wird **lokal auf dem Gerät** gespeichert und ist unabhängig vom LuxStage-Server.

- **Venue hinzufügen** — neues Venue mit IP-Adresse anlegen
- Bestehende Venues werden mit Namen und IP-Adresse aufgelistet (z. B. `Venue · 172.20.10.3`)
- Ein Venue ohne eingetragene IP zeigt „Keine IP" als Hinweis
- Ein Tippen auf einen Venue-Eintrag öffnet die Detailansicht zum Bearbeiten der IP-Adresse

::: tip
Die hier angelegten Venues stehen im [OSC-Tab](./osc) als auswählbare Verbindungsziele zur Verfügung.
:::

## Abmelden

Der **Abmelden**-Button beendet die Sitzung und kehrt zur Server-Eingabe zurück.
