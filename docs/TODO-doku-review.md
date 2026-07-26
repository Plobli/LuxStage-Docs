# ToDo — Review Kunden-Dokumentation Web-App

**Anweisung:** 
- Nach jedem Punkt einen commit machen ohne Versionserhöhung
- so wenig wie möglich Zwischentexte während der Bearbeitung ausgeben. 
- Fertige Punkte abhaken

Stand: 2026-07-25. Vergleich `LuxStage-Docs/docs/{de,en}/` gegen `LuxStage/web-app/src` + `LuxStage/server`.

## A. Fehlende Seiten (komplett undokumentiert)

- [x] **Registrierung & Login** — ✅ teilweise erledigt (2026-07-26): Neue Seite `login.md` (DE+EN) für Anmeldung und Passwort-vergessen-Flow (SMTP-abhängig), in Sidebar eingetragen. **Registrierung (Team anlegen) bewusst ausgelassen** — auf Wunsch, da SaaS-spezifisch (erzeugt `<team>.luxstage.app`, nicht relevant für Self-Hoster).
- [x] **Show-Health-Badge / Vollständigkeitsprüfung** — ✅ erledigt (2026-07-26): Abschnitt in `kanaele.md` (DE+EN) ergänzt. Hinweis: „keine Notiz" wird laut Code aktuell **nicht** in die Zählung/Filter einbezogen (nur Gerät/Position/Adresse), Doku entsprechend auf drei Filter beschränkt.
- [x] **Presence / Live-Zusammenarbeit in der Web-App** — ✅ erledigt (2026-07-26): Abschnitt in `kanaele.md` (DE+EN) ergänzt.
- [x] **Automatisch generierter Text** — ✅ erledigt (2026-07-26): Abschnitt in `info.md` (DE+EN) ergänzt.
- [x] **Update-Benachrichtigung** — ✅ erledigt (2026-07-26): Tipp-Box in `einstellungen.md` (DE+EN) ergänzt.
- [x] **Gehostete Variante (SaaS) / Betreiber-Panel** — bewusst nicht dokumentiert (Entscheidung Christopher, 2026-07-26): intern, nicht für die öffentliche Kunden-Doku bestimmt.
- [x] **Docker-Installation** — ✅ erledigt (2026-07-26): vollständiger Abschnitt in `installation.md` (DE+EN) mit Schritten, `.env`-Beispiel und Hinweis auf fehlendes automatisches HTTPS.

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

- [x] **`import-csv.md`** — ✅ erledigt (2026-07-26): Spaltenschema, Trennzeichen, Encoding, Merge-Verhalten ergänzt (DE+EN). Fehlermeldungen (`csv.error.*`) nicht ergänzt — Keys sind im Code tot (kein Aufrufer gefunden), der Parser wirft aktuell keine Fehler.
- [x] **`export-pdf.md`** — ✅ erledigt (2026-07-26): Grundriss ergänzt, Foto-Einschränkungen ergänzt (siehe Abschnitt Q). Button-Ort und Vorschau-Dialog nicht ergänzt — Export läuft direkt ohne Vorschau-Dialog.
- [x] **`export-csv.md`** — ✅ erledigt (2026-07-26): Spalten, Trennzeichen, Dateiname ergänzt (DE+EN).
- [x] **`import-eos.md`** — ✅ erledigt (2026-07-26): Merge-Dialog-Gruppen und Notizen-Erhalt dokumentiert (siehe Abschnitt S).
- [x] **`fotos.md`** — ✅ erledigt (2026-07-26): Drag & Drop-Upload, Lightbox/Vollbild-Navigation und Foto löschen ergänzt (DE+EN). „Sortieren per Drag & Drop" existiert in `PhotoGallery.vue` **nicht** — Befund war falsch, nicht ergänzt.
- [x] **`archiv.md`** — ✅ erledigt (2026-07-26): geprüft, keine Sortierung/Suche vorhanden — in `archiv.md` (DE+EN) korrigiert (siehe Abschnitt T).

## D. Fehlende Screenshots

