# Importieren & Exportieren

LuxStage unterstützt den Datenaustausch mit externen Tools über Import- und Export-Funktionen.

## Importieren

Der Button **„Importieren"** in der oberen Menüleiste einer Show öffnet ein Dropdown mit zwei Optionen:

### Aus Eos importieren

Importiert Kanaldaten direkt von einem **ETC EOS**-Lichtpult. Dabei werden alle Kanäle, welche im Pult in Stimmungen gespeichert sind, in der Kanaltabelle gelb markiert. 

Der EOS-Export muss im Pult wie folgt konfiguriert werden:

- Setup -> Exportieren -> CSV -> Speicherort wählen
- Im Export-Dialog: Nur "Stimmungen" und "Werte" aktivieren
- Exportiertes CSV in LuxStage in der entsprechenden Show über Importieren -> Aus EOS importieren -> CSV auswählen
- Import im Merge-Dialog überprüfen
- Import mit Klick auf "Importieren" starten

Alle gelb markierten Kanäle können nun in der Kanaltabelle mit Notizen, Farbcode etc. beschriftet werden. 

### CSV importieren

Importiert Kanaldaten aus einer CSV-Datei. Geeignet für den Import aus Excel oder anderen Tools.

**CSV-Format:** Die Datei sollte Spalten für Kanal, Dimmer-Adresse, Farbe, Gerät und Notizen enthalten.

## Exportieren

Der Button **„Exportieren"** öffnet ein Dropdown mit zwei Optionen:

### PDF

Exportiert den vollständigen Kanalplan als druckfertiges **PDF-Dokument**. Der Export enthält:
- Showname und Datum
- Vollständige Kanaltabelle mit allen Positionen
- Fotos (sofern vorhanden, entsprechend der Einstellung „Fotos pro Druckseite")

### CSV exportieren

Exportiert die Kanaldaten als **CSV-Datei** – kompatibel mit Microsoft Excel, Google Sheets und anderen Tabellenkalkulationen.

::: tip Tipp
CSV-Export eignet sich gut für den Datenaustausch mit dem Lichtpult oder für eigene Auswertungen.
:::
