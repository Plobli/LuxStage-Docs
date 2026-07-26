# Venue Template

A venue template contains the fixed channel structure of your stage — fixtures, DMX addresses, positions and note sections. Once created, you can apply it to any new production with a single click.

## Import a venue template from CSV

The fastest method: import an existing channel list as a CSV file.

1. Navigate to **Templates** in the sidebar.
2. Click **"Upload CSV"**.
3. Select your CSV file (semicolon-separated, e.g. from Excel or ETC EOS).
4. Enter a name for the venue template in the **"Name"** field.
5. Click **"Import venue template"**.
6. Close the dialog with **"Close"**.

The venue template is now saved and available for every new show.

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

## Create a venue template manually

Alternatively, you can build a venue template directly in LuxStage:

1. Click **"New venue template"**.
2. Enter name and basic data.
3. Add channels manually or import them later via CSV.

## Rename a venue template

Click the **pencil icon** next to the name to open an input field. Enter the new name, then confirm with **Enter** or by clicking outside. All shows assigned to this venue template will automatically adopt the new name.

## OSC IP address

The detail view of a venue template includes the **OSC IP** field. Enter the IP address of the EOS lighting console for this stage here (e.g. `192.168.1.10`). The field is optional — leaving it empty means no OSC.

The IP address applies to all users and devices working with this venue template. The EOS User ID is set separately per device in the iOS app.

## Template list

The overview shows for each venue template:

- **Name** of the venue template
- **Channel count** — number of stored channels
- **OSC IP** — configured IP address (if set)
- **Last modified** — date of the last change

## Use a venue template for a new production

When creating a new show, select a venue template. The channel structure and note sections are automatically inherited — you can then customise them individually per show.

## Assign a show to a venue template afterwards

On the show card in the overview, the **pencil icon** opens a dialog for template assignment. The venue template can be changed there — the show's channels remain unchanged; only the metadata (venue name, OSC settings) is updated.
