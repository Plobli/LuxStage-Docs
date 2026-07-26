# Channels

The **Channels** tab is the main view of a show and displays the complete channel plan.

::: tip Inline help in the app
Next to the column headers of the channel table and in the Setup area, small help icons show brief explanations for each field directly in the app.
:::

## Live collaboration (presence)

When multiple people work on a show at the same time, small coloured avatars (initials) for each signed-in person appear at the top of the show bar:

- **Green ring/dot** – the person is actively editing the show right now
- **📱 badge** – the person is connected via the iOS app
- Hovering shows a tooltip with the name and connected devices (iOS and/or web)

Avatars only appear once two or more people are connected at the same time; beyond four, the rest are summarized as "+N". Other users' changes appear in real time, without reloading the page.

## Channel plan structure

The table has five columns:

| Column | Meaning |
|--------|---------|
| **CHANNEL** | Channel name in the console (left) / Dimmer address (right, after the "/"), e.g. "1/001" |
| **COLOUR** | Colour filter (gel code), e.g. "L201/R371" or "RGB", "variable" |
| **QTY** | Number of identical fixtures at this position |
| **FIXTURE** | Fixture name, e.g. "ETC Source Four 26°" |
| **NOTES** | Free-text note, e.g. "Key light stage left, narrow spot" |

Channels are grouped by **positions** (e.g. "FOH BAR LEFT", "OVERHEAD BAR 1", "SIDE BOOM SL"). The number of channels per position is shown as a number to the right of the position name.

## Select and edit a channel

1. Click on a row – a **drag handle** (⠿) appears on the left, an **×** button on the right
2. Edit fields directly:

| Field | Action |
|-------|--------|
| **Channel number (left)** | Click → enter number |
| **Dimmer address (right)** | Click → enter address |
| **Colour** | Click → dropdown with available gel codes appears (e.g. "L201 / R371 Full C.T. Blue"). Also selectable: **"No Color"** (no filter) or **free text** for custom entries (e.g. "R02" or "warm white") |
| **Fixture** | Click → enter fixture name |
| **Notes** | Click → enter free text |

## Toggle channel status

The **channel number** appears in three colours:

- **White** – no note
- **Green** – note present
- **Yellow** – active in the show (e.g. after an EOS import), but the note is still missing

The same legend is also available as inline help (help icon) next to the channel table in the app.

## Add a channel

Below each position there is a **"+ Add channel"** button. Clicking it adds a new empty channel to that position.

## Delete or clear a channel

Click the channel (to activate it), then click the **×** icon on the right of the row. A dialog offers two options:

- **Clear channel** – removes only the note and colour, the row remains
- **Delete row** – removes the channel entirely

## Assign a channel to an installation spot

Hovering over a channel row reveals the **"Assign"** button on the right (before the delete button), with three options:

- **Place in floor plan** – opens the [Floor Plan](./grundriss) and places the channel there
- **Assign lighting rig slot** – opens [Setup — Lighting Rigs](./setup-gestelle) to assign it to a rig
- **Assign bar** – opens [Setup — Bars](./setup-zugstangen) to place it on a bar

If the channel is already assigned to a rig slot or a bar, the installation spot is additionally shown as a small badge below the note.

::: tip Duplicate warning
Assigning the same DMX address or channel number twice triggers a warning: "Duplicate DMX address!" or "Duplicate channel number!".
:::

## Change order (drag & drop)

Use **drag & drop** on the ⠿ handle on the left to reorder channels within a position.

## Rename a position

When hovering over a position heading, the **"Rename position"** button appears – click it and enter a new name.

## Search

In the search field at the top right (**"Search …"**) channels, fixtures or notes can be filtered in real time.

## Completeness check

Next to the channel table, a badge shows whether the show is complete:

- **Green checkmark** – all channels fully filled in
- **Yellow warning icon with a number** – number of channels with missing information

Clicking the badge opens a breakdown by missing field (no fixture, no position, no address). Clicking a row filters the channel table to exactly those channels; an **×** next to the active filter clears it.

## Keyboard shortcuts

| Action | Shortcut |
|--------|----------|
| Undo | ⌘Z (Mac) / Ctrl+Z (Win) |
| Redo | ⌘⇧Z (Mac) / Ctrl+Y (Win) |
