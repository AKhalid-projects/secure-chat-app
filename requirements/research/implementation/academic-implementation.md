# Implementation

## Introduction

This chapter describes how the Secure Chat Application **will** be implemented in software in accordance with the system design (Chapter 5, [`../design/academic-system-design.md`](../design/academic-system-design.md)) and the analysed requirements (Chapter 4, [`../requirements-tables.md`](../requirements-tables.md)). The **reference decomposition** follows the intended structure under [`repository root`](../../../): a single Expo-based React Native client with CometChat UIKit and SDK integration, platform notification and call facilities, and local configuration storage.

The thesis table of contents uses headings such as “System modules **implemented**”; unless stated otherwise, this narrative should be read as describing the **planned** and **intended** realisation—what development **will** target—rather than a claim that every obligation has been fully completed and evaluated. Traceability from requirements and from Chapter 5 to this chapter is recorded in [`academic-requirements-traceability-implementation.md`](academic-requirements-traceability-implementation.md).

---

## 6.1 Development environment

### 6.1.1 Toolchain and runtime

Development **will** target a **cross-platform** mobile stack consistent with **NFR-001** (cross-platform deployment) and **NFR-008** (technology stack compatibility). The reference project **will** use **Expo** with the **development client** workflow (`expo start --dev-client`, native `expo run:ios` / `expo run:android`) so that modules requiring native code (push, CallKeep, WebRTC-related components) **will** be available beyond a purely managed Expo Go limitation.

Representative dependency families **will** include: **React** and **React Native** versions declared in the application manifest; **TypeScript** for static typing; **CometChat** UIKit, Chat SDK, and Calls SDK for communication features; **React Navigation** (stack and bottom tabs); **Zustand** for client-side configuration state; **AsyncStorage** for persisted settings and credentials; **patch-package** for controlled vendor patches (**NFR-003**). Exact version pins **will** be taken from [`package.json`](../../../package.json) at submission time rather than duplicated here, so the report remains aligned with reproducible builds.

### 6.1.2 Workstation and targets

Developers **will** use current **Node.js** LTS-compatible releases and a standard package manager (npm, yarn, or pnpm—project convention **will** be recorded in repository instructions). Primary validation **will** rely on **iOS Simulator**, **Android emulator**, and **physical devices**, supporting manual testing approaches anticipated under **NFR-012** (no automated suite evidenced as a primary artefact).

### 6.1.3 Configuration artefacts

Application metadata and native capability declarations **will** reside in Expo configuration (for example [`app.json`](../../../app.json)): bundle identifiers, permissions, background modes, and plugin settings relevant to camera, microphone, notifications, and VoIP (**NFR-009**). Default builder-style settings **will** ship with the repository (for example [`src/config/config.json`](../../../src/config/config.json)); **CometChat application credentials** **will** be supplied at run time or through local storage after first launch—**secrets must not** be embedded in the thesis body; the report **will** refer to placeholders and secure handling practices (**NFR-005**).

### 6.1.4 Repository layout

The implementation **will** concentrate in **the repository-root app** within the wider repository, so that the thesis can cite a **single** coherent client. Other example applications in the repository, if present, **will** remain out of scope unless explicitly compared.

---

## 6.2 System modules (planned decomposition)

This subsection maps the **major software components** described in §5.1.4 of the design chapter to **folders and roles** in the reference tree. The implementation **will** preserve separation between **shell and orchestration**, **navigation**, **configuration**, **feature screens**, and **platform utilities**.

| Reference path (conceptual) | Design layer (Ch 5) | Primary responsibilities | Representative FRs / NFRs |
|----------------------------|---------------------|--------------------------|-------------------------|
| Root module (e.g. `App.tsx`), `index.js` | Application orchestration | SDK/UIKit initialisation, global providers, listeners for calls and notifications, theme wiring | FR-001, FR-014–FR-016, NFR-002, NFR-006 |
| `AppErrorBoundary.tsx` (or equivalent) | Application orchestration | Error containment | NFR-002 |
| `src/navigation/` | Presentation + orchestration | Root stack, tab navigator, navigation service, pending routes | FR-006, FR-016 |
| `src/config/` | Local persistence + orchestration | Zustand store, default JSON, AsyncStorage merge for builder settings | FR-004, FR-005, NFR-004 |
| `src/components/login/` | Presentation | Application credentials, UID login | FR-002, FR-003 |
| `src/components/conversations/` | Presentation + integration | Conversations, messages, threads, search, group admin screens, QR import, encryption UX | FR-005, FR-007–FR-011, FR-017 |
| `src/components/calls/` | Presentation + integration | Call lists, details, ongoing session UI | FR-012 |
| `src/components/users/` | Presentation | User directory | FR-010 |
| `src/components/groups/` | Presentation | Group listing and entry | FR-011 |
| `src/utils/` | Platform services + orchestration | Push registration, notification helpers, VoIP handler, shared constants, navigation helpers | FR-015, FR-016, NFR-005, NFR-009 |
| `src/hooks/` | Presentation support | Keyboard and UI helpers | NFR-006 (indirect) |

The implementation **will** **not** introduce a separate first-party **server** module; “backend” semantics **will** remain delegated to **CometChat** and push infrastructure, as detailed in §6.4 (**NFR-011**).

---

## 6.3 Frontend implementation

### 6.3.1 Composition model

The user interface **will** combine **CometChat UIKit** screens and components for messaging, calls, users, and groups with **project-specific** screens for credential capture, UID login, QR-based configuration import, encryption notices, and auxiliary flows (**FR-006**, **FR-007**, **FR-017**). Thread views, search, and group administration **will** be implemented as navigable routes wrapping or extending UIKit behaviour (**FR-008**, **FR-009**, **FR-011**).

