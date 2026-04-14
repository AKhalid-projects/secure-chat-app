# Requirements tables (research)

Single entry point for **tabular overviews** of all functional and non-functional requirements in the research layer. The same content is embedded in **Section 9** of [`academic-requirements-analysis.md`](academic-requirements-analysis.md). For full academic chapters, see [`academic-requirements-gathering.md`](academic-requirements-gathering.md) and [`academic-requirements-analysis.md`](academic-requirements-analysis.md).

## Functional requirements (FR-001–FR-017)

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

**Detailed table with per-ID links:** [`functional/requirements-table.md`](functional/requirements-table.md)

---

## Non-functional requirements (NFR-001–NFR-012)

| ID | Requirement | Category | Priority | Confidence | Summary |
|----|-------------|----------|----------|------------|---------|
| NFR-001 | Cross-platform deployment | Portability | High | Explicit | Deployable on iOS and Android via Expo dev client and shared React Native codebase. |
| NFR-002 | Error containment | Reliability | High | Explicit | Root error boundary and global handlers to limit unhandled JavaScript failures. |
| NFR-003 | Maintainability and vendor adaptation | Maintainability | Medium | Explicit | Modular layout; controlled `patch-package` fixes for UIKit edge cases. |
| NFR-004 | Runtime configurability | Configurability | High | Explicit | JSON defaults and AsyncStorage overrides for settings and theming without full rebuild for many parameters. |
| NFR-005 | Client credential and token handling | Security | High | Explicit | Local storage of app credentials and push provider identifiers; prototype-appropriate posture. |
| NFR-006 | Visual theme alignment | Usability | Medium | Explicit | Brand and text colours mapped into CometChat theme; system light/dark where applicable. |
| NFR-007 | Internationalisation support | Localisation | Medium | Explicit | CometChat i18n provider; vendor strings translatable; custom copy may remain English. |
| NFR-008 | Technology stack compatibility | Compatibility | High | Explicit | Declared Expo, React Native, and dependency versions for reproducible builds. |
| NFR-009 | Native capability declarations | Compatibility | High | Explicit | Permissions and background modes in Expo config for camera, audio, notifications, VoIP. |
| NFR-010 | Operational observability | Observability | Low | Inferred | Console-oriented diagnostics; no integrated APM evidenced in repository. |
| NFR-011 | Third-party service integration | Integrability | High | Explicit | Dependence on CometChat and Firebase messaging; client as thin layer over external services. |
| NFR-012 | Testability posture | Testability | Medium | Inferred | Modular structure supports future tests; no automated test suite in repository. |

**Detailed table with per-ID links:** [`non-functional/requirements-table.md`](non-functional/requirements-table.md)

---

Master index with engineering source types: [`../requirements-index.md`](../requirements-index.md).
