# LuxStage Android — Vorgehensplan

Ziel: funktionale 1:1-Kopie der iOS-App (LuxStageApp) als native Android-App.

## Tech-Stack
- Kotlin + Jetpack Compose (nativ), Material 3 statt HIG
- Repo: `LuxStageAndroid/`
- Kein Server-Rewrite — bestehende REST/SSE-API aus `server/routes/` wird direkt genutzt
- Min-SDK 34 (Android 14), Retrofit + OkHttp + Coil + CameraX

## Architektur (steht bereits)
- `network/LuxStageClient.kt`, `network/LuxStageApi.kt` — REST-Client (Pendant zu `LuxStageClient.swift`)
- `network/sse/ShowEventsClient.kt` — SSE-Client (Pendant zu `SSEClient.swift`)
- `data/model/` — Kotlin Data Classes (Pendant zu `Models.swift`)
- `data/repository/AuthStore.kt` — Token/Server-URL, verschlüsselt
- `ui/screens/` — ein Compose-Screen pro iOS-View
- `MainActivity.kt` — NavHost, zentrale Navigation

## Bereits fertig ✅
| iOS View | Android Screen | Status |
|---|---|---|
| LoginView | LoginScreen.kt | ✅ Login, Server-URL-Validierung |
| ShowsListView | ShowsListScreen.kt | ✅ Liste laden |
| ShowDetailView (Kanalliste + Einleuchten) | ShowDetailScreen.kt | ✅ Kanalliste, Checks, Realtime-Sync (SSE bidirektional); Show-TabBar (Setup/Einleuchten/OSC/Suche); Aufbau-Sections im Setup-Tab (Etappe 3b) |
| MarkdownTextView (TipTap-Renderer) | data/TipTap.kt + ui/components/TipTapSectionCards.kt | ✅ TipTap-JSON-Parser, Karten-Rendering, abhakbare Listen und Tabellenzellen (Etappe 3b) |
| MainTabView / ShowContainerView (TabBars) | MainScaffold.kt / ShowDetailScreen.kt | ✅ Root- + Show-Bottom-Nav (Etappe 0), Offline-Indikatoren (Etappe 9) |
| CacheStore / ShowCache / NetworkMonitor | data/repository/{CacheStore,ShowCache,NetworkMonitor}.kt | ✅ Offline-Cache mit iOS-Keys, Server-Ping alle 30 s (Etappe 9) |
| StandaloneOSCView | osc/StandaloneOSCScreen.kt | ✅ Venue-Picker, Subnetz-Erkennung, teilt `OSCContainerContent` (Etappe 6e) |
| GridDeckView / GridDeckButtonEditView | griddeck/GridDeckScreen.kt + 2 Dialoge | ✅ Button-Raster, Bearbeiten, Auto-Fill aus dem Pult, Server-Sync (Etappe 5) |
| PhotosTabView | PhotosScreen.kt + CameraCaptureScreen.kt | ✅ Grid, Kamera-Upload, Löschen, Fullscreen-Viewer |
| FloorplanTabView | FloorplanScreen.kt | ✅ Snapshot-Anzeige mit Zoom/Pan (kein Live-Editing) |
| SettingsView | SettingsScreen.kt | ✅ Server-URL zentral, Sprache (System/de/en Runtime-Switch), Logout, Version |
| PresenceAvatarsView | PresenceAvatars.kt | ✅ Verbundene Nutzer als Avatare in ShowDetail-TopBar, SSE `presence-updated`, Popup-Liste |
| ChannelsEditorView | ChannelsEditorScreen.kt | ✅ Liste ↔ Grid-Toggle, Detail-Dialog, 10er-Jump-Bar (read-only, wie iOS) |
| GassenturmView | GassenturmScreen.kt | ✅ Tower-Karten, Slots, lokale Checks (SharedPreferences) |
| ZugstangenView | ZugstangenScreen.kt | ✅ Bar-Karten mit Fixture-Visualisierung |
| HangereiGeneratedView | HangereiScreen.kt | ✅ Generierte Hängerei-Liste, lokale Checks |

Server-seitig behoben: Router-Bug `/checks`-Route (`server/router.js`), Access-Log + Auth-Events (`router.js`, `routes/auth.js`).

