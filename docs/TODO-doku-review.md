# ToDo — Review Kunden-Dokumentation Web-App

**Anweisung:** 
- Nach jedem Punkt einen commit machen ohne Versionserhöhung
- so wenig wie möglich Zwischentexte während der Bearbeitung ausgeben. 
- Fertige Punkte abhaken

Stand: 2026-07-25. Vergleich `LuxStage-Docs/docs/{de,en}/` gegen `LuxStage/web-app/src` + `LuxStage/server`.

## A. Fehlende Seiten (komplett undokumentiert)

- [ ] **Registrierung & Login** — keine Seite vorhanden. Views existieren: `LoginView.vue`, `RegisterView.vue` (Team-Kürzel, E-Mail, Passwort, 24h-Bestätigungslink), `ConfirmView.vue`, `ForgotPasswordView.vue`, `ResetPasswordView.vue`. Server: `routes/register.js`, `routes/auth.js`. Kunde findet keine Anleitung zu „Team registrieren" oder „Passwort vergessen".
- [ ] **Show-Health-Badge / Vollständigkeitsprüfung** — `components/show/ShowHealthBadge.vue`. Zeigt Zähler „X unvollständig" mit Filtern: kein Gerät, keine Position, keine Adresse, keine Notiz. Nirgends dokumentiert.
- [ ] **Presence / Live-Zusammenarbeit in der Web-App** — `useShowPresence.ts`, Avatare in `ShowActionBar.vue` inkl. 📱-Badge für iOS-Geräte. Nur in `features.md` als Marketingtext, keine Bedienanleitung.
- [ ] **Automatisch generierter Text** — `GeneratedTextAccordion.vue` + `utils/generateHangerei.ts`. Erzeugt read-only Textblöcke „Beleuchtungsgestelle" und „Obermaschinerie" aus Setup-Daten (Positionen, Farbe, Kanal). Fehlt in `setup.md` und `info.md`.
- [ ] **Update-Benachrichtigung** — `useUpdateCheck.ts`, Hinweis in App.vue. In `einstellungen.md` nur der Update-Tab beschrieben, nicht die Benachrichtigung.
- [ ] **Gehostete Variante (SaaS) / Betreiber-Panel** — `server/routes/operator.js`, `Dockerfile.saas`, `docker-compose.saas.yml`, Mandantenverwaltung. Doku erwähnt luxstage.app nur als Tipp-Box, ohne eigene Seite (Registrierung, Mandanten, Kündigung/Löschung).
- [ ] **Docker-Installation** — `installation.md` verweist nur in einer Tipp-Box auf `docker-compose.yml`, ohne Schritte. Entweder ausführen oder bewusst als „siehe Repo" belassen.

## B. Inhaltliche Fehler / Widersprüche

- [x] **Terminologie uneinheitlich: Vorlage / Template / Spielort / Spielstätte / Bühne.** — ✅ erledigt (2026-07-26)
  Web-App und iOS sagen jetzt durchgehend **„Spielort-Vorlage"** (englisch „venue template") — siehe 2.2 in [TODO-webapp-code.md](./TODO-webapp-code.md). Doku nachgezogen:
  - Sidebar-Eintrag in `webapp/index.md` auf „Spielort-Vorlage" geändert
  - Dateiname `spielstaette-vorlage.md` **nicht** umbenannt (Aufwand/Nutzen), aber Inhalt komplett auf „Spielort-Vorlage" umgestellt
  - Alle „Bühnen-Template"-Stellen ersetzt: `spielstaette-vorlage.md` (20+ Stellen), `de/ios/einstellungen.md`, `de/ios/osc.md`, `de/webapp/grundriss.md:58`, `de/webapp/info.md:3`
  - „Kanaltemplate" → „Kanalstruktur" in `de/webapp/index.md`, `de/webapp/shows.md`, `de/ios/shows.md`
  - `features.md`: „Spielstätten-Vorlagen" → „Spielort-Vorlagen"
  - EN-Pendants aller genannten Dateien mitgezogen → „venue template" / „venue"
  - Web-App-Route bleibt `/templates`, View `TemplatesView.vue` (interne Bezeichner unverändert)
