# Kanäle

Der **Kanäle**-Tab ist die Hauptansicht einer Show und zeigt den vollständigen Kanalplan.

## Aufbau des Kanalplans

Die Tabelle hat fünf Spalten:

| Spalte | Bedeutung |
|--------|-----------|
| **KANAL** | Kanalname im Pult (links) / Dimmer-Adresse (rechts nach dem „/") |
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
| **Farbe** | Klicken → Dropdown mit verfügbaren Gel-Codes erscheint (z. B. „L201 / R371 Full C.T. Blue") |
| **Gerät** | Klicken → Gerätebezeichnung eingeben |
| **Notizen** | Klicken → Freitext eingeben |

## Kanal-Status umschalten

Die **Kanalnummer** erscheint grün (Notiz hinzugefügt), gelb (nach dem Import eines EOS-CSV, aber ohne Notiz) oder grau (keine Notiz).

## Kanal hinzufügen

Unterhalb jeder Position befindet sich der Button **„+ Kanal hinzufügen"**. Ein Klick fügt einen neuen leeren Kanal zur jeweiligen Position hinzu.

## Kanal löschen oder leeren

Den Kanal anklicken (aktivieren), dann auf das **×**-Symbol rechts in der Zeile klicken. Ein Dialog bietet zwei Optionen:

- **Kanal leeren** – entfernt nur Notiz und Farbe, die Zeile bleibt bestehen
- **Zeile löschen** – entfernt den Kanal vollständig

## Kanal einem Einbauort zuweisen

Bei Hover über eine Kanalzeile erscheint rechts (vor dem Löschen-Button) der Button **„Zuweisen"** mit drei Optionen:

- **Im Grundriss platzieren** – öffnet den [Grundriss](./grundriss) und platziert den Kanal dort
- **Beleuchtungsgestell-Slot zuweisen** – öffnet den [Setup](./setup)-Bereich zur Zuweisung an ein Gestell
- **Zugstange zuweisen** – öffnet den [Setup](./setup)-Bereich zur Platzierung auf einer Zugstange

Ist der Kanal bereits einem Gestell-Slot oder einer Zugstange zugewiesen, wird der Einbauort zusätzlich als kleines Badge unterhalb der Notiz angezeigt.

## Reihenfolge ändern (Drag & Drop)

Per **Drag & Drop** am ⠿-Handle links können Kanäle innerhalb einer Position neu angeordnet werden.

## Position umbenennen

Beim Hovern über eine Positionsüberschrift erscheint der Button **„Position umbenennen"** – klicken und neuen Namen eingeben.

## Suche

Im Suchfeld oben rechts (**„Suchen …"**) können Kanäle, Geräte oder Notizen in Echtzeit gefiltert werden.

## Tastaturkürzel

| Aktion | Kürzel |
|--------|--------|
| Rückgängig | ⌘Z (Mac) / Ctrl+Z (Win) |
| Wiederholen | ⌘⇧Z (Mac) / Ctrl+Y (Win) |