### ~~Etappe 0 — Navigationsstruktur (iOS-TabBars)~~ ✅ ERLEDIGT
- Quelle: `LuxStageApp.swift` (`MainTabView`, Root-TabBar), `ShowContainerView.swift` (Show-TabBar)
- iOS hat zwei TabBars, Android bildet sie nun 1:1 als Material-3 `NavigationBar` (Bottom-Nav) ab:
  - **Root** (`MainScaffold.kt`): Shows · OSC · Deck · Einstellungen. Ersetzt getrennte `ROUTE_SHOWS`/`ROUTE_SETTINGS`-Routen; Settings ist jetzt Tab statt Push.
  - **Show** (`ShowDetailScreen.kt`): Setup · Einleuchten · OSC · Suche. Setup+Einleuchten teilen die Kanalliste (`lightingMode`-Flag wie iOS); OSC/Suche betten `OSCContainerScreen`/`GlobalSearchScreen` als Tab ein (nicht mehr Push).
  - Toolbar-Icons für Beleuchtungs-Toggle und Suche entfernt (jetzt Tabs); OSC-Eintrag aus Rigging-Overflow-Menü entfernt (jetzt Tab).
  - Neue Strings: `nav_shows/nav_osc/nav_deck`, `show_tab_*` (DE/EN).
- **Platzhalter** (Screen noch nicht portiert): Root-Tab **Deck** (`GridDeckView`) zeigt Platzhalter-Text → siehe Etappe 5. Root-Tab **OSC** ist seit Etappe 6e umgesetzt.

## Offene Etappen (je eigenständig in neuer Session bearbeitbar)

### ~~Etappe 3b — Setup-Tab-Inhalt (Aufbau-Sections)~~ ✅ ERLEDIGT
- Quelle: `ShowDetailView.swift` (`sectionsSection`, `FieldsSectionView`, `KvTableSectionView`, `MarkdownSectionCards`, `SectionNodesView`), `Components/MarkdownTextView.swift` (TipTap-Parser, `TipTapTableView`)
- Umgesetzt:
  - `data/TipTap.kt` — Parser für TipTap-JSON (Pendant zu `parseTipTapDoc`/`parseTipTapIntoSections`): Paragraph, Heading, Bullet-/Ordered-/TaskList, Table, Inline-Marks (bold/italic); Split an h2-Überschriften.
  - `ui/components/TipTapSectionCards.kt` — Karten-Rendering je Abschnitt: Subheadings (h3+, uppercase mit Trennlinie), abhakbare Listeneinträge mit Durchstreichung, Absätze, horizontal scrollbare Tabellen mit abhakbaren Zellen. Keys identisch zu iOS (`<sectionIndex>_<blockIndex>_<text>` bzw. `s<i>_t<n>_r<r>_c<c>`).
  - `data/repository/SetupChecksStore.kt` — Persistenz mit iOS-Key-Schema `aufbau_checks_<showId>_<sectionId>` **inklusive 6-Stunden-Verfall**.
  - `ShowDetailScreen.kt` — `SetupSections` rendert je `SectionDef.type`: `kv-table` → `KvTableSection`, `fields` → `FieldsSection` (Werte aus JSON-Content, read-only), sonst TipTap-Karten. Ohne Defs Fallback auf `setupMarkdown` mit Section-ID `_setup`. Sections stehen als Header über der Kanalliste; nur im Setup-Modus, nicht im Einleuchten-Modus.
- Neu verdrahtet: SSE-Event `sections-updated` (`ShowEventsClient.kt`, `LuxStageClient.connectShowEvents`) lädt Defs + Contents nach — Server broadcastet es bereits (`server/routes/sections.js`).
- **Hinweis:** Fotos/Grundriss/Kanäle/Rigging bleiben über TopBar-Icons erreichbar, nicht als Listeneinträge im Setup wie unter iOS.

### ~~Etappe 6e — Standalone-OSC (Root-Tab)~~ ✅ ERLEDIGT
- Quelle: `StandaloneOSCView.swift` (97 Zeilen) — OSC ohne Show-Kontext, Root-Tab.
- Umgesetzt: `ui/screens/osc/StandaloneOSCScreen.kt` — Venue-Dropdown (Name + oscHost), Auto-Erkennung per /24-Subnetz mit Übernahme-Button, Empty-States, `key(venue)`-Neuaufbau bei Wechsel.
- `OSCContainerScreen` aufgeteilt: neuer `OSCContainerContent(venueName, oscHost, onBack?)` als wiederverwendbarer Kern; Show-Variante bleibt als Wrapper (Template → oscHost). `onBack == null` blendet den Zurück-Pfeil aus.
- Neu: `data/NetworkUtils.kt` (Pendant zu `NetworkUtils.swift`) — `localWifiAddress()`, `subnet24()`, `detectVenue()`, `templateDisplayName()`.
- Root-Tab OSC in `MainScaffold.kt` verdrahtet (Platzhalter entfernt).