- [ ] **`webapp/index.md`: „Die Seitenleiste enthält vier Symbole"** — Router hat Shows, Archiv, Vorlagen, Einstellungen = 4. Prüfen, ob Zählung und Reihenfolge noch stimmen, wenn Registrierung/Login ergänzt wird.
- [ ] **`installation.md`: Zugangsdaten `admin` / `tech` als „Benutzername"** — Web-App und `users.js` arbeiten mit E-Mail-Adressen. Klären, ob der Installer wirklich reine Benutzernamen anlegt, und ggf. korrigieren.
- [ ] **`einstellungen.md`: Rollen** — nennt nur `admin` und `techniker`. Prüfen, ob durch das Operator-Panel eine dritte Rolle existiert und ob „Techniker" wirklich keine Vorlagen bearbeiten darf (Aussage steht in `features.md` und `installation.md` leicht abweichend).
- [x] **`setup.md` Tipp-Box** — ✅ bereits korrekt: verweist auf Info-Tab, unverändert übernommen.
- [x] **`features.md`: „Alle 10 Minuten wird ein Snapshot gespeichert"** — ✅ erledigt (2026-07-26): Intervall stimmt (`INTERVAL_MS`, `history.js:20`), bestätigt.
- [x] **`features.md`, Abschnitt Aufbaunotizen** — ✅ erledigt (2026-07-26): doppelter Punkt entfernt.
- [x] **`features.md`: „Rich-Text-Editor mit Markdown … Links und Bilder"** — ✅ erledigt (2026-07-26): gegen `MarkdownEditor.vue` verifiziert, Text auf tatsächliche Buttons korrigiert (Fett, Kursiv, Überschrift, Aufzählung, nummerierte Liste, Tabelle — kein H1–H4, keine Links/Bilder).
- [x] **`info.md`: Werkzeugleiste** — ✅ erledigt (2026-07-26): `features.md` an `info.md` angeglichen (beide „Überschrift" ohne Ebenen).

## C. Zu dünne Seiten

- [ ] **`import-csv.md` (5 Zeilen)** — nur ein Satz zum Format. Fehlt: exaktes Spaltenschema, Trennzeichen (Semikolon), Encoding, Verhalten bei bestehenden Kanälen (Merge oder Ersetzen), Fehlermeldungen. Das Spaltenschema steht aktuell nur in `spielstaette-vorlage.md`.
- [ ] **`export-pdf.md` (7 Zeilen)** — fehlt: wo der Button sitzt, Vorschau-Dialog, Zusammenspiel mit „Fotos pro Druckseite", Umfang laut `features.md`-Tabelle (Titelseite, Aufbaunotizen, Fotogalerie). Die `features.md`-Tabelle ist detaillierter als die eigentliche Anleitungsseite.
- [ ] **`export-csv.md` (7 Zeilen)** — fehlt: exportierte Spalten, Trennzeichen, Dateiname.
- [ ] **`import-eos.md` (19 Zeilen)** — Merge-Dialog (`EosMergePreviewDialog.vue`) nur als Screenshot. Fehlt: was der Dialog anzeigt, welche Optionen es gibt, was mit bestehenden Notizen passiert.
- [ ] **`fotos.md` (28 Zeilen)** — fehlt gegenüber `features.md` und `PhotoGallery.vue`: Mehrfach-Upload per Drag & Drop, Sortieren per Drag & Drop, Lightbox/Vollbild-Navigation, Foto löschen.
- [ ] **`archiv.md`** — Sortierung/Suche im Archiv prüfen und ergänzen, falls vorhanden.

## D. Fehlende Screenshots

- [ ] Web-App hat nur **zwei** Bilder (`img/webapp/import-eos/`), die iOS-Doku dagegen ~24. Screenshots ergänzen für: Shows-Übersicht, Kanaltabelle, Setup (Gestelle + Zugstangen), Info-Tab, Fotos-Galerie, Grundriss-Editor, Versionsverlauf-Panel, Einstellungen-Tabs.
- [ ] `webapp/index.md` beschreibt die Seitenleiste rein textlich — ein Screenshot würde das ersetzen.

## E. Zweisprachigkeit (EN)

- [ ] Alle DE-Seiten haben ein EN-Pendant mit identischer Zeilenzahl — inhaltlich übersetzt, strukturell synchron. **Gut.** Bei jeder Änderung aus A–D beide Sprachen mitziehen.
- [ ] **EN-Dateinamen sind deutsch**: `en/webapp/kanaele.md`, `spielstaette-vorlage.md`, `en/ios/aufbau.md`, `einleuchten.md`. URLs für englische Kunden unverständlich (`/en/webapp/kanaele`). Umbenennen auf `channels.md`, `venue-template.md`, `setup.md`, `focus.md` — inkl. Anpassung `config.js` und aller internen Links. (Optional, aber sichtbar nach außen.)
- [ ] **`en/webapp/versionsverlauf.md`** → `version-history.md`, `en/webapp/fotos.md` → `photos.md`, `en/webapp/archiv.md` → `archive.md`, `en/webapp/einstellungen.md` → `settings.md`, `en/webapp/grundriss.md` → `floor-plan.md`.

## F. Struktur & Navigation

- [ ] **`features.md` überschneidet sich stark mit den Anleitungsseiten** und beschreibt teils iOS-Funktionen (Einleuchten, OSC, In-App-Kamera), liegt aber unter „Web-App → Referenz". Entweder auf eine Ebene über beide Apps ziehen oder auf reine Web-App-Features kürzen.
- [ ] **Sidebar-Gruppe „Shows"** enthält auch „Einstellungen" — gehört nicht zu einer Show. Eigene Gruppe „Verwaltung" (Archiv, Vorlagen, Einstellungen) anlegen.
- [ ] **Kein Glossar** — Begriffe wie Position, Slot, Zugstange, Beleuchtungsgestell, Gel, Kanal vs. Dimmer-Adresse werden vorausgesetzt. Glossarseite ergänzen.
- [ ] **`docs/android-plan.md`** liegt im öffentlichen docs-Ordner, ist aber interne Planung und in keiner Sidebar verlinkt. Verschieben oder aus dem Build ausschließen.
- [ ] **Keine Seite zu Tastaturkürzeln gesamt** — Kürzel stehen verteilt in `kanaele.md` (Undo/Redo) und `grundriss.md` (Editor). Sammelseite wäre nützlich.

## G. Prüfaufgaben (vor Umsetzung verifizieren)

- [ ] Snapshot-Intervall in `server/history.js` gegen „alle 10 Minuten" abgleichen.
- [ ] Rollenrechte in `server/auth.js` / `routes/users.js` gegen die Rollentabellen in `einstellungen.md`, `features.md` und `installation.md` abgleichen — drei Stellen, drei Formulierungen.
- [ ] Grundriss-Tastaturkürzel in `composables/floorplan/useFloorplanState.ts` gegen die Tabelle in `grundriss.md` prüfen.
- [ ] Maßeinheiten: `routes/display.js` erlaubt `m`, `cm`, `mm` — passt zu `einstellungen.md`. OK.
- [ ] „Fotos pro Druckseite: 1, 2, 4, 6, 8, 9, 12" gegen `usePhotoSettings.ts` prüfen.
- [ ] Offline-Aussage in `faq.md` („Web-App zeigt gespeicherte Daten ohne Serververbindung") gegen `api/cache.ts` verifizieren — kritische Kundenzusage.

---

# Runde 2 — Nutzersicht

Methodik: `shared/locales/de.json` (434 Keys) ist die vollständige Liste **aller Texte, die ein Nutzer je zu sehen bekommt**. Jeder Key wurde gegen die Doku geprüft. Ergänzt um Prüfung, ob jemand ohne Vorkenntnisse die Doku durcharbeiten kann.

## H. Begriffe: Doku sagt X, die App zeigt Y

Der Nutzer sucht nach dem Wort, das auf seinem Bildschirm steht. Findet er es in der Doku nicht, ist die Seite für ihn wertlos.

- [x] **„Position" vs. „Kategorie"** — ✅ erledigt (2026-07-25): App auf „Position" vereinheitlicht, „Kategorie" kommt in Web-App, iOS und Website nicht mehr vor. `kanaele.md` stimmt damit bereits; die Doku muss nur noch prüfen, ob irgendwo „Kategorie" als Suchwort steht. Details siehe 2.1 in `TODO-webapp-code.md`.
- [ ] **„Vorlage" vs. „Template"** — die Sidebar der App zeigt **„Templates"** (`nav.templates`), die Doku-Sidebar „Spielstätten-Vorlage". Nutzer sucht „Templates".
- [ ] **„Spielort" vs. „Bühne" vs. „Spielstätte"** — im Show-Dialog heißt das Feld **„Spielort"** (`show.template`), das Zuweisen aber **„Bühnen-Template zuweisen"** (`show.assign_template`), die Kanaltabellen-Spalte **„Spielstätte"** (`field.venue`), das Template-Feld **„Theater-Name"** (`template.venue_name`). Vier Begriffe, eine Sache — Doku bildet das nicht ab.
- [x] **Tab „Setup"** — ✅ erledigt (2026-07-26): `setup.md`/EN ergänzt, dass der Zugstangen-Abschnitt als Unter-Tab „Obermaschinerie" (`tab.obermaschinerie`) in der App erscheint. `tab.buehne` existiert in `de.json` nicht mehr (veraltet, ignoriert). Neuer Fund: **`tab.gassenturm` ist in der App selbst uneinheitlich übersetzt** — DE „Setup", EN „Stage Plan" (`en.json:349`), für denselben Tab. Gehört in die Code-ToDo, nicht in die Doku behoben.
- [ ] **`tab.raum` = „Raum", `tab.hinweise` = „Hinweise"** — zwei Tabs, in der gesamten Doku nicht erwähnt. Prüfen, ob noch aktiv; falls ja, dokumentieren.

## I. Undokumentierte Funktionen (Runde 2)

- [ ] **„Auf alle Shows anwenden"** (`template.apply_to_shows.*`) — überträgt fehlende Zugstangen, Abschnitte oder Beleuchtungsgestelle aus einer Vorlage auf **alle** zugeordneten Shows, mit Ergebnismeldung („{shows} Shows geprüft, {bars} Zugstangen hinzugefügt"). Massenoperation über bestehende Produktionen — und in der Doku kein Wort. Gehört prominent in `spielstaette-vorlage.md`, inkl. der Aussage, dass nur **fehlende** Elemente ergänzt werden.
- [ ] **Offline-Banner** (`offline.banner` = „Keine Verbindung zum Server – Änderungen werden nicht gespeichert") — das **widerspricht direkt** der FAQ-Aussage „Funktioniert LuxStage auch offline? Ja. … Änderungen werden synchronisiert, sobald die Verbindung wiederhergestellt ist." Die Web-App speichert offline **nicht**. FAQ korrigieren — sonst Datenverlust beim Nutzer, der sich auf die Zusage verlässt.
- [ ] **Inline-Hilfe (⌘-Icons) in der App** — `HelpIcon` an jeder Spaltenüberschrift der Kanaltabelle und im Setup-Bereich. Diese Hilfetexte (`channel.help.*`) sind teils **präziser als die Doku**, z. B. die Farb-Legende. Doku sollte erwähnen, dass es diese Hilfe gibt.
- [ ] **Doppelte-Adresse-Warnung** (`channel.dup_address` = „Doppelte DMX-Adresse!", `channel.dup_channel` = „Doppelte Kanalnummer!") — in `features.md` als Marketingpunkt erwähnt, in `kanaele.md` (der eigentlichen Anleitung) fehlt sie.
- [ ] **Show-Metadaten nachträglich ändern** (`show.edit` = „Show bearbeiten", `ShowHeader.vue` Meta-Dialog) — `shows.md` beschreibt nur das Anlegen. Wie ändert man Datum, Untertitel oder Spielzeit später? Nicht dokumentiert.
- [x] **„Abschnitt hinzufügen" direkt in der Show** — ✅ erledigt (2026-07-26): neuer Abschnitt „Eigenen Abschnitt anlegen" in `info.md` (DE+EN).
- [x] **Feld-Einheit** — ✅ erledigt (2026-07-26): dritte Spalte „Einheit" in `info.md` (DE+EN) ergänzt.
- [ ] **Foto löschen** (`photo.delete`, `show.photo.delete.confirm`) — `fotos.md` erklärt Hinzufügen und Beschriften, aber nicht das Löschen.
- [ ] **Kanal-Farbwahl „No Color" / Freitext** (`color.no_color`, `color.picker.custom`) — `kanaele.md` nennt nur das Dropdown mit Gel-Codes. Freitexteingabe („z.B. R02 oder warm weiß") und „No Color" fehlen.
- [ ] **404-Seite** (`not_found.*`) — unkritisch, nur der Vollständigkeit halber.

## J. Widersprüche zwischen Doku und App-Texten

- [ ] **Farb-Legende der Kanalnummer.** `kanaele.md` schreibt: „grün (Notiz hinzugefügt), gelb (nach dem Import eines EOS-CSV, aber ohne Notiz) oder **grau** (keine Notiz)". Die App sagt (`channel.help.status`): „**Weiß** = ohne Notiz / Grün = Notiz vorhanden / Gelb = **in der Show aktiv, aber die Notiz fehlt**". Zwei Abweichungen: grau/weiß und die Bedeutung von Gelb. App-Text ist maßgeblich.
- [ ] **Passwort-Mindestlänge.** `installation.md` sagt „Mindestens 8 Zeichen". Die App meldet beim Ändern (`settings.account.change_password.error.short`): „Passwort muss mindestens **4** Zeichen lang sein". `RegisterView.vue` sagt wieder „Mindestens 8 Zeichen". Drei Stellen, zwei Werte — im Code klären, dann einheitlich dokumentieren.
- [ ] **Passwort vergessen.** Die Login-Seite zeigt „Passwort vergessen?" und dann den Hinweis (`auth.reset.hint`): „**Wende dich an deinen Administrator**". Gleichzeitig existieren `ForgotPasswordView.vue` und `ResetPasswordView.vue` mit E-Mail-Flow. Welcher Weg gilt für den Nutzer? Muss die Doku eindeutig beantworten — vermutlich abhängig davon, ob SMTP konfiguriert ist.
- [ ] **Login-Feld heißt „E-Mail-Adresse"** (`auth.username`), die Fehlermeldung aber „Bitte **Benutzername** und Passwort prüfen" (`auth.login.error`), und `installation.md` nennt Zugangsdaten `admin` / `tech` ohne E-Mail-Form. Für einen Erstnutzer nach der Installation ist damit unklar, was er ins Login-Feld tippt. **Kritischster Punkt der gesamten Doku** — betrifft den allerersten Schritt.
- [x] **Beleuchtungsgestelle aus Vorlage.** — ✅ erledigt (2026-07-26): `setup.md` (DE+EN) auf „Einfügen im Bearbeiten-Dialog" korrigiert.
- [x] **`info.md` beschreibt Abschnitte als vorgegeben** — ✅ erledigt (2026-07-26): siehe I, Abschnitt „Eigenen Abschnitt anlegen" ergänzt.
- [ ] **`einstellungen.md`: „Passwort zurücksetzen"** ist dort unter „Konto" beschrieben, ist aber laut `settings.account.reset_password.*` eine Admin-Funktion für **andere** Benutzer (zeigt das neue Passwort im Klartext an). Ein Techniker sucht dort vergeblich. Zuordnung und Sichtbarkeit klarstellen.

## K. Datenschutzerklärung — sachlich falsch

- [ ] **`datenschutz.md` gilt nur für die iOS-App, ist aber die einzige Datenschutzseite** und wird aus dem Footer **beider** Sprachen und aller Web-App-Seiten verlinkt. Sie spricht durchgehend von „die App", „App Store", „Apple". Web-App-Nutzer und Self-Hoster finden keine Aussage zu ihrer Nutzung.
- [ ] **Aussage „es findet keine Kommunikation mit Servern von Drittanbietern statt" (Zeile 7) und „Es besteht keine Verbindung zu externen Servern des App-Entwicklers oder Dritter" (Zeile 44) sind unzutreffend.** Die iOS-App bietet „Aufnahmeplan scannen" — laut `ocr.confirm.body` werden Fotos **an die Claude API von Anthropic übertragen**. Der Server hält dafür einen `ANTHROPIC_API_KEY` (`server/config.js:32`). Das ist eine Drittanbieter-Übermittlung von Nutzerinhalten und muss in der Datenschutzerklärung stehen (Anbieter, Zweck, Rechtsgrundlage, keine Speicherung o. Ä.). Rechtlich der wichtigste Punkt dieser Liste.
- [ ] **App-Store-Datenschutzlabel prüfen** — wenn Bilder an Anthropic gehen, muss das Label „Data Not Linked to You / keine Übermittlung an Dritte" gegengeprüft werden.
- [ ] **OCR-Feature selbst ist undokumentiert** — gehört in die **iOS-Doku** (`de/ios/`), nicht in die Web-App-Doku: die 9 `ocr.*`-Keys werden ausschließlich von der iOS-App verwendet, in `web-app/src` kommt keiner davon vor. Die Web-App hat dieses Feature nicht.
- [ ] **Kein Impressum** und keine Auftragsverarbeitungs-/Hosting-Aussage für den gehosteten Dienst luxstage.app, obwohl dieser kostenpflichtig beworben wird.

## L. Verständlichkeit für Erstnutzer

- [ ] **Kein durchgehender „Von null zur ersten Show"-Pfad.** `guide/index.md` skizziert vier Schritte, verlinkt aber nicht auf die passenden Detailseiten in der richtigen Reihenfolge. Nutzer nach der Installation weiß nicht, ob er zuerst Vorlage, Show oder Benutzer anlegt. Ein „Schnellstart in 10 Minuten" würde die meisten Supportfragen abfangen.
- [ ] **Fachbegriffe ungeklärt** (verschärft Punkt F): Slot, Zugstange, Obermaschinerie, Gassenturm, Gel, Hängerei, Portalbrücke, Dimmer-Adresse vs. Kanalnummer, DMX. Die App erklärt „Slot" per Inline-Hilfe besser als die Doku.
- [ ] **`kanaele.md`: „KANAL | Kanalname im Pult (links) / Dimmer-Adresse (rechts nach dem ‚/')"** — für Einsteiger unverständlich. Beispiel ergänzen (`show.channel.address.example` = „1/001").
- [ ] **`setup.md` ist mit 110 Zeilen die längste Anleitungsseite** und behandelt zwei getrennte Themen (Gestelle, Zugstangen). Aufteilen in zwei Seiten, passend zu den zwei Sidebar-Einträgen der App.
- [ ] **Keine Seite „Was tun bei Problemen?"** für die Web-App. Fehlermeldungen, die der Nutzer real sieht — `error.network` („Keine Verbindung zum Server"), `offline.banner`, `csv.error.*` („Pflicht-Spalte fehlt: {column}", „Ungültige Kanal-Nummer in Zeile {line}") — sind nirgends erklärt. Troubleshooting gibt es nur in `installation.md` und nur für den Server.
- [ ] **CSV-Fehlermeldungen dokumentieren** — `csv.error.missing_header`, `csv.error.invalid_channel`, `csv.error.invalid_address`, `csv.error.duplicate_channel` verraten die **Pflichtspalten** des Imports. Genau das fehlt in `import-csv.md` (siehe C).
- [ ] **EOS-Import-Dialoge** — `eos.import.confirm_empty` („0 aktive Kanäle – trotzdem importieren?") und `eos.reimport` („{n} Kanäle nicht mehr aktiv … Trotzdem importieren?") sind Entscheidungen, die der Nutzer treffen muss, ohne dass die Doku die Konsequenz erklärt. Beim Re-Import besonders relevant.

## M. Zweisprachigkeit — App vs. Doku

- [ ] **`de.json` und `en.json` sind vollständig synchron** (434 Keys, nur `template.apply_to_shows` fehlt in EN — ein Duplikat der `.bars/.sections/.towers`-Varianten, vermutlich unkritisch). Nur `show.template.optional` ist unübersetzt („Template (optional)"). **App-Übersetzung ist in gutem Zustand.**
- [ ] **Die englische Doku übersetzt deutsche Fachbegriffe, die in der App englisch anders lauten.** Beispiel: `en/webapp/kanaele.md` müsste die Button-Beschriftungen der englischen App zitieren. Prüfen, ob die EN-Doku die EN-Strings aus `en.json` verwendet oder frei übersetzt wurde — bei freier Übersetzung findet der englische Nutzer die Buttons nicht wieder.

---

# Runde 3 — Detailprüfung (Dateien vollständig gelesen)

Methodik: `install.sh`, `bootstrap.js`, `history.js`, `pdf.js` und der Tastatur-Handler von `FloorplanEditor.vue` vollständig gelesen statt gegreppt. Genau die Tabellen geprüft, die bisher ungeprüft blieben.

## N. `installation.md` — die kritischste Seite, mehrere Fehler

Verifiziert gegen [install.sh](LuxStage/install.sh) und [server/bootstrap.js](LuxStage/server/bootstrap.js).

- [ ] **Der Installer fragt das Admin-Passwort ZWEIMAL ab.** Die Doku zeigt nur eine Eingabezeile. `install.sh:48-49` fragt „Admin-Passwort" und „Admin-Passwort bestätigen". Nach **drei Fehlversuchen bricht die Installation ab** (`install.sh:64`) — nicht dokumentiert.
- [ ] **Prompt-Text weicht ab.** Doku: `Systemnutzer [luxstage]:`. Tatsächlich: `Systemnutzer für LuxStage [luxstage]:` (`install.sh:30`).
- [x] **Externe Domain: Doku zeigt falsches Format.** — ✅ erledigt (2026-07-26): DE + EN auf `https://luxstage.example.com` (mit Schema) korrigiert.
- [ ] **Zugangsdaten sind tatsächlich Benutzernamen, keine E-Mail-Adressen.** `bootstrap.js` legt via `INSERT INTO users (username, ...)` die Konten `admin` und `tech` an. Damit ist der offene Punkt aus Runde 2 geklärt: Die Doku hat recht, **die App ist falsch beschriftet** (`auth.username` = „E-Mail-Adresse"). Gehört in die Code-ToDo, nicht in die Doku.
- [ ] **Voraussetzungen fehlen komplett.** Der Installer benötigt: Root/`sudo` (`install.sh:11`), ein **TTY** (kein Pipe-Aufruf), Internetzugang, **`apt-get`** — also Debian/Ubuntu/Raspberry Pi OS. Die Doku sagt pauschal „Linux". Auf Fedora, Arch oder Alpine schlägt das Script fehl. Muss ausdrücklich stehen.
- [ ] **Der Installer ändert den System-Hostname** (`hostnamectl set-hostname`) und **editiert `/etc/hosts`** (`install.sh:124-125`). Ein Eingriff mit Auswirkungen über LuxStage hinaus — muss in der Warnbox stehen.
- [ ] **Installierte Fremdpakete nicht genannt:** `build-essential`, `python3`, `unzip`, `caddy`, `avahi-daemon`, dazu **nvm, Node.js 22 und PM2** über ein Fremdscript von GitHub (`install.sh:145`). Für Admins mit Compliance-Vorgaben relevant.
- [ ] **Doku sagt „Das Script lädt alles herunter" — tatsächlich wird das neueste GitHub-**Release** (`luxstage-release.zip`) geladen, nicht der `main`-Branch (`install.sh:159`). Erklärt, warum die Version nach der Installation von `main` abweichen kann.
- [ ] **Port 3000 ist fest verdrahtet** (`ecosystem.config.cjs`, `install.sh:224`) — das Troubleshooting beschreibt die Änderung korrekt.
- [ ] **Doku: „Der Server startet neu und die LuxStage-Services starten automatisch."** Der Installer sagt lediglich „Neustart **empfohlen** damit der neue Hostname aktiv wird" (`install.sh:272`). Der Reboot ist optional — die Doku stellt ihn als Pflichtschritt dar.
- [ ] **CORS wird automatisch konfiguriert** (`CORS_ORIGINS` aus Hostname, Server-IP und externer Domain). Wer die App später unter einer weiteren Adresse aufruft, bekommt Fehler — Hinweis fehlt.

## O. `versionsverlauf.md` — Verhalten unvollständig

Verifiziert gegen [server/history.js](LuxStage/server/history.js).

- [x] **Maximal 50 Versionen pro Show** — ✅ erledigt (2026-07-26): in `versionsverlauf.md` (DE+EN) ergänzt.
- [x] **Snapshots nur bei tatsächlicher Änderung.** — ✅ erledigt (2026-07-26): neuer Abschnitt „Wann werden Versionen gespeichert?" in `versionsverlauf.md` (DE+EN).
- [x] **Zusätzlicher Snapshot beim Öffnen einer Show** — ✅ erledigt (2026-07-26): im selben Abschnitt ergänzt.
- [x] **Das 10-Minuten-Intervall stimmt** (`INTERVAL_MS`, `history.js:20`). Offener Prüfpunkt aus Runde 1 erledigt. ✓
- [x] **Archivierte Shows erhalten keine Snapshots** — ✅ erledigt (2026-07-26): im selben Abschnitt ergänzt.
- [x] **Der Verlauf umfasst nur Kanäle und Abschnitte** — ✅ erledigt (2026-07-26): in `versionsverlauf.md` (DE+EN) klargestellt, inkl. Bestätigungsdialog-Text.

## P. `grundriss.md` — Tastaturkürzel-Tabelle fehlerhaft

Verifiziert gegen den Handler in [FloorplanEditor.vue:1439-1470](LuxStage/web-app/src/components/FloorplanEditor.vue#L1439-L1470).

- [x] **„Kanal platzieren (C)" funktioniert nicht wie beschrieben.** — ✅ überholt (2026-07-26): Code-Todo 7.2 hat den Bug behoben (Bedingung entfernt, Großbuchstabe ergänzt). Doku-Text war bereits korrekt, keine Änderung nötig.
- [x] **Leertaste = temporäres Verschieben** — ✅ erledigt (2026-07-26): in `grundriss.md` (DE+EN) ergänzt.
- [x] **Umschalt+Pfeiltaste verschiebt um 10 statt 1 Einheit** — ✅ erledigt (2026-07-26): in `grundriss.md` (DE+EN) ergänzt.
- [x] **Rückschritt (Backspace) löscht ebenfalls** — ✅ erledigt (2026-07-26): in `grundriss.md` (DE+EN) ergänzt.
- [x] **„Einrasten" hat kein Kürzel** — die Doku führt es korrekt mit „–". ✓
- [x] **Ansicht zurücksetzen: F und Strg+0 stimmen** (`:1449`, `:1470`). ✓ Ebenso Kopieren/Einfügen/Duplizieren/Alles auswählen und Rückgängig/Wiederholen. ✓
- [x] **Esc ist mehrstufig** — ✅ erledigt (2026-07-26): in `grundriss.md` (DE+EN) als „Werkzeug abbrechen / Auswahl aufheben" ergänzt.
- [ ] **`composables/floorplan/useFloorplanState.ts` ist eine leere Datei (0 Zeilen)** — für die Doku irrelevant, gehört aber aufgeräumt.

## Q. PDF-Export — Doku verspricht zu viel

Verifiziert gegen [server/pdf.js](LuxStage/server/pdf.js).

- [x] **„Fotos pro Druckseite" wirkt im PDF NICHT.** — ✅ überholt (2026-07-26): Code-Todo 7.1 hat das Verhalten geändert — die Einstellung liegt jetzt serverseitig und wirkt auf **beide** Ausgaben gleich. `fotos.md`, `export-pdf.md`, `einstellungen.md` (DE+EN) entsprechend bestätigt/korrigiert.
- [ ] **Der Grundriss ist im PDF enthalten** (`generatePDF(..., floorplan, unit)`, `pdf.js:65`). In der `features.md`-Tabelle fehlt er — die zählt nur Titelseite, Kanalliste, Aufbaunotizen und Fotogalerie.
- [ ] **Fotos ohne lesbare Datei werden übersprungen** (`validPhotos`-Filter, `pdf.js:300`) — stillschweigend. Erklärt fehlende Fotos im Export.
- [ ] **Foto-Beschriftungen werden einzeilig abgeschnitten** (`lineBreak: false, ellipsis: true`, `pdf.js:346`). Nutzer sollten wissen, dass lange Beschriftungen im PDF gekürzt erscheinen.

---

# Runde 4 — Settings-Views, Import-Dialoge, Listen

Methodik: `SmtpView`, `BackupView`, `UpdateView`, `ServerView` vollständig gelesen; `EosMergePreviewDialog`, `ShowsView`, `ArchiveView` geprüft.

## R. `einstellungen.md` — Abweichungen im Detail

- [ ] **„Test-Mail senden" fragt nach einer Empfängeradresse.** Die Doku sagt nur „Test-E-Mail senden zur Überprüfung der Konfiguration". Tatsächlich öffnet sich ein Browser-Dialog „Test-Mail senden an:", vorbelegt mit der eigenen E-Mail aus dem Token ([SmtpView.vue:102](LuxStage/web-app/src/views/settings/SmtpView.vue#L102)). Abbrechen bricht den Versand ab.
- [ ] **SMTP-Passwort wird beim Laden nie angezeigt.** Ein gespeichertes Passwort erscheint als Platzhalter `••••••••`, das Feld selbst bleibt leer ([SmtpView.vue:82-83](LuxStage/web-app/src/views/settings/SmtpView.vue#L82-L83)). Wer speichert, ohne das Feld auszufüllen, behält das alte Passwort. Nicht dokumentiert und nicht selbsterklärend.
- [ ] **Backup herunterladen dürfen ALLE Benutzer, Wiederherstellen nur Admins.** [BackupView.vue:21](LuxStage/web-app/src/views/settings/BackupView.vue#L21) blendet den Restore-Bereich per `v-if="isAdmin"` aus. Die Doku führt „Backup" pauschal als Tab für alle — der Unterschied fehlt. Sicherheitsrelevant: Ein Techniker kann die gesamte Datenbank samt Fotos herunterladen.
- [ ] **Wiederherstellen ist zweistufig.** Erst Datei wählen, dann erscheint ein separater Button „↑ Wiederherstellen", danach folgt ein Bestätigungsdialog. Die Doku behauptet: „Wiederherstellung startet automatisch" (Schritt 3) — **falsch**, es sind zwei weitere Klicks nötig.
- [ ] **Update-Button ist gesperrt, solange keine Aktualisierung vorliegt** (`:disabled="updating || !checkResult?.available"`, [UpdateView.vue:37](LuxStage/web-app/src/views/settings/UpdateView.vue#L37)). Die Doku beschreibt „Branch auswählen → Jetzt aktualisieren" als freie Handlung. Bei aktuellem Stand ist der Button grau — ohne Doku wirkt das wie ein Fehler.
- [ ] **Die Branch-Liste kommt vom Server** (`/api/update/branches`), die Doku nennt beispielhaft „main, dev". Vorausgewählt ist immer der erste Eintrag, und die Prüfung startet automatisch beim Öffnen des Tabs.
- [ ] **Live-Protokoll während des Updates** — Fortschrittsbalken und mitlaufende Terminal-Ausgabe per SSE ([UpdateView.vue:45-61](LuxStage/web-app/src/views/settings/UpdateView.vue#L45-L61)). Unerwähnt, obwohl es der auffälligste Teil des Vorgangs ist.
- [ ] **„Prüfe auf Updates" zeigt die Zahl der neuen Änderungen** (`{commits} neue Änderung(en) verfügbar`) plus Commit-Log. Fehlt in der Doku.
- [ ] **Server-Tab: die Doku listet vier Felder, es sind drei plus Eingabefeld.** „Festplatte (frei)" erscheint **nur**, wenn der Server erreichbar ist ([ServerView.vue:34](LuxStage/web-app/src/views/settings/ServerView.vue#L34)). Bei Verbindungsfehler steht dort stattdessen „Keine Verbindung zum Server".
- [ ] **Server-URL wirkt sofort beim Verlassen des Feldes** (`@change="applyServer"`) — kein Speichern-Button. Eine falsche Eingabe macht die App unbedienbar; der Wert liegt im `localStorage` (`server_url`). Braucht einen Warnhinweis samt Rückweg.

## S. EOS-Import — Merge-Dialog dokumentieren

Verifiziert gegen [EosMergePreviewDialog.vue](LuxStage/web-app/src/components/EosMergePreviewDialog.vue).

- [ ] Der Dialog zeigt **drei Gruppen**, die `import-eos.md` nicht benennt:
  - **Neu aktiv ({n})** — Kanäle, die im Pult neu bespielt werden
  - **Nicht mehr aktiv ({n})** — vormals aktive Kanäle, die jetzt fehlen
  - **Unangetastet – hat Beschreibung ({n})** — bereits beschriftete Kanäle, die der Import **nicht** überschreibt
- [ ] Die dritte Gruppe beantwortet die zentrale Nutzerfrage beim Re-Import: **Bestehende Notizen bleiben erhalten.** Genau das steht nirgends in der Doku und ist der häufigste Zweifel vor einem zweiten Import.
- [ ] Bei fehlenden Änderungen erscheint „Keine Änderungen." — Import trotzdem bestätigbar.

## T. Shows- und Archiv-Ansicht

- [ ] **Standardsortierung ist „Stand" absteigend** ([ShowsView.vue:172-173](LuxStage/web-app/src/views/ShowsView.vue#L172-L173)), nicht alphabetisch. Erneutes Klicken kehrt die Richtung um, ein Pfeil (↑/↓) zeigt sie an. Beim Wechsel auf „Name" wird aufsteigend vorbelegt, sonst absteigend.
- [ ] **Sortiert wird innerhalb der Spielort-Gruppen**, die Gruppen selbst stehen immer alphabetisch ([ShowsView.vue:216-222](LuxStage/web-app/src/views/ShowsView.vue#L216-L222)). Die Doku erweckt den Eindruck einer durchgehenden Liste.
- [ ] **Spalten blenden sich abhängig von der Fensterbreite aus:** „Spielzeit" erst ab `lg`, „Stand" und „Bearbeitung" erst ab `sm`. Die Doku erwähnt das nur bei „Spielzeit". Auf dem iPad im Hochformat fehlen mehrere Spalten.
- [ ] **Das Archiv bietet keine Sortierung.** `archiv.md` schreibt „gleiche Darstellung wie in der normalen Shows-Übersicht" — die sortierbaren Spaltenköpfe fehlen dort jedoch. Offener Prüfpunkt aus Runde 1 damit geklärt: **nein**, keine Sortierung, keine Suche.

---

# Runde 5 — Fotos, Backup, Grundriss (Servermodule)

Methodik: `photos.js`, `backup.js`, `floorplan.js` und die zugehörigen Werte aus `config.js` vollständig gelesen. Entgegen der Erwartung mehrere nutzerrelevante Funde.

## U. Fotos — Verarbeitung und Grenzen völlig undokumentiert

Verifiziert gegen [server/photos.js](LuxStage/server/photos.js) und [server/config.js:28-31](LuxStage/server/config.js#L28-L31).

- [ ] **Jedes hochgeladene Foto wird verkleinert und neu komprimiert.** `photoMaxWidth: 1500`, `photoQuality: 70` ([photos.js:34-35](LuxStage/server/photos.js#L34-L35)). Ein 4000-px-Foto aus der Kamera landet mit 1500 px Breite und JPEG-Qualität 70 auf dem Server. **Das Original wird nicht aufbewahrt.** Für eine Dokumentations-App, in der Rigg-Details fotografiert werden, ist das eine zentrale Information — steht in `fotos.md` nicht.
- [ ] **Alle Fotos werden in JPG umgewandelt** — unabhängig vom Ausgangsformat (`.replace(/\.[^.]+$/, '.jpg')`, [photos.js:26](LuxStage/server/photos.js#L26)). PNG-Screenshots eines Lichtplans verlieren dadurch Schärfe an Kanten und Text. Transparenz geht verloren.
- [ ] **Maximale Uploadgröße: 50 MB** (`MAX_PHOTO_UPLOAD_BYTES`, [photos.js:125](LuxStage/server/photos.js#L125)). Bei Überschreitung bricht die Verbindung ab („Upload zu groß"). Nicht dokumentiert.
- [ ] **Automatische Drehung nach EXIF** (`.rotate()`, [photos.js:30](LuxStage/server/photos.js#L30)) — hochkant aufgenommene Fotos erscheinen korrekt. Positiv, aber erwähnenswert.
- [ ] **Zusätzlich entsteht ein Vorschaubild** (400 px, Qualität 60). Erklärt, warum die Galerie schnell lädt und das Vollbild kurz nachschärft.
- [ ] **Gleichnamige Dateien überschreiben sich.** Der Dateiname wird nur bereinigt (`[^a-zA-Z0-9._-]` → `_`), es gibt keinen Eindeutigkeits-Zusatz ([photos.js:25-27](LuxStage/server/photos.js#L25-L27)). Zwei Uploads von `IMG_0001.jpg` aus verschiedenen Quellen — das zweite ersetzt das erste **ohne Warnung**. Praxisrelevant, da Kameras fortlaufend gleiche Namen vergeben. Auch als Code-Punkt vermerkt.

## V. `einstellungen.md` — Backup: Verhalten weicht deutlich ab

Verifiziert gegen [server/backup.js](LuxStage/server/backup.js).

- [ ] **Fotos werden beim Wiederherstellen ERGÄNZT, nicht ersetzt.** Die Doku warnt: „Alle aktuellen Daten werden durch den Backup-Stand überschrieben." Für die Datenbank stimmt das (atomarer Austausch, [backup.js:175](LuxStage/server/backup.js#L175)). Fotos werden dagegen lediglich aus dem ZIP **in den bestehenden Ordner entpackt** ([backup.js:147-156](LuxStage/server/backup.js#L147-L156)) — vorhandene Dateien bleiben erhalten, sofern sie nicht gleich heißen. Ergebnis: Fotos, die es im Backup nicht gab, überleben die Wiederherstellung und liegen verwaist herum. **Die Warnung in der Doku ist irreführend.**
- [ ] **Das Backup wird vor dem Einspielen geprüft.** Drei Stufen: enthält das ZIP eine `luxstage.db`, besteht sie `PRAGMA integrity_check`, und erst danach werden Fotos entpackt ([backup.js:101-134](LuxStage/server/backup.js#L101-L134)). Bei Fehlschlag bleibt der bestehende Stand **unangetastet**. Das ist eine beruhigende Zusage, die in der Doku fehlt — `features.md` erwähnt „mit Validierung" nur beiläufig.
- [ ] **Konkrete Fehlermeldungen dokumentieren:** „ZIP enthält keine luxstage.db", „Datenbank ist beschädigt oder ungültig", „Upload zu groß". Gehört in eine Troubleshooting-Sektion.
- [ ] **Maximale Backup-Größe beim Wiederherstellen: 500 MB** ([backup.js:46](LuxStage/server/backup.js#L46)). Bei größeren Datenbeständen scheitert die Wiederherstellung über die Web-App. Harte Grenze, die ein wachsendes Theater erreichen kann — muss dokumentiert werden, inklusive Hinweis auf den manuellen Weg über die Kommandozeile.
- [ ] **Der Dateiname enthält nur das Datum, nicht die Uhrzeit** (`luxstage-backup-2026-07-25.zip`, [backup.js:188](LuxStage/server/backup.js#L188)). `features.md` verspricht „Zeitstempel automatisch im Dateinamen". Zwei Backups am selben Tag heißen identisch und überschreiben sich im Download-Ordner.
- [ ] **Nur Fotos mit den Endungen jpg, jpeg, png, gif, webp werden zurückgespielt** ([backup.js:146](LuxStage/server/backup.js#L146)), alles andere wird stillschweigend verworfen.
- [ ] **Der Server beendet sich nach der Wiederherstellung selbst** (`process.exit(0)`, [backup.js:179](LuxStage/server/backup.js#L179)). Er startet nur wieder, wenn ein Prozessmanager ihn überwacht — bei der Standardinstallation erledigt das PM2. Wer LuxStage manuell per `node index.js` betreibt, muss von Hand starten. Die Doku sagt pauschal „Der Server startet danach automatisch neu".

## W. Grundriss — Hintergrundbild

Verifiziert gegen [server/floorplan.js](LuxStage/server/floorplan.js).

- [ ] **Erlaubte Formate: PNG, JPG, SVG, WebP** ([floorplan.js:7](LuxStage/server/floorplan.js#L7)). `grundriss.md` sagt nur „Bilddatei auswählen". Ein PDF-Bühnenplan — das gängigste Austauschformat im Theater — wird **abgelehnt**. Nutzer müssen vorher umwandeln. Gehört ausdrücklich in die Doku, samt Hinweis auf die Fehlermeldung „Ungültiger Dateityp. Erlaubt: PNG, JPG, SVG, WebP".
- [ ] **Pro Vorlage ist nur EIN Hintergrundbild möglich.** Beim Hochladen werden alle vorhandenen Bilder des Templates gelöscht ([floorplan.js:20-24](LuxStage/server/floorplan.js#L20-L24)) — ohne Rückfrage. Ein neues Bild ersetzt das alte endgültig.
- [ ] **Für das Hintergrundbild gibt es keine Größenbeschränkung und keine Komprimierung** — anders als bei Fotos wird die Datei unverändert gespeichert ([floorplan.js:30](LuxStage/server/floorplan.js#L30)). Ein 20-MB-Scan bleibt 20 MB und wird bei jedem Öffnen des Grundrisses geladen (`Cache-Control: no-cache`, [floorplan.js:85](LuxStage/server/floorplan.js#L85)). Empfehlung zur Vorbereitung des Bildes in die Doku aufnehmen.
- [ ] **Der Grundriss wird als PNG-Momentaufnahme für den PDF-Export gespeichert** (`saveFloorplanSnapshot`, [floorplan.js:48](LuxStage/server/floorplan.js#L48)). Das erklärt, warum im PDF gegebenenfalls ein älterer Stand erscheint, wenn der Grundriss nach der letzten Anzeige geändert wurde — Verhalten prüfen und dokumentieren.

## Priorität (aktualisiert)

0. **N** `installation.md` — die Domain-Angabe im falschen Format lässt die Installation **abbrechen**. Erste Seite, die jeder Self-Hoster liest. Vorgezogen.
0b. **Q** „Fotos pro Druckseite" — Einstellung ohne Wirkung im PDF, an drei Stellen falsch dokumentiert.
0c. **O** Verlauf umfasst keine Fotos/Grundriss und ist auf 50 Versionen begrenzt — Fehlannahme kann Datenverlust bedeuten.
1. **K** Datenschutz — die Aussage „keine Drittanbieter" ist nachweislich falsch, während Bilder an eine externe API gehen. Rechtliches Risiko, nicht nur Doku-Mangel.
2. **J** Widersprüche Doku ↔ App — besonders Login/Benutzername (erster Schritt jedes Nutzers), Farb-Legende und Passwort-Mindestlänge.
3. **I** Offline-Zusage im FAQ — falsche Zusage kann zu Datenverlust führen.
4. **H** Begriffs-Chaos — Doku ist unauffindbar, wenn sie andere Wörter benutzt als der Bildschirm. Idealerweise zuerst die **App** vereinheitlichen (Position/Kategorie), dann die Doku.
5. **A** Registrierung/Login, **I** „Auf alle Shows anwenden".
6. **L** Schnellstart, Glossar, Troubleshooting.
7. **C/D/E/F** dünne Seiten, Screenshots, Umbenennungen, Struktur.

**Anweisung** Nach jedem Punkt einen commit machen ohne Versionserhöhung