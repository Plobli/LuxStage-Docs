# Aus EOS importieren

Importiert Kanaldaten direkt von einem **ETC EOS**-Lichtpult. Dabei werden alle Kanäle, welche im Pult in Stimmungen gespeichert sind, in der Kanaltabelle gelb markiert.

Der EOS-Export muss wie folgt konfiguriert werden:

- Setup -> Exportieren -> CSV -> Speicherort wählen
- Im Export-Dialog: Nur "Stimmungen" und "Werte" aktivieren

![EOS Export-Dialog](/img/webapp/import-eos/eos-export-dialog.png)

- Exportiertes CSV in LuxStage in der entsprechenden Show über Importieren -> Aus EOS importieren -> CSV auswählen
- Import im Merge-Dialog überprüfen

![Merge-Vorschau](/img/webapp/import-eos/merge-vorschau.png)

Der Merge-Dialog zeigt drei Gruppen:

- **Neu aktiv** — Kanäle, die im Pult neu bespielt werden
- **Nicht mehr aktiv** — vormals aktive Kanäle, die im aktuellen Export fehlen
- **Unangetastet – hat Beschreibung** — bereits beschriftete Kanäle, die der Import **nicht** überschreibt

::: tip Bestehende Notizen bleiben erhalten
Der Import löscht nichts: Geräte, Farben und Notizen bleiben in allen Kanälen erhalten. Fehlende Kanäle werden neu angelegt, nicht mehr aktive nur als inaktiv markiert. Das gilt auch beim wiederholten Import (Re-Import) derselben Show.
:::

Gibt es keine Änderungen gegenüber dem aktuellen Stand, erscheint „Keine Änderungen." — der Import lässt sich trotzdem bestätigen.

- Import mit Klick auf "Importieren" starten

Alle gelb markierten Kanäle können nun in der Kanaltabelle mit Notizen, Farbcode etc. beschriftet werden.
