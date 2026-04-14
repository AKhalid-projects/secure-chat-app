# System Requirements Index

## Overview

This index belongs to a **final-year undergraduate** graduation project. The **Secure Chat Application** is a **cross-platform mobile client** (React Native with Expo dev client) that uses **CometChat UIKit and SDK** for messaging, voice/video calling, and presence, plus **Firebase Cloud Messaging**, **Notifee**, **CallKeep**, and **VoIP push** on iOS. The **reference implementation** is in [`repository root`](../).

**Project scope**: Requirements were **gathered** through **workshops**, **user interviews**, and discussion (see [`gathering-requirements.md`](gathering-requirements.md)), then **analysed and written up** ([`requirements-analysis.md`](requirements-analysis.md)). The tables below are **cross-checked** against the code so the thesis can show **traceability** from needs to implementation.

**Architectural style**: Client–server; **thin application layer** over CometChat cloud services, with **local state** (AsyncStorage, Zustand), **event-driven** listeners for calls and notifications, and **stack + tab navigation** (React Navigation).

**Major modules**: Bootstrap and shell ([`App.tsx`](../App.tsx), [`index.js`](../index.js)); **navigation**; **login and credentials**; **configuration store**; **conversations and messaging**; **users and groups**; **calls and VoIP**; **push and local notifications**.

**Methodology (Chapter 3, academic)** — Research approach, data collection, tools, repository analysis, ethics, and methodological limits: [`research/methodology/`](research/methodology/) ([`academic-methodology.md`](research/methodology/academic-methodology.md), [`academic-requirements-traceability-methodology.md`](research/methodology/academic-requirements-traceability-methodology.md)).

**Documentation scope** — Source, configuration, patches, and [`README.md`](../README.md) live at the **repository root** (this app is the primary tree). The bundled CometChat UI Kit library under [`packages/`](../packages/) is reference source only unless cited.

**System design (Chapter 5, academic)** — Pre-implementation architecture and traceability matrices: [`research/design/`](research/design/) ([`academic-system-design.md`](research/design/academic-system-design.md), [`academic-requirements-traceability-design.md`](research/design/academic-requirements-traceability-design.md)).

**Implementation (Chapter 6, academic)** — Planned realisation narrative and traceability to design and requirements: [`research/implementation/`](research/implementation/) ([`academic-implementation.md`](research/implementation/academic-implementation.md), [`academic-requirements-traceability-implementation.md`](research/implementation/academic-requirements-traceability-implementation.md)).

**Testing and evaluation (Chapter 7, academic)** — Planned verification methodology and requirement traceability: [`research/evaluation/`](research/evaluation/) ([`academic-testing-evaluation.md`](research/evaluation/academic-testing-evaluation.md), [`academic-requirements-traceability-evaluation.md`](research/evaluation/academic-requirements-traceability-evaluation.md)).

**Discussion (Chapter 8, academic)** — Interpretation scaffolding, limitations, and lessons: [`research/discussion/`](research/discussion/) ([`academic-discussion.md`](research/discussion/academic-discussion.md), [`academic-requirements-traceability-discussion.md`](research/discussion/academic-requirements-traceability-discussion.md)).

**Conclusion and future work (Chapter 9, academic)** — Closing synthesis, contributions, recommendations, and enhancements: [`research/conclusion/`](research/conclusion/) ([`academic-conclusion-future-work.md`](research/conclusion/academic-conclusion-future-work.md), [`academic-requirements-traceability-conclusion.md`](research/conclusion/academic-requirements-traceability-conclusion.md)).

**References (Chapter 10, academic)** — Working bibliography and documentation links aligned with [`package.json`](../package.json): [`research/references/`](research/references/) ([`academic-references.md`](research/references/academic-references.md)).

**Appendices (Chapter 11, academic)** — Requirements table pointers, screenshot inventory, repository evidence paths, and technical artefact notes: [`research/appendices/`](research/appendices/) ([`academic-appendices.md`](research/appendices/academic-appendices.md)).

**Assumptions and limitations (typical for a bachelor project)**: The thesis focuses on the **mobile client**; chat/call **servers** are **CometChat** and push uses **Firebase**—not built from scratch here. **No automated test suite** is included in this repository; demonstrating correctness relies on **manual runs** on simulators or devices. **FR-017** covers **in-app** privacy/encryption **wording**, not student-written cryptography.

---

## Functional Requirements Table

