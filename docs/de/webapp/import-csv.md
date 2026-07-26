# CSV importieren

Importiert Kanaldaten aus einer CSV-Datei. Geeignet für den Import aus Excel oder anderen Tools.

## CSV-Format

- **Trennzeichen:** Semikolon (`;`)
- **Encoding:** UTF-8
- **Erste Zeile:** Kopfzeile, wird beim Import übersprungen
- **Spaltenreihenfolge** (feststehend, keine Namens-Erkennung):

| Position | Spalte |
|----------|--------|
| 1 | Kanal |
| 2 | Dimmer-Adresse |
| 3 | Gerät |
| 4 | Position |
| 5 | Farbe |
| 6 | Notizen |

Zeilen ohne Kanalnummer werden übersprungen.

## Verhalten bei bestehenden Kanälen

Der Import **ergänzt und überschreibt gezielt**, statt die komplette Kanalliste zu ersetzen:

- Gibt es bereits einen Kanal mit derselben Kanalnummer, werden nur die **nicht-leeren** Felder aus der CSV übernommen — leere Zellen lassen bestehende Werte unverändert.
- Kanäle, die in der CSV neu sind, werden zusätzlich angelegt.
- Nach dem Import wird die Liste numerisch nach Kanalnummer sortiert.
