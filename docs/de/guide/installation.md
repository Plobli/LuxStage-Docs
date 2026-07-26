# Installation

Automatische Installation auf Linux oder Raspberry Pi. Ein Script kümmert sich um alles — Node.js, Reverse Proxy und Datenbank.

::: tip Kein eigener Server gewünscht?
Diese Anleitung gilt für Self-Hosting. Alternativ gibt es LuxStage als gehosteten Service unter [luxstage.app](https://luxstage.app) — ganz ohne eigene Server-Installation.
:::

::: warning Installation auf eigene Gefahr
Bitte sichern Sie Ihre Daten und führen Sie das Script nur auf Systemen aus, auf denen Sie vollständige Kontrolle haben.
:::

## Schritt 1 — SSH-Zugang zum Server

Du brauchst Zugang via SSH auf deinen Server (Linux, Raspberry Pi, etc.)

```bash
ssh user@192.168.x.x
```

Oder wenn dein Server bereits einen Namen hat (z.B. `raspberry.local`):

```bash
ssh user@raspberry.local
```

## Schritt 2 — Installations-Script ausführen

Das Script lädt alles herunter und konfiguriert den Server automatisch.

Führe diese zwei Befehle aus:

```bash
curl -fsSL https://raw.githubusercontent.com/Plobli/LuxStage/main/install.sh -o /tmp/luxstage-install.sh
sudo bash /tmp/luxstage-install.sh
```

::: tip Lieber Docker?
Wenn du Docker bevorzugst, kannst du LuxStage auch per `docker compose` betreiben —
siehe die `docker-compose.yml` im Repository. Der Installer unten ist der
Docker-freie Weg (Node.js + PM2 direkt auf dem System).
:::

## Schritt 3 — Konfiguration eingeben

Das Script fragt dir ein paar Fragen. Drücke Enter für die Standardwerte.

**Systemnutzer** — Unter diesem Nutzer läuft der LuxStage-Dienst:
```
Systemnutzer [luxstage]: ⏎
```

**Hostname** — Die App ist danach unter `http://luxstage.local` erreichbar:
```
Hostname [luxstage]: ⏎
```

**Externe Domain (optional)** — Falls du LuxStage von außen erreichbar machen möchtest, gib deine Domain ein (z.B. `luxstage.example.com`). Sonst einfach überspringen:
```
Externe Domain []: ⏎
```

**Admin-E-Mail** — Dient zugleich als Login-Name:
```
Admin-E-Mail (dient als Login): du@beispiel.de
```

**Admin-Passwort** — Mindestens 8 Zeichen:
```
Admin-Passwort: ••••••••
```

::: info Admin-Passwort merken
Du brauchst es für die erste Anmeldung.
:::

::: tip Weitere Nutzer
Das Script legt nur das Admin-Konto an. Techniker und weitere Administratoren fügst du nach der Anmeldung unter **Einstellungen → Benutzer** hinzu — jeweils mit eigener E-Mail-Adresse.
:::

## Schritt 4 — Was wird eingerichtet

- **LuxStage-Server** — startet automatisch beim Systemstart (via PM2)
- **Web-App** — im Browser aufrufbar, volle Funktionalität
- **Caddy Reverse Proxy** — automatisches HTTPS, kein Port nötig
- **SQLite-Datenbank** — eine Datei, kein separater Datenbankdienst nötig

## Schritt 5 — Neustart

Das Script schlägt am Ende vor zu restarten. Führe aus:

```bash
sudo reboot
```

Der Server startet neu und die LuxStage-Services starten automatisch.

## Erster Zugriff

Nach dem Neustart öffne einen Browser:

- **Intern:** `http://luxstage.local`
- **Oder direkt:** `http://SERVER-IP` (z.B. `http://192.168.1.100`)
- **Externe Domain (falls konfiguriert):** `https://luxstage.example.com`

### Zugangsdaten

| Konto | Login | Passwort |
|-------|-------|----------|
| Admin | Deine E-Mail aus der Installation | Passwort aus der Installation |

Der Login-Name ist immer die E-Mail-Adresse.

### Benutzerrollen

| Rolle | Rechte |
|-------|--------|
| Administrator | Alles, inkl. Vorlagen, Backup, Updates |
| Techniker | Produktionen lesen und bearbeiten, keine Vorlagen/Backup |

Weitere Nutzer legst du unter **Einstellungen → Benutzer** an. Ist SMTP eingerichtet, bekommen sie ihr Startpasswort per E-Mail.

## Troubleshooting

### Nicht erreichbar unter luxstage.local?

Versuche die IP-Adresse direkt zu verwenden. Den Hostname findest du so:

```bash
ip addr show
```

Oder teste mDNS:

```bash
avahi-resolve-address 127.0.0.1
```

### Server startet nach Reboot nicht?

Prüfe den Status von PM2 (der Process Manager):

```bash
sudo -u luxstage pm2 status
```

Schau dir die Logs an:

```bash
sudo journalctl -u pm2-luxstage -n 50
```

### Port 3000 wird von anderem Prozess verwendet?

Ändere den Port in der PM2-Konfiguration:

```bash
nano /home/luxstage/LuxStage/ecosystem.config.cjs
```

Passe auch Caddy an:

```bash
sudo nano /etc/caddy/Caddyfile
```

Services neu starten:

```bash
systemctl restart caddy && sudo -u luxstage pm2 restart all
```

## Hilfe & Support

- [GitHub Issues](https://github.com/Plobli/LuxStage) — Probleme melden oder Fragen stellen
- E-Mail: hello@luxstage.app
