# Floor Plan

The **Floor Plan** tab provides an interactive vector editor for the stage plan. Fixture positions can be drawn in, labelled and exported.

## User interface

### Toolbar (left side)

| Icon | Tool | Keyboard shortcut |
|------|------|-------------------|
| ▶ Arrow | **Select** | V |
| ✋ Hand | **Pan** | H |
| \ Line | Draw **line** | L |
| □ Rectangle | Draw **rectangle** | R |
| ○ Ellipse | Draw **ellipse/circle** | E |
| T Text | Add **text** | T |
| ⊙ Circle | **Place channel** | C |
| ↑ Upload | **Upload background image** | – |
| ⊠ Remove | **Remove background image** | – |
| ↓ Export | **Export as PNG** | – |

### Bottom tools

| Icon | Function | Keyboard shortcut |
|------|----------|-------------------|
| ↩ | **Undo** | Ctrl+Z |
| ↪ | **Redo** | Ctrl+Y / Ctrl+Shift+Z |
| 🗑 | **Delete selection** | Delete / Backspace |

### More keyboard shortcuts

| Action | Keyboard shortcut |
|--------|-------------------|
| Reset view | F / Ctrl+0 |
| Temporarily pan view | Hold spacebar |
| Move selection | Arrow keys (10 units with Shift) |
| Copy / Paste | Ctrl+C / Ctrl+V |
| Duplicate | Ctrl+D |
| Select all | Ctrl+A |
| Cancel tool / clear selection | Esc |

### Options bar (top left)

| Option | Function | Keyboard shortcut |
|--------|----------|-------------------|
| **Grid** | Show/hide grid | G |
| **Snap** | Enable/disable snap to grid | – |

## Place channels on the floor plan

1. Select the **"Place channel" (C)** tool
2. Click on the desired position on the floor plan
3. The channel marker appears as a numbered circle marker (red with arrow)

## Using a background image

A background image (e.g. a scan of the stage plan) can be added in two ways:

- **Via the template floor plan:** Stored in the venue template and automatically inherited by all shows
- **Manually:** Click the **↑ Upload** icon in the toolbar → select an image file

Allowed formats: **PNG, JPG, SVG, WebP**. A PDF stage plan is not supported and must be converted first — an incorrect format shows "Invalid file type. Allowed: PNG, JPG, SVG, WebP".

::: warning Only one background image per template
A new background image replaces the old one immediately, without confirmation. Unlike photos in the Photos tab, the background image is **not compressed or resized** — a large scan stays at full size and is reloaded every time the floor plan is opened. For faster loading, it's worth resizing the image yourself beforehand.
:::

To remove: click the **⊠** icon.

## Export as PNG

Click the **↓** icon in the toolbar → the current floor plan is downloaded as a PNG file.

::: info Note
For export as PDF (incl. channel list) use **Export → PDF** in the top menu bar.
:::
