# Import CSV

Imports channel data from a CSV file. Suitable for importing from Excel or other tools.

## CSV format

- **Delimiter:** Semicolon (`;`)
- **Encoding:** UTF-8
- **First row:** Header row, skipped during import
- **Column order** (fixed, no name-based detection):

| Position | Column |
|----------|--------|
| 1 | Channel |
| 2 | Dimmer address |
| 3 | Fixture |
| 4 | Position |
| 5 | Colour |
| 6 | Notes |

Rows without a channel number are skipped.

## Behaviour with existing channels

The import **merges and updates selectively** instead of replacing the entire channel list:

- If a channel with the same number already exists, only the **non-empty** fields from the CSV are applied — empty cells leave existing values unchanged.
- Channels new to the CSV are added.
- After import, the list is sorted numerically by channel number.