### 6.3.2 State and configuration

Runtime layout, colours, typography, and related builder fields **will** be held in a **Zustand** store initialised from packaged JSON and **merged** with values persisted in **AsyncStorage**, satisfying **FR-004**, **FR-005**, and **NFR-004**. Theme objects **will** be passed into CometChat theme providers so that brand colours and text styles align with UIKit tokens (**NFR-006**). Tab order **will** be driven from configuration rather than hard-coded lists (**FR-004**, **FR-006**).

### 6.3.3 Navigation

The client **will** use **React Navigation**: a **stack** for authentication entry, conversation flows, call-related routes, and utilities (for example QR screen), and a **bottom tab** navigator for primary areas (Chats, Calls, Users, Groups) whose visibility **will** follow builder configuration. A **navigation service** **will** support imperative navigation and **deferred** routing when the container is not yet ready, implementing the design’s pending-navigation intent (**FR-006**, **FR-016**).

### 6.3.4 Cross-cutting concerns

A **root error boundary** **will** wrap major UI subtrees to limit unhandled JavaScript failures (**NFR-002**). **CometChat’s i18n provider** **will** supply vendor string localisation; custom strings may remain English unless extended (**NFR-007**). Accessibility and platform-specific safe areas **will** follow React Native and library defaults unless the project extends them.

---

## 6.4 Backend / service integration implementation

This section **will** **not** describe a student-owned **REST** or **GraphQL** application server. Instead, **service integration** **will** occur **entirely on the client** through vendor SDKs and platform APIs, consistent with Chapter 5 and **NFR-011**.

### 6.4.1 CometChat SDK and UIKit

The implementation **will** initialise **CometChat UIKit** with application identifier, authentication key, region, and subscription type (**FR-001**). **Application credentials** **will** be captured, persisted, and reapplied so that the SDK **will** re-initialise when credentials change (**FR-002**). End-user authentication **will** use **CometChat UID login** against the vendor cloud (**FR-003**). Messaging, presence, groups, and call objects **will** be accessed through documented SDK and UIKit entry points rather than custom HTTP endpoints.

### 6.4.2 Firebase and push registration

**Firebase Cloud Messaging** (and platform counterparts) **will** supply device tokens for remote notifications. The implementation **will** register those tokens with **CometChat** using configured provider identifiers (**FR-015**). This path **will** sit alongside local notification presentation logic described in §6.5 (**FR-016**).

### 6.4.3 Boundary with “backend” wording

Thesis readers **will** interpret “backend / service integration” here as **integration with external services from the mobile tier**, not as implementation of a private database or API owned by the project. Any future extension that adds a first-party server **would** require a new requirements and design iteration.

---

## 6.5 Notification and calling features implementation

Design-level flows appear in §5.3 of [`../design/academic-system-design.md`](../design/academic-system-design.md); this section summarises how the implementation **will** realise them without duplicating every diagram.

### 6.5.1 Notifications

The implementation **will** integrate **Firebase messaging** and, where applicable, **Notifee** (or platform APIs) for foreground and background behaviour. Notification payloads **will** be parsed to extract routing hints; when the navigation container is not ready, actions **will** be **queued** and replayed after readiness (**FR-016**, **FR-006**). **iOS**-specific VoIP token handling **will** complement standard push registration where required for incoming calls (**FR-015**, **NFR-009**).

### 6.5.2 Calls and native presentation

**CometChat Calls** capabilities **will** be combined with **CallKeep** (or equivalent) for native call UI consistency and with **VoIP push** handlers on iOS as configured (**FR-012**, **FR-014**). **Incoming call** surfaces **will** support accept and decline; **busy** behaviour **will** follow product rules for concurrent calls (**FR-013**). Ongoing session screens **will** display active voice/video state tied to SDK call objects (**FR-012**).

### 6.5.3 Permissions and platform variance

Implementation effort **will** account for **permission prompts**, **background execution limits**, and **behavioural differences** between Android and iOS for notifications and calls (**NFR-009**). These concerns **will** inform anticipated challenges in §6.6.

---

## 6.6 Challenges during implementation

The following challenges **will** be treated as **expected** during development of a vendor-integrated mobile client; later revisions of the thesis may rephrase this section in the past tense once work is complete.

- **Vendor and Expo coupling**: Upgrades to **Expo**, **React Native**, or **CometChat** packages **may** require dependency alignment and occasional **patch-package** maintenance (**NFR-003**, **NFR-008**).
- **Push and VoIP complexity**: Differences between **FCM** and **APNs/VoIP** flows **will** demand careful ordering of token registration and navigation side effects (**FR-015**, **FR-016**).
- **Credential handling for demonstrations**: Storing CometChat keys on device **will** remain appropriate for prototypes but **will** require clear disclosure and disciplined use of placeholders in reports (**NFR-005**).
- **Observability and testing**: Reliance on **console** diagnostics and **manual** device testing **will** limit operational insight (**NFR-010**, **NFR-012**); automated regression tests **will** remain a plausible future improvement rather than a claimed deliverable here.

---

## Closing alignment with design and requirements

Chapter 6 **will** realise Chapter 5’s layered architecture through concrete modules under **the repository root**, vendor integrations on the client, and platform services for notifications and calls. The next evaluation stage (Chapter 7) **will** map verification activities to the same **FR** and **NFR** identifiers established in Chapter 4.
