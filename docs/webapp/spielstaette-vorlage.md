# Spielstätten-Vorlage anlegen

Eine Spielstätten-Vorlage enthält die feste Kanalstruktur deiner Bühne — Scheinwerfer, DMX-Adressen, Positionen und Notiz-Sektionen. Einmal angelegt, kannst du sie bei jeder neuen Produktion mit einem Klick übernehmen.

## Vorlage aus CSV importieren

Die schnellste Methode: eine bestehende Kanalliste als CSV importieren.

1. Navigiere zu **Vorlagen** in der Seitenleiste.
2. Klicke auf **„Upload CSV"**.
3. Wähle deine CSV-Datei aus (semikolon-getrennt, z. B. aus Excel oder ETC EOS).
4. Vergib der Vorlage einen Namen im Feld **„Template name"**.
5. Klicke auf **„Import template"**.
6. Schließe den Dialog mit **„Close"**.

Die Vorlage ist jetzt gespeichert und bei jeder neuen Show verfügbar.

## CSV-Format

Die CSV-Datei sollte folgende Spalten enthalten:

| Spalte | Beschreibung |
|--------|-------------|
| Kanal | Kanalnummer |
| DMX | DMX-Adresse |
| Gerät | Gerätetyp (z. B. „PAR 64", „Profiler 1,2 kW") |
| Position | Hängepunkt oder Standort |
| Gel | Farbfilter-Code (z. B. R02, L201) |
| Notiz | Freitext-Notiz |

::: tip EOS-Export direkt importieren
CSV-Exporte aus ETC EOS können direkt importiert werden — aktive Kanäle werden automatisch erkannt.
:::

## Vorlage manuell anlegen

Alternativ kannst du eine Vorlage auch direkt in LuxStage aufbauen:

1. Klicke auf **„+ Neue Spielstätte"**.
2. Trage Name und Grunddaten ein.
3. Füge Kanäle manuell hinzu oder importiere sie nachträglich per CSV.

## Vorlage bei neuer Produktion verwenden

Wenn du eine neue Show anlegst, wählst du eine Spielstätte aus. Die Kanalstruktur und Notiz-Sektionen werden automatisch übernommen — du kannst sie dann pro Show individuell anpassen.
