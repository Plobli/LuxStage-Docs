# Spielort-Vorlage anlegen

Eine Spielort-Vorlage enthält die feste Kanalstruktur deiner Bühne — Scheinwerfer, DMX-Adressen, Positionen und Notiz-Sektionen. Einmal angelegt, kannst du sie bei jeder neuen Produktion mit einem Klick übernehmen.

## Spielort-Vorlage aus CSV importieren

Die schnellste Methode: eine bestehende Kanalliste als CSV importieren.

1. Navigiere zu **Vorlagen** in der Seitenleiste.
2. Klicke auf **„CSV hochladen"**.
3. Wähle deine CSV-Datei aus (semikolon-getrennt, z. B. aus Excel oder ETC EOS).
4. Vergib der Spielort-Vorlage einen Namen im Feld **„Name"**.
5. Klicke auf **„Spielort-Vorlage importieren"**.
6. Schließe den Dialog mit **„Schließen"**.

Die Spielort-Vorlage ist jetzt gespeichert und bei jeder neuen Show verfügbar.

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

## Spielort-Vorlage manuell anlegen

Alternativ kannst du eine Spielort-Vorlage auch direkt in LuxStage aufbauen:

1. Klicke auf **„Neue Spielort-Vorlage"**.
2. Trage Name und Grunddaten ein.
3. Füge Kanäle manuell hinzu oder importiere sie nachträglich per CSV.

## Spielort-Vorlage umbenennen

Ein Klick auf das **Stift-Symbol** neben dem Namen öffnet ein Eingabefeld. Name eingeben, mit **Enter** oder Klick außerhalb bestätigen. Alle Shows, die dieser Spielort-Vorlage zugeordnet sind, übernehmen den neuen Namen automatisch.

## OSC-IP-Adresse

In der Detailansicht einer Spielort-Vorlage gibt es das Feld **OSC-IP**. Hier wird die IP-Adresse der EOS-Lichtsteuerkonsole für diese Bühne eingetragen (z. B. `192.168.1.10`). Das Feld ist optional — leer bedeutet kein OSC.

Die IP-Adresse gilt für alle Benutzer und Geräte, die mit dieser Spielort-Vorlage arbeiten. Die EOS-User-ID wird separat pro Gerät in der iOS-App gesetzt.

## Vorlagen-Liste

Die Übersicht zeigt pro Spielort-Vorlage:

- **Name** der Spielort-Vorlage
- **Kanalanzahl** — Anzahl der gespeicherten Kanäle
- **OSC-IP** — konfigurierte IP-Adresse (falls vorhanden)
- **Zuletzt geändert** — Datum der letzten Änderung

## Spielort-Vorlage bei neuer Produktion verwenden

Wenn du eine neue Show anlegst, wählst du eine Spielort-Vorlage aus. Die Kanalstruktur und Notiz-Sektionen werden automatisch übernommen — du kannst sie dann pro Show individuell anpassen.

## Show nachträglich einer Spielort-Vorlage zuordnen

Auf der Show-Karte in der Übersicht öffnet das **Stift-Symbol** einen Dialog zur Vorlagen-Zuordnung. Dort lässt sich die Spielort-Vorlage ändern — die Kanäle der Show bleiben dabei unverändert, nur die Metadaten (Bühnenname, OSC-Einstellungen) werden aktualisiert.
