# Einstellungen

Die **Einstellungen** sind über das Zahnrad-Symbol (⚙️) in der linken Seitenleiste erreichbar. Die Tabs **Konto** und **Darstellung** sieht jede Nutzerin und jeder Nutzer. Die Tabs **Backup**, **Server**, **Benutzerverwaltung**, **E-Mail / SMTP** und **Update** sind nur für Admins sichtbar.

::: tip Gehostetes Team (luxstage.app)
Bei einem gehosteten Team unter [luxstage.app](https://luxstage.app) übernimmt der Betreiber Serverbetrieb, Mailversand und Updates zentral.
:::

---

## Konto

**Passwort ändern**

Ändere das Passwort für deinen Account:

1. **Aktuelles Passwort** eingeben
2. **Neues Passwort** eingeben
3. **Neues Passwort bestätigen** eingeben
4. Klick auf **„Passwort ändern"**

---

**Fotos pro Druckseite**

Legt fest, wie viele Fotos auf eine A4-Seite passen — wirkt auf Browser-Druck und PDF-Export gleichermaßen.

- Auswahl: 1, 2, 4, 6, 8, 9, 12

---

**Abmelden**

Klick auf **„Abmelden"** beendet die aktuelle Sitzung.

---

## Darstellung

**Sprache**

Wähle die Anzeigesprache der App:

- **Deutsch**
- **English**

Klick auf die gewünschte Option – die App wechselt sofort die Sprache.

---

**Maßeinheit**

Einheit für Längen und Höhen an Zugstangen:

- **m**, **cm** oder **mm**

---

## Backup

::: tip Nur für Admins
Backup erstellen und wiederherstellen sind ausschließlich Admins zugänglich — das ZIP enthält die komplette Datenbank inklusive Passwort-Hashes aller Benutzer.
:::

**Backup erstellen**

Lädt alle Show-Daten als ZIP-Archiv herunter. Der Dateiname enthält nur das Datum (z. B. `luxstage-backup-2026-07-25.zip`), keine Uhrzeit — zwei Backups am selben Tag heißen identisch und überschreiben sich im Download-Ordner.

- Klick auf **„ZIP-Backup herunterladen"**
- Der Download startet automatisch

---

**Backup wiederherstellen**

Stellt alle Show-Daten aus einem zuvor erstellten ZIP-Backup wieder her. Fotos werden dabei **ergänzt, nicht ersetzt** — vorhandene Fotos ohne Entsprechung im Backup bleiben erhalten. Der Server beendet sich nach der Wiederherstellung selbst und startet nur automatisch neu, wenn ein Prozessmanager (z. B. PM2, Standard bei Self-Hosting) ihn überwacht.

1. Klick auf **„ZIP-Datei auswählen …"**
2. ZIP-Backup-Datei aus dem Dateisystem wählen
3. Klick auf **„Wiederherstellen"**
4. Bestätigungsdialog bestätigen

::: warning Achtung
Die Datenbank (Shows, Kanäle, Abschnitte) wird vollständig durch den Backup-Stand ersetzt. Fotos werden nur ergänzt — Fotos, die im Backup fehlen, bleiben zusätzlich bestehen.
:::

Vor dem Einspielen wird das Backup geprüft: enthält das ZIP eine gültige Datenbank, ist sie unbeschädigt. Schlägt die Prüfung fehl, bleibt der aktuelle Stand **unangetastet**. Mögliche Fehlermeldungen:

- „ZIP enthält keine luxstage.db"
- „Datenbank ist beschädigt oder ungültig"
- „Upload zu groß" — maximale Backup-Größe beim Wiederherstellen: **500 MB**. Größere Datenbestände lassen sich nur über die Kommandozeile auf dem Server wiederherstellen.

Nur Fotos mit den Endungen `jpg`, `jpeg`, `png`, `gif`, `webp` werden beim Wiederherstellen zurückgespielt — andere Dateitypen im ZIP werden stillschweigend übersprungen.

---

## Server

| Feld | Beschreibung |
|------|-------------|
| **Server-URL** | API-Server-Adresse (Standard: http://localhost:3000). Wirkt **sofort** beim Verlassen des Feldes, ohne Speichern-Button — eine falsche Eingabe macht die App unbedienbar. |
| **App-Version** | Aktuell installierte App-Version |
| **Server-Version** | Aktuell installierte Server-Version |
| **Festplatte (frei)** | Verfügbarer Speicherplatz auf dem Server — erscheint nur, wenn der Server erreichbar ist. Sonst steht dort ein Verbindungsfehler. |

---

## Benutzerverwaltung

**Benutzer**

Liste aller vorhandenen Benutzer mit E-Mail-Adresse, Rollen-Badge und Quelle-Badge:

| Rolle | Beschreibung |
|-------|-------------|
| **Admin** | Vollzugriff inkl. Einstellungen und Benutzerverwaltung |
| **Techniker** | Zugriff auf Shows, Kanäle, Info, Fotos, Grundriss |

Das zweite Badge zeigt die Quelle des Benutzers:

| Quelle | Beschreibung |
|--------|-------------|
| **DB** | In der Datenbank angelegt – kann gelöscht werden |
| **Env** | Über Umgebungsvariable konfiguriert – kann nicht gelöscht werden |

Nur Benutzer mit Quelle **DB** haben einen **„Löschen"**-Button.

---

**Neuer Benutzer**

Legt einen neuen Benutzer an. Das initiale Passwort wird automatisch generiert und per E-Mail zugestellt.

1. **E-Mail-Adresse** eingeben
2. **Rolle** auswählen (Standard: Techniker)
3. Klick auf **„Anlegen"**

---

**Passwort zurücksetzen**

Setzt das Passwort eines Benutzers zurück und zeigt das neue temporäre Passwort an.

1. **E-Mail-Adresse** des Benutzers eingeben
2. Klick auf **„Zurücksetzen"**

---

## E-Mail / SMTP

SMTP-Konfiguration für automatische E-Mails (Willkommen, Passwort-Reset):

| Feld | Beschreibung | Standard |
|------|-------------|---------|
| **SMTP-Host** | Hostname des Mailservers | mail.example.com |
| **Port** | SMTP-Port | 587 |
| **TLS (Port 465)** | Checkbox für TLS-Verschlüsselung | – |
| **Benutzername** | SMTP-Anmeldename | – |
| **Passwort** | SMTP-Passwort | – |
| **Absender (From)** | Absenderadresse | LuxStage <noreply@example.com> |

::: tip Gespeichertes Passwort
Ein bereits gespeichertes SMTP-Passwort wird aus Sicherheitsgründen nie angezeigt — das Feld bleibt leer, nur ein Platzhalter (••••••••) zeigt, dass eines hinterlegt ist. Speicherst du ohne das Feld auszufüllen, bleibt das alte Passwort erhalten.
:::

**Buttons:**
- **„Speichern"** – Einstellungen speichern
- **„Test-Mail senden"** – Öffnet einen Dialog zur Eingabe der Empfängeradresse (vorbelegt mit deiner eigenen E-Mail), sendet danach eine Test-Mail zur Überprüfung der Konfiguration

---

## Update

Prüft auf neue Versionen und aktualisiert den Server. Bei Fehler wird der alte Zustand automatisch wiederhergestellt.

1. **Branch** auswählen — die Liste kommt vom Server, vorausgewählt ist immer der erste Eintrag. Die Prüfung auf Updates startet automatisch beim Öffnen des Tabs bzw. bei Branch-Wechsel.
2. Ist ein Update verfügbar, zeigt die Seite die Anzahl neuer Commits und ein Änderungsprotokoll. Ohne verfügbares Update ist der Button **„Jetzt aktualisieren"** gesperrt.
3. Klick auf **„Jetzt aktualisieren"** startet die Aktualisierung. Ein Fortschrittsbalken und ein mitlaufendes Terminal-Protokoll zeigen den Ablauf live.
