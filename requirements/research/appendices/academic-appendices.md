# Appendices (Chapter 11)

This document structures the **appendices** for the final-year report: **§11.1** Requirements Tables, **§11.2** Screenshots, **§11.3** Repository Evidence Samples, **§11.4** Additional Technical Documentation. It **supports** Chapters 4–10 and the reference implementation [`repository root`](../../../). Screenshots and some optional inserts are **to be completed** at submission time.

---

## 11.1 Requirements tables

The authoritative **tabular** requirement sets appear in this repository as follows:

| Source | Description |
|--------|-------------|
| [`../requirements-tables.md`](../requirements-tables.md) | Combined FR and NFR overview (research layer) |
| [`../functional/requirements-table.md`](../functional/requirements-table.md) | Functional requirements with per-ID links |
| [`../non-functional/requirements-table.md`](../non-functional/requirements-table.md) | Non-functional requirements with per-ID links |
| [`../../functional/`](../../functional/) and [`../../non-functional/`](../../non-functional/) | Full engineering specifications per **FR-XXX** / **NFR-XXX** |

The bound thesis **may** reproduce these tables in Appendix 11.1, cite page numbers from the main requirements chapter, or use a shortened extract—per supervisor guidance. Chapter 4 remains the **narrative** authority; this appendix provides **export-friendly** pointers.

---

## 11.2 Screenshots

Screenshots **will** be captured from **iOS** and/or **Android** simulators or devices after evaluation runs (Chapter 7). **No** image files are committed in this folder by default; store exported figures alongside the thesis project or in a subfolder such as `appendices/images/` if the team chooses to version them.

### Screenshot inventory (placeholders)

| ID | Intended view | Platform | Related FRs | File / status |
|----|---------------|----------|-------------|----------------|
| SS-01 | Application credentials entry | iOS / Android | FR-002, FR-001 | TBD (e.g. `fig-a1-credentials.png`) |
| SS-02 | UID login | iOS / Android | FR-003 | TBD |
| SS-03 | Primary tabs (Chats) | iOS / Android | FR-006, FR-007 | TBD |
| SS-04 | Active conversation / messages | iOS / Android | FR-007 | TBD |
| SS-05 | Thread view | iOS / Android | FR-008 | TBD |
| SS-06 | Message search | iOS / Android | FR-009 | TBD |
| SS-07 | User directory / profile | iOS / Android | FR-010 | TBD |
| SS-08 | Group info / members | iOS / Android | FR-011 | TBD |
| SS-09 | Calls / call detail / ongoing | iOS / Android | FR-012–FR-014 | TBD |
| SS-10 | Incoming call surface | iOS / Android | FR-013 | TBD |
| SS-11 | Notification / deep link context (if demonstrable) | iOS / Android | FR-016 | TBD |
| SS-12 | Encryption notice / modal | iOS / Android | FR-017 | TBD |
| SS-13 | QR configuration flow (if used) | iOS / Android | FR-005 | TBD |

**Figure captions** in the final document **will** reference requirement IDs and test case IDs from Chapter 7 where applicable.

---

## 11.3 Repository evidence samples

Representative **paths** under the repository root for examiner traceability. Paths are relative to the **monorepo** root unless noted.

