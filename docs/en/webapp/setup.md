# Setup

The **Setup** area manages the physical structure of the stage: **lighting rigs** (towers with numbered slots) and **bars** (with freely positionable fixtures). Both areas let you assign channels directly to a specific installation spot.

::: tip Not to be confused
This area is not the same as the "Aufbau" tab in the iOS app – that one shows checklists and free-text notes from the [Info](./info) tab.
:::

Depending on the show's settings (see [Shows](./shows)), one, the other, or both areas appear as their own tab in the sidebar.

## Lighting rigs

### Create a rig

1. Click **"New Lighting Rig"** (bottom right)
2. Fill in the fields:

| Field | Description |
|-------|-------------|
| **Name** | Name of the rig, e.g. "Lighting Rig 1" |
| **Side** | e.g. "L" or "R" for left/right on stage |
| **Number of slots** | How many rig positions the rig has (1–20) |

3. Click **"Create"**

### Assign a channel to a slot

1. Click the **⌄⌄** (select) icon on the right of a slot
2. Search by channel number or fixture in the search field
3. Click a channel → it is assigned to the slot

If the next slot is still empty, its selection dialog opens automatically, letting you quickly fill several slots in a row.

If a slot is already occupied, a confirmation appears before overwriting.

### Clear a slot

Click the **×** icon next to an occupied slot.

### Swap slots via drag & drop

Using the grip icon (⠿) to the left of the slot number, the channel assignment of two slots can be swapped via drag & drop.

### Add a slot

Click **"Add slot"** below the rig's slot list.

### Edit / delete a rig

Using the icons in the top right of each rig card:

- **Pencil** – change name, side, or number of slots. Reducing the slot count shows a warning listing the affected (possibly occupied) slots.
- **Trash** – delete the rig after confirmation

### Add a note

At the bottom of each rig card, click **"+ Note"** to add a free-text comment.

### Save as template

The bookmark icon lets you save a rig into the venue template. You can choose to include the base structure (always included), plus channel number, fixture, and colour per slot.

## Bars

### Create a bar

1. Click **"New Bar"** (bottom right)
2. Fill in the fields: name, length, optionally hide dimension marks
3. Click **"Create"**

### Place a fixture on the bar

Click the desired position on the bar line → the channel picker opens → search and select a channel → confirm the position (in cm, 0 = centre of the bar).

If the selected channel has a **quantity** greater than 1 (see [Channels](./kanaele)), several markers are placed automatically, spaced next to each other.

### Move a fixture

Drag the marker along the bar with the mouse button held down.

### Edit a fixture

Clicking the marker opens a dialog for a note about the fixture (e.g. "3m rope, special colour…"). From there you can also jump directly **"To channel →"** in the channel table.

### Remove a fixture

Hovering over the marker reveals a red **×** icon in the top right. After confirming, the fixture is removed from the bar.

### Length, height, and note

For each bar, length and height (in the measurement unit chosen under [Settings](./einstellungen)) as well as a free-text note can be edited inline directly.

### Reorder bars

Bars can be reordered in the list via drag & drop.

### Edit / delete a bar

Using the icons on the right of each bar row (visible on hover):

- **Pencil** – change name, length, and dimension display
- **Trash** – delete the bar after confirmation

### Save as template

The bookmark icon lets you save a bar into the venue template. You can choose to include the base structure (always included), plus position, channel number, fixture, and notes per fixture.

::: tip Note
Bars from the venue template are automatically inherited when creating a new show (without fixture assignments). Lighting rigs from the template must be added manually via "Insert" in the edit dialog.
:::
