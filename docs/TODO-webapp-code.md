# ToDo — Code-Anpassungen Web-App (abgeleitet aus dem Doku-Review)

Stand: 2026-07-25. Betrifft `LuxStage/web-app/` und punktuell `LuxStage/shared/locales/`.
Diese Punkte lassen sich **nicht durch Dokumentation lösen** — die App selbst ist widersprüchlich, irreführend oder unvollständig.
Ergänzend zu [TODO-doku-review.md](./TODO-doku-review.md).

---

## 1. Falsche Meldungen (Nutzer wird aktiv fehlgeleitet)

### 1.1 Passwort-Fehlermeldung nennt die falsche Zahl — ✅ **erledigt (2026-07-25)**
Statt die Zahl nur zu korrigieren, hat sie jetzt eine einzige Quelle: [shared/constants.js](LuxStage/shared/constants.js) exportiert `PASSWORD_MIN_LENGTH = 8`. Die Locale-Texte nutzen den Platzhalter `{min}`, alle sieben Prüfstellen in Web-App und Server leiten sich von der Konstante ab. Text und Prüflogik können nicht mehr auseinanderlaufen.

<details><summary>Ursprünglicher Befund</summary>

`shared/locales/de.json` / `en.json`, Key `settings.account.change_password.error.short`:
> „Passwort muss mindestens **4** Zeichen lang sein"