### ~~Etappe 1 — SettingsScreen~~ ✅ ERLEDIGT
- Quelle: `SettingsView.swift` (144 Zeilen)
- Umgesetzt: `SettingsScreen.kt`, erreichbar über Zahnrad in `ShowsListScreen`
  - Server-URL zentral (geteiltes `onServerUrlChanged`-Lambda mit Login), Logout, Version aus `BuildConfig`
  - Sprach-Runtime-Switch (System/de/en) via `LocaleManager` (`AppCompatDelegate.setApplicationLocales`)
  - Neu: `values-en/strings.xml`, `xml/locales_config.xml` + Manifest `localeConfig`, `buildConfig=true`
  - `MainActivity` jetzt `AppCompatActivity`, Theme auf `Theme.Material3.DayNight.NoActionBar`
- OSC-Venue-Section aus iOS bewusst ausgelassen → gehört zu Etappe 6 (OSC)

### ~~Etappe 2 — ChannelsEditorScreen~~ ✅ ERLEDIGT
- Quelle: `ChannelsEditorView.swift` (250 Zeilen)
- Umgesetzt: `ChannelsEditorScreen.kt`, erreichbar über Listen-Icon in `ShowDetailScreen`-TopBar
  - Listen-/Rasteransicht umschaltbar, Detail-Dialog (AlertDialog) beim Tap, 10er-Sprungleiste in Listenansicht
  - Neu: `fetchChannels`-Endpoint in `LuxStageApi` (`GET /api/shows/{id}/channels`), `Channel`-Model mit Default-Werten
- **Hinweis:** `ChannelsEditorView` war früher bearbeitbar, ist heute bewusst **read-only** (Bearbeitung entfernt). Android bildet den aktuellen iOS-Stand 1:1 ab.

### ~~Etappe 3 — GlobalSearchScreen~~ ✅ ERLEDIGT
- Quelle: `GlobalSearchView.swift` (365 Zeilen)
- Umgesetzt: `GlobalSearchScreen.kt`, erreichbar über Lupe in `ShowDetailScreen`-TopBar
  - Übergreifende Suche über Kanäle, Gassentürme, Zugstangen, Aufbau-Sections, Fotos (`ShowSearchData` lädt alle 6 Endpoints parallel via `async`)
  - `SearchResult`-sealed-class + gruppierte Ergebnisliste mit Kategorie-Headern (Pendant zu iOS enum)
  - Neu: `data/model/Section.kt` (`SectionDef`, `FieldDef`, `KvRow`, `SectionContent`, `PhotoDescription`)
  - API: `fetchSectionDefs`, `fetchSections`, `fetchPhotoCaptions` in `LuxStageApi`
- **Hinweis:** read-only wie iOS — Ergebnis-Tap navigiert bewusst nicht (iOS setzt nur Suche/Scroll im Lighting-Tab)

### ~~Etappe 4 — Rigging-Screens (Gassentürme, Zugstangen, Hängerei)~~ ✅ ERLEDIGT
- Quelle: `GassenturmView.swift` (190), `ZugstangenView.swift` (126), `HangereiGeneratedView.swift` (146)
- Umgesetzt: `GassenturmScreen.kt`, `ZugstangenScreen.kt`, `HangereiScreen.kt`, erreichbar über Overflow-Menü (⋮) in `ShowDetailScreen`-TopBar
  - Models: `data/model/Rigging.kt` (`GassenturmTower`, `TowerSlot`, `ZugBar`, `ZugFixture`)
  - API: `fetchTowers` (`GET /api/shows/{id}/towers`), `fetchBars` (`GET /api/shows/{id}/bars`)
  - Lokale Checks via `RiggingChecksStore` (SharedPreferences, Pendant zu iOS UserDefaults) — Keys identisch zu iOS (`gassenturm_checks_*`, `aufbau_checks_*_hangerei_generated`)
  - Zugstangen mit Fixture-Visualisierung (Position auf Stange), Hängerei mit generierten Textzeilen (`V. <kanal> ...`)
  - Farb-Badges: `data/FilterColors.kt` (Pendant zu iOS `FilterColors.swift`) löst Filterfolien-Codes über `assets/filters.json` in echte Farben auf; wiederverwendbares `ui/components/ColorBadge.kt`; auch in `ShowDetailScreen`-Kanalzeile eingebunden; `FilterColors.load()` beim App-Start in `MainActivity`
