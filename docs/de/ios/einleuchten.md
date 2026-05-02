# Einleuchten (iOS)

Der **Einleuchten**-Tab ist die zentrale Fokussier-Ansicht der Show. Er zeigt alle Kanäle der Produktion in einer Liste, gruppiert nach **Positionen** (z. B. „FOH SL Slot").

## Kanalanzeige

<img src="./img/einleuchten-kanalliste.png" alt="Kanalliste" class="ios-screenshot">

Jeder Kanal wird als Karte mit folgenden Elementen dargestellt:

| Element | Bedeutung |
|---------|-----------|
| **Große Kanalnummer** (z. B. `001`) | Wird rot, sobald der Kanal als fokussiert markiert ist |
| **Name und Gerät** | z. B. „Person Stage Left · 1/1 · ETC Source Four 26°" |
| **Fokus-Kreis** (links) | Tippen → Kanal als fokussiert markieren (roter Haken) |
| **OSC-Toggle** (rechts) | Kanal über OSC auf Full schalten; aktiv = grüner Toggle, Karte rosa hinterlegt |

## Fortschritt

Oben rechts zeigt der Status, wie viele Kanäle bereits fokussiert wurden, z. B. `64 · 50%`.

## Suche

Das Suchfeld oben filtert die Kanalliste in Echtzeit nach Name, Gerät oder Notiz.

## Workflow: Scheinwerfer einleuchten

1. Kanal in der Liste suchen oder scrollen
2. **Toggle** einschalten → die App sendet @ Full an das EOS-Pult (Karte wird farblich hinterlegt)

<img src="./img/einleuchten-osc-toggle.png" alt="OSC-Toggle aktiv" class="ios-screenshot">

3. Scheinwerfer physisch fokussieren
4. **Checkmark** antippen → Kanal gilt als abgehakt (roter Haken, Nummer rot) und Scheinwerfer wird über das EOS-Pult ausgeschaltet. Alternativ, ohne den Scheinwerfer als erledigt abzuhaken: Toggle ausschalten

<img src="./img/einleuchten-fokussiert.png" alt="Kanal fokussiert" class="ios-screenshot">

<img src="./img/einleuchten-alle-fokussiert.png" alt="Alle Kanäle fokussiert" class="ios-screenshot">

5. → weiter zum nächsten Kanal

::: tip Fotos beim Fokussieren
Dem Kanal zugeordnete **Fotos** sind direkt in der Liste abrufbar — ideal zum Vergleichen der Fokusposition.
:::
