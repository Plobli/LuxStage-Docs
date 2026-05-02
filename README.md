# LuxStage Dokumentation (VitePress)

Dies ist die Docker-basierte VitePress-Dokumentation für LuxStage, erreichbar unter **[docs.luxstage.app](https://docs.luxstage.app)**.

## Setup

Die Dokumentation läuft als Docker-Container unter `/opt/dockge/data/stacks/luxstage-docs`.

### Container starten

```bash
docker compose up -d
```

### Container stoppen

```bash
docker compose down
```

### Logs ansehen

```bash
docker compose logs -f
```

## Dokumentation bearbeiten

Die Dokumentation befindet sich im `docs/`-Verzeichnis und wird automatisch in den Container gemountet.

### Struktur

```
docs/
├── .vitepress/
│   └── config.js          # VitePress Konfiguration
├── index.md               # Startseite
├── guide/
│   ├── index.md
│   ├── getting-started.md
│   ├── installation.md
│   └── features.md
├── api/
│   ├── index.md
│   ├── authentication.md
│   └── endpoints.md
└── faq.md
```

### Änderungen

Änderungen an den Markdown-Dateien werden automatisch erkannt und im Browser aktualisiert (Hot Module Replacement).

## Konfiguration

Die Konfiguration befindet sich in `docs/.vitepress/config.js` und kann angepasst werden:

- **Titel & Beschreibung**: Im `defineConfig` am Anfang
- **Navigation**: Im `nav`-Array in `themeConfig`
- **Seitenleiste**: Im `sidebar`-Objekt in `themeConfig`

## Zugriff

- **Lokal**: http://localhost:3000
- **Produktiv**: https://docs.luxstage.app

Beide Adressen funktionieren über Caddy-Proxy in Dockge.

## Weitere Ressourcen

- [VitePress Dokumentation](https://vitepress.dev/)
- [Markdown Guide](https://vitepress.dev/guide/markdown)