Tatsächlich geprüft wird auf **8** — sowohl im Frontend ([AccountView.vue:103](LuxStage/web-app/src/views/settings/AccountView.vue#L103): `if (pwNew.value.length < 8)`) als auch im Server ([routes/auth.js:65](LuxStage/server/routes/auth.js#L65), `:105`, [routes/register.js:40](LuxStage/server/routes/register.js#L40)).

Nutzer gibt 5 Zeichen ein, liest „mindestens 4", versteht die Ablehnung nicht.

**Fix:** Text in beiden Locale-Dateien auf 8 ändern. Einzeiler, höchster Nutzen-Aufwand-Quotient der ganzen Liste.
</details>

**Umgesetzt:**
- Neu: [shared/constants.js](LuxStage/shared/constants.js) mit `PASSWORD_MIN_LENGTH = 8`. Server bindet relativ ein (`../../shared/constants.js`), Web-App über den vorhandenen Vite-Alias `@shared`. Der Dockerfile kopiert `shared/` bereits in beide Stages.
- Locale-Key `settings.account.change_password.error.short` in `de.json` und `en.json` auf `{min}` umgestellt; `t()` ersetzt den Platzhalter.
- Prüfstellen angepasst: [AccountView.vue:104](LuxStage/web-app/src/views/settings/AccountView.vue#L104), [RegisterView.vue:101](LuxStage/web-app/src/views/RegisterView.vue#L101), [ResetPasswordView.vue:74](LuxStage/web-app/src/views/ResetPasswordView.vue#L74), [routes/auth.js:66](LuxStage/server/routes/auth.js#L66), `:106`, [routes/register.js:41](LuxStage/server/routes/register.js#L41).
- Auch die sichtbaren Hinweise „Mindestens 8 Zeichen." in Register- und Reset-Seite lesen jetzt die Konstante. Diese beiden Texte bleiben hardcodiert deutsch — das gehört zu Abschnitt 3.

### 1.2 „Passwort vergessen" verweist an den Admin, obwohl Selbstbedienung existiert — ✅ **erledigt (2026-07-25)**
Der Befund war beim Nachprüfen anders gelagert: `auth.reset.hint` wurde **nirgends gerendert** — ein toter Key, ebenso `auth.reset.title` und `auth.reset.back`. Der eigentliche Fehler lag umgekehrt: der Link auf `/forgot-password` erschien **immer**, auch ohne konfiguriertes SMTP. Dann meldet die Seite „Link verschickt", und es kommt nie eine Mail.

Umgesetzt wie im ToDo vorgeschlagen als Abhängigkeit von der SMTP-Konfiguration.

<details><summary>Ursprünglicher Befund</summary>

Key `auth.reset.hint`:
> „Wende dich an deinen Administrator, um dein Passwort zurücksetzen zu lassen."

Gleichzeitig verlinkt [LoginView.vue:48](LuxStage/web-app/src/views/LoginView.vue#L48) auf `/forgot-password`, und der komplette Flow ist implementiert: [ForgotPasswordView.vue](LuxStage/web-app/src/views/ForgotPasswordView.vue), [ResetPasswordView.vue](LuxStage/web-app/src/views/ResetPasswordView.vue), Server-Endpunkte `/api/auth/forgot-password`, `/api/auth/reset-password/confirm`, `/api/auth/reset-password` ([routes/auth.js:76-113](LuxStage/server/routes/auth.js#L76-L113)), inkl. E-Mail-Versand und 1-Stunden-Token.

**Fix:** `auth.reset.hint` entfernen oder ersetzen. Sinnvoll wäre eine Abhängigkeit von der SMTP-Konfiguration: ist kein SMTP eingerichtet, greift der Admin-Hinweis; sonst der Selbstbedienungs-Flow. Aktuell steht der Hinweis unbedingt da und entwertet ein funktionierendes Feature.
</details>

**Umgesetzt:**
- [email.js](LuxStage/server/email.js) exportiert `isSmtpConfigured()` — prüft nur, ob ein Host gesetzt ist, gibt keine Zugangsdaten preis.
- Neuer öffentlicher Endpunkt `GET /api/auth/capabilities` ([routes/auth.js](LuxStage/server/routes/auth.js)) liefert `{ passwordReset: true|false }` und steht in `PUBLIC_ENDPOINTS` ([router.js](LuxStage/server/router.js)). Bewusst **nicht** an `/api/status` angehängt: das ist laut Router auth-pflichtig und gibt `dataPath` und `diskFree` preis — beides gehört nicht auf eine öffentliche Login-Seite. `/api/smtp` bleibt Admin-only.
- [LoginView.vue](LuxStage/web-app/src/views/LoginView.vue) holt die Capabilities in `onMounted` und zeigt den `/forgot-password`-Link nur bei `passwordReset`; sonst `auth.reset.hint`. Ist der Server nicht erreichbar, bleibt es beim Hinweis — der sichere Ausgang.
- `auth.reset.title` und `auth.reset.back` waren ebenfalls unbenutzt (auch nicht in `LuxStageiOS/`) und wurden aus beiden Locale-Dateien entfernt. `auth.reset.hint` bleibt und wird jetzt erstmals tatsächlich angezeigt.

**Dabei aufgefallen (gehört zu 7.5):** Das Login-Feld ist `type="email"` ([LoginView.vue:17](LuxStage/web-app/src/views/LoginView.vue#L17)). Die Browser-Validierung lehnt `admin` damit ab — das Bootstrap-Konto lässt sich nicht einmal eintippen.

### 1.3 Login-Fehlermeldung sagt „Benutzername", das Feld heißt „E-Mail-Adresse" — ✅ **erledigt (2026-07-25)**
Gelöst zusammen mit 7.5: nicht das Label wurde aufgeweicht, sondern der Installer auf E-Mail umgestellt. Damit gilt in der ganzen Anwendung dieselbe Regel — der Login-Name **ist** die E-Mail-Adresse. Details unter [7.5](#_7-5-login-admin-tech-sind-benutzernamen-punkt-1-3-bestatigt).

<details><summary>Ursprünglicher Befund</summary>

`auth.username` = „E-Mail-Adresse", aber `auth.login.error` = „Anmeldung fehlgeschlagen. Bitte **Benutzername** und Passwort prüfen."

Verschärft dadurch, dass `install.sh` Konten `admin` und `tech` anlegt — ein Erstnutzer weiß nicht, ob er `admin` oder eine E-Mail eintippt.

**Fix:** Meldung auf „E-Mail-Adresse und Passwort prüfen" angleichen. Zusätzlich klären, ob der Installer wirklich reine Benutzernamen anlegt; falls ja, ist das ein eigenständiges Inkonsistenzproblem zwischen Installer und App.
</details>

**Umgesetzt:** `auth.login.error` in beiden Locales auf „E-Mail-Adresse" bzw. „email address" geändert. `auth.username` bleibt „E-Mail-Adresse" — durch die Installer-Änderung (7.5) stimmt das Label jetzt.

---

## 2. Begriffs-Inkonsistenzen **innerhalb der App**

Diese sind der Grund, warum die Doku vier Wörter für eine Sache benutzt. Solange die App uneinheitlich ist, kann die Doku es nicht sein.

### 2.1 „Kategorie" vs. „Position" — ✅ **erledigt (2026-07-25)**
Auf **„Position"** vereinheitlicht, inklusive der Key-Namen und der internen Bezeichner. Das Datenmodell hieß ohnehin schon `position` — auch in iOS (`group.position`), „Kategorie" war reine Oberfläche.

<details><summary>Ursprünglicher Befund</summary>

| Key | Text |
|-----|------|
| `channel.category.add` | „Kategorie hinzufügen" |
| `channel.category.name.placeholder` | „Kategoriename …" |
| `channel.no_category` | „Ohne Kategorie" |
| `channel.position.edit` | „Position umbenennen" |
| `field.position` | „Position" |

Der Nutzer legt eine „Kategorie" an und benennt danach eine „Position" um — dasselbe Objekt.

**Fix:** Auf **„Position"** vereinheitlichen (passt zur Fachsprache und zur bestehenden Doku). Betrifft nur Locale-Strings, kein Datenmodell — die internen Feldnamen können bleiben.
</details>

**Umgesetzt — Locale-Keys umbenannt** in [de.json](LuxStage/shared/locales/de.json), [en.json](LuxStage/shared/locales/en.json) und den beiden iOS-Dateien `locale_de.json` / `locale_en.json`:

| alt | neu | Text (de / en) |
|-----|-----|----------------|
| `channel.no_category` | `channel.no_position` | „Ohne Position" / „No Position" |
| `channel.category.add` | `channel.position.add` | „Position hinzufügen" / „Add position" |
| `channel.category.name.placeholder` | `channel.position.name.placeholder` | „Positionsname …" / „Position name …" |
| `field.category` | — | gelöscht, siehe unten |

**Aufrufer nachgezogen:**
- [ChannelTable.vue](LuxStage/web-app/src/components/channel/ChannelTable.vue): Props `noCategory` → `noPosition`, `addCategory` → `addPosition`, `categoryNamePlaceholder` → `positionNamePlaceholder`. Ebenso die internen Bezeichner `addingCategory` → `addingNewPosition`, `newCategoryName` → `newPositionName`, `startAddCategory` → `startAddPosition`, `saveCategory` → `saveNewPosition`. `addingNewPosition` bewusst nicht `addingPosition`: der Name war schon vergeben und hält die Position, zu der gerade ein Kanal angelegt wird.
- [ShowDetailView.vue](LuxStage/web-app/src/views/ShowDetailView.vue) und [TemplatesView.vue](LuxStage/web-app/src/views/TemplatesView.vue) übergeben die neuen Prop-Namen.
- [ShowDetailView.swift](LuxStageiOS/LuxStageApp/Views/ShowDetailView.swift): einziger iOS-Aufrufer, auf `channel.no_position` umgestellt.

**`field.category` gelöscht** — in allen vier Sprachdateien. Der Key hatte weder in der Web-App noch in iOS einen Aufrufer und stand inhaltsgleich neben `field.position`.

**Nebenbefunde:**
- Der Prop-Default in ChannelTable lautete `addCategory: '+ Kategorie'`, das Template rendert aber bereits `+ {{ labels.addPosition }}` — hätte „+ + Kategorie" ergeben. Plus im Default entfernt.
- TemplatesView übergab `addCategory` und `categoryNamePlaceholder` gar nicht. Bei Objekt-Props greift der Default **nicht** feldweise, das Label war also `undefined` und der Knopf zeigte nur „+". Beide Labels ergänzt.

**Doku und Website angeglichen:** `docs/de/index.md`, `docs/en/index.md` sowie `LuxStage-Website/index.html` und `i18n.js` (`feat_channels_desc`, beide Sprachen) sagten „nach Position, Kategorie und DMX-Adresse" — also beide Wörter für dasselbe. Jetzt nur noch „Position".

### 2.2 Spielort / Bühne / Spielstätte / Theater-Name — ✅ **erledigt (2026-07-26)**

**Befund korrigiert:** Von den acht gelisteten Keys hatten **fünf gar keinen Aufrufer** — `show.assign_template`, `show.venue`, `field.venue`, `template.venue_name`, `template.venue_hall`. Der Nutzer sah nie „Bühne", „Spielstätte", „Theater-Name" oder „Bühnen-Template zuweisen". Der echte Widerspruch war kleiner, aber real: „Spielort" (Show-Dialog) vs. „Bühnen-Template" (Vorlagenliste) vs. „Templates" (Navigation).

Dafür war er an anderer Stelle **größer** als beschrieben: „Bühnen-Template" stand in sieben weiteren, aktiv genutzten Keys (`template.upload.*`, `template.list.empty`, `template.delete.confirm`), und drei `apply_to_shows.*.confirm`-Texte sagten schlicht „Template".

**Gewählter Begriff: „Spielort-Vorlage"** (englisch „venue template"). Deckt sich mit der Doku, die schon überwiegend so schreibt — dort war deshalb kaum etwas zu ändern.

**Umgesetzt in [de.json](LuxStage/shared/locales/de.json) / [en.json](LuxStage/shared/locales/en.json):**

| Key | vorher (de) | nachher (de) |
|-----|-------------|--------------|
| `nav.templates` | Templates | Vorlagen |
| `show.template` | Spielort | Spielort-Vorlage |
| `show.template.none` | Kein Spielort | Keine Spielort-Vorlage |
| `template.new` | Neues Bühnen-Template | Neue Spielort-Vorlage |
| `template.upload.confirm` | Bühnen-Template importieren | Spielort-Vorlage importieren |
| `template.upload.success` | Bühnen-Template erfolgreich importiert. | Spielort-Vorlage erfolgreich importiert. |
| `template.upload.error` | Fehler beim Importieren des Bühnen-Templates. | Fehler beim Importieren der Spielort-Vorlage. |
| `template.list.empty` | Noch keine Bühnen-Templates vorhanden. | Noch keine Spielort-Vorlagen vorhanden. |
| `template.delete.confirm` | Bühnen-Template „{name}" löschen? | Spielort-Vorlage „{name}" löschen? |
| `template.apply_to_shows.{bars,sections,towers}.confirm` | … aus Template "{name}" … | … aus der Vorlage "{name}" … |

Englisch war ebenso zersplittert („Venue" / „stage template" / „template") und ist jetzt durchgehend „venue template". `nav.templates` bleibt englisch „Templates" — dort korrekt und kürzer.

**Tote Keys gelöscht:** `show.venue`, `field.venue`, `show.assign_template`, `template.venue_name`, `show.template.optional` (letzterer fiel zusätzlich auf) aus beiden Web-Sprachdateien.

**iOS:** `show.template` und `show.template.none` sind die einzigen genutzten Keys und wurden mit angeglichen. Darüber hinaus ist der **komplette `template.*`-Block in iOS tot** — 20 Keys ohne Aufrufer, die App hat keine Vorlagen-Ansicht (nur Vorlagenauswahl beim Anlegen über `createShow`). Ebenso `nav.templates`, `show.venue` und `field.venue`. Alle entfernt.

<details><summary>Gelöschte iOS-Keys im Wortlaut (zum Zurückholen, falls eine Vorlagen-Ansicht kommt)</summary>

Die meisten existieren inhaltsgleich in `shared/locales/*.json` weiter — eine künftige iOS-Ansicht sollte die Texte von dort übernehmen. Nur `template.venue_name` und `template.venue_hall` gibt es in der Web-App nicht mehr.

```json
"template.new":                "Neue Vorlage"                                              | "New template"
"template.upload":             "CSV hochladen"                                             | "Upload CSV"
"template.upload.hint":        "Semikolon-getrennte CSV-Datei (UTF-8). Beispieldatei herunterladen." | "Semicolon-separated CSV file (UTF-8). Download example file."
"template.upload.preview":     "Vorschau"                                                  | "Preview"
"template.upload.confirm":     "Vorlage importieren"                                       | "Import template"
"template.upload.success":     "Vorlage erfolgreich importiert."                           | "Template imported successfully."
"template.upload.error":       "Fehler beim Importieren der Vorlage."                       | "Error importing template."
"template.name":               "Vorlagen-Name"                                             | "Template name"
"template.venue_name":         "Theater-Name"                                              | "Theatre name"
"template.venue_hall":         "Saal"                                                      | "Hall"
"template.channels":           "Kanäle"                                                    | "Channels"
"template.custom_fields":      "Bemerkungen"                                               | "Specials"
"template.list.empty":         "Noch keine Vorlagen vorhanden."                            | "No templates yet."
"template.version":            "Version"                                                   | "Version"
"template.created":            "Erstellt"                                                  | "Created"
"template.field_name":         "Feldname"                                                  | "Field name"
"template.field_name.example": "z.B. Portalbrücke"                                         | "e.g. Portal bridge"
"template.unit_hint":          "Einheit (optional)"                                        | "Unit (optional)"
"template.unit_hint.example":  "z.B. Meter"                                                | "e.g. metres"
"template.add_field":          "Feld hinzufügen"                                           | "Add field"

"nav.templates":               "Vorlagen"                                                  | "Templates"
"show.venue":                  "Bühne"                                                     | "Venue"
"field.venue":                 "Spielstätte"                                               | "Venue"
```

Alternativ per Git: `git show <commit>:LuxStageApp/locale_de.json`
</details>

<details><summary>Ursprünglicher Befund</summary>

| Key | Text | Ort |
|-----|------|-----|
| `show.template` | „Spielort" | Show-Anlegen-Dialog |
| `show.template.none` | „Kein Spielort" | ebenda |
| `show.assign_template` | „Bühnen-Template zuweisen" | Show-Karte |
| `show.venue` | „Bühne" | Show-Feld |
| `field.venue` | „Spielstätte" | Kanaltabelle |
| `template.venue_name` | „Theater-Name" | Vorlagen-Detail |
| `template.new` | „Neues Bühnen-Template" | Vorlagen-Liste |
| `nav.templates` | „Templates" | Hauptnavigation |

**Fix:** Einen Begriff festlegen. Empfehlung: **„Spielstätte"** für den Ort, **„Spielstätten-Vorlage"** für das Template-Objekt, `nav.templates` entsprechend auf „Vorlagen". Danach Doku einmalig angleichen.
</details>

### 2.3 Doppelte und tote Tab-Keys
- `tab.buehne` = „Beleuchtungsgestelle" und `tab.towers` = „Beleuchtungsgestelle" — identischer Text, zwei Keys.
- `tab.raum` = „Raum" und `tab.hinweise` = „Hinweise" — werden nur noch über einen **Titel-Stringvergleich** aufgelöst: [ShowDetailView.vue:795](LuxStage/web-app/src/views/ShowDetailView.vue#L795)
  ```js
  icon: s.title === 'Hinweise' ? IconHinweise : s.title === 'Raum' ? IconRaum : IconAufbau,
  ```
  Das Icon hängt am wörtlichen deutschen Abschnittstitel. Benennt ein Nutzer den Abschnitt um oder stellt auf Englisch um, verschwindet das Icon. In einer zweisprachigen App fehlerhaft.

**Fix:** Icon-Zuordnung über einen stabilen Typ/Slug statt über den Anzeigetitel. Ungenutzte Keys entfernen.

---

## 3. Fehlende Übersetzung (bricht die Sprachumschaltung)

Die App bietet eine Sprachwahl, aber mehrere sichtbare Texte sind fest auf Deutsch verdrahtet und ignorieren sie.

| Ort | Text |
|-----|------|
| [ShowHeader.vue:122-123](LuxStage/web-app/src/components/show/ShowHeader.vue#L122-L123) | „Abbrechen", „Speichern" — obwohl `action.cancel` / `action.save` existieren |
| [GassenturmView.vue:130](LuxStage/web-app/src/components/show/GassenturmView.vue#L130) | Platzhalter „Notiz…" |
| [GassenturmView.vue:27,171,178,289](LuxStage/web-app/src/components/show/GassenturmView.vue#L27) | Alle vier `HelpIcon`-Hilfetexte |
| [GeneratedTextAccordion.vue:5-7](LuxStage/web-app/src/components/show/GeneratedTextAccordion.vue#L5-L7) | „Automatisch generiert", „Nur lesbar" |
| [GeneratedTextAccordion.vue](LuxStage/web-app/src/components/show/GeneratedTextAccordion.vue) | Überschriften „Beleuchtungsgestelle", „Obermaschinerie" |
| [RegisterView.vue](LuxStage/web-app/src/views/RegisterView.vue) | Komplette Seite: „Team registrieren", „Fast geschafft", „Team-Kürzel", „Mindestens 8 Zeichen." |
| [ForgotPasswordView.vue](LuxStage/web-app/src/views/ForgotPasswordView.vue) | „Passwort vergessen", „Der Link ist 1 Stunde gültig." |
| [utils/generateHangerei.ts:8](LuxStage/web-app/src/utils/generateHangerei.ts#L8) | `if (cm === 0) return 'Mitte'` sowie „Links" / „Rechts" |

Besonders auffällig: `generateHangerei.ts` unterscheidet bereits die Sprache für das Kanal-Präfix (`Ch.` / `V.`), lässt „Mitte/Links/Rechts" aber deutsch. Halb übersetzte Ausgabe.

**Fix:** Strings in `shared/locales/*.json` überführen. Registrierungs- und Passwort-Seiten priorisieren — sie sind der Ersteindruck für Neukunden.

Ein unübersetzter Key: `show.template.optional` = „Template (optional)" ist in `en.json` identisch. `template.apply_to_shows` existiert nur in `de.json` (Duplikat der `.bars`/`.sections`/`.towers`-Varianten, vermutlich ungenutzt — entfernen).

---

## 4. Offline-Verhalten: Zusage und Realität — ✅ **erledigt (2026-07-25)**

**Befund war teilweise falsch.** Der Banner wird sehr wohl ausgelöst: [App.vue](LuxStage/web-app/src/App.vue) pollt alle 30 Sekunden `/api/status` und setzt dabei `isOnline`. Die Quelle des Flags liegt in [api/client.ts](LuxStage/web-app/src/api/client.ts) — die ursprüngliche Suche lief offenbar gegen `client.js`, die Datei heißt aber `.ts`. Zusätzlich sperrt [ShowDetailView.vue](LuxStage/web-app/src/views/ShowDetailView.vue) den Content-Bereich bei `!isOnline` per `:inert`, das Szenario „Nutzer tippt weiter" war also schon abgedeckt.

<details><summary>Ursprünglicher Befund</summary>

`offline.banner` = „Keine Verbindung zum Server – Änderungen werden nicht gespeichert" ([App.vue:198](LuxStage/web-app/src/App.vue#L198)).

Die FAQ verspricht Offline-Fähigkeit mit späterer Synchronisation. Die Web-App leistet das nicht.

**Zwei Wege — Produktentscheidung:**
- **a)** FAQ korrigieren, Web-App bleibt online-only (Doku-Aufgabe, siehe Doku-ToDo).
- **b)** Offline-Queue implementieren. `api/cache.ts` existiert bereits als Ansatzpunkt. Deutlich größerer Aufwand.

Unabhängig davon: Prüfen, ob der Banner beim Verbindungsverlust zuverlässig erscheint. Im durchgesehenen Code fand sich **kein** `navigator.onLine`-Listener und keine sichtbare Quelle für das Offline-Flag — bitte verifizieren, ob der Banner überhaupt ausgelöst wird. Ein Banner, der nicht erscheint, ist schlimmer als keiner: der Nutzer tippt weiter und verliert die Eingaben.
</details>

**Echte Lücke, die dabei auffiel:** `request()` in [client.ts](LuxStage/web-app/src/api/client.ts) setzte `isOnline` nie. Reißt die Verbindung ab, warf ein Speichervorgang zwar eine Exception, der Banner erschien aber erst beim nächsten Ping — bis zu 30 Sekunden später.

**Umgesetzt (Code):**
- `fetch` in `request()` steht jetzt in einem `try`: ein Netzwerkfehler setzt `isOnline = false` und wirft weiter, eine eingetroffene Antwort setzt `isOnline = true`.
- Bewusst am geworfenen Fehler unterschieden statt am Statuscode: `fetch` wirft nur bei echten Netzwerkfehlern. Ein HTTP 500 heißt, dass der Server antwortet — der darf den Banner nicht auslösen.
- Kein `navigator.onLine`-Listener ergänzt. Der sagt nur etwas über die Netzwerkschnittstelle aus, nicht über die Erreichbarkeit des LuxStage-Servers, und läge damit quer zur bestehenden Ping-Logik.
- `pingServer` in App.vue und LoginView.vue setzen das Flag nun teilweise redundant. Unschädlich, deshalb unverändert gelassen.

**Umgesetzt (Doku, Weg a):** Die Zusage „Änderungen werden synchronisiert, sobald die Verbindung wiederhergestellt ist" stimmte für **keine** der beiden Apps — auch iOS hat nur einen Lese-Cache (`ShowCache` in [LuxStageClient.swift](LuxStageiOS/LuxStageApp/API/LuxStageClient.swift)), keine Schreibqueue.

Die iOS-App kennt überhaupt nur drei schreibende Aufrufe: `patchCheck` (Kanal abhaken), `uploadPhoto` und `deletePhoto`. Kein Bearbeiten von Kanälen, Abschnitten, Shows oder Stammdaten — passend zur Entscheidung, die Kanalansicht read-only zu halten. Die FAQ darf also nicht „offline nicht bearbeitbar" sagen, das legt nahe, es ginge online.

Korrigiert in:
- `LuxStage-Docs/docs/de/faq.md` und `en/faq.md` — nach Plattform getrennt, Bearbeiten ausdrücklich ausgenommen.
- `LuxStage-Website/index.html` und `i18n.js` (`faq_a4`, beide Sprachen) — dort stand derselbe Satz.

`docs/de/guide/index.md` blieb unverändert: „Offline-**Lesemodus**" unter den iOS-Merkmalen ist korrekt.

**Nicht umgesetzt:** Weg b (Offline-Queue). Eigenes Vorhaben mit Konfliktauflösung, nicht Teil dieser Durchsicht.

---

## 5. Funktionen ohne erklärenden Kontext in der App

Kein Bug, aber Supportaufkommen — hier hilft eine kleine UI-Ergänzung mehr als eine Doku-Seite.

### 5.1 „Auf alle Shows anwenden" — Massenoperation ohne Vorschau
`template.apply_to_shows.*`, [TemplatesView.vue:116,231](LuxStage/web-app/src/views/TemplatesView.vue#L116). Der Bestätigungsdialog nennt weder die Zahl der betroffenen Shows noch deren Namen; das Ergebnis erscheint erst danach („{shows} Shows geprüft, {bars} Zugstangen hinzugefügt").

**Fix:** Betroffene Shows **vor** der Ausführung anzeigen. Da nur fehlende Elemente ergänzt werden, ist die Operation ungefährlich — das sollte im Dialog stehen, sonst traut sich niemand.

### 5.2 Farb-Legende nur als Tooltip
`channel.help.status` erklärt Weiß/Grün/Gelb der Kanalnummer — auffindbar nur über das Hilfe-Icon der Spaltenüberschrift. Zentrale Information zum Arbeitsstand.

**Fix:** Dauerhafte Legende erwägen, z. B. neben dem Health-Badge.

### 5.3 Inline-Hilfe ist teils besser als die Doku
Die `HelpIcon`-Texte zu Slot, Farbe, Anzahl und Zuweisung erklären Fachbegriffe präziser als die Doku-Seiten. Sie sind nur unvollständig verteilt: Kanaltabelle und Gassenturm-Ansicht haben sie, Zugstangen, Info-Tab und Grundriss nicht.

**Fix:** `HelpIcon` konsistent auf alle erklärungsbedürftigen Felder ausrollen. Diese Texte lassen sich anschließend direkt in Doku und Glossar übernehmen.

### 5.4 EOS-Import-Dialoge ohne Konsequenzangabe
`eos.import.confirm_empty.message` = „Keine aktiven Kanäle gefunden. Trotzdem importieren?" und `eos.reimport.message` = „Folgende Kanäle spielen in der neuen Version nicht mehr mit: {channels}. Trotzdem importieren?"

Der Nutzer erfährt nicht, was bei „Ja" mit seinen bestehenden Notizen passiert.

**Fix:** Dialogtexte um die Folge ergänzen (z. B. „Notizen bleiben erhalten, der Status wechselt auf inaktiv").

---

## 6. Datenschutz — betrifft die iOS-App, nicht die Web-App

Zur Abgrenzung, da im Doku-Review als schwerwiegendster Punkt geführt: Das OCR-Feature („Aufnahmeplan scannen", Bildübertragung an die Claude API von Anthropic) ist **ausschließlich iOS**. Keiner der neun `ocr.*`-Keys wird in `web-app/src` verwendet; es existiert keine Server-Route dafür. `server/config.js:32` hält lediglich `anthropicApiKey` vor.

**Kein Handlungsbedarf im Web-App-Code.** Der Punkt gehört in die Datenschutzerklärung und die iOS-Doku.

---

---

## 7. Nachtrag aus Runde 3 (Dateien vollständig gelesen)

### 7.1 „Fotos pro Druckseite" wirkt im PDF-Export nicht — ✅ **erledigt (2026-07-25)**
Beide Hälften behoben: Der Wert liegt jetzt serverseitig und wird an den PDF-Export übergeben.

<details><summary>Ursprünglicher Befund</summary>

[server/pdf.js:314-316](LuxStage/server/pdf.js#L314-L316):
```js
const PHOTOS_PER_PAGE = 4
const COLS = 2
const ROWS = 2
```
Fest verdrahtet. Die Einstellung aus [usePhotoSettings.ts](LuxStage/web-app/src/composables/usePhotoSettings.ts) (`VALID = [1, 2, 4, 6, 8, 9, 12]`) wird in `pdf.js` **nirgends gelesen** und auch nicht an den Server übertragen — sie liegt nur im `localStorage` und wirkt ausschließlich auf die Browser-Druckansicht ([PhotoGallery.vue:165](LuxStage/web-app/src/components/show/PhotoGallery.vue#L165)).

Der Nutzer stellt in den Einstellungen 9 ein, exportiert ein PDF und bekommt 4 pro Seite. Der Hinweistext sagt „Wie viele Fotos sollen beim Drucken auf eine A4-Seite passen" — für den PDF-Export schlicht unwahr.

**Fix:** Wert an den PDF-Endpunkt übergeben und `COLS`/`ROWS` daraus ableiten (1→1×1, 2→1×2, 4→2×2, 6→2×3, 8→2×4, 9→3×3, 12→3×4). Alternativ die Einstellung ausdrücklich auf den Browser-Druck beschränken und im Hinweistext benennen.

Zusatz: Die Einstellung liegt nur im `localStorage`, gilt also **pro Browser**, nicht pro Konto — obwohl sie unter „Konto" steht. Bei Gerätewechsel ist sie weg.
</details>

**Umgesetzt:**
- **Speicherort:** Neuer `settings`-Eintrag `display.photos_per_page`, gelesen und geschrieben über die vorhandene Route `/api/settings/display` ([routes/display.js](LuxStage/server/routes/display.js)) — dasselbe Muster wie `display.measure_unit`. POST validiert gegen `[1, 2, 4, 6, 8, 9, 12]` und akzeptiert beide Felder jetzt einzeln.
- **Composable:** [usePhotoSettings.ts](LuxStage/web-app/src/composables/usePhotoSettings.ts) nach dem Vorbild von `useMeasureUnit` umgebaut — `localStorage` nur noch als Cache für den ersten Render, maßgeblich ist der Server. Der `watch` wich einem expliziten `setPhotosPerPage()`.
- **PDF:** `generatePDF` nimmt `photosPerPage` als neunten Parameter ([pdf.js:66](LuxStage/server/pdf.js#L66)), `COLS`/`ROWS` werden daraus abgeleitet. Die Route reicht `getPhotosPerPage()` durch.
- **Raster:** bewusst identisch zur Browser-Druckansicht (`photoCols` in [PhotoGallery.vue:173](LuxStage/web-app/src/components/show/PhotoGallery.vue#L173)) statt der im ToDo skizzierten Zuordnung — 1→1×1, 2→2×1, 4→2×2, 6→3×2, 8/9→3×3, 12→3×4. Eine Einstellung, ein Ergebnis in beiden Ausgaben.
- **Platzierung:** Die Einstellung wanderte von „Konto" nach **Einstellungen → Anzeige**, zu Sprache und Maßeinheit — sie gilt jetzt instanzweit. Hinweistext in beiden Locales ergänzt um PDF-Export und „Gilt für alle Nutzer".

### 7.2 Kürzel „C" für Kanal platzieren greift im Normalfall nicht — ✅ **erledigt (2026-07-25)**
Bedingung `activeTool.value !== 'select'` entfernt, Großbuchstabe ergänzt. Das Kürzel verhält sich jetzt wie `V`/`H`/`L`/`R`/`E`/`T` und wie der Sidebar-Button, der `activeTool` ohnehin bedingungslos setzt.

<details><summary>Ursprünglicher Befund</summary>

[FloorplanEditor.vue:1447](LuxStage/web-app/src/components/FloorplanEditor.vue#L1447):
```js
if (e.key === 'c' && activeTool.value !== 'select') { activeTool.value = 'channel'; return }
```
Zwei Probleme:
1. Die Bedingung `activeTool.value !== 'select'` verhindert das Kürzel genau dann, wenn das **Standardwerkzeug** aktiv ist. Der Nutzer öffnet den Grundriss, drückt `C` — nichts passiert.
2. Nur Kleinbuchstabe `c` wird geprüft. Alle anderen Werkzeuge akzeptieren beide Schreibweisen (`'v' || 'V'`, `'h' || 'H'` …). Bei aktiviertem Caps Lock funktioniert `C` als einziges Werkzeug nicht.

Vermutlich sollte die Bedingung eine Kollision mit Strg+C abfangen — das erledigt aber bereits der `!e.ctrlKey && !e.metaKey`-Block darüber ([:1440](LuxStage/web-app/src/components/FloorplanEditor.vue#L1440)).

**Fix:** `if (e.key === 'c' || e.key === 'C') { activeTool.value = 'channel'; return }`
</details>

**Umgesetzt:** [FloorplanEditor.vue:1447](LuxStage/web-app/src/components/FloorplanEditor.vue#L1447) lautet jetzt genau so. Strg+C bleibt unberührt — der umschließende `!e.ctrlKey && !e.metaKey`-Block fängt es bereits ab ([:1440](LuxStage/web-app/src/components/FloorplanEditor.vue#L1440)).

### 7.3 Abschnittsicons hängen an deutschen Titeln — siehe 2.3
Bestätigt: [ShowDetailView.vue:795](LuxStage/web-app/src/views/ShowDetailView.vue#L795) vergleicht `s.title === 'Hinweise'` / `=== 'Raum'`.

### 7.4 Leere Datei
[composables/floorplan/useFloorplanState.ts](LuxStage/web-app/src/composables/floorplan/useFloorplanState.ts) hat **0 Zeilen**. Entweder Refactoring-Rest oder unfertige Auslagerung aus der 1535 Zeilen langen `FloorplanEditor.vue`. Entfernen oder füllen.

### 7.5 Login: `admin`/`tech` sind Benutzernamen — ✅ **erledigt (2026-07-25)**
Entscheidung: nicht das Feldlabel aufweichen, sondern den Installer an die App angleichen. Die E-Mail-Adresse ist jetzt überall der Login-Name.

<details><summary>Ursprünglicher Befund</summary>

[bootstrap.js](LuxStage/server/bootstrap.js) legt an: `INSERT INTO users (username, password, role)` mit den Werten `'admin'` und `'tech'`. Es gibt **keine E-Mail-Adresse**.

Damit ist geklärt: `auth.username` = „E-Mail-Adresse" ist **falsch**, die Fehlermeldung „Benutzername" ist **richtig**. Nach der Standardinstallation kann sich niemand anmelden, der dem Feldlabel vertraut.

**Fix:** `auth.username` auf „Benutzername oder E-Mail" ändern (Benutzerverwaltung und Registrierung arbeiten mit E-Mail, Bootstrap-Konten nicht). Vorher prüfen, ob `routes/auth.js` beide Formen akzeptiert.
</details>

**Vorher geprüft:** `login()` in [auth.js:59](LuxStage/server/auth.js#L59) fragt ausschließlich `WHERE username = ?` ab — beide Formen zu akzeptieren hätte eine Server-Änderung erfordert. `users.username` ist der Primärschlüssel, `email` nur ein Zusatzfeld. Benutzerverwaltung ([routes/users.js:49](LuxStage/server/routes/users.js#L49)) und Registrierung ([routes/register.js:83](LuxStage/server/routes/register.js#L83)) setzen `username = E-Mail`. Nur `bootstrap.js` wich davon ab. Verschärfend: das Login-Feld ist `type="email"`, der Browser hätte `admin` gar nicht durchgelassen.

**Umgesetzt — Installer statt Label:**
- [bootstrap.js](LuxStage/server/bootstrap.js) verlangt jetzt `ADMIN_EMAIL`, validiert das Format und legt den Admin mit `username = email = ADMIN_EMAIL` an. Das `tech`-Konto entfällt ersatzlos — Techniker legt der Admin über die Benutzerverwaltung an, dort mit echter E-Mail und Willkommens-Mail. Ein Zufallspasswort im Terminal weniger.
- [install.sh](LuxStage/install.sh) fragt die Admin-E-Mail ab (drei Versuche, Formatprüfung), reicht sie an bootstrap weiter und nennt sie in der Abschlussausgabe. `TECH_PASSWORD` entfernt.
- [entrypoint.sh](LuxStage/entrypoint.sh) prüft `ADMIN_EMAIL` und `ADMIN_PASSWORD` gemeinsam; `.env.example` dokumentiert `ADMIN_EMAIL` als Pflichtfeld.
- Installationsdoku in [de](LuxStage-Docs/docs/de/guide/installation.md) und [en](LuxStage-Docs/docs/en/guide/installation.md) angepasst: Zugangsdaten-Tabelle ohne `admin`/`tech`, Rollen-Tabelle ohne Benutzernamen-Spalte, Hinweis auf Einstellungen → Benutzer.

**Offen — Bestandsinstallationen:** `INSERT OR IGNORE` legt nichts Neues an. Wer bereits mit `admin` installiert hat, behält diesen Login und kann sich wegen `type="email"` nicht mehr anmelden. Das braucht eine Migration oder einen Hinweis in den Release-Notes — siehe Rückfrage unten.

### 7.6 Verlauf deckt nur Kanäle und Abschnitte ab — ✅ **erledigt (2026-07-25)**
Befund bestätigt. Beim Umsetzen zusätzlich aufgefallen: `restoreHistoryEntry` sichert den aktuellen Stand **nicht** vorher als Version — er ist nach dem Wiederherstellen weg, sofern nicht zufällig schon ein Snapshot davon existierte. Deshalb Rückfrage statt Ein-Klick-Aktion.

<details><summary>Ursprünglicher Befund</summary>

[history.js](LuxStage/server/history.js) speichert ausschließlich `channels` und `sections`. **Nicht** enthalten: Fotos, Grundriss, Zugstangen, Beleuchtungsgestelle.

Die UI beschriftet die Funktion aber als „Versionsverlauf" (`history.title`) ohne Einschränkung. Wer eine Version wiederherstellt, erwartet vermutlich den kompletten Show-Zustand.

**Fix (UI):** Im Wiederherstellen-Dialog benennen, was zurückgesetzt wird — und was unberührt bleibt. Zusätzlich: Verlauf ist auf **50 Einträge** begrenzt (`MAX_HISTORY`), ältere verschwinden. Das sollte im Panel sichtbar sein.
</details>

**Umgesetzt:**
- Fußzeile unter der Snapshot-Liste in [HistorySlideOver.vue](LuxStage/web-app/src/components/show/HistorySlideOver.vue) nennt Takt und Limit: „Automatisch alle 10 Minuten, maximal 50 Versionen. Ältere werden entfernt." (`history.limit`). Steht auch bei leerer Liste, wo die Erklärung am meisten hilft.
- Über dem Wiederherstellen-Knopf in der Detailansicht steht der Umfang (`history.scope`): setzt Kanäle und Abschnitte zurück, Fotos/Grundriss/Türme/Stammdaten bleiben unverändert.
- Wiederherstellen löst nicht mehr direkt aus, sondern öffnet den vorhandenen [ConfirmDialog.vue](LuxStage/web-app/src/components/ConfirmDialog.vue) mit denselben Angaben (`history.confirm.title`, `history.confirm.message`). Erst dessen Bestätigung emittiert `restore`.
- Neue Keys in [de.json](LuxStage/shared/locales/de.json) und [en.json](LuxStage/shared/locales/en.json); Abbrechen nutzt das bestehende `action.cancel`. Labels werden wie bisher aus [ShowDetailView.vue](LuxStage/web-app/src/views/ShowDetailView.vue) hereingereicht, die Defaults der Komponente entsprechend ergänzt.
- Der Panel-Zustand `confirmOpen` wird beim Öffnen und Schließen des Sheets zurückgesetzt.

Der ungesicherte Stand vor dem Restore wurde direkt im Anschluss als `3d` mitbehoben, siehe unten.

### 3d Restore überschrieb den aktuellen Stand ungesichert — ✅ **erledigt (2026-07-25)**
Beim Umsetzen von 7.6 aufgefallen: `restoreHistoryEntry` schrieb sofort über Kanäle und Abschnitte. Der Stand davor war weg, sofern der 10-Minuten-Takt ihn nicht zufällig schon erfasst hatte — genau in der Situation, in der man gerade etwas kaputtgemacht hat und deshalb zurückspringt, ist das am wahrscheinlichsten.

**Umgesetzt:**
- `restoreHistoryEntry` ruft in [history.js](LuxStage/server/history.js) jetzt `takeSnapshotNow(slug, true)` auf, bevor überschrieben wird. Bewusst **vor** der Transaktion: `takeSnapshotNow` öffnet eine eigene, und better-sqlite3 erlaubt keine verschachtelten.
- Doppelte Einträge entstehen nicht — `takeSnapshotNow` vergleicht selbst gegen den letzten Snapshot und legt bei Gleichstand keinen an.
- Neuer Parameter `includeArchived` (Default `false`): `takeSnapshotNow` filterte bisher auf `archived = 0`. Da das Frontend archivierte Shows nicht sperrt, wäre die Sicherung dort sonst still ausgefallen. Der bestehende Aufrufer in [routes/history.js](LuxStage/server/routes/history.js) nutzt weiter den Default, damit archivierte Shows keine Snapshots sammeln.
- `history.confirm.message` nennt die Sicherung jetzt in beiden Sprachen.

**Bekannte Nebenwirkung:** Der Sicherungs-Snapshot zählt gegen `MAX_HISTORY` und kann den ältesten Eintrag verdrängen. Bewusst in Kauf genommen.

---

## 8. Nachtrag aus Runde 4 (Settings-Views, Listen)

### 8.1 Server-URL wird ohne Prüfung sofort übernommen — **Risiko**
[ServerView.vue:16,68-70](LuxStage/web-app/src/views/settings/ServerView.vue#L68-L70):
```js
<Input ... @change="applyServer" />
function applyServer() { setServerUrl(serverUrl.value) }
```
Kein Speichern-Button, keine Erreichbarkeitsprüfung, keine Rückfrage. Ein Tippfehler wird beim Verlassen des Feldes wirksam — danach erreicht die App keinen Server mehr, und die Einstellungsseite selbst ist Teil derselben App. Der Wert steckt im `localStorage` (`server_url`); Laien kommen ohne Entwicklerwerkzeuge nicht mehr heraus.

**Fix:** Vor dem Übernehmen `/api/status` gegen die neue Adresse prüfen und bei Fehlschlag mit Rückfrage abbrechen. Mindestens einen „Zurücksetzen"-Knopf anbieten.

### 8.2 Backup-Download für alle Rollen — ✅ **erledigt (2026-07-25), Öffnung am selben Tag zurückgenommen**
Geprüft: `/api/backup` verlangte serverseitig `requireAdmin`, kein Datenabfluss. Die Freigabe für Techniker wurde umgesetzt und nach einem Sicherheitshinweis **wieder zurückgenommen** — Begründung unten. Endstand: `GET /api/backup` und `POST /api/restore` beide `requireAdmin`.

<details><summary>Ursprünglicher Befund</summary>

[BackupView.vue:21](LuxStage/web-app/src/views/settings/BackupView.vue#L21) schützt nur das **Wiederherstellen** per `v-if="isAdmin"`. Der Download-Bereich darüber ist ungeschützt: Jeder angemeldete Benutzer, auch mit Rolle `techniker`, lädt die vollständige Datenbank samt aller Fotos als ZIP.

Ob der Server das erlaubt, ist hier nicht geprüft — `v-if` allein ist ohnehin keine Zugriffskontrolle. **Serverseitige Berechtigung auf `/api/backup` verifizieren.** Falls beabsichtigt, gehört es dokumentiert; falls nicht, ist es eine Datenabfluss-Lücke.
</details>

**Zwischenstand (verworfen):** `GET /api/backup` rief kurzzeitig `requireAuth` statt `requireAdmin`.

**Endstand — Öffnung zurückgenommen:** Ein Sicherheitshinweis führte zu einer Prüfung von [backup.js](LuxStage/server/backup.js), die bei der ursprünglichen Entscheidung fehlte. `streamBackup` packt die vollständige `luxstage.db` ins ZIP — also auch die `users`-Tabelle mit **allen bcrypt-Hashes**, die Reset-Tokens und die Settings. Rollen gibt es nur zwei ([routes/users.js:47](LuxStage/server/routes/users.js#L47): `admin`, `techniker`). Ein Techniker mit Backup-Zugriff könnte die Admin-Hashes offline angreifen und sich so selbst zum Admin machen — Rechteausweitung, nicht nur ein Datenabfluss.

Der fachliche Wunsch war „Techniker soll ein Backup ziehen können", nicht „Techniker darf Admin-Hashes lesen". Deshalb: [routes/system.js](LuxStage/server/routes/system.js) nutzt für beide Endpunkte wieder `requireAdmin`, der `requireAuth`-Import ist entfernt, der Grund steht als Kommentar am Endpunkt.

**Frontend nachgezogen**, damit Techniker nicht in ein 403 laufen:
- Download-Block in [BackupView.vue](LuxStage/web-app/src/views/settings/BackupView.vue) bekommt `v-if="isAdmin"` wie der Restore-Block darunter.
- Backup-Route in [router/index.ts](LuxStage/web-app/src/router/index.ts) trägt jetzt `meta: { adminOnly: true }`. Der Guard existierte bereits und lenkt Nicht-Admins nach `settings-account` — nur Backup fehlte in der Liste.
- Menüeintrag in [App.vue](LuxStage/web-app/src/App.vue) und [SettingsView.vue](LuxStage/web-app/src/views/SettingsView.vue) in die bestehende `isAdmin`-Gruppe verschoben, sonst führte der Punkt für Techniker auf eine leere Seite.

Das `v-if` ist neben dem Guard redundant, bleibt aber als zweite Ebene stehen — dem Muster der übrigen Admin-Views entsprechend.

### 8.3 SMTP-Passwortfeld: stilles Beibehalten
[SmtpView.vue:82-83](LuxStage/web-app/src/views/settings/SmtpView.vue#L82-L83) lädt die Konfiguration, setzt `pass: ''` und zeigt `••••••••` nur als Platzhalter. Beim Speichern mit leerem Feld bleibt das alte Passwort erhalten — sinnvolles Verhalten, aber für den Nutzer nicht erkennbar. Ein Hinweis wie „Leer lassen, um das gespeicherte Passwort beizubehalten" würde genügen.

### 8.4 `prompt()` für die Test-Mail-Adresse
[SmtpView.vue:102](LuxStage/web-app/src/views/settings/SmtpView.vue#L102):
```js
const to = prompt('Test-Mail senden an:', userEmail.value || '')
```
Drei Probleme: hardcodiert deutsch (umgeht die Sprachwahl), nativer Browser-Dialog statt der vorhandenen Dialog-Komponenten, und keine Formatprüfung der Adresse. Die App bringt `useConfirm` und `Dialog` bereits mit.

### 8.5 Weitere hardcodierte deutsche Strings (Ergänzung zu Abschnitt 3)
| Ort | Text |
|-----|------|
| [ShowsView.vue:26-35](LuxStage/web-app/src/views/ShowsView.vue#L26-L35) | Spaltenköpfe „Name", „Stand", „Spielzeit", „Bearbeitung" |
| [UpdateView.vue:51](LuxStage/web-app/src/views/settings/UpdateView.vue#L51) | „✗ Fehler" |
| [SmtpView.vue:102](LuxStage/web-app/src/views/settings/SmtpView.vue#L102) | „Test-Mail senden an:" |

Besonders auffällig bei den Spaltenköpfen: `field.name`, `field.date` und `show.header.last_updated` existieren bereits als Locale-Keys, werden hier aber nicht verwendet.

**Ergänzung (bei 2.1 aufgefallen, 2026-07-25): deutsche `labels`-Prop-Defaults in acht Komponenten.**

Betroffen: `ChannelTable.vue` sowie `ShowSidebar.vue`, `HistorySlideOver.vue`, `SectionEditor.vue`, `ShowHeader.vue`, `PhotoGallery.vue`, `ShowActionBar.vue`, `ShowHealthBadge.vue` (alle unter `web-app/src/components/`). Beispiel aus ChannelTable:

```js
labels: {
  type: Object,
  default: () => ({
    channel: 'Kanal', color: 'Farbe', device: 'Gerät', …
  }),
}
```

Zwei Probleme:
1. Die Defaults umgehen die Sprachwahl vollständig — die einzige echte Quelle ist `t()` aus `useLocale`.
2. Sie schützen nicht einmal zuverlässig: Vue ersetzt Objekt-Defaults **nicht feldweise**. Übergibt ein Aufrufer `labels` ohne einen bestimmten Schlüssel, ist das Feld `undefined`, nicht der Default. Genau das war bei TemplatesView der Fall (siehe 2.1) — der Default suggerierte eine Absicherung, die es nicht gab.

**Ergänzung (bei 2.2 aufgefallen): fehlender Locale-Key wird als roher Key angezeigt.**

[TemplatesView.vue:408](LuxStage/web-app/src/views/TemplatesView.vue#L408) ruft `t('zugstange.field.length')` auf. Den Key gibt es nicht — vorhanden sind nur `zugstange.field.length_cm` und `zugstange.field.length_unit`. Der Nutzer sieht in der Vorlagen-Ansicht wörtlich „zugstange.field.length". Da die Einheit im Template daneben schon in Klammern steht (`({{ unit }})`), passt hier `zugstange.field.length_cm` nicht; sinnvoll wäre ein neuer Key „Länge" ohne Einheit oder der Wechsel auf `length_unit` samt Entfernen der Klammer.

**Fix:** `labels` auf `required: true` ohne Default. Fehlende Schlüssel fallen dann in der Konsole auf, statt still deutschen oder leeren Text zu zeigen. Vorher je Komponente prüfen, welche Aufrufer welche Schlüssel tatsächlich übergeben — bei TemplatesView fehlen z. B. sämtliche `*Help`-Labels, dort vermutlich beabsichtigt.

### 8.6 Rollback-Erkennung über Textvergleich — **fragil**
[UpdateView.vue:193](LuxStage/web-app/src/views/settings/UpdateView.vue#L193):
```js
updateMsg.value = msg.includes('wiederhergestellt') || msg.includes('restored')
  ? t('settings.update.rollback') : ...
```
Ob ein automatischer Rollback stattfand, wird an deutschen bzw. englischen Wörtern in der Server-Fehlermeldung erkannt. Ändert jemand die Server-Formulierung, sieht der Admin statt „Update fehlgeschlagen — automatisch wiederhergestellt" eine rohe Fehlermeldung und weiß nicht, ob der Server noch läuft.

**Fix:** Server soll ein maschinenlesbares Feld liefern (z. B. `{ error, rolledBack: true }`) statt einer Textprüfung.

### 8.7 Archiv ohne Sortierung
`ArchiveView.vue` enthält weder Sortier- noch Suchlogik, während [ShowsView.vue](LuxStage/web-app/src/views/ShowsView.vue) beides bietet. Bei wachsendem Archiv — der Ort, an dem sich über Jahre alles ansammelt — wird das zum Problem. Kein Bug, aber die naheliegendste funktionale Lücke der Web-App.

---

## 9. Nachtrag aus Runde 5 (Fotos, Backup, Grundriss)

Betrifft überwiegend `server/`, wirkt sich aber unmittelbar in der Web-App aus.

### 9.1 Gleichnamige Fotos überschreiben sich stillschweigend — ✅ **erledigt (2026-07-25)**
`savePhoto` in [photos.js](LuxStage/server/photos.js) zählt bei Kollision hoch: `IMG_0001.jpg` → `IMG_0001_2.jpg` → `IMG_0001_3.jpg`. Geprüft wird sowohl der Bild- als auch der Thumbnail-Name.

<details><summary>Ursprünglicher Befund</summary>

[photos.js:25-27](LuxStage/server/photos.js#L25-L27):
```js
const safeName = path.basename(filename).replace(/[^a-zA-Z0-9._-]/g, '_')
const outName = safeName.replace(/\.[^.]+$/, '.jpg')
```
Der Dateiname wird bereinigt, aber nicht eindeutig gemacht. Zwei Uploads namens `IMG_0001.jpg` — das zweite ersetzt das erste ohne Rückfrage und ohne Hinweis.

Praxisnah, weil Kameras und Telefone fortlaufend gleiche Namen vergeben: Zwei Beleuchter laden Fotos derselben Produktion hoch, ein Teil verschwindet unbemerkt. Verschärft dadurch, dass die Umbenennung auf `.jpg` Kollisionen zusätzlich erzeugt (`plan.png` und `plan.jpg` werden beide zu `plan.jpg`).

**Fix:** Zeitstempel oder UUID an den Dateinamen hängen, oder bei Kollision hochzählen. Die Anzeige nutzt ohnehin die Beschriftung, nicht den Dateinamen.
</details>

**Umgesetzt:** neue Hilfsfunktionen `uniqueName(dir, name)` und `exists(p)` in [photos.js](LuxStage/server/photos.js). `savePhoto` ermittelt den Zielnamen darüber, bevor `sharp` schreibt. Bestehende Dateien bleiben unverändert; `plan.png` und `plan.jpg` kollidieren nicht mehr.

### 9.2 Fotos werden beim Wiederherstellen ergänzt statt ersetzt — **Erwartungslücke**
[backup.js:147-156](LuxStage/server/backup.js#L147-L156) entpackt Fotos in den bestehenden Ordner. Die Datenbank wird atomar ausgetauscht, der Fotobestand nicht bereinigt.

Folge: Nach der Wiederherstellung eines älteren Backups liegen Fotos im Verzeichnis, die keine Entsprechung mehr in der Datenbank haben — sie belegen Platz, tauchen aber nirgends auf. Der Bestätigungstext verspricht „Alle aktuellen Daten werden durch das Backup ersetzt".

**Fix:** Entweder Fotoordner vor dem Entpacken leeren (dann stimmt die Zusage), oder den Bestätigungstext präzisieren. Erste Variante braucht Sorgfalt — bei Abbruch nach dem Leeren wäre der Bestand weg.

### 9.3 Backup-Dateiname ohne Uhrzeit
[backup.js:188](LuxStage/server/backup.js#L188): `new Date().toISOString().slice(0, 10)` liefert nur `2026-07-25`. Zwei Sicherungen am selben Tag heißen identisch; der Browser hängt bestenfalls `(1)` an, im ungünstigen Fall wird überschrieben. `features.md` verspricht ausdrücklich einen Zeitstempel.

**Fix:** Uhrzeit ergänzen, z. B. `luxstage-backup-2026-07-25_1430.zip`.

### 9.4 Harte 500-MB-Grenze beim Wiederherstellen
[backup.js:46](LuxStage/server/backup.js#L46). Da jedes Foto rund 300–800 KB belegt, ist die Grenze bei mehreren tausend Fotos erreichbar — also nach einigen Spielzeiten. Das Backup **erstellen** ist unbegrenzt; nur das Zurückspielen scheitert. Ein Nutzer merkt das erst im Ernstfall.

**Fix:** Grenze anheben oder konfigurierbar machen; mindestens eine verständliche Fehlermeldung samt Hinweis auf den manuellen Weg. Aktuell kommt nur „Upload zu groß".

### 9.5 Hintergrundbild des Grundrisses ohne Größenbegrenzung
[floorplan.js:30](LuxStage/server/floorplan.js#L30) schreibt die Datei unverändert. Fotos durchlaufen `sharp` (1500 px, Qualität 70), Hintergrundbilder nicht — obwohl gerade dort große Scans zu erwarten sind. Zusammen mit `Cache-Control: no-cache` ([floorplan.js:85](LuxStage/server/floorplan.js#L85)) wird das Bild bei jedem Öffnen neu übertragen.

**Fix:** Rastergrafiken durch dieselbe `sharp`-Pipeline schicken (SVG ausgenommen) und Zwischenspeichern erlauben.

### 9.6 PDF-Grundriss stammt aus einer gespeicherten Momentaufnahme
`saveFloorplanSnapshot` ([floorplan.js:48](LuxStage/server/floorplan.js#L48)) legt eine `snapshot.png` ab, die der PDF-Export verwendet. Wann diese entsteht, ist hier nicht abschließend geprüft. Falls sie nur beim Anzeigen des Grundrisses aktualisiert wird, enthält ein PDF nach Änderungen einen veralteten Plan — ohne jeden Hinweis.

**Zu prüfen:** Auslöser der Snapshot-Erzeugung. Falls die Vermutung zutrifft: vor dem PDF-Export neu erzeugen oder den Stand im PDF datieren.

## Empfohlene Reihenfolge

| # | Maßnahme | Aufwand | Wirkung |
|---|----------|---------|---------|
| ~~0~~ | ~~8.2 Backup-Download-Rechte serverseitig prüfen~~ | ✅ | Backup bleibt Admin-only (ZIP enthält Passwort-Hashes); UI nachgezogen |
| ~~0b~~ | ~~9.1 Fotos eindeutig benennen~~ | ✅ | Kollisionen zählen jetzt hoch |
| ~~1~~ | ~~1.1 Passwort-Meldung 4 → 8~~ | ✅ | Zahl kommt jetzt aus `PASSWORD_MIN_LENGTH` |
| ~~1b~~ | ~~7.2 Kürzel „C" im Grundriss~~ | ✅ | Bedingung entfernt, Caps ergänzt |
| ~~2~~ | ~~1.2 `auth.reset.hint` korrigieren~~ | ✅ | Reset-Link jetzt an SMTP-Konfiguration gekoppelt |
| ~~3~~ | ~~1.3 / 7.5 Login-Feldbeschriftung~~ | ✅ | Installer legt Admin jetzt mit E-Mail an |
| 3a | **7.5 Rest:** Bestandskonto `admin` nach Update nicht mehr anmeldbar | offen | Muss vor dem nächsten Release geklärt werden |
| ~~3b~~ | ~~7.1 Fotos pro Seite im PDF~~ | ✅ | Wert serverseitig, PDF liest ihn |
| ~~3c~~ | ~~7.6 Verlaufs-Umfang benennen~~ | ✅ | Limit, Umfang und Rückfrage im Panel |
| ~~3d~~ | ~~Restore überschreibt den aktuellen Stand ungesichert~~ | ✅ | Sicherungs-Snapshot vor dem Überschreiben |
| ~~4~~ | ~~4. Offline-Banner verifizieren~~ | ✅ | Banner funktionierte; Netzfehler melden jetzt sofort, FAQ korrigiert |
| ~~5~~ | ~~2.1 Kategorie → Position~~ | ✅ | Keys, Props und interne Namen vereinheitlicht |
| ~~7~~ | ~~2.2 Spielort-Begriffe vereinheitlichen~~ | ✅ | „Spielort-Vorlage" in Web + iOS; Doku zieht im Doku-Review nach |
| 8 | 2.3 Icon-Zuordnung entkoppeln | Stunden | Behebt Bug bei Sprachumschaltung |
| 9 | 3. übrige hardcodierte Strings | Halber Tag | Vollständige Zweisprachigkeit |
| 10 | 5.x UI-Kontext ergänzen | Nach Bedarf | Reduziert Supportfragen |
| 11 | 3. i18n Register/Forgot-Seiten | Halber Tag | Ersteindruck für EN-Neukunden |

Die Punkte 1–3 sind reine Textänderungen in `shared/locales/*.json` und zusammen in unter einer Stunde erledigt.

**Hinweis:** Die Begriffsvereinheitlichung (2.1, 2.2) sollte **vor** der Doku-Überarbeitung erfolgen — sonst wird die Doku zweimal geschrieben.

**Anweisung:** Nach jedem Punkt einen commit machen ohne Versionserhöhung
