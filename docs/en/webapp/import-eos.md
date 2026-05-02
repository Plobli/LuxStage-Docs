# Import from EOS

Imports channel data directly from an **ETC EOS** lighting console. All channels that have cues stored in the console are highlighted in yellow in the channel table.

The EOS export must be configured as follows:

- Setup → Export → CSV → choose save location
- In the export dialog: only activate "Cues" and "Values"

![EOS export dialog](./img/import-eos/eos-export-dialog.png)

- Import the exported CSV in LuxStage in the corresponding show via Import → Import from EOS → Select CSV
- Review the import in the merge dialog

![Merge preview](./img/import-eos/merge-vorschau.png)

- Start the import by clicking "Import"

All yellow-highlighted channels can now be labelled with notes, colour codes, etc. in the channel table.
