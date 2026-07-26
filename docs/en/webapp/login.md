# Login

## Signing in

When you open the web app, the login page shows two fields:

- **Email address** – your login name
- **Password**

Click **"Sign in"**. On incorrect credentials, the message "Login failed. Please check email address and password." appears.

::: tip First login after installation
Credentials are the email address and password set during [installation](../guide/installation).
:::

## Forgot password

Below the sign-in form, one of two hints appears, depending on whether the server is configured for sending email (SMTP):

**SMTP configured** — a **"Forgot password?"** link is available:

1. Click the link → enter your email address → **"Request link"**
2. For security reasons, the same message always appears, regardless of whether an account with that address exists: "If an account with {email} exists, we've sent a reset link. Please check your inbox."
3. The link in the email is valid for **1 hour** and leads to a page for setting a new password (at least 8 characters, with confirmation)

**No SMTP configured** — instead of the link, the message appears: "Contact your administrator to reset your password." An admin can set a new password under **Settings → User Management → Reset password**.
