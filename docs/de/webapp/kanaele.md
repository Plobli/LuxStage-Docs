# Kanäle

Der **Kanäle**-Tab ist die Hauptansicht einer Show und zeigt den vollständigen Kanalplan.

::: tip Inline-Hilfe in der App
Neben den Spaltenüberschriften der Kanaltabelle und im Setup-Bereich zeigen kleine Hilfe-Icons Kurzerklärungen zu den jeweiligen Feldern direkt in der App.
:::

## Live-Zusammenarbeit (Presence)

Arbeiten mehrere Personen gleichzeitig an einer Show, erscheinen oben in der Show-Leiste kleine, farbige Avatare (Initiale) für jede angemeldete Person:

- **Grüner Ring/Punkt** – die Person bearbeitet die Show gerade aktiv
- **📱-Badge** – die Person ist über die iOS-App verbunden
- Tooltip beim Überfahren zeigt Name und verbundene Geräte (iOS und/oder Web)

Die Avatare erscheinen erst ab zwei gleichzeitig verbundenen Personen; bei mehr als vier wird die Zahl der weiteren als „+N" zusammengefasst. Änderungen anderer Nutzer erscheinen in Echtzeit, ohne Neuladen der Seite.

## Aufbau des Kanalplans

Die Tabelle hat fünf Spalten:

| Spalte | Bedeutung |
|--------|-----------|
| **KANAL** | Kanalname im Pult (links) / Dimmer-Adresse (rechts nach dem „/"), z. B. „1/001" |
| **FARBE** | Farbfilter (Gel-Code), z. B. „L201/R371" oder „RGB", „variable" |
| **ANZ.** | Anzahl identischer Geräte an dieser Position |
| **GERÄT** | Leuchtenbezeichnung, z. B. „ETC Source Four 26°" |
| **NOTIZEN** | Freitext-Notiz, z. B. „Key light stage left, narrow spot" |

Die Kanäle sind nach **Positionen** gruppiert (z. B. „FOH BAR LEFT", „OVERHEAD BAR 1", „SIDE BOOM SL"). Die Anzahl der Kanäle je Position wird als Zahl rechts neben dem Positionsnamen angezeigt.

## Kanal auswählen und bearbeiten

1. Auf eine Zeile klicken – ein **Drag-Handle** (⠿) erscheint links, ein **×**-Button rechts
2. Felder direkt bearbeiten:

| Feld | Aktion |
|------|--------|
| **Kanalzahl links** | Klicken → Nummer eingeben|
| **Dimmer-Adresse rechts** | Klicken → Adresse eingeben |
| **Farbe** | Klicken → Dropdown mit verfügbaren Gel-Codes erscheint (z. B. „L201 / R371 Full C.T. Blue"). Zusätzlich wählbar: **„No Color"** (kein Farbfilter) oder **Freitext** für eigene Angaben (z. B. „R02" oder „warm weiß") |
| **Gerät** | Klicken → Gerätebezeichnung eingeben |
| **Notizen** | Klicken → Freitext eingeben |

## Kanal-Status umschalten

Die **Kanalnummer** erscheint in drei Farben:

- **Weiß** – ohne Notiz
- **Grün** – Notiz vorhanden
- **Gelb** – in der Show aktiv (z. B. nach EOS-Import), aber die Notiz fehlt noch

Dieselbe Legende steht auch als Inline-Hilfe (Hilfe-Icon) neben der Kanaltabelle in der App.

## Kanal hinzufügen

Unterhalb jeder Position befindet sich der Button **„+ Kanal hinzufügen"**. Ein Klick fügt einen neuen leeren Kanal zur jeweiligen Position hinzu.

## Kanal löschen oder leeren

Den Kanal anklicken (aktivieren), dann auf das **×**-Symbol rechts in der Zeile klicken. Ein Dialog bietet zwei Optionen:

- **Kanal leeren** – entfernt nur Notiz und Farbe, die Zeile bleibt bestehen
- **Zeile löschen** – entfernt den Kanal vollständig

## Kanal einem Einbauort zuweisen

Bei Hover über eine Kanalzeile erscheint rechts (vor dem Löschen-Button) der Button **„Zuweisen"** mit drei Optionen:

- **Im Grundriss platzieren** – öffnet den [Grundriss](./grundriss) und platziert den Kanal dort
- **Beleuchtungsgestell-Slot zuweisen** – öffnet [Setup — Beleuchtungsgestelle](./setup-gestelle) zur Zuweisung an ein Gestell
- **Zugstange zuweisen** – öffnet [Setup — Zugstangen](./setup-zugstangen) zur Platzierung auf einer Zugstange

Ist der Kanal bereits einem Gestell-Slot oder einer Zugstange zugewiesen, wird der Einbauort zusätzlich als kleines Badge unterhalb der Notiz angezeigt.

::: tip Warnung bei Duplikaten
Vergibst du eine DMX-Adresse oder Kanalnummer doppelt, warnt die Tabelle mit „Doppelte DMX-Adresse!" bzw. „Doppelte Kanalnummer!".
:::

## Reihenfolge ändern (Drag & Drop)

Per **Drag & Drop** am ⠿-Handle links können Kanäle innerhalb einer Position neu angeordnet werden.

## Position umbenennen

Beim Hovern über eine Positionsüberschrift erscheint der Button **„Position umbenennen"** – klicken und neuen Namen eingeben.

## Suche

Im Suchfeld oben rechts (**„Suchen …"**) können Kanäle, Geräte oder Notizen in Echtzeit gefiltert werden.

## Vollständigkeitsprüfung

Neben der Kanaltabelle zeigt ein Badge, ob die Show vollständig ist:

- **Grüner Haken** – alle Kanäle vollständig ausgefüllt
- **Gelbes Warnsymbol mit Zahl** – Anzahl der Kanäle mit fehlenden Angaben

Ein Klick auf das Badge öffnet die Aufschlüsselung nach fehlender Angabe (kein Gerät, keine Position, keine Adresse). Klick auf eine Zeile filtert die Kanaltabelle auf genau diese Kanäle; ein **×** neben dem aktiven Filter setzt ihn zurück.

## Tastaturkürzel

| Aktion | Kürzel |
|--------|--------|
| Rückgängig | ⌘Z (Mac) / Ctrl+Z (Win) |
| Wiederholen | ⌘⇧Z (Mac) / Ctrl+Y (Win) |