- **Hinweis:** read-only wie die restliche Android-App

### ~~Etappe 5 — GridDeck (Schnellzugriff-Grid)~~ ✅ ERLEDIGT
- Quelle: `GridDeckView.swift` (419), `GridDeckButtonEditView.swift` (201), `Models/GridDeckButton.swift`, `Services/GridDeckStore.swift`
- Umgesetzt:
  - `data/model/GridDeckButton.kt` — Button-Model mit `oscMessages` (Macro/Key/Cue/Sub/Palette/Preset/Custom) und Hex-Farben; `GridDeckServerConfig`.
  - `data/model/ButtonActionAdapter.kt` — **Gson-Adapter für das Swift-Codable-Format** (`{"macro":{"number":"5"}}`). Nötig, weil Kotlin keine Enums mit assoziierten Werten kennt; ohne ihn wären unter iOS angelegte Decks nicht lesbar. Im Retrofit-Gson registriert.
  - `data/repository/GridDeckStore.kt` — Server als Quelle der Wahrheit, entprelltes Speichern (1 s), `resize`/`applyMacroFilter`/`fillFromEos` wie iOS; lokal gespiegelt unter denselben Keys (`griddeck_host_local`, `griddeck_cols`, `griddeck_macro_min`).
  - `ui/screens/griddeck/GridDeckScreen.kt` — Verbindungsleiste, Tab-Leisten (Macro/Palette/Preset + Paletten-Untertabs), quadratisches Raster, Bearbeiten-Modus, Auto-Fill-Dialog.
  - `ui/screens/griddeck/GridDeckButtonEditDialog.kt` — Label, Typ, Nummer, Paletten-Typ, Farbwahl, „Aus Pult laden" mit Item-Picker.
  - `ui/screens/griddeck/GridDeckSettingsDialog.kt` — Venue-Liste, EOS-Host, Feldgröße (2/3/4 Spalten), Macro-Filter.
  - Neue Endpoints: `GET`/`PUT /api/me/griddeck` (Server hat sie bereits in `routes/users.js`).
  - Root-Tab Deck in `MainScaffold.kt` verdrahtet, Platzhalter entfernt.
- **Hinweis:** GridDeck ist der **einzige schreibende Teil** der Android-App — der Rest bleibt read-only, hier ist Bearbeiten aber auch unter iOS vorgesehen.
- **Abweichung zu iOS:** Wackel-Animation im Bearbeiten-Modus und haptisches Feedback beim Auslösen nicht portiert (rein kosmetisch).

### ~~Etappe 6 — OSC-Anbindung (Eos-Lichtpult-Steuerung)~~ ✅ ERLEDIGT
- Quelle: `OSCContainerView.swift` (185), `OSCNumpadView.swift` (386), `StandaloneOSCView.swift` (97), `EosFadersView.swift` (105), `EosPlaybackView.swift` (98), `EosMlView.swift` (96)
- Umfang: TCP/UDP OSC-Client (Pendant zu `OSCClient.swift`), Numpad-Steuerung, Fader, Playback, Magic-Sheets-artige ML-View
- Abhängigkeiten: eigenständiges Subsystem, aber inhaltlich Kernfeature für Beleuchter — größter verbleibender Block
- Aufwand: sehr groß, sollte in mehrere Unter-Sessions (Client → Numpad → Fader/Playback → ML) aufgeteilt werden

