# Settings

**Settings** are accessible via the gear icon (⚙️) in the left sidebar. The page is divided into seven tabs.

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

Specifies how many photos fit on an A4 page when printing.

- Default: **4**
- Options: 1, 2, 4, 6, 8 (depending on photo size)

---

**Sign out**

Clicking **"Sign out"** ends the current session.

---

## Language

Select the display language of the app:

- 🔴 **German** (currently active)
- ⚫ **English**

Click on the desired option – the app switches language immediately.

---

## Backup

**Create backup**

Downloads all show data as a ZIP archive.

- Click **"Download ZIP backup"**
- The download starts automatically

---

**Restore backup**

Restores all show data and photos from a previously created ZIP backup. The server restarts automatically afterwards.

1. Click **"Select ZIP file …"**
2. Choose a ZIP backup file from the file system
3. Restoration starts automatically

::: warning Note
All current data will be overwritten by the backup.
:::

---

## Server

| Field | Description |
|-------|-------------|
| **Server URL** | API server address (default: http://localhost:3000) |
| **App version** | Currently installed app version |
| **Server version** | Currently installed server version |
| **Disk (free)** | Available storage space on the server |

---

## User Management

**Users**

List of all existing users with email address and role badges:

| Role | Description |
|------|-------------|
| **Admin** | Full access incl. settings and user management |
| **Technician** | Access to shows, channels, info, photos, floor plan |
| **DB** | Database role (technical) |

Each user has a **"Delete"** button.

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

**Buttons:**
- **"Save"** – Save settings
- **"Send test email"** – Send a test email to verify the configuration

---

## Update

Checks for new versions and updates the server. If an error occurs, the old state is automatically restored.

1. Select **branch** (e.g. main, dev)
2. Click **"Update now"**
