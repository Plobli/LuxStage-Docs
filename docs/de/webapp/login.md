# Anmeldung

## Anmelden

Beim Aufruf der Web-App erscheint die Login-Seite mit zwei Feldern:

- **E-Mail-Adresse** – dein Login-Name
- **Passwort**

Klick auf **„Anmelden"**. Bei falschen Zugangsdaten erscheint „Anmeldung fehlgeschlagen. Bitte E-Mail-Adresse und Passwort prüfen."

::: tip Erster Login nach der Installation
Zugangsdaten sind die E-Mail-Adresse und das Passwort, die während der [Installation](../guide/installation) festgelegt wurden.
:::

## Passwort vergessen

Unterhalb des Anmelde-Formulars erscheint einer von zwei Hinweisen, abhängig davon, ob der Server für den Mailversand (SMTP) konfiguriert ist:

**SMTP konfiguriert** — Link **„Passwort vergessen?"** verfügbar:

1. Klick auf den Link → E-Mail-Adresse eingeben → **„Link anfordern"**
2. Aus Sicherheitsgründen erscheint immer derselbe Hinweis, unabhängig davon, ob ein Konto mit dieser Adresse existiert: „Falls ein Konto mit {E-Mail} existiert, haben wir einen Link zum Zurücksetzen verschickt."
3. Der Link in der E-Mail ist **1 Stunde** gültig und führt zu einer Seite zur Vergabe eines neuen Passworts (mindestens 8 Zeichen, mit Bestätigung)

**Kein SMTP konfiguriert** — statt des Links erscheint der Hinweis: „Wende dich an deinen Administrator, um dein Passwort zurücksetzen zu lassen." Ein Admin kann das Passwort unter **Einstellungen → Benutzerverwaltung → Passwort zurücksetzen** neu vergeben.