- [ ] Web-App hat nur **zwei** Bilder (`img/webapp/import-eos/`), die iOS-Doku dagegen ~24. Screenshots ergänzen für: Shows-Übersicht, Kanaltabelle, Setup (Gestelle + Zugstangen), Info-Tab, Fotos-Galerie, Grundriss-Editor, Versionsverlauf-Panel, Einstellungen-Tabs.
- [ ] `webapp/index.md` beschreibt die Seitenleiste rein textlich — ein Screenshot würde das ersetzen.

## E. Zweisprachigkeit (EN)

- [ ] Alle DE-Seiten haben ein EN-Pendant mit identischer Zeilenzahl — inhaltlich übersetzt, strukturell synchron. **Gut.** Bei jeder Änderung aus A–D beide Sprachen mitziehen.
- [ ] **EN-Dateinamen sind deutsch**: `en/webapp/kanaele.md`, `spielstaette-vorlage.md`, `en/ios/aufbau.md`, `einleuchten.md`. URLs für englische Kunden unverständlich (`/en/webapp/kanaele`). Umbenennen auf `channels.md`, `venue-template.md`, `setup.md`, `focus.md` — inkl. Anpassung `config.js` und aller internen Links. (Optional, aber sichtbar nach außen.)
- [ ] **`en/webapp/versionsverlauf.md`** → `version-history.md`, `en/webapp/fotos.md` → `photos.md`, `en/webapp/archiv.md` → `archive.md`, `en/webapp/einstellungen.md` → `settings.md`, `en/webapp/grundriss.md` → `floor-plan.md`.

## F. Struktur & Navigation

- [x] **`features.md` überschneidet sich stark mit den Anleitungsseiten** — ✅ erledigt (2026-07-26): Datei von `webapp/features.md` nach `/features.md` verschoben (Top-Level, deckt beide Apps ab), in Guide-, Web-App- und iOS-Sidebar verlinkt (DE+EN).
- [x] **Sidebar-Gruppe „Shows"** enthält auch „Einstellungen" — ✅ erledigt (2026-07-26): neue Gruppe „Verwaltung"/„Management" mit Archiv, Spielort-Vorlage, Einstellungen (DE+EN).
- [x] **Kein Glossar** — ✅ erledigt (2026-07-26): neue Seite `glossar.md` (DE+EN) mit allen genannten Begriffen, in Guide-, Web-App- und iOS-Sidebar verlinkt.
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
- [x] **„Vorlage" vs. „Template"** — ✅ überholt (2026-07-26): `nav.templates` zeigt jetzt „Vorlagen" (Code-Todo 2.2), Doku sagt ebenfalls „Vorlagen". Kein Widerspruch mehr.
- [x] **„Spielort" vs. „Bühne" vs. „Spielstätte"** — ✅ überholt (2026-07-26): `show.assign_template`, `field.venue`, `template.venue_name` existieren nicht mehr (waren tote Keys, in Code-Todo 2.2 entfernt). Nur noch „Spielort-Vorlage" durchgehend.
- [x] **Tab „Setup"** — ✅ erledigt (2026-07-26): `setup.md`/EN ergänzt, dass der Zugstangen-Abschnitt als Unter-Tab „Obermaschinerie" (`tab.obermaschinerie`) in der App erscheint. `tab.buehne` existiert in `de.json` nicht mehr (veraltet, ignoriert). Neuer Fund: **`tab.gassenturm` ist in der App selbst uneinheitlich übersetzt** — DE „Setup", EN „Stage Plan" (`en.json:349`), für denselben Tab. Gehört in die Code-ToDo, nicht in die Doku behoben.
- [x] **`tab.raum` = „Raum", `tab.hinweise` = „Hinweise"** — ✅ überholt (2026-07-26): Beide Keys existieren in `de.json` nicht mehr (Code-Todo 2.3 hat sie entfernt, Icon-Zuordnung läuft jetzt über `icon`-Spalte statt Titelvergleich). Keine Doku-Änderung nötig.

## I. Undokumentierte Funktionen (Runde 2)

