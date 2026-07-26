# Was tun bei Problemen?

## „Keine Verbindung zum Server"

Erscheint, wenn die Web-App den LuxStage-Server nicht erreicht. Mögliche Ursachen:

- Server ist nicht gestartet oder abgestürzt
- Netzwerkverbindung unterbrochen
- Falsche [Server-URL](./einstellungen#server) in den Einstellungen hinterlegt

Bei bestehender Verbindung wird die Show-Ansicht gesperrt (kein Eingeben mehr möglich), damit keine Änderungen verloren gehen.

## Backup-Wiederherstellung schlägt fehl

Mögliche Fehlermeldungen und ihre Bedeutung:

| Meldung | Bedeutung |
|---------|-----------|
| „ZIP enthält keine luxstage.db" | Die hochgeladene Datei ist kein gültiges LuxStage-Backup |
| „Datenbank ist beschädigt oder ungültig" | Die Datenbank im Backup besteht die Integritätsprüfung nicht |
| „Upload zu groß" | Backup überschreitet die 500-MB-Grenze — siehe [Einstellungen → Backup](./einstellungen#backup) für den Weg über die Kommandozeile |

In allen drei Fällen bleibt der aktuelle Datenbestand unverändert.

## Fotos: „Upload zu groß"

Einzelne Fotos dürfen maximal 50 MB groß sein. Größere Dateien vorher verkleinern.

## Andere Probleme

Für Probleme rund um die Server-Installation selbst (Erreichbarkeit, PM2, Ports) siehe [Installation → Troubleshooting](../guide/installation#troubleshooting).

Für Fragen, die hier nicht beantwortet werden:

- [GitHub Issues](https://github.com/Plobli/LuxStage) — Probleme melden oder Fragen stellen
- E-Mail: hello@luxstage.app
