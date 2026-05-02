# Venue Template

A venue template contains the fixed channel structure of your stage — fixtures, DMX addresses, positions and note sections. Once created, you can apply it to any new production with a single click.

## Import template from CSV

The fastest method: import an existing channel list as a CSV file.

1. Navigate to **Templates** in the sidebar.
2. Click **"Upload CSV"**.
3. Select your CSV file (semicolon-separated, e.g. from Excel or ETC EOS).
4. Enter a name for the template in the **"Template name"** field.
5. Click **"Import template"**.
6. Close the dialog with **"Close"**.

The template is now saved and available for every new show.

## CSV format

The CSV file should contain the following columns:

| Column | Description |
|--------|-------------|
| Channel | Channel number |
| DMX | DMX address |
| Fixture | Fixture type (e.g. "PAR 64", "Profile 1.2 kW") |
| Position | Hanging point or location |
| Gel | Colour filter code (e.g. R02, L201) |
| Note | Free-text note |

::: tip Import EOS export directly
CSV exports from ETC EOS can be imported directly — active channels are recognised automatically.
:::

## Create a template manually

Alternatively, you can build a template directly in LuxStage:

1. Click **"+ New Venue"**.
2. Enter name and basic data.
3. Add channels manually or import them later via CSV.

## Use a template for a new production

When creating a new show, select a venue. The channel structure and note sections are automatically inherited — you can then customise them individually per show.