- [x] **„Auf alle Shows anwenden"** — ✅ erledigt (2026-07-26): Abschnitt in `spielstaette-vorlage.md` (DE+EN) ergänzt, inkl. Hinweis auf ungefährliche Operation (nur fehlende Elemente).
- [ ] **Offline-Banner** (`offline.banner` = „Keine Verbindung zum Server – Änderungen werden nicht gespeichert") — das **widerspricht direkt** der FAQ-Aussage „Funktioniert LuxStage auch offline? Ja. … Änderungen werden synchronisiert, sobald die Verbindung wiederhergestellt ist." Die Web-App speichert offline **nicht**. FAQ korrigieren — sonst Datenverlust beim Nutzer, der sich auf die Zusage verlässt.
- [x] **Inline-Hilfe (⌘-Icons) in der App** — ✅ erledigt (2026-07-26): Hinweis in `kanaele.md` (DE+EN) ergänzt.
- [x] **Doppelte-Adresse-Warnung** — ✅ erledigt (2026-07-26): Tipp-Box in `kanaele.md` (DE+EN) ergänzt.
- [x] **Show-Metadaten nachträglich ändern** — ✅ erledigt (2026-07-26): Abschnitt in `shows.md` (DE+EN) ergänzt.
- [x] **„Abschnitt hinzufügen" direkt in der Show** — ✅ erledigt (2026-07-26): neuer Abschnitt „Eigenen Abschnitt anlegen" in `info.md` (DE+EN).
- [x] **Feld-Einheit** — ✅ erledigt (2026-07-26): dritte Spalte „Einheit" in `info.md` (DE+EN) ergänzt.
- [x] **Foto löschen** — ✅ erledigt (2026-07-26): Abschnitt „Foto löschen" in `fotos.md` (DE+EN) ergänzt (siehe Abschnitt U).
- [x] **Kanal-Farbwahl „No Color" / Freitext** — ✅ erledigt (2026-07-26): in `kanaele.md` (DE+EN) ergänzt.
- [x] **404-Seite** — bewusst nicht dokumentiert (unkritisch, selbsterklärend).

## J. Widersprüche zwischen Doku und App-Texten

- [x] **Farb-Legende der Kanalnummer.** — ✅ erledigt (2026-07-26): in `kanaele.md` (DE+EN) auf App-Text korrigiert (Weiß/Grün/Gelb).
- [x] **Passwort-Mindestlänge.** — ✅ überholt (2026-07-26): Code-Todo 1.1 hat eine einzige Quelle (`PASSWORD_MIN_LENGTH = 8`) eingeführt, alle Texte leiten sich davon ab. `installation.md` stimmt bereits, kein Widerspruch mehr.
- [x] **Passwort vergessen.** — ✅ Grundlage überholt (2026-07-26): Code-Todo 1.2 hat den Link jetzt an die SMTP-Konfiguration gekoppelt — ist SMTP eingerichtet, erscheint der E-Mail-Flow, sonst der Admin-Hinweis. Dokumentation dieses Flows gehört zu Punkt **A** (Registrierung & Login fehlt komplett) — dort zu erledigen, keine Dopplung hier.
- [x] **Login-Feld heißt „E-Mail-Adresse"** — ✅ überholt (2026-07-26): Code-Todo 1.3 + 7.5 haben das behoben — Installer legt den Admin jetzt mit E-Mail an (`bootstrap.js`), Login-Fehlermeldung sagt „E-Mail-Adresse". Kein Widerspruch mehr, `installation.md` bereits konsistent.
- [x] **Beleuchtungsgestelle aus Vorlage.** — ✅ erledigt (2026-07-26): `setup.md` (DE+EN) auf „Einfügen im Bearbeiten-Dialog" korrigiert.
- [x] **`info.md` beschreibt Abschnitte als vorgegeben** — ✅ erledigt (2026-07-26): siehe I, Abschnitt „Eigenen Abschnitt anlegen" ergänzt.
- [x] **`einstellungen.md`: „Passwort zurücksetzen"** — ✅ bereits korrekt: steht in der Doku nur unter „Benutzerverwaltung" (Admin-Bereich), nicht unter „Konto". Kein Fix nötig, Befund war veraltet.

## K. Datenschutzerklärung — sachlich falsch

- [x] **`datenschutz.md` gilt nur für die iOS-App** — ✅ erledigt (2026-07-26): Web-App/Self-Hosting-Abschnitt ergänzt, Verantwortlichkeit (Self-Hoster vs. Betreiber luxstage.app) geklärt.
- [x] **Aussage „keine Kommunikation mit Drittanbietern" unzutreffend (OCR/Anthropic)** — ✅ überholt (2026-07-26): geprüft und bestätigt (auf Hinweis von Christopher) — **das OCR-Feature existiert nicht mehr**. Kein Swift-Code ruft es auf, keine Server-Route nutzt `anthropicApiKey` mehr. Nur zwei verwaiste Locale-Keys (`ocr.intro.*`) und die ungenutzte Config-Variable sind übrig. Aussage in der Datenschutzerklärung ist damit korrekt, keine Änderung nötig.
- [x] **App-Store-Datenschutzlabel prüfen** — ✅ überholt: gegenstandslos, da kein Datenfluss an Anthropic mehr existiert.
- [x] **OCR-Feature selbst ist undokumentiert** — ✅ überholt: Feature existiert nicht mehr, keine Doku nötig.
- [x] **Kein Impressum** — ✅ teilweise erledigt (2026-07-26): Warnbox in `datenschutz.md` ergänzt, die auf das fehlende Impressum für luxstage.app hinweist. Kein Impressum auf `LuxStage-Website/` gefunden — bleibt offener Punkt für Christopher, nicht selbst erfunden.

## L. Verständlichkeit für Erstnutzer

- [x] **Kein durchgehender „Von null zur ersten Show"-Pfad.** — ✅ erledigt (2026-07-26): `guide/index.md` (DE+EN) zu „Schnellstart in 10 Minuten" mit direkten Links zu jedem Schritt umgebaut.
- [x] **Fachbegriffe ungeklärt** — ✅ erledigt (2026-07-26): alle genannten Begriffe im neuen `glossar.md` erklärt (siehe Abschnitt F).
- [x] **`kanaele.md`: „KANAL | Kanalname im Pult (links) / Dimmer-Adresse (rechts nach dem ‚/')"** — ✅ erledigt (2026-07-26): Beispiel „1/001" ergänzt (DE+EN).
- [x] **`setup.md` ist mit 110 Zeilen die längste Anleitungsseite** — ✅ erledigt (2026-07-26): aufgeteilt in `setup-gestelle.md` und `setup-zugstangen.md` (DE+EN), alle internen Links und die Sidebar angepasst.
- [x] **Keine Seite „Was tun bei Problemen?"** — ✅ erledigt (2026-07-26): neue Seite `troubleshooting.md` (DE+EN), in Sidebar unter „Referenz" eingetragen. `csv.error.*` nicht aufgenommen — Keys sind tot (siehe unten).
- [x] **CSV-Fehlermeldungen dokumentieren** — ✅ überholt (2026-07-26): `csv.error.*`-Keys sind im Code tot (kein Aufrufer in `web-app/src`), der CSV-Parser wirft aktuell keine Fehler. Das Spaltenschema selbst ist bereits in `import-csv.md` dokumentiert (Abschnitt C).
- [x] **EOS-Import-Dialoge** — ✅ überholt (2026-07-26): Beide Keys existieren nicht mehr, ersetzt durch `EosMergePreviewDialog.vue` — bereits in `import-eos.md` dokumentiert (siehe Abschnitt S).

## M. Zweisprachigkeit — App vs. Doku

- [x] **`de.json` und `en.json` sind vollständig synchron** — ✅ bestätigt (2026-07-26): aktuell 616 Keys in beiden Dateien, exakt gleiche Anzahl. `template.apply_to_shows` in EN ergänzt (Code-Todo 11), `show.template.optional` als toter Key entfernt (Code-Todo 2.2). **App-Übersetzung weiterhin in gutem Zustand.**
- [x] **Die englische Doku übersetzt deutsche Fachbegriffe, die in der App englisch anders lauten.** — ✅ erledigt (2026-07-26): `en/webapp/kanaele.md` gegen `en.json` geprüft und korrigiert (Spaltenköpfe „Chan"/„Qty." statt „CHANNEL"/„QTY", „Custom" statt „free text", „Search channels …"). **Randbefund:** `gassenturm.field.name` in `en.json` ist unübersetzt geblieben („Bezeichnung") — Code-Bug, siehe Punkt 12 in `TODO-webapp-code.md`, nicht in der Doku behebbar.

---

# Runde 3 — Detailprüfung (Dateien vollständig gelesen)

Methodik: `install.sh`, `bootstrap.js`, `history.js`, `pdf.js` und der Tastatur-Handler von `FloorplanEditor.vue` vollständig gelesen statt gegreppt. Genau die Tabellen geprüft, die bisher ungeprüft blieben.

## N. `installation.md` — die kritischste Seite, mehrere Fehler

Verifiziert gegen [install.sh](LuxStage/install.sh) und [server/bootstrap.js](LuxStage/server/bootstrap.js).

- [x] **Der Installer fragt das Admin-Passwort ZWEIMAL ab.** — ✅ erledigt (2026-07-26): in `installation.md` (DE+EN) ergänzt, inkl. Hinweis auf drei Fehlversuche.
- [x] **Prompt-Text weicht ab.** — ✅ erledigt (2026-07-26): auf „Systemnutzer für LuxStage [luxstage]:" (DE+EN) korrigiert.
- [x] **Externe Domain: Doku zeigt falsches Format.** — ✅ erledigt (2026-07-26): DE + EN auf `https://luxstage.example.com` (mit Schema) korrigiert.
- [ ] **Zugangsdaten sind tatsächlich Benutzernamen, keine E-Mail-Adressen.** `bootstrap.js` legt via `INSERT INTO users (username, ...)` die Konten `admin` und `tech` an. Damit ist der offene Punkt aus Runde 2 geklärt: Die Doku hat recht, **die App ist falsch beschriftet** (`auth.username` = „E-Mail-Adresse"). Gehört in die Code-ToDo, nicht in die Doku.
- [x] **Voraussetzungen fehlen komplett.** — ✅ erledigt (2026-07-26): Warnbox in `installation.md` (DE+EN) ergänzt (root/sudo, TTY, apt-get, Debian/Ubuntu/RPi OS).
- [x] **Der Installer ändert den System-Hostname** — ✅ erledigt (2026-07-26): in derselben Warnbox erwähnt.
- [x] **Installierte Fremdpakete nicht genannt** — ✅ erledigt (2026-07-26): in `installation.md` (DE+EN) unter Schritt 4 aufgelistet.
- [x] **Doku sagt „Das Script lädt alles herunter"** — ✅ erledigt (2026-07-26): auf „lädt das neueste GitHub-Release, nicht main" korrigiert (DE+EN).
- [x] **Port 3000 ist fest verdrahtet** — Troubleshooting beschreibt die Änderung bereits korrekt, keine Änderung nötig. ✓
- [x] **Doku: „Der Server startet neu und die LuxStage-Services starten automatisch."** — ✅ erledigt (2026-07-26): Reboot als „empfohlen, nicht zwingend" dargestellt (DE+EN).
- [x] **CORS wird automatisch konfiguriert** — ✅ erledigt (2026-07-26): Hinweis in Schritt 4 ergänzt (DE+EN).

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
- [x] **Der Grundriss ist im PDF enthalten** — ✅ erledigt (2026-07-26): `features.md`-Tabelle (DE+EN) um „Grundriss" ergänzt.
- [x] **Fotos ohne lesbare Datei werden übersprungen** — ✅ erledigt (2026-07-26): Hinweis in `export-pdf.md` (DE+EN) ergänzt.
- [x] **Foto-Beschriftungen werden einzeilig abgeschnitten** — ✅ erledigt (2026-07-26): im selben Hinweis ergänzt.

---

# Runde 4 — Settings-Views, Import-Dialoge, Listen

Methodik: `SmtpView`, `BackupView`, `UpdateView`, `ServerView` vollständig gelesen; `EosMergePreviewDialog`, `ShowsView`, `ArchiveView` geprüft.

## R. `einstellungen.md` — Abweichungen im Detail

- [x] **„Test-Mail senden" fragt nach einer Empfängeradresse.** — ✅ erledigt (2026-07-26): in `einstellungen.md` (DE+EN) ergänzt. Hinweis: Code-Todo 8.5 hat den `prompt()` bereits durch einen echten Dialog ersetzt.
- [x] **SMTP-Passwort wird beim Laden nie angezeigt.** — ✅ erledigt (2026-07-26): Tipp-Box in `einstellungen.md` (DE+EN) ergänzt.
- [x] **Backup herunterladen dürfen ALLE Benutzer, Wiederherstellen nur Admins.** — ✅ überholt (2026-07-26): Code-Todo 8.2 hat Download wieder admin-only gemacht (Sicherheitsgrund: ZIP enthält Passwort-Hashes). Doku entsprechend auf „beide admin-only" korrigiert.
- [x] **Wiederherstellen ist zweistufig.** — ✅ erledigt (2026-07-26): Schritt-für-Schritt-Anleitung in `einstellungen.md` (DE+EN) korrigiert.
- [x] **Update-Button ist gesperrt, solange keine Aktualisierung vorliegt** — ✅ erledigt (2026-07-26): in `einstellungen.md` (DE+EN) ergänzt.
- [x] **Die Branch-Liste kommt vom Server** — ✅ erledigt (2026-07-26): im selben Absatz ergänzt.
- [x] **Live-Protokoll während des Updates** — ✅ erledigt (2026-07-26): im selben Absatz ergänzt.
- [x] **„Prüfe auf Updates" zeigt die Zahl der neuen Änderungen** — ✅ erledigt (2026-07-26): im selben Absatz ergänzt.
- [x] **Server-Tab: die Doku listet vier Felder, es sind drei plus Eingabefeld.** — ✅ erledigt (2026-07-26): „Festplatte (frei)" als bedingt beschrieben.
- [x] **Server-URL wirkt sofort beim Verlassen des Feldes** — ✅ erledigt (2026-07-26): Warnhinweis in der Tabelle ergänzt.

## S. EOS-Import — Merge-Dialog dokumentieren

Verifiziert gegen [EosMergePreviewDialog.vue](LuxStage/web-app/src/components/EosMergePreviewDialog.vue).

- [x] Der Dialog zeigt **drei Gruppen** — ✅ erledigt (2026-07-26): alle drei in `import-eos.md` (DE+EN) benannt.
- [x] Die dritte Gruppe beantwortet die zentrale Nutzerfrage beim Re-Import — ✅ erledigt (2026-07-26): Tipp-Box „Bestehende Notizen bleiben erhalten" ergänzt.
- [x] Bei fehlenden Änderungen erscheint „Keine Änderungen." — ✅ erledigt (2026-07-26): ergänzt.

## T. Shows- und Archiv-Ansicht

- [x] **Standardsortierung ist „Stand" absteigend** — ✅ erledigt (2026-07-26): in `shows.md` (DE+EN) ergänzt.
- [x] **Sortiert wird innerhalb der Spielort-Gruppen** — ✅ erledigt (2026-07-26): in `shows.md` (DE+EN) klargestellt.
- [x] **Spalten blenden sich abhängig von der Fensterbreite aus** — ✅ erledigt (2026-07-26): Tipp-Box in `shows.md` (DE+EN) ergänzt.
- [x] **Das Archiv bietet keine Sortierung.** — ✅ erledigt (2026-07-26): `archiv.md` (DE+EN) korrigiert. Offener Prüfpunkt aus Runde 1 damit geklärt: **nein**, keine Sortierung, keine Suche.

---

# Runde 5 — Fotos, Backup, Grundriss (Servermodule)

Methodik: `photos.js`, `backup.js`, `floorplan.js` und die zugehörigen Werte aus `config.js` vollständig gelesen. Entgegen der Erwartung mehrere nutzerrelevante Funde.

## U. Fotos — Verarbeitung und Grenzen völlig undokumentiert

Verifiziert gegen [server/photos.js](LuxStage/server/photos.js) und [server/config.js:28-31](LuxStage/server/config.js#L28-L31).

- [x] **Jedes hochgeladene Foto wird verkleinert und neu komprimiert.** — ✅ erledigt (2026-07-26): Tipp-Box in `fotos.md` (DE+EN) ergänzt.
- [x] **Alle Fotos werden in JPG umgewandelt** — ✅ erledigt (2026-07-26): im selben Hinweis ergänzt.
- [x] **Maximale Uploadgröße: 50 MB** — ✅ erledigt (2026-07-26): im selben Hinweis ergänzt.
- [x] **Automatische Drehung nach EXIF** — ✅ erledigt (2026-07-26): im selben Hinweis ergänzt.
- [x] **Zusätzlich entsteht ein Vorschaubild** — ✅ erledigt (2026-07-26): im selben Hinweis ergänzt.
- [x] **Gleichnamige Dateien überschreiben sich.** — ✅ überholt (2026-07-26): Code-Todo 9.1 hat das behoben (`uniqueName()` zählt bei Kollision hoch). Keine Doku-Änderung nötig, Verhalten ist jetzt unauffällig.

## V. `einstellungen.md` — Backup: Verhalten weicht deutlich ab

Verifiziert gegen [server/backup.js](LuxStage/server/backup.js).

- [x] **Fotos werden beim Wiederherstellen ERGÄNZT, nicht ersetzt.** — ✅ erledigt (2026-07-26): in `einstellungen.md` (DE+EN) korrigiert (siehe auch Abschnitt R).
- [x] **Das Backup wird vor dem Einspielen geprüft.** — ✅ erledigt (2026-07-26): in `einstellungen.md` (DE+EN) ergänzt.
- [x] **Konkrete Fehlermeldungen dokumentieren** — ✅ erledigt (2026-07-26): alle drei in `einstellungen.md` (DE+EN) aufgelistet.
- [x] **Maximale Backup-Größe beim Wiederherstellen: 500 MB** — ✅ erledigt (2026-07-26): inkl. Hinweis auf Kommandozeilen-Weg ergänzt.
- [x] **Der Dateiname enthält nur das Datum, nicht die Uhrzeit** — ✅ erledigt (2026-07-26): in `einstellungen.md` (DE+EN) ergänzt.
- [x] **Nur Fotos mit den Endungen jpg, jpeg, png, gif, webp werden zurückgespielt** — ✅ erledigt (2026-07-26): ergänzt.
- [x] **Der Server beendet sich nach der Wiederherstellung selbst** — ✅ erledigt (2026-07-26): bereits in Abschnitt R korrigiert.

## W. Grundriss — Hintergrundbild

Verifiziert gegen [server/floorplan.js](LuxStage/server/floorplan.js).

- [x] **Erlaubte Formate: PNG, JPG, SVG, WebP** — ✅ erledigt (2026-07-26): in `grundriss.md` (DE+EN) ergänzt, inkl. Fehlermeldung.
- [x] **Pro Vorlage ist nur EIN Hintergrundbild möglich.** — ✅ erledigt (2026-07-26): Warnbox in `grundriss.md` (DE+EN) ergänzt.
- [x] **Für das Hintergrundbild gibt es keine Größenbeschränkung und keine Komprimierung** — ✅ erledigt (2026-07-26): in derselben Warnbox ergänzt, inkl. Empfehlung zur Vorbereitung.
- [x] **Der Grundriss wird als PNG-Momentaufnahme für den PDF-Export gespeichert** — ✅ erledigt (2026-07-26): geprüft (Snapshot entsteht bei jeder Änderung und beim Öffnen im Grundriss-Tab, über `emit('change'/'snapshot')` in `FloorplanEditor.vue`). In `export-pdf.md` (DE+EN) erklärt.

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