# Local app password (device-only)

## Purpose

The Sign In / Sign Up screens collect a **password** that is **not** sent to CometChat. It is used only on-device to gate access after CometChat UID login.

## Storage

- **Implementation:** `src/services/localAuth.ts` using `expo-secure-store` and SHA-256 (via `expo-crypto`) with a random salt per UID.
- **Key pattern:** `local_auth_v1_<uid>`

## Flow

1. **Sign Up:** After `POST /users` and `CometChatUIKit.login`, the app saves the password hash for that UID.
2. **Sign In:** If a password exists for the UID, it must match before CometChat login. If none exists yet, the first successful CometChat login on that device stores the password the user entered (bootstrap for that device).

## Limitations

- Passwords do **not** sync across devices or with CometChat’s servers.
- This is **not** a replacement for CometChat Auth Token / server-side identity; it is an app-layer lock only.
