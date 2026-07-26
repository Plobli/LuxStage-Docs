# Setup

Der **Setup**-Bereich verwaltet die physische Struktur der Bühne: **Beleuchtungsgestelle** (Türme mit nummerierten Slots) und **Zugstangen** (mit frei positionierbaren Scheinwerfern). Beide Bereiche erlauben, Kanäle direkt einem konkreten Einbauort zuzuweisen.

::: tip Nicht zu verwechseln
Dieser Bereich ist nicht identisch mit dem „Aufbau"-Tab der iOS-App – dieser zeigt Checklisten und Freitext-Notizen aus dem [Info](./info)-Tab.
:::

Je nach Einstellung der Show (siehe [Shows](./shows)) ist der eine, der andere oder beide Bereiche als eigener Unter-Tab im Setup-Bereich sichtbar: Beleuchtungsgestelle als „Beleuchtungsgestelle", Zugstangen als **„Obermaschinerie"**.

## Beleuchtungsgestelle

### Gestell anlegen

1. Klick auf **„Neues Beleuchtungsgestell"** (unten rechts)
2. Felder ausfüllen:

| Feld | Beschreibung |
|------|-------------|
| **Bezeichnung** | Name des Gestells, z. B. „Beleuchtungsgestell 1" |
| **Seite** | z. B. „L" oder „R" für links/rechts auf der Bühne |
| **Anzahl Slots** | Wie viele Gestellplätze das Gestell hat (1–20) |

3. Klick auf **„Anlegen"**

### Kanal einem Slot zuweisen

1. Bei einem Slot auf das **⌄⌄**-Symbol (Auswählen) rechts klicken
2. Im Suchfeld nach Kanalnummer oder Gerät suchen
3. Kanal anklicken → wird dem Slot zugewiesen

Ist der nächste Slot noch leer, öffnet sich automatisch dessen Auswahl-Dialog, um mehrere Slots hintereinander schnell zu befüllen.

Ist ein Slot bereits belegt, erscheint vor dem Überschreiben eine Bestätigung.

### Slot leeren

Klick auf das **×**-Symbol neben einem belegten Slot.

### Slots per Drag & Drop tauschen

Am Grip-Symbol (⠿) links neben der Slot-Nummer lässt sich die Kanalzuweisung zweier Slots per Drag & Drop tauschen.

### Slot hinzufügen

Klick auf **„Slot hinzufügen"** unterhalb der Slot-Liste des Gestells.

### Gestell bearbeiten / löschen

Über die Symbole oben rechts an jeder Gestell-Karte:

- **Stift** – Bezeichnung, Seite oder Anzahl Slots ändern. Wird die Slot-Anzahl verringert, erscheint eine Warnung mit den betroffenen (ggf. belegten) Slots.
- **Papierkorb** – Gestell nach Bestätigung löschen

### Notiz hinzufügen

Am unteren Rand jeder Gestell-Karte lässt sich per Klick auf **„+ Notiz"** ein Freitext-Kommentar hinterlegen.

### Als Vorlage speichern

Über das Lesezeichen-Symbol lässt sich ein Gestell in die Spielort-Vorlage übernehmen. Auswählbar sind dabei Grundstruktur (immer enthalten), Kanalnummer, Gerät und Farbe je Slot.

## Zugstangen (Tab „Obermaschinerie")

### Zugstange anlegen

1. Klick auf **„Neue Zugstange"** (unten rechts)
2. Felder ausfüllen: Name, Länge, optional Bemaßung ausblenden
3. Klick auf **„Anlegen"**

### Scheinwerfer auf der Stange platzieren

Auf die gewünschte Position auf der Stangen-Linie klicken → Kanal-Auswahl öffnet sich → Kanal suchen und auswählen → Position bestätigen (in cm, 0 = Mitte der Stange).

Hat der gewählte Kanal eine **Anzahl** größer als 1 (siehe [Kanäle](./kanaele)), werden automatisch mehrere Marker mit Abstand nebeneinander platziert.

### Scheinwerfer verschieben

Marker mit gedrückter Maustaste entlang der Stange ziehen.

### Scheinwerfer bearbeiten

Klick auf den Marker öffnet einen Dialog für eine Anmerkung zum Scheinwerfer (z. B. „3m Seil, Sonderfarbe…"). Von dort aus auch direkter Sprung **„Zum Kanal →"** in die Kanaltabelle möglich.

### Scheinwerfer entfernen

Beim Überfahren des Markers erscheint oben rechts ein rotes **×**-Symbol. Nach Bestätigung wird der Scheinwerfer von der Stange entfernt.

### Länge, Höhe und Anmerkung

Pro Zugstange können Länge und Höhe (in der unter [Einstellungen](./einstellungen) gewählten Maßeinheit) sowie eine Freitext-Anmerkung direkt inline bearbeitet werden.

### Zugstangen umsortieren

Zugstangen lassen sich per Drag & Drop in der Liste neu anordnen.

### Zugstange bearbeiten / löschen

Über die Symbole rechts an jeder Zugstangen-Zeile (bei Hover sichtbar):

- **Stift** – Name, Länge und Bemaßungsanzeige ändern
- **Papierkorb** – Zugstange nach Bestätigung löschen

### Als Vorlage speichern

Über das Lesezeichen-Symbol lässt sich eine Zugstange in die Spielort-Vorlage übernehmen. Auswählbar sind dabei Grundstruktur (immer enthalten) sowie je Scheinwerfer Position, Kanalnummer, Gerät und Anmerkungen.

::: tip Hinweis
Zugstangen aus der Spielort-Vorlage werden beim Erstellen einer neuen Show automatisch übernommen (ohne Scheinwerfer-Zuordnung). Beleuchtungsgestelle aus der Vorlage müssen dagegen manuell über „Einfügen" im Bearbeiten-Dialog hinzugefügt werden.
:::
