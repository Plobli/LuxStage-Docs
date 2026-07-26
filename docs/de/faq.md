# Häufige Fragen

## Was ist der Unterschied zwischen iOS-App und Web-App?

Die iOS-App ist nativ in SwiftUI entwickelt und läuft direkt auf iPhone und iPad – ohne Browser. Sie ist besonders für den Einsatz auf der Bühne optimiert. Die Web-App läuft im Browser auf jedem Gerät, eignet sich vor allem für die textlastige Dokumentationserstellung und bietet zusätzliche Verwaltungsfunktionen wie Benutzerverwaltung, CSV-Import und PDF-Export.

## Welche Geräte werden unterstützt?

Die Web-App läuft auf Mac, Windows, iPad und iPhone im Browser. Die native iOS-App unterstützt iPhone und iPad ab iOS 26.

## Wie wird LuxStage betrieben?

Zwei Möglichkeiten: Selbst gehostet – z. B. auf einem Raspberry Pi im lokalen Theaternetz oder extern auf einem VPS – oder als gehosteter Service unter [luxstage.app](https://luxstage.app), bei dem der Server-Betrieb entfällt.

## Funktioniert LuxStage auch offline?

Zum Lesen ja, zum Bearbeiten nein.

Die iOS-App hält zuletzt geladene Shows, Kanäle, Abschnitte und Fotos lokal vor und zeigt sie ohne Serververbindung weiter an. Sie ist auf das Lesen ausgelegt: Kanäle abhaken sowie Fotos aufnehmen und löschen brauchen eine Verbindung, das eigentliche Bearbeiten der Daten geschieht in der Web-App.

Die Web-App braucht eine bestehende Serververbindung. Fällt sie aus, erscheint ein Hinweisbanner und die Show-Ansicht wird gesperrt, damit keine Eingaben verloren gehen.

Ein Offline-Bearbeitungsmodus mit späterer Synchronisation ist in keiner der beiden Apps vorhanden.

## Unterstützt LuxStage mehrere Benutzer?

Ja. Admins und Techniker können gleichzeitig arbeiten. Änderungen werden in Echtzeit für alle verbundenen Geräte – iOS und Web – synchronisiert.

## Wie installiere ich LuxStage?

Siehe die [Installationsanleitung](./guide/installation). Der Server wird mit zwei Befehlen eingerichtet und läuft automatisch auf Linux (z.B. einem Raspberry Pi).

## Ist LuxStage kostenlos?

LuxStage Server und WebApp sind Open Source. Selbst gehostet fallen keine laufenden Kosten an. Alternativ gibt es LuxStage als gehosteten Service unter [luxstage.app](https://luxstage.app) gegen eine monatliche Gebühr. Die iOS-App ist optional und gegen eine monatliche Gebühr im App Store erhältlich.

## Welche Daten sammelt die iOS-App?

Die iOS-App sammelt **keine personenbezogenen Daten**. Gespeichert werden ausschließlich Server-URL, EOS-User-ID und Spracheinstellung – lokal auf deinem Gerät. Show-Daten werden nur mit deinem eigenen Server synchronisiert. Kein Tracking, keine Analyse, keine Werbung.

Weitere Details: [Datenschutzerklärung](./datenschutz)

## Wo bekomme ich Hilfe?

- [GitHub Issues](https://github.com/Plobli/LuxStage) — Probleme melden oder Fragen stellen
- E-Mail: hello@luxstage.app
