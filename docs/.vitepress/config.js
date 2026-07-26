export default {
  vite: {
    server: {
      allowedHosts: ['docs.luxstage.app']
    }
  },
  title: 'LuxStage',
  description: 'Professionelles Beleuchtungsmanagement für das Theater',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
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
        ],

        sidebar: {
          '/de/guide/': [
            {
              text: 'Erste Schritte',
              items: [
                { text: 'Übersicht & Konzept', link: '/de/guide/' },
                { text: 'Installation', link: '/de/guide/installation' },
                { text: 'Glossar', link: '/de/glossar' },
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
                { text: 'Spielstätten-Vorlage anlegen', link: '/de/webapp/spielstaette-vorlage' },
                { text: 'Kanäle', link: '/de/webapp/kanaele' },
                { text: 'Setup', link: '/de/webapp/setup' },
                { text: 'Info', link: '/de/webapp/info' },
                { text: 'Fotos', link: '/de/webapp/fotos' },
                { text: 'Grundriss', link: '/de/webapp/grundriss' },
                { text: 'Versionsverlauf', link: '/de/webapp/versionsverlauf' },
                { text: 'Archiv', link: '/de/webapp/archiv' },
                { text: 'Einstellungen', link: '/de/webapp/einstellungen' },
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
              text: 'Referenz',
              items: [
                { text: 'Alle Features', link: '/de/webapp/features' },
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
              ]
            },
          ],
        },

        footer: {
          message: 'Open Source & selbst gehostet',
          copyright: '<a href="/de/datenschutz">Datenschutz</a> · LuxStage © 2026'
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
        ],

        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Overview & Concept', link: '/en/guide/' },
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Glossary', link: '/en/glossar' },
              ]
            },
          ],

          '/en/webapp/': [
            {
              text: 'Web App',
              items: [
                { text: 'Overview', link: '/en/webapp/' },
                { text: 'Glossary', link: '/en/glossar' },
              ]
            },
            {
              text: 'Shows',
              items: [
                { text: 'Login', link: '/en/webapp/login' },
                { text: 'Shows', link: '/en/webapp/shows' },
                { text: 'Venue Template', link: '/en/webapp/spielstaette-vorlage' },
                { text: 'Channels', link: '/en/webapp/kanaele' },
                { text: 'Setup', link: '/en/webapp/setup' },
                { text: 'Info', link: '/en/webapp/info' },
                { text: 'Photos', link: '/en/webapp/fotos' },
                { text: 'Floor Plan', link: '/en/webapp/grundriss' },
                { text: 'Version History', link: '/en/webapp/versionsverlauf' },
                { text: 'Archive', link: '/en/webapp/archiv' },
                { text: 'Settings', link: '/en/webapp/einstellungen' },
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
              text: 'Reference',
              items: [
                { text: 'All Features', link: '/en/webapp/features' },
              ]
            },
          ],

          '/en/ios/': [
            {
              text: 'iOS App',
              items: [
                { text: 'Overview', link: '/en/ios/' },
                { text: 'Shows', link: '/en/ios/shows' },
                { text: 'Setup', link: '/en/ios/aufbau' },
                { text: 'Focus', link: '/en/ios/einleuchten' },
                { text: 'OSC', link: '/en/ios/osc' },
                { text: 'Photos & Floor Plan', link: '/en/ios/more' },
                { text: 'Settings', link: '/en/ios/einstellungen' },
                { text: 'Glossary', link: '/en/glossar' },
              ]
            },
          ],
        },

        footer: {
          message: 'Open source & self-hosted',
          copyright: '<a href="/en/privacy">Privacy Policy</a> · LuxStage © 2026'
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
