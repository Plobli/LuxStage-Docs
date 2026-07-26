# Installation

Automated installation on Debian, Ubuntu, or Raspberry Pi OS. A script takes care of everything — Node.js, reverse proxy, and database.

::: tip Don't want to run your own server?
This guide covers self-hosting. Alternatively, LuxStage is available as a hosted service at [luxstage.app](https://luxstage.app) — no server installation required.
:::

::: warning Install at your own risk
Please back up your data and only run the script on systems over which you have full control.
:::

::: warning Requirements
The script requires **root/sudo privileges**, an **interactive terminal session** (not a pipe like `curl | sudo bash`), internet access, and **`apt-get`** — so it only works on **Debian, Ubuntu, or Raspberry Pi OS**, not Fedora, Arch, or Alpine.

The script **changes the system hostname** (`hostnamectl set-hostname`) and **edits `/etc/hosts`** — an intervention that reaches beyond LuxStage itself.
:::

## Step 1 — SSH access to the server

You need SSH access to your server (Linux, Raspberry Pi, etc.)

```bash
ssh user@192.168.x.x
```

Or if your server already has a name (e.g. `raspberry.local`):

```bash
ssh user@raspberry.local
```

## Step 2 — Run the installation script

The script downloads the latest [GitHub release](https://github.com/Plobli/LuxStage/releases) (not the `main` branch) and configures the server automatically. The version after installation can therefore differ from the current `main` branch.

Run these two commands:

```bash
curl -fsSL https://raw.githubusercontent.com/Plobli/LuxStage/main/install.sh -o /tmp/luxstage-install.sh
sudo bash /tmp/luxstage-install.sh
```

::: tip Prefer Docker?
If you prefer Docker, you can also run LuxStage via `docker compose` — see
[Docker installation](#docker-installation) below. The installer here is the
Docker-free path (Node.js + PM2 directly on the system).
:::

## Step 3 — Enter configuration

The script asks you a few questions. Press Enter for the default values.

**System user** — The LuxStage service runs under this user:
```
System user for LuxStage [luxstage]: ⏎
```

**Hostname** — The app will then be accessible at `http://luxstage.local`:
```
Hostname [luxstage]: ⏎
```

**External domain (optional)** — If you want LuxStage to be accessible from outside, enter your domain with schema (e.g. `https://luxstage.example.com`). Otherwise just skip:
```
External domain []: ⏎
```

**Admin email** — This is also your login name:
```
Admin email (used as login): you@example.com
```

**Admin password** — At least 8 characters, asked twice for confirmation:
```
Admin password (min. 8 characters): ••••••••
Confirm admin password: ••••••••
```

::: info Remember the admin password
You will need it for the first login. After three failed attempts (empty password, too short, or confirmation mismatch), the installation aborts.
:::

::: tip Additional users
The script only creates the admin account. Add technicians and further administrators after logging in, under **Settings → Users** — each with their own email address.
:::

## Step 4 — What gets set up

- **LuxStage server** — starts automatically on system boot (via PM2)
- **Web app** — accessible in the browser, full functionality
- **Caddy reverse proxy** — automatic HTTPS, no port needed
- **SQLite database** — a single file, no separate database service required
- **CORS** — assembled automatically from hostname, server IP, and external domain. If you later access the app from another address not known at install time, you'll get CORS errors.

The script also installs these third-party packages: `build-essential`, `python3`, `unzip`, `caddy`, `avahi-daemon`, plus **nvm, Node.js 22, and PM2** via a third-party script from GitHub. Relevant for systems under compliance requirements.

## Step 5 — Restart (recommended)

At the end, the script recommends a restart so the new hostname takes effect — it is **not strictly required**, LuxStage is already running via PM2 beforehand. Recommended:

```bash
sudo reboot
```

## First access

After the restart, open a browser:

- **Internal:** `http://luxstage.local`
- **Or directly:** `http://SERVER-IP` (e.g. `http://192.168.1.100`)
- **External domain (if configured):** `https://luxstage.example.com`

### Credentials

| Account | Login | Password |
|---------|-------|----------|
| Admin | Your email from the installation | Password from the installation |

The login name is always the email address.

### User roles

| Role | Permissions |
|------|-------------|
| Administrator | Everything, incl. templates, backup, updates |
| Technician | Read and edit productions, no templates/backup |

Add further users under **Settings → Users**. If SMTP is configured, they receive their initial password by email.

## Troubleshooting

### Not reachable at luxstage.local?

Try using the IP address directly. Find the hostname like this:

```bash
ip addr show
```

Or test mDNS:

```bash
avahi-resolve-address 127.0.0.1
```

### Server doesn't start after reboot?

Check the PM2 (process manager) status:

```bash
sudo -u luxstage pm2 status
```

Check the logs:

```bash
sudo journalctl -u pm2-luxstage -n 50
```

### Port 3000 is used by another process?

Change the port in the PM2 configuration:

```bash
nano /home/luxstage/LuxStage/ecosystem.config.cjs
```

Also adjust Caddy:

```bash
sudo nano /etc/caddy/Caddyfile
```

Restart services:

```bash
systemctl restart caddy && sudo -u luxstage pm2 restart all
```

## Docker installation

An alternative to the installer above: run LuxStage via `docker compose`. Works on any system with Docker, not limited to Debian/Ubuntu.

1. Clone the repository or download `docker-compose.yml` and `.env.example`
2. Create an `.env` file (copy from `.env.example`) and fill it in:

```bash
# Required: at least 32 random characters
JWT_SECRET=$(openssl rand -hex 32)

# Required: admin credentials for the first start
ADMIN_EMAIL=you@example.com
ADMIN_PASSWORD=yourPassword

# Optional: comma-separated, additional addresses the web app is loaded from
CORS_ORIGINS=http://192.168.1.100,https://luxstage.example.com
```

3. Start the containers:

```bash
docker compose up -d
```

The server is then reachable on port `3030` (default configuration, adjustable in the compose file), with data stored in the `luxstage-data` Docker volume. Unlike the script installer, no Caddy is set up automatically for HTTPS here — you'll need your own reverse proxy in front of the container.

## Help & Support

- [GitHub Issues](https://github.com/Plobli/LuxStage) — report problems or ask questions
- Email: hello@luxstage.app
