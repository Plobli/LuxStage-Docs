# Versionsverlauf

LuxStage speichert automatisch einen **Versionsverlauf** aller Änderungen an Kanälen und Abschnitten einer Show. So können frühere Zustände wiederhergestellt werden. Der Verlauf umfasst maximal 50 Versionen; ältere werden automatisch entfernt.

## Wann werden Versionen gespeichert?

- Automatisch alle 10 Minuten — aber nur, wenn sich Kanäle oder Abschnitte seit dem letzten Snapshot tatsächlich geändert haben. In ruhigen Phasen ohne Änderungen entstehen deshalb keine neuen Einträge.
- Zusätzlich beim Öffnen einer Show, unabhängig vom 10-Minuten-Takt.
- **Archivierte Shows** erhalten keine automatischen Snapshots mehr. Vor dem Archivieren lohnt sich ein Blick auf den aktuellen Stand.

## Versionsverlauf öffnen

Klick auf den Button **„Verlauf"** in der oberen Menüleiste einer Show. Ein seitliches Panel öffnet sich auf der rechten Seite.

## Versionen anzeigen

Das Panel zeigt eine Liste aller gespeicherten Versionen mit **Datum und Uhrzeit**, z. B.:

- 30.4.2026, 17:37:15
- 30.4.2026, 15:01:47
- 30.4.2026, 14:48:31
- 30.4.2026, 14:45:23

## Version wiederherstellen

1. Klick auf einen Versionseintrag → die Detailansicht zeigt Datum, Kanalanzahl und die vollständige Kanalliste zu diesem Zeitpunkt (Kanal, Gerät, Notizen)
2. Klick auf **„Wiederherstellen"** unten im Panel → ein Bestätigungsdialog öffnet sich
3. Bestätigung mit **„Ja, wiederherstellen"** setzt Kanäle und Abschnitte auf diesen Stand zurück — Fotos, Grundriss, Zugstangen und andere Daten bleiben unverändert
4. Mit **„← Zurück"** oben lässt sich zur Versionsliste zurückkehren, ohne wiederherzustellen

::: warning Achtung
Das Wiederherstellen einer alten Version überschreibt den aktuellen Stand **der Kanäle und Abschnitte**. Der aktuelle Stand wird automatisch als Sicherungs-Version erfasst, bevor überschrieben wird.
:::

## Panel schließen

Klick auf das **×**-Symbol oben rechts im Verlauf-Panel.