| Path | Module / feature | Primary FRs | Note |
|------|-------------------|-------------|------|
| [`App.tsx`](../../../App.tsx) | App shell, SDK init, theme, listeners | FR-001, FR-014–FR-016 | Entry orchestration |
| [`AppErrorBoundary.tsx`](../../../AppErrorBoundary.tsx) | Error containment | NFR-002 | Boundary component |
| [`index.js`](../../../index.js) | Global handlers, providers | NFR-002 | Root bootstrap |
| [`src/navigation/RootStackNavigator.tsx`](../../../src/navigation/RootStackNavigator.tsx) | Stack routes | FR-006 | Auth and feature stacks |
| [`src/navigation/BottomTabNavigator.tsx`](../../../src/navigation/BottomTabNavigator.tsx) | Dynamic tabs | FR-004, FR-006 | Builder-driven layout |
| [`src/navigation/NavigationService.ts`](../../../src/navigation/NavigationService.ts) | Imperative / pending navigation | FR-006, FR-016 | |
| [`src/config/store.ts`](../../../src/config/store.ts) | Configuration store | FR-004, FR-005, NFR-004 | Zustand + AsyncStorage |
| [`src/config/config.json`](../../../src/config/config.json) | Default builder JSON | FR-004 | |
| [`src/components/login/AppCredentials.tsx`](../../../src/components/login/AppCredentials.tsx) | CometChat app credentials | FR-002 | |
| [`src/components/login/SampleUser.tsx`](../../../src/components/login/SampleUser.tsx) | UID login | FR-003 | |
| [`src/components/conversations/screens/Conversations.tsx`](../../../src/components/conversations/screens/Conversations.tsx) | Conversation list | FR-007 | |
| [`src/components/conversations/screens/Messages.tsx`](../../../src/components/conversations/screens/Messages.tsx) | Messages | FR-007 | |
| [`src/components/conversations/screens/ThreadView.tsx`](../../../src/components/conversations/screens/ThreadView.tsx) | Threads | FR-008 | |
| [`src/components/conversations/screens/SearchMessages.tsx`](../../../src/components/conversations/screens/SearchMessages.tsx) | Search | FR-009 | |
| [`src/components/conversations/screens/qr_screen.tsx`](../../../src/components/conversations/screens/qr_screen.tsx) | QR config | FR-005 | |
| [`src/components/conversations/EncryptionNoticeBanner.tsx`](../../../src/components/conversations/EncryptionNoticeBanner.tsx) | Privacy copy | FR-017 | |
| [`src/components/conversations/EncryptionInfoModal.tsx`](../../../src/components/conversations/EncryptionInfoModal.tsx) | Privacy modal | FR-017 | |
| [`src/components/users/Users.tsx`](../../../src/components/users/Users.tsx) | User directory | FR-010 | |
| [`src/components/groups/Groups.tsx`](../../../src/components/groups/Groups.tsx) | Groups | FR-011 | |
| [`src/components/calls/Calls.tsx`](../../../src/components/calls/Calls.tsx) | Call history tab | FR-012 | |
| [`src/utils/PushNotification.tsx`](../../../src/utils/PushNotification.tsx) | Push registration helpers | FR-015 | |
| [`src/utils/helper.ts`](../../../src/utils/helper.ts) | Notifications / navigation helpers | FR-016 | |
| [`src/utils/VoipNotificationHandler.ts`](../../../src/utils/VoipNotificationHandler.ts) | VoIP handling | FR-014–FR-016 | |

Longer **code excerpts** for the bound thesis **will** be copied with line-range citations as required by the faculty; **do not** paste secrets (CometChat keys, Firebase private keys) into the appendix.

---

## 11.4 Additional technical documentation

Optional material **to be inserted** or **referenced** at submission:

| Artefact | Path / topic | Note |
|----------|----------------|------|
| Sample app README | [`README.md`](../../../README.md) | Setup and run instructions |
| Repository overview | [`README.md`](../../../README.md) (repo root) | Monorepo context |
| Expo configuration | [`app.json`](../../../app.json) | Permissions and native settings (redact if needed) |
| Dependency manifest | [`package.json`](../../../package.json) | Versions for reproducibility (**NFR-008**) |
| UIKit patch | [`patches/@cometchat+chat-uikit-react-native+5.2.10.patch`](../../../patches/@cometchat+chat-uikit-react-native+5.2.10.patch) | **patch-package** artefact (**NFR-003**) |

Chapter 10 [**References**](../references/academic-references.md) lists **external** documentation URLs; this subsection lists **in-repository** technical artefacts only.