| ID | Requirement Name | Module/Domain | Priority | Status | Source Type | Summary | Detailed File |
|----|------------------|---------------|----------|--------|-------------|---------|---------------|
| FR-001 | CometChat SDK initialization | Integration / Bootstrap | High | Explicit | Code + Config | Initialize UIKit with app id, auth key, region, and subscription type. | [FR-001.md](functional/FR-001.md) |
| FR-002 | Application credentials lifecycle | Authentication / Bootstrap | High | Explicit | Code + UI + Config | Capture, persist, and use CometChat app credentials; route when missing. | [FR-002.md](functional/FR-002.md) |
| FR-003 | UID-based user login | Authentication | High | Explicit | Code + UI | Log in end users via CometChat UID after credentials are valid. | [FR-003.md](functional/FR-003.md) |
| FR-004 | Builder configuration and theming | Configuration | High | Explicit | Code + Config | Load feature flags, layout tabs, colors, and typography from JSON/store. | [FR-004.md](functional/FR-004.md) |
| FR-005 | QR configuration import | Configuration | Medium | Explicit | Code + UI + API | Scan QR to fetch and persist builder configuration. | [FR-005.md](functional/FR-005.md) |
| FR-006 | Application navigation structure | Navigation | High | Explicit | Code + UI | Provide stack and dynamic tab navigation across major areas. | [FR-006.md](functional/FR-006.md) |
| FR-007 | Conversations and messaging | Messaging | High | Explicit | Code + UI | Access conversations and exchange messages for users and groups. | [FR-007.md](functional/FR-007.md) |
| FR-008 | Thread replies | Messaging | Medium | Inferred | Code + UI | Open and participate in thread views tied to parent messages. | [FR-008.md](functional/FR-008.md) |
| FR-009 | Message search | Messaging | Medium | Explicit | Code + UI | Search messages and navigate into message context. | [FR-009.md](functional/FR-009.md) |
| FR-010 | User directory and profiles | User management | Medium | Explicit | Code + UI | List users and view peer information. | [FR-010.md](functional/FR-010.md) |
| FR-011 | Group management and moderation | Group management | Medium | Explicit | Code + UI | Manage group info, membership, bans, and ownership transfer. | [FR-011.md](functional/FR-011.md) |
| FR-012 | Call history and ongoing session | Calls | High | Explicit | Code + UI | Present call logs, details, and active call experience. | [FR-012.md](functional/FR-012.md) |
| FR-013 | Incoming call handling | Calls | High | Explicit | Code + UI | Present incoming calls; decline; reject when busy. | [FR-013.md](functional/FR-013.md) |
| FR-014 | Native call UI and VoIP lifecycle | Calls / Platform | High | Explicit | Code + Dependency Usage | Integrate CallKeep and VoIP handler for native call flows. | [FR-014.md](functional/FR-014.md) |
| FR-015 | Push token registration | Notifications | High | Explicit | Code + Config | Register FCM/APNs/VoIP tokens with CometChat. | [FR-015.md](functional/FR-015.md) |
| FR-016 | Notifications and deep linking | Notifications | High | Explicit | Code | Display notifications and navigate from payloads. | [FR-016.md](functional/FR-016.md) |
| FR-017 | Encryption and privacy messaging UX | Privacy / UX | Medium | Explicit | Code + UI | Show encryption notice and explanatory modal in chat. | [FR-017.md](functional/FR-017.md) |

---

## Non-Functional Requirements Table

| ID | Requirement Name | NFR Category | Priority | Status | Source Type | Summary | Detailed File |
|----|------------------|-------------|----------|--------|-------------|---------|---------------|
| NFR-001 | Cross-platform deployment | Portability | High | Explicit | Config + Dependency Usage | Target iOS and Android via Expo/React Native stack. | [NFR-001.md](non-functional/NFR-001.md) |
| NFR-002 | Error containment | Reliability | High | Explicit | Code | Use error boundary and global handlers to limit unhandled failures. | [NFR-002.md](non-functional/NFR-002.md) |
| NFR-003 | Maintainability and vendor adaptation | Maintainability | Medium | Explicit | Code + Config | Modular layout; patch-package for UIKit fix. | [NFR-003.md](non-functional/NFR-003.md) |
| NFR-004 | Runtime configurability | Configurability | High | Explicit | Code + Config | JSON and AsyncStorage-driven settings and theming. | [NFR-004.md](non-functional/NFR-004.md) |
| NFR-005 | Client credential and token handling | Security | High | Explicit | Code + Config | Store app credentials locally; configure push provider IDs. | [NFR-005.md](non-functional/NFR-005.md) |
| NFR-006 | Visual theme alignment | Usability | Medium | Explicit | Code + Config | Map brand colors and typography into CometChat theme. | [NFR-006.md](non-functional/NFR-006.md) |
| NFR-007 | Internationalization support | Localization | Medium | Explicit | Code | Wrap app with CometChat i18n provider. | [NFR-007.md](non-functional/NFR-007.md) |
| NFR-008 | Technology stack compatibility | Compatibility | High | Explicit | Config + Dependency Usage | Constrain Expo, React Native, and library versions. | [NFR-008.md](non-functional/NFR-008.md) |
| NFR-009 | Native capability declarations | Compatibility | High | Explicit | Config | Declare permissions and background modes for OS integration. | [NFR-009.md](non-functional/NFR-009.md) |
| NFR-010 | Operational observability | Observability | Low | Inferred | Code | Rely on console logging for errors; no APM evidenced. | [NFR-010.md](non-functional/NFR-010.md) |
| NFR-011 | Third-party service integration | Integrability | High | Explicit | Code + Dependency Usage | Depend on CometChat and Firebase messaging stacks. | [NFR-011.md](non-functional/NFR-011.md) |
| NFR-012 | Testability posture | Testability | Medium | Inferred | Code | Modular structure; no automated tests in repository. | [NFR-012.md](non-functional/NFR-012.md) |

---

## Coverage Summary

| Metric | Value |
|--------|-------|
| Total FRs | 17 |
| Total NFRs | 12 |
| Main modules covered | Bootstrap, navigation, auth, configuration, messaging, users, groups, calls, notifications, privacy UX |

**Honest gaps for a student project**: Behaviour inside **CometChat’s servers** is not specified here; **full E2E crypto proofs** are beyond this repo; there is **no** automated regression suite in the tree—markers usually accept **manual testing** if you describe it clearly.

**If the project continues commercially**: A follow-on team would need proper **secret management**, formal **compliance** review, and **automated tests**—not expected at undergraduate level unless your module requires them.
