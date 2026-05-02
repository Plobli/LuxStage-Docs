# Settings (iOS)

**Settings** are accessible via the tab of the same name in the global tab bar (from the shows overview, not within a show).

<img src="./img/einstellungen.png" alt="Settings" class="ios-screenshot">

## Server

In the **Server** field, enter the URL of the LuxStage server, e.g. `http://192.168.1.100:8090`. Without a valid server URL, the app cannot load any shows.

## Language

Use the **Language** menu to select the display language of the app (e.g. English).

## OSC per venue

Each venue can have its own EOS IP address. This assignment is saved **locally on the device** and is independent of the LuxStage server.

- **Add venue** — create a new venue with an IP address
- Existing venues are listed with name and IP address (e.g. `Venue · 172.20.10.3`)
- A venue without an entered IP shows "No IP" as a note
- Tapping a venue entry opens the detail view to edit the IP address

::: tip
The venues created here are available as selectable connection targets in the [OSC tab](./osc).
:::

## Sign out

The **Sign out** button ends the session and returns to the server entry screen.
