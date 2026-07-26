# Troubleshooting

## "No connection to the server"

Appears when the web app can't reach the LuxStage server. Possible causes:

- The server isn't running or has crashed
- Network connection interrupted
- Wrong [server URL](./einstellungen#server) set in Settings

While the connection is down, the show view is locked (no input possible) so no changes get lost.

## Backup restore fails

Possible error messages and their meaning:

| Message | Meaning |
|---------|---------|
| "ZIP does not contain luxstage.db" | The uploaded file isn't a valid LuxStage backup |
| "Database is corrupted or invalid" | The database in the backup fails the integrity check |
| "Upload too large" | Backup exceeds the 500 MB limit — see [Settings → Backup](./einstellungen#backup) for the command-line route |

In all three cases, the current data remains unchanged.

## Photos: "Upload too large"

Individual photos may be at most 50 MB. Resize larger files before uploading.

## Other issues

For issues around the server installation itself (reachability, PM2, ports), see [Installation → Troubleshooting](../guide/installation#troubleshooting).

For questions not answered here:

- [GitHub Issues](https://github.com/Plobli/LuxStage) — report problems or ask questions
- Email: hello@luxstage.app
