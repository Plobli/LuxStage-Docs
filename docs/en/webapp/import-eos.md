# Import from EOS

Imports channel data directly from an **ETC EOS** lighting console. All channels that have cues stored in the console are highlighted in yellow in the channel table.

The EOS export must be configured as follows:

- Setup → Export → CSV → choose save location
- In the export dialog: only activate "Cues" and "Values"

![EOS export dialog](/img/webapp/import-eos/eos-export-dialog.png)

- Import the exported CSV in LuxStage in the corresponding show via Import → Import from EOS → Select CSV
- Review the import in the merge dialog

![Merge preview](/img/webapp/import-eos/merge-vorschau.png)

The merge dialog shows three groups:

- **Newly active** — channels newly used in the console
- **No longer active** — previously active channels missing from the current export
- **Untouched – has description** — channels already labelled, which the import does **not** overwrite

::: tip Existing notes are preserved
The import deletes nothing: fixtures, colours, and notes remain in all channels. Missing channels are created, no-longer-active ones are only marked inactive. This also applies when re-importing the same show.
:::

If there are no changes compared to the current state, "No changes." appears — the import can still be confirmed.

- Start the import by clicking "Import"

All yellow-highlighted channels can now be labelled with notes, colour codes, etc. in the channel table.
