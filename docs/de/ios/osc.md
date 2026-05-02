# OSC (iOS)

Der **OSC**-Tab ist die direkte Fernsteuerung der EOS-Lichtsteuerkonsole über das Netzwerk. Er steht sowohl innerhalb einer Show als auch global (ohne geöffnete Show) zur Verfügung.

## Bühnen-Template-Auswahl

Oben links zeigt ein Dropdown das aktuell aktive **Bühnen-Template**. Ein Tippen öffnet die Liste aller Bühnen-Templates vom Server — das aktive ist mit einem Haken markiert. Die IP-Adressen werden in der [WebApp](../webapp/spielstaette-vorlage) gepflegt, die EOS-User-ID in den [Einstellungen](./einstellungen).

Der Verbindungsstatus erscheint als grüner Punkt mit „Verbunden · User 1", sobald die Verbindung zur EOS steht. Der EOS-User kann in den [Einstellungen](./einstellungen) festgelegt werden.

## Unteransichten

Die vier Unteransichten werden über die Segment-Leiste oben gewechselt: **Numpad**, **Playback**, **Fader**, **ML**.

---

### Numpad

Die klassische EOS-Numpad-Eingabe. Die eingegebene Befehlszeile wird oberhalb des Numpads angezeigt, darunter erscheinen zuletzt gesendete Befehle als Verlauf.

<img src="/img/ios/osc-numpad.png" alt="Numpad" class="ios-screenshot">

<img src="/img/ios/osc-numpad-eingabe.png" alt="Numpad mit Eingabe" class="ios-screenshot">

| Taste | Funktion |
|-------|----------|
| **0–9**, **.** | Zifferneingabe |
| **Thru** | Bereich auswählen (z. B. `5 Thru 10`) |
| **+**, **–** | Kanäle addieren / subtrahieren |
| **Group** | Gruppe ansprechen |
| **At** | Intensitätswert setzen |
| **Full** | Intensität auf 100 % |
| **Out** | Intensität auf 0 % |
| **Clear** | Eingabe löschen |
| **Enter** | Befehl absenden |
| **Sneak** | Sneak-Funktion |
| **Live** | Live-Ansicht |
| **Go to Cue Out** | Direktsprung zu Cue Out |

**Beispiel:** `5 + 6 At Full Enter` → Kanäle 5 und 6 auf 100 %

---

### Playback

Die Playback-Ansicht zeigt den Live-Zustand der EOS und bietet die wichtigsten Ablauf-Tasten.

<img src="/img/ios/osc-playback.png" alt="Playback" class="ios-screenshot">

Oben erscheinen EOS-Adresse, User und der aktuell aktive Cue (`LIVE: Cue 1`), darunter das zuletzt ausgelöste Cue-Event.

| Taste | Farbe | Funktion |
|-------|-------|----------|
| **Back** | Orange | Einen Cue zurück |
| **Pause** | Blau | Playback pausieren |
| **GO** | Grün | Nächsten Cue starten |
| **Go Time 2** | Türkis | GO mit Zeit 2 |
| **Go to Cue Out** | Rot | Direkt zu Cue Out springen |

---

### Fader

Die Fader-Ansicht stellt bis zu fünf **Fader-Bänke** (Bank 1–5) zur Verfügung. Jede Bank zeigt eine Liste von Sub-Masters:

<img src="/img/ios/osc-fader.png" alt="Fader" class="ios-screenshot">

| Element | Funktion |
|---------|----------|
| **Name** | Sub-Master-Bezeichnung (z. B. „S 11 Kabuki") |
| **Schieberegler** | Stufenlose Intensität 0–100 % |
| **Full** | Fader sofort auf 100 % setzen |
| **Fire** | Sub-Master auslösen |

---

### ML (Moving Light)

Die ML-Ansicht steuert die Parameter des aktuell an der EOS selektierten Moving Lights.

<img src="/img/ios/osc-ml.png" alt="ML Moving Light" class="ios-screenshot">

Oben wird der **Active Chan** angezeigt (z. B. „705 [0] GLP Impression_X4S_High_Res @ 1613") sowie der aktuelle Live-Cue.

Für jeden Parameter-Wheel erscheint eine Karte mit vier Steuertasten:

| Taste | Schrittweite |
|-------|-------------|
| **– Fine** | Kleiner Schritt negativ |
| **+ Fine** | Kleiner Schritt positiv |
| **–** | Großer Schritt negativ |
| **+** | Großer Schritt positiv |

Typische Wheels: **Intens**, **Pan**, **Tilt**, **X Focus**, **Z Focus** — je nach Fixture-Profil.
