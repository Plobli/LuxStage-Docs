# Settings

**Settings** are accessible via the gear icon (⚙️) in the left sidebar. Every user sees the **Account** and **Display** tabs. The **Backup**, **Server**, **User Management**, **Email / SMTP**, and **Update** tabs are only visible to admins.

::: tip Update notification
If a server update is available, a small dot on the Settings icon in the sidebar indicates it — visible only to admins.
:::

::: tip Hosted team (luxstage.app)
On a hosted team at [luxstage.app](https://luxstage.app), the operator manages server operation, email delivery, and updates centrally.
:::

---

## Account

**Change password**

Change the password for your account:

1. Enter **current password**
2. Enter **new password**
3. **Confirm new password**
4. Click **"Change password"**

---

**Photos per print page**

Specifies how many photos fit on an A4 page — applies equally to browser printing and PDF export.

- Options: 1, 2, 4, 6, 8, 9, 12

---

**Sign out**

Clicking **"Sign out"** ends the current session.

---

## Display

**Language**

Select the display language of the app:

- **German**
- **English**

Click on the desired option – the app switches language immediately.

---

**Unit**

Unit for lengths and heights on bars:

- **m**, **cm**, or **mm**

---

## Backup

::: tip Admins only
Creating and restoring backups is restricted to admins — the ZIP contains the complete database, including password hashes for all users.
:::

**Create backup**

Downloads all show data as a ZIP archive. The filename only contains the date (e.g. `luxstage-backup-2026-07-25.zip`), not the time — two backups on the same day have identical names and overwrite each other in the download folder.

- Click **"Download ZIP backup"**
- The download starts automatically

---

**Restore backup**

Restores all show data from a previously created ZIP backup. Photos are **added, not replaced** — existing photos with no counterpart in the backup remain in place. The server shuts itself down after restoring and only restarts automatically if a process manager (e.g. PM2, the default for self-hosting) is supervising it.

1. Click **"Select ZIP file …"**
2. Choose a ZIP backup file from the file system
3. Click **"Restore"**
4. Confirm the confirmation dialog

::: warning Note
The database (shows, channels, sections) is completely replaced by the backup. Photos are only added — photos missing from the backup remain in place.
:::

The backup is validated before restoring: whether the ZIP contains a valid database, and whether it's undamaged. If validation fails, the current state remains **untouched**. Possible error messages:

- "ZIP does not contain luxstage.db"
- "Database is corrupted or invalid"
- "Upload too large" — maximum backup size for restoring: **500 MB**. Larger data sets can only be restored via the command line on the server.

Only photos with the extensions `jpg`, `jpeg`, `png`, `gif`, `webp` are restored — other file types in the ZIP are silently skipped.

---

## Server

| Field | Description |
|-------|-------------|
| **Server URL** | API server address (default: http://localhost:3000). Takes effect **immediately** when leaving the field, with no save button — a typo can make the app unusable. |
| **App version** | Currently installed app version |
| **Server version** | Currently installed server version |
| **Disk (free)** | Available storage space on the server — only shown when the server is reachable. Otherwise a connection error is shown instead. |

---

## User Management

**Users**

List of all existing users with email address, a role badge, and a source badge:

| Role | Description |
|------|-------------|
| **Admin** | Full access incl. settings and user management |
| **Technician** | Access to shows, channels, info, photos, floor plan |

The second badge shows the user's source:

| Source | Description |
|--------|-------------|
| **DB** | Created in the database – can be deleted |
| **Env** | Configured via environment variable – cannot be deleted |

Only users with source **DB** have a **"Delete"** button.

---

**New user**

Creates a new user. The initial password is generated automatically and sent by email.

1. Enter **email address**
2. Select **role** (default: Technician)
3. Click **"Create"**

---

**Reset password**

Resets a user's password and displays the new temporary password.

1. Enter the user's **email address**
2. Click **"Reset"**

---

## Email / SMTP

SMTP configuration for automatic emails (welcome, password reset):

| Field | Description | Default |
|-------|-------------|---------|
| **SMTP host** | Mail server hostname | mail.example.com |
| **Port** | SMTP port | 587 |
| **TLS (port 465)** | Checkbox for TLS encryption | – |
| **Username** | SMTP login name | – |
| **Password** | SMTP password | – |
| **Sender (From)** | Sender address | LuxStage <noreply@example.com> |

::: tip Saved password
A previously saved SMTP password is never displayed for security reasons — the field stays empty, with only a placeholder (••••••••) indicating one is set. Saving without filling in the field keeps the old password.
:::

**Buttons:**
- **"Save"** – Save settings
- **"Send test email"** – Opens a dialog to enter the recipient address (pre-filled with your own email), then sends a test email to verify the configuration

---

## Update

Checks for new versions and updates the server. If an error occurs, the old state is automatically restored.

1. Select **branch** — the list comes from the server, the first entry is preselected. The update check starts automatically when opening the tab or switching branches.
2. If an update is available, the page shows the number of new commits and a changelog. Without an available update, the **"Update now"** button is disabled.
3. Clicking **"Update now"** starts the update. A progress bar and a live terminal log show the process in real time.
