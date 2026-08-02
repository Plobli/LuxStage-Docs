export default {
  ignoreDeadLinks: true,
  vite: {
    server: {
      allowedHosts: ['docs.luxstage.app']
    }
  },
  title: 'LuxStage Docs',
  description: 'Professionelles Beleuchtungsmanagement für das Theater',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }],
    ['script', { defer: '', src: 'https://umami.moschu.net/script.js', 'data-website-id': 'ab4c6ea3-8423-4402-a3b3-a54149f5bb04' }],
    ['script', { defer: '', src: 'https://umami.moschu.net/recorder.js', 'data-website-id': 'ab4c6ea3-8423-4402-a3b3-a54149f5bb04' }]
  ],

  locales: {
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      themeConfig: {
        siteTitle: 'LuxStage Docs',
        logo: '/img/logo.png',

        nav: [
          { text: 'Übersicht', link: '/de/guide/' },
          { text: 'Web-App', link: '/de/webapp/' },
          { text: 'iOS-App', link: '/de/ios/' },
          { text: 'FAQ', link: '/de/faq' },
          {
            text: 'Rechtliches',
            items: [
              { text: 'Datenschutz', link: '/de/datenschutz' },
              { text: 'Impressum', link: 'https://luxstage.app/impressum.html' },
            ]
          },
        ],

        sidebar: {
          '/de/guide/': [
            {
              text: 'Erste Schritte',
              items: [
                { text: 'Übersicht & Konzept', link: '/de/guide/' },
                { text: 'Installation', link: '/de/guide/installation' },
                { text: 'Glossar', link: '/de/glossar' },
                { text: 'Alle Features', link: '/de/features' },
              ]
            },
          ],

          '/de/webapp/': [
            {
              text: 'Web-App',
              items: [
                { text: 'Übersicht', link: '/de/webapp/' },
                { text: 'Glossar', link: '/de/glossar' },
              ]
            },
            {
              text: 'Shows',
              items: [
                { text: 'Anmeldung', link: '/de/webapp/login' },
                { text: 'Shows', link: '/de/webapp/shows' },
                { text: 'Kanäle', link: '/de/webapp/kanaele' },
                { text: 'Setup — Beleuchtungsgestelle', link: '/de/webapp/setup-gestelle' },
                { text: 'Setup — Zugstangen', link: '/de/webapp/setup-zugstangen' },
                { text: 'Info', link: '/de/webapp/info' },
                { text: 'Fotos', link: '/de/webapp/fotos' },
                { text: 'Grundriss', link: '/de/webapp/grundriss' },
                { text: 'Versionsverlauf', link: '/de/webapp/versionsverlauf' },
              ]
            },
            {
              text: 'Daten',
              items: [
                { text: 'Aus EOS importieren', link: '/de/webapp/import-eos' },
                { text: 'CSV importieren', link: '/de/webapp/import-csv' },
                { text: 'PDF exportieren', link: '/de/webapp/export-pdf' },
                { text: 'CSV exportieren', link: '/de/webapp/export-csv' },
              ]
            },
            {
              text: 'Verwaltung',
              items: [
                { text: 'Archiv', link: '/de/webapp/archiv' },
                { text: 'Spielstätten-Vorlage anlegen', link: '/de/webapp/spielstaette-vorlage' },
                { text: 'Einstellungen', link: '/de/webapp/einstellungen' },
              ]
            },
            {
              text: 'Referenz',
              items: [
                { text: 'Tastaturkürzel', link: '/de/webapp/tastaturkuerzel' },
                { text: 'Was tun bei Problemen?', link: '/de/webapp/troubleshooting' },
              ]
            },
          ],

          '/de/ios/': [
            {
              text: 'iOS-App',
              items: [
                { text: 'Übersicht', link: '/de/ios/' },
                { text: 'Shows', link: '/de/ios/shows' },
                { text: 'Aufbau', link: '/de/ios/aufbau' },
                { text: 'Einleuchten', link: '/de/ios/einleuchten' },
                { text: 'OSC', link: '/de/ios/osc' },
                { text: 'Fotos & Grundriss', link: '/de/ios/more' },
                { text: 'Einstellungen', link: '/de/ios/einstellungen' },
                { text: 'Glossar', link: '/de/glossar' },
                { text: 'Alle Features', link: '/de/features' },
              ]
            },
          ],
        },

        footer: {
          message: 'Open Source & selbst gehostet',
          copyright: '<a href="/de/datenschutz">Datenschutz</a> · <a href="https://luxstage.app/impressum.html">Impressum</a> · LuxStage © 2026'
        },

        outline: {
          level: [2, 3],
          label: 'Auf dieser Seite'
        },

        lastUpdated: false
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        siteTitle: 'LuxStage Docs',
        logo: '/img/logo.png',

        nav: [
          { text: 'Overview', link: '/en/guide/' },
          { text: 'Web App', link: '/en/webapp/' },
          { text: 'iOS App', link: '/en/ios/' },
          { text: 'FAQ', link: '/en/faq' },
          {
            text: 'Legal',
            items: [
              { text: 'Privacy Policy', link: '/en/privacy' },
              { text: 'Legal Notice', link: 'https://luxstage.app/impressum.html' },
            ]
          },
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Overview & Concept', link: '/en/guide/' },
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Glossary', link: '/en/glossary' },
                { text: 'All Features', link: '/en/features' },
              ]
            },
          ],

          '/en/webapp/': [
            {
              text: 'Web App',
              items: [
                { text: 'Overview', link: '/en/webapp/' },
                { text: 'Glossary', link: '/en/glossary' },
              ]
            },
            {
              text: 'Shows',
              items: [
                { text: 'Login', link: '/en/webapp/login' },
                { text: 'Shows', link: '/en/webapp/shows' },
                { text: 'Channels', link: '/en/webapp/channels' },
                { text: 'Setup — Lighting Rigs', link: '/en/webapp/setup-gestelle' },
                { text: 'Setup — Bars', link: '/en/webapp/setup-zugstangen' },
                { text: 'Info', link: '/en/webapp/info' },
                { text: 'Photos', link: '/en/webapp/photos' },
                { text: 'Floor Plan', link: '/en/webapp/floor-plan' },
                { text: 'Version History', link: '/en/webapp/version-history' },
              ]
            },
            {
              text: 'Data',
              items: [
                { text: 'Import from EOS', link: '/en/webapp/import-eos' },
                { text: 'Import CSV', link: '/en/webapp/import-csv' },
                { text: 'Export PDF', link: '/en/webapp/export-pdf' },
                { text: 'Export CSV', link: '/en/webapp/export-csv' },
              ]
            },
            {
              text: 'Management',
              items: [
                { text: 'Archive', link: '/en/webapp/archive' },
                { text: 'Venue Template', link: '/en/webapp/venue-template' },
                { text: 'Settings', link: '/en/webapp/settings' },
              ]
            },
            {
              text: 'Reference',
              items: [
                { text: 'Keyboard Shortcuts', link: '/en/webapp/keyboard-shortcuts' },
                { text: 'Troubleshooting', link: '/en/webapp/troubleshooting' },
              ]
            },
          ],

          '/en/ios/': [
            {
              text: 'iOS App',
              items: [
                { text: 'Overview', link: '/en/ios/' },
                { text: 'Shows', link: '/en/ios/shows' },
                { text: 'Setup', link: '/en/ios/setup' },
                { text: 'Focus', link: '/en/ios/focus' },
                { text: 'OSC', link: '/en/ios/osc' },
                { text: 'Photos & Floor Plan', link: '/en/ios/more' },
                { text: 'Settings', link: '/en/ios/settings' },
                { text: 'Glossary', link: '/en/glossary' },
                { text: 'All Features', link: '/en/features' },
              ]
            },
          ],
        },

        footer: {
          message: 'Open source & self-hosted',
          copyright: '<a href="/en/privacy">Privacy Policy</a> · <a href="https://luxstage.app/impressum.html">Legal Notice</a> · LuxStage © 2026'
        },

        outline: {
          level: [2, 3],
          label: 'On this page'
        },

        lastUpdated: false
      }
    }
  }
}
