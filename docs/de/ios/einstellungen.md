# Einstellungen (iOS)

Die **Einstellungen** sind über den gleichnamigen Tab in der globalen Tab-Leiste erreichbar (von der Shows-Übersicht aus, nicht innerhalb einer Show).

<img src="./img/einstellungen.png" alt="Einstellungen" class="ios-screenshot">

## Server

Im Feld **Server** wird die URL des LuxStage-Servers eingetragen, z. B. `http://192.168.1.100:8090`. Ohne gültige Server-URL kann die App keine Shows laden.

## Sprache

Über das **Sprache**-Menü lässt sich die Anzeigesprache der App wählen (z. B. Deutsch).

## OSC pro Bühnen-Template

Die Liste der Bühnen-Templates wird automatisch vom LuxStage-Server geladen. Für jedes Bühnen-Template wird angezeigt:

- **Name** — read-only, wird in der WebApp gepflegt
- **IP-Adresse** — read-only, wird in der [WebApp unter Bühnen-Templates](../webapp/spielstaette-vorlage) gesetzt; „Nicht konfiguriert" wenn kein Eintrag vorhanden
- **EOS-User-ID** — Stepper zum Einstellen des EOS-Users (1–99); wird **lokal auf dem Gerät** gespeichert und kann pro Gerät unterschiedlich sein

::: tip
Die IP-Adresse wird zentral in der WebApp gesetzt und gilt für alle Geräte. Die EOS-User-ID ist gerätespezifisch und bleibt nach App-Neustart erhalten.
:::

## Abmelden

Der **Abmelden**-Button beendet die Sitzung und kehrt zur Server-Eingabe zurück.
