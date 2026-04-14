# Functional requirements (research) — tabular overview

The same tables appear under **Section 9** of [`../academic-requirements-analysis.md`](../academic-requirements-analysis.md) (Requirements Analysis).

This table summarises **FR-001** through **FR-017** for the Secure Chat Application in a compact form. **Narrative** links point to the academic prose file in this folder; **Specification** links point to the full engineering template under [`../../functional/`](../functional/).

| ID | Requirement | Domain | Priority | Confidence | Summary |
|----|-------------|--------|----------|------------|---------|
| FR-001 | CometChat SDK initialisation | Integration / Bootstrap | High | Explicit | Initialise UIKit with app id, auth key, region, and all-users subscription before authenticated use. |
| FR-002 | Application credentials lifecycle | Authentication / Bootstrap | High | Explicit | Capture, persist, and re-initialise SDK with CometChat credentials; route users when credentials are incomplete. |
| FR-003 | UID-based user login | Authentication | High | Explicit | Authenticate end users via CometChat UID and navigate to the primary tabbed experience. |
| FR-004 | Builder configuration and theming | Configuration | High | Explicit | Load feature flags, tab order, colours, and typography from JSON and store; apply CometChat theme tokens. |
| FR-005 | QR configuration import | Configuration | Medium | Explicit | Scan QR, fetch builder configuration, persist it, and update global configuration. |
| FR-006 | Application navigation structure | Navigation | High | Explicit | Stack and dynamic tab navigation; deferred navigation when the container is not ready. |
| FR-007 | Conversations and messaging | Messaging | High | Explicit | Conversation lists and real-time messaging for users and groups via UIKit integration. |
| FR-008 | Thread replies | Messaging | Medium | Inferred | Thread views for parent messages and thread-scoped history. |
| FR-009 | Message search | Messaging | Medium | Explicit | Search within a conversation context; navigate to message or thread context from results. |
| FR-010 | User directory and profiles | User management | Medium | Explicit | List users and show profile screens; open chats from directory actions. |
| FR-011 | Group management and moderation | Group management | Medium | Explicit | Create and join groups; manage members, bans, ownership, and group information screens. |
| FR-012 | Call history and ongoing session | Calls | High | Explicit | Call logs, call details, and ongoing voice/video session UI. |
| FR-013 | Incoming call handling | Calls | High | Explicit | Incoming call UI, decline, and busy rejection when another call is active. |
| FR-014 | Native call UI and VoIP lifecycle | Calls / Platform | High | Explicit | CallKeep and VoIP handler integration; platform-consistent call presentation. |
| FR-015 | Push token registration | Notifications | High | Explicit | Obtain FCM/APNs/VoIP tokens and register with CometChat using provider identifiers. |
| FR-016 | Notifications and deep linking | Notifications | High | Explicit | Local notifications and foreground/background handling; navigate from payload data. |
| FR-017 | Encryption and privacy messaging UX | Privacy / UX | Medium | Explicit | Banner and modal explaining encryption and privacy (user-facing copy, not custom cryptography). |

## Per-requirement links

| ID | Research narrative | Engineering specification |
|----|---------------------|---------------------------|
| FR-001 | [FR-001.md](FR-001.md) | [FR-001.md](../../functional/FR-001.md) |
| FR-002 | [FR-002.md](FR-002.md) | [FR-002.md](../../functional/FR-002.md) |
| FR-003 | [FR-003.md](FR-003.md) | [FR-003.md](../../functional/FR-003.md) |
| FR-004 | [FR-004.md](FR-004.md) | [FR-004.md](../../functional/FR-004.md) |
| FR-005 | [FR-005.md](FR-005.md) | [FR-005.md](../../functional/FR-005.md) |
| FR-006 | [FR-006.md](FR-006.md) | [FR-006.md](../../functional/FR-006.md) |
| FR-007 | [FR-007.md](FR-007.md) | [FR-007.md](../../functional/FR-007.md) |
| FR-008 | [FR-008.md](FR-008.md) | [FR-008.md](../../functional/FR-008.md) |
| FR-009 | [FR-009.md](FR-009.md) | [FR-009.md](../../functional/FR-009.md) |
| FR-010 | [FR-010.md](FR-010.md) | [FR-010.md](../../functional/FR-010.md) |
| FR-011 | [FR-011.md](FR-011.md) | [FR-011.md](../../functional/FR-011.md) |
| FR-012 | [FR-012.md](FR-012.md) | [FR-012.md](../../functional/FR-012.md) |
| FR-013 | [FR-013.md](FR-013.md) | [FR-013.md](../../functional/FR-013.md) |
| FR-014 | [FR-014.md](FR-014.md) | [FR-014.md](../../functional/FR-014.md) |
| FR-015 | [FR-015.md](FR-015.md) | [FR-015.md](../../functional/FR-015.md) |
| FR-016 | [FR-016.md](FR-016.md) | [FR-016.md](../../functional/FR-016.md) |
| FR-017 | [FR-017.md](FR-017.md) | [FR-017.md](../../functional/FR-017.md) |

**Confidence** reflects how directly the requirement is supported by the reference implementation (*explicit* vs *inferred*), consistent with [`../../requirements-index.md`](../../requirements-index.md).