**Unter-Etappen:**
- **6a — OSC-Client + Settings** ✅ ERLEDIGT
  - `network/osc/OSCClient.kt` (Pendant zu `OSCClient.swift`): TCP-Socket Port 3032, 4-Byte-Length-Prefix-Framing, OSC-Encoding/Parsing (String/Int32/Float32), Subscribe/Filter, Reconnect (5s), Ping (30s), Item-Fetch (Macros/Paletten/Presets). Coroutines statt GCD, Callbacks auf Main-Thread.
  - `data/repository/OSCSettings.kt` (Pendant zu `OSCSettings.swift`): `OSCSettingsStore` (SharedPreferences) — EOS-User pro Venue, globale Kommando-Templates (`{chan}`-Ersetzung), `OSCVenueSettings`/`OSCCommands`/`OSCSettings`
- **6b — OSCNumpad + Container** ✅ ERLEDIGT
  - `ui/screens/osc/OSCContainerScreen.kt` (Pendant zu `OSCContainerView.swift`): Segmented-Control (Numpad/Playback/Fader/ML), geteilter OSC-State, Connect/Disconnect-Lifecycle, Lock-Overlay bei App-Hintergrund (`ON_STOP`)
  - `ui/screens/osc/OSCNumpadPanel.kt` (Pendant zu `OSCNumpadView.swift`): Kommandozeile (Kontext : Kommando), History (max. 5), 4×4-Numpad + Sonderreihen, Clear (Tap=clear_cmd, Long=shift_clear), At/@@, Full/Out/Enter, Kanal-Überlast-Warnung (>20 via „X Thru Y“-Schätzung)
  - Neu: `TemplateMeta`-Model + `fetchTemplates` (`GET /api/templates`) für oscHost-Auflösung
  - Erreichbar über OSC-Eintrag im Overflow-Menü (⋮) in `ShowDetailScreen`
  - Neue Dependency: `lifecycle-runtime-compose` (für `LocalLifecycleOwner`)
  - Playback/Fader/ML als Platzhalter-Panels („folgt in Kürze“) → 6c/6d
- **6c — Fader/Playback** ✅ ERLEDIGT
  - `ui/screens/osc/EosFadersPanel.kt` (Pendant zu `EosFadersView.swift`): 5 Bänke (Segmented), 10 Fader-Zeilen mit Slider + Full + Fire, Live-Level/Namen vom Pult; Bank-Wechsel leert + konfiguriert + Cache-Restore nach 500 ms
  - `ui/screens/osc/EosPlaybackPanel.kt` (Pendant zu `EosPlaybackView.swift`): Status-Karte (User/Host, Cmdline, letztes Cue-Event, letzter Ping), Buttons Back/Pause/GO/Go Time 2/Go to Cue Out
  - Beide im `OSCContainerScreen` verdrahtet (Fader-State + `onBankChange` zentral)
- **6d — ML-View** ✅ ERLEDIGT
  - `ui/screens/osc/EosMlPanel.kt` (Pendant zu `EosMlView.swift`): Active-Chan-/Cmdline-Karte, adaptives Wheel-Grid (min. 150 dp), pro Wheel Label + Wert + Tick-Buttons (±1 Fine, ±5); im `OSCContainerScreen` verdrahtet

### ~~Etappe 7 — PresenceAvatars~~ ✅ ERLEDIGT
- Quelle: `PresenceAvatarsView.swift` (69 Zeilen)
- Umgesetzt: `PresenceAvatars.kt` — überlappende Avatare (max. 4 + Overflow-Badge), Tap öffnet DropdownMenu mit Namen
  - `ShowEventsClient.kt`: `presence-updated`-Parsing + `PresenceUser`-Model, neuer `onPresenceUpdated`-Callback
  - `LuxStageClient.connectShowEvents` um Presence-Callback erweitert
  - `ShowDetailScreen`: Presence-State, Avatare in TopAppBar-`actions`
- Server broadcastet `presence-updated` deviceunabhängig (`server/sse.js`), Android meldet sich mit `device=android`

### Etappe 8 — PaywallScreen (Play Billing)
- Quelle: `PaywallView.swift` (99 Zeilen), nutzt `StoreKit` + `SubscriptionManager.swift`
- Umfang: Google Play Billing Library statt StoreKit, eigene Produkt-IDs im Play Console nötig
- Abhängigkeiten: Play Console Setup (außerhalb reinem Code), separate Entscheidung ob/wann Monetarisierung auf Android kommt
- Aufwand: mittel, aber mit Store-seitiger Vorarbeit (nicht rein Code)

