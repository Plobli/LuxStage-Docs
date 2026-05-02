# Einstellungen

Die **Einstellungen** sind über das Zahnrad-Symbol (⚙️) in der linken Seitenleiste erreichbar. Die Seite ist in sieben Tabs unterteilt.

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

Legt fest, wie viele Fotos beim Drucken auf eine A4-Seite passen.

- Standard: **4**
- Auswahl: 1, 2, 4, 6, 8 (je nach Größe der Fotos)

---

**Abmelden**

Klick auf **„Abmelden"** beendet die aktuelle Sitzung.

---

## Sprache

Wähle die Anzeigesprache der App:

- 🔴 **Deutsch** (aktuell aktiv)
- ⚫ **English**

Klick auf die gewünschte Option – die App wechselt sofort die Sprache.

---

## Backup

**Backup erstellen**

Lädt alle Show-Daten als ZIP-Archiv herunter.

- Klick auf **„ZIP-Backup herunterladen"**
- Der Download startet automatisch

---

**Backup wiederherstellen**

Stellt alle Show-Daten und Fotos aus einem zuvor erstellten ZIP-Backup wieder her. Der Server startet danach automatisch neu.

1. Klick auf **„ZIP-Datei auswählen …"**
2. ZIP-Backup-Datei aus dem Dateisystem wählen
3. Wiederherstellung startet automatisch

::: warning Achtung
Alle aktuellen Daten werden durch den Backup-Stand überschrieben.
:::

---

## Server

| Feld | Beschreibung |
|------|-------------|
| **Server-URL** | API-Server-Adresse (Standard: http://localhost:3000) |
| **App-Version** | Aktuell installierte App-Version |
| **Server-Version** | Aktuell installierte Server-Version |
| **Festplatte (frei)** | Verfügbarer Speicherplatz auf dem Server |

---

## Benutzerverwaltung

**Benutzer**

Liste aller vorhandenen Benutzer mit E-Mail-Adresse und Rollen-Badges:

| Rolle | Beschreibung |
|-------|-------------|
| **Admin** | Vollzugriff inkl. Einstellungen und Benutzerverwaltung |
| **Techniker** | Zugriff auf Shows, Kanäle, Info, Fotos, Grundriss |
| **DB** | Datenbank-Rolle (technisch) |

Jeder Benutzer hat einen **„Löschen"**-Button.

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

**Buttons:**
- **„Speichern"** – Einstellungen speichern
- **„Test-Mail senden"** – Test-E-Mail senden zur Überprüfung der Konfiguration

---

## Update

Prüft auf neue Versionen und aktualisiert den Server. Bei Fehler wird der alte Zustand automatisch wiederhergestellt.

1. **Branch** auswählen (z. B. main, dev)
2. Klick auf **„Jetzt aktualisieren"**
