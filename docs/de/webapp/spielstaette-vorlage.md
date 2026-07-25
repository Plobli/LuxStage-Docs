# Bühnen-Template anlegen

Ein Bühnen-Template enthält die feste Kanalstruktur deiner Bühne — Scheinwerfer, DMX-Adressen, Positionen und Notiz-Sektionen. Einmal angelegt, kannst du es bei jeder neuen Produktion mit einem Klick übernehmen.

## Bühnen-Template aus CSV importieren

Die schnellste Methode: eine bestehende Kanalliste als CSV importieren.

1. Navigiere zu **Templates** in der Seitenleiste.
2. Klicke auf **„CSV hochladen"**.
3. Wähle deine CSV-Datei aus (semikolon-getrennt, z. B. aus Excel oder ETC EOS).
4. Vergib dem Bühnen-Template einen Namen im Feld **„Name"**.
5. Klicke auf **„Bühnen-Template importieren"**.
6. Schließe den Dialog mit **„Schließen"**.

Das Bühnen-Template ist jetzt gespeichert und bei jeder neuen Show verfügbar.

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

## Bühnen-Template manuell anlegen

Alternativ kannst du ein Bühnen-Template auch direkt in LuxStage aufbauen:

1. Klicke auf **„Neues Bühnen-Template"**.
2. Trage Name und Grunddaten ein.
3. Füge Kanäle manuell hinzu oder importiere sie nachträglich per CSV.

## Bühnen-Template umbenennen

Ein Klick auf das **Stift-Symbol** neben dem Namen öffnet ein Eingabefeld. Name eingeben, mit **Enter** oder Klick außerhalb bestätigen. Alle Shows, die diesem Bühnen-Template zugeordnet sind, übernehmen den neuen Namen automatisch.

## OSC-IP-Adresse

In der Detailansicht eines Bühnen-Templates gibt es das Feld **OSC-IP**. Hier wird die IP-Adresse der EOS-Lichtsteuerkonsole für diese Bühne eingetragen (z. B. `192.168.1.10`). Das Feld ist optional — leer bedeutet kein OSC.

Die IP-Adresse gilt für alle Benutzer und Geräte, die mit diesem Bühnen-Template arbeiten. Die EOS-User-ID wird separat pro Gerät in der iOS-App gesetzt.

## Template-Liste

Die Übersicht zeigt pro Bühnen-Template:

- **Name** des Bühnen-Templates
- **Kanalanzahl** — Anzahl der gespeicherten Kanäle
- **OSC-IP** — konfigurierte IP-Adresse (falls vorhanden)
- **Zuletzt geändert** — Datum der letzten Änderung

## Bühnen-Template bei neuer Produktion verwenden

Wenn du eine neue Show anlegst, wählst du ein Bühnen-Template aus. Die Kanalstruktur und Notiz-Sektionen werden automatisch übernommen — du kannst sie dann pro Show individuell anpassen.

## Show nachträglich einem Bühnen-Template zuordnen

Auf der Show-Karte in der Übersicht öffnet das **Stift-Symbol** einen Dialog zur Template-Zuordnung. Dort lässt sich das Bühnen-Template ändern — die Kanäle der Show bleiben dabei unverändert, nur die Metadaten (Bühnenname, OSC-Einstellungen) werden aktualisiert.
