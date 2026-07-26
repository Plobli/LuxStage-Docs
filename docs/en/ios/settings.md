# Settings (iOS)

**Settings** are accessible via the tab of the same name in the global tab bar (from the shows overview, not within a show).

<img src="/img/ios/einstellungen.png" alt="Settings" class="ios-screenshot">

## Server

In the **Server** field, enter the URL of the LuxStage server, e.g. `http://192.168.1.100:8090`. Without a valid server URL, the app cannot load any shows.

## Language

Use the **Language** menu to select the display language of the app (e.g. English).

## OSC per venue

The list of venues is loaded automatically from the LuxStage server. For each venue the following is shown:

- **Name** — read-only, managed in the WebApp
- **IP address** — read-only, set in the [WebApp under Venue Templates](../webapp/spielstaette-vorlage); "Not configured" if no address has been entered
- **EOS User ID** — stepper to set the EOS user (1–99); saved **locally on the device** and can differ per device

::: tip
The IP address is set centrally in the WebApp and applies to all devices. The EOS User ID is device-specific and persists after restarting the app.
:::

## Sign out

The **Sign out** button ends the session and returns to the server entry screen.