### ~~Etappe 9 — Offline-Cache + Netzwerk-Status~~ ✅ ERLEDIGT
- Quelle: `Services/CacheStore.swift` (58), `Services/ShowCache.swift` (83), `Services/NetworkMonitor.swift` (70)
- **Beim Plan-Abgleich am 18.07.2026 entdeckte Lücke** — auf iOS querschnittlich verankert, auf Android komplett fehlend.
- Umgesetzt:
  - `data/repository/CacheStore.kt` — Datei-Cache unter `filesDir/showcache` (iOS nutzt SwiftData; für JSON-Blobs reichen Dateien).
  - `data/repository/ShowCache.kt` — typisierter Zugriff via Gson, **Keys identisch zu iOS**: `shows`, `detail_<id>`, `sectiondefs_<id>`, `sections_<id>`, `photos_<id>`, `captions_<id>`.
  - `data/repository/NetworkMonitor.kt` — `ConnectivityManager.NetworkCallback` (Pendant zu `NWPathMonitor`) plus 30-Sekunden-Ping auf `/api/health`; `isOffline` als `StateFlow`. Bedeutet „Server nicht erreichbar", nicht bloß „kein Netz". Neue Permission `ACCESS_NETWORK_STATE`.
  - `LuxStageClient` — cachende Methoden `fetchShows`, `fetchShow`, `fetchPhotos`, `fetchPhotoCaptions`, `fetchSectionDefs`, `fetchSections` nach iOS-Muster: offline → Cache; online → laden und Cache schreiben; Fehler → Cache-Fallback. Cache/Monitor sind optionale Konstruktorparameter. `connectShowEvents` verbindet bei Offline nicht.
  - `ui/components/OfflineIndicator.kt` — `rememberIsOffline(client)` + `OfflineBar` (oranger 3-dp-Balken). Eingebunden in `ShowDetailScreen` und `ShowsListScreen`, dazu `WifiOff`-Icon im Titel (Pendant zu `wifi.slash`).
  - Alle Screens rufen jetzt die cachenden Client-Methoden statt `client.api.*` (`ShowsListScreen`, `ShowDetailScreen`, `PhotosScreen`, `GlobalSearchScreen`, `OSCContainerScreen`).
- **Abweichung zu iOS:** `ShowsListView` deaktiviert bei Offline den „Neue Show"-Button — Android hat keinen (read-only), daher entfällt das.
- Nicht gecacht (wie iOS): Grundriss, Kanäle, Rigging-Daten, Templates.

## Empfohlene Reihenfolge
1. Etappe 1 (Settings) — schnell, schafft Baseline für Server-URL-Handling zentral
2. Etappe 7 (Presence) — kleiner SSE-Ausbau, nutzt bestehende Infrastruktur
3. Etappe 2 (ChannelsEditor) — schließt CRUD-Lücke im Kern-Feature
4. Etappe 4 (Rigging) — vor GridDeck/OSC, da inhaltlich unabhängig und Suche (Etappe 3) davon profitiert
5. Etappe 3 (GlobalSearch) — nach Rigging für volle Abdeckung
6. Etappe 6 (OSC) — größter Block, in Unter-Etappen splitten
7. ~~Etappe 6e (Standalone-OSC)~~ ✅
8. ~~Etappe 3b (Setup-Sections)~~ ✅
9. ~~Etappe 9 (Offline-Cache)~~ ✅
10. ~~Etappe 5 (GridDeck)~~ ✅
11. Etappe 8 (Paywall) — **einzige verbleibende Etappe**; zeitlich unabhängig, braucht Play-Console-Vorarbeit

**Stand des Abgleichs (18.07.2026):** Alle iOS-Views außer `GridDeckView`/`GridDeckButtonEditView` (Etappe 5) und `PaywallView` (Etappe 8) sind portiert. Bei den Services fehlen `CacheStore`/`ShowCache`/`NetworkMonitor` (Etappe 9) und `SubscriptionManager` (Teil von Etappe 8). `ShowDetailView.swift` (1273 Zeilen) ist iOS-seitig deutlich umfangreicher als `ShowDetailScreen.kt` — Delta ist im Wesentlichen Etappe 3b.

## Nicht im Scope
- Kein Code-Sharing mit iOS (separate native Codebasis)
- Server-Änderungen nur bei Bedarf (Bugfixes, neue Endpoints für Rigging/OSC falls nötig)
