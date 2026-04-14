# Testing and Evaluation

## Introduction

This chapter specifies how the Secure Chat Application **will** be **tested** and **evaluated** against the requirements established in Chapter 4 ([`../requirements-tables.md`](../requirements-tables.md)), the system design in Chapter 5 ([`../design/academic-system-design.md`](../design/academic-system-design.md)), and the intended implementation in Chapter 6 ([`../implementation/academic-implementation.md`](../implementation/academic-implementation.md)). Evaluation **will** follow the **scenario-oriented** acceptance style described in [`../academic-requirements-analysis.md`](../academic-requirements-analysis.md): primarily **manual** execution on simulators, emulators, or devices, supplemented by **inspection** of configuration and dependencies for non-functional obligations.

**Convention for incomplete work:** Unless stated otherwise, **outcome** cells and **findings** **will** read **to be determined (TBD)** or **to be recorded** upon execution. The thesis **will not** claim measured benchmarks, formal security audits, or automated regression coverage that the repository does not support (**NFR-010**, **NFR-012**). Detailed acceptance steps remain authoritative in the engineering requirement files under [`../../functional/`](../../functional/) and [`../../non-functional/`](../../non-functional/); this chapter **aggregates** them for examination narrative.

Traceability identifiers **will** reference Appendix 11.1 requirement tables for export. Mapping from requirements and design use cases to this chapter appears in [`academic-requirements-traceability-evaluation.md`](academic-requirements-traceability-evaluation.md).

---

## 7.1 Testing strategy

### 7.1.1 Objectives

The evaluation **will** determine whether the client **satisfies** **FR-001–FR-017** and **NFR-001–NFR-012** within the project’s scope: a **thin** mobile client integrating **CometChat** and platform services, without a student-built chat server. **High** priority requirements from Chapter 4 **will** form the **minimum bar** for a successful supervised demonstration.

### 7.1.2 Scope and exclusions

**In scope:**

- **Functional walkthroughs** along critical paths aligned with design use cases UC-01–UC-12 (Chapter 5, §5.2).
- **Manual** checks of messaging, calls, navigation, configuration, notifications, and privacy messaging UX.
- **Inspection** of `app.json` (or equivalent), `package.json`, and key modules under [`repository root`](../../../) for compatibility and declared capabilities.
- **Operational** checks: push token acquisition, notification display, and call presentation on supported platforms—subject to test credentials and device availability.

**Out of scope** (unless explicitly added later):

- **Penetration testing** or formal cryptographic verification of CometChat’s protocols.
- **Load** or **stress** testing of vendor infrastructure.
- **Automated** UI or unit test suites as primary pass/fail evidence (**NFR-012**).

### 7.1.3 Test environment

| Element | Description |
|---------|-------------|
| Application under test | Reference build from [`repository root`](../../../) |
| Platforms | **iOS** (Simulator and/or device), **Android** (emulator and/or device) |
| Tooling | Expo dev client workflow; developer console for logs (**NFR-010**) |
| External services | CometChat **sandbox** or project-appropriate tenant; Firebase project for FCM (test configuration—**no secrets in the thesis body**) |

### 7.1.4 Traceability and priority

Each test theme **will** cite **FR** or **NFR** identifiers. **High** priority items (see [`../requirements-tables.md`](../requirements-tables.md)) **will** be exercised before **Medium** items when time is constrained. **Inferred** confidence requirements (for example **FR-008**) **will** be labelled in test logs so examiners can reconcile with Chapter 4.

### 7.1.5 Relation to implementation locations

Test cases **will** be mapped loosely to modules in Chapter 6 §6.2 (for example navigation under `src/navigation/`, push under `src/utils/`) to support Appendix 11.3 **repository evidence** without duplicating full file lists here.

---

## 7.2 Functional testing

Test cases use identifiers **TC-FR-xxx-n**. Preconditions assume a **clean install** or documented reset unless otherwise stated. Expected results **will** be marked **pass / fail / blocked** when evaluation runs.

### 7.2.1 Bootstrap and authentication (FR-001–FR-003)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-001-01 | Valid CometChat app credentials available | Launch app; observe startup until interactive | SDK/UIKit initialisation completes without blocking the app indefinitely; user can proceed to credential or login flow | FR-001 |
| TC-FR-002-01 | First launch or cleared storage | Enter app ID, auth key, region; save | Credentials persist; SDK **will** re-initialise appropriately on next launch | FR-002 |
| TC-FR-002-02 | Invalid or missing credentials | Attempt to proceed without valid credentials | User remains on credential capture or equivalent until resolved | FR-002 |
| TC-FR-003-01 | Credentials valid; SDK ready | Enter UID; submit login | Authenticated session established; primary tabbed experience reachable | FR-003 |

### 7.2.2 Configuration and navigation (FR-004–FR-006)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-004-01 | Default `config.json` present | Launch app; inspect tab order and styling | Tabs and theme reflect stored/builder configuration | FR-004 |
| TC-FR-005-01 | QR flow available | Scan valid QR (or simulate fetch); confirm | Builder configuration updates; tabs/theme refresh | FR-005 |
| TC-FR-006-01 | Logged in | Navigate between stack screens and tabs | Transitions succeed; no crash when switching major areas | FR-006 |
| TC-FR-006-02 | Cold start with pending deep link intent (if simulated) | Open app from notification payload (test harness) | Deferred navigation **will** flush when container ready | FR-006, FR-016 |

### 7.2.3 Messaging (FR-007–FR-009)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-007-01 | Logged in; peer or group available | Open conversation; send and receive a message | Messages appear in thread; real-time update observable | FR-007 |
| TC-FR-008-01 | Thread-capable conversation | Open thread from parent message | Thread history scoped to thread | FR-008 |
| TC-FR-009-01 | Messages present in conversation | Run in-conversation search; open result | Navigates to message or thread context | FR-009 |

### 7.2.4 Users and groups (FR-010–FR-011)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-010-01 | Logged in | Open user directory; open user profile | List and profile render; actions consistent with UIKit | FR-010 |
| TC-FR-011-01 | Group permissions available | Create or join group; open group management screens | Group info, members, moderation flows reachable | FR-011 |

### 7.2.5 Calls (FR-012–FR-014)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-012-01 | Call history available | Open Calls tab; view log and detail | History and detail screens load | FR-012 |
| TC-FR-012-02 | Active call scenario | Join ongoing session UI | Ongoing call screen reflects session | FR-012 |
| TC-FR-013-01 | Incoming call test possible | Trigger incoming call; accept/decline | Incoming UI appears; actions respected | FR-013 |
| TC-FR-013-02 | Concurrent call policy | Place or simulate busy condition | Busy rejection per product rules | FR-013 |
| TC-FR-014-01 | Native integration enabled | Observe CallKeep / platform call UI | System-consistent presentation | FR-014 |

### 7.2.6 Notifications (FR-015–FR-016)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-015-01 | Permissions granted | Launch; observe token registration path | FCM/APNs (and VoIP if used) registered with CometChat | FR-015 |
| TC-FR-016-01 | Remote message possible | Send test push; tap notification | App opens; navigates toward indicated context | FR-016 |
| TC-FR-016-02 | Foreground vs background | Receive message in each mode | Local notification policy behaves without crash | FR-016 |

### 7.2.7 Privacy UX (FR-017)

| ID | Preconditions | Steps | Expected result | FR |
|----|-----------------|-------|-----------------|-----|
| TC-FR-017-01 | Chat surface visible | View encryption banner/modal copy | User-facing explanation present; **no** claim of custom student cryptography | FR-017 |

---

## 7.3 Non-functional testing

Non-functional verification **will** combine **inspection**, **short operational checks**, and **qualitative review**, as summarised below. Outcomes **TBD** until recorded.

| NFR | Method | Checks |
|-----|--------|--------|
| NFR-001 | Operational | Build and run on **both** iOS and Android targets |
| NFR-002 | Operational / inspection | Trigger render error in subtree if safe; observe error boundary; review global handler wiring in `index.js` |
| NFR-003 | Inspection | Review modular folders; note `patch-package` entries and rationale |
| NFR-004 | Functional overlap | Change persisted builder settings; confirm UI reflects without full native rebuild where applicable |
| NFR-005 | Inspection | Review storage of credentials/tokens (no secrets in report); document prototype posture |
| NFR-006 | Functional overlap | Toggle light/dark if applicable; verify theme tokens in chat UI |
| NFR-007 | Inspection | Confirm CometChat i18n provider usage; note language of custom strings |
| NFR-008 | Inspection | Compare `package.json` versions with thesis declaration |
| NFR-009 | Inspection | Verify permissions/background modes in Expo config match features used |
| NFR-010 | Inspection | Confirm diagnostics are console-oriented; no APM claimed |
| NFR-011 | Inspection | Document reliance on CometChat/Firebase; **no** fake first-party API |
| NFR-012 | Inspection | State absence of automated suite as primary evidence; modular structure noted for future tests |

---

## 7.4 Evaluation against requirements

### 7.4.1 Summary evaluation matrix (functional)

Each row **will** receive an **outcome** and **evidence pointer** (screenshot ID, short log excerpt, or file path) when evaluation completes.

| FR | Evaluation method | Outcome | Evidence ref. |
|----|-------------------|---------|----------------|
| FR-001 | Functional (TC-FR-001-01) | TBD | TBD |
| FR-002 | Functional (TC-FR-002-01, TC-FR-002-02) | TBD | TBD |
| FR-003 | Functional (TC-FR-003-01) | TBD | TBD |
| FR-004 | Functional (TC-FR-004-01) | TBD | TBD |
| FR-005 | Functional (TC-FR-005-01) | TBD | TBD |
| FR-006 | Functional (TC-FR-006-01, TC-FR-006-02) | TBD | TBD |
| FR-007 | Functional (TC-FR-007-01) | TBD | TBD |
| FR-008 | Functional (TC-FR-008-01) | TBD | TBD |
| FR-009 | Functional (TC-FR-009-01) | TBD | TBD |
| FR-010 | Functional (TC-FR-010-01) | TBD | TBD |
| FR-011 | Functional (TC-FR-011-01) | TBD | TBD |
| FR-012 | Functional (TC-FR-012-01, TC-FR-012-02) | TBD | TBD |
| FR-013 | Functional (TC-FR-013-01, TC-FR-013-02) | TBD | TBD |
| FR-014 | Functional (TC-FR-014-01) | TBD | TBD |
| FR-015 | Functional (TC-FR-015-01) | TBD | TBD |
| FR-016 | Functional (TC-FR-016-01, TC-FR-016-02) | TBD | TBD |
| FR-017 | Functional (TC-FR-017-01) | TBD | TBD |

### 7.4.2 Summary evaluation matrix (non-functional)

| NFR | Evaluation method | Outcome | Evidence ref. |
|-----|-------------------|---------|----------------|
| NFR-001 | §7.3 checklist | TBD | TBD |
| NFR-002 | §7.3 checklist | TBD | TBD |
| NFR-003 | §7.3 checklist | TBD | TBD |
| NFR-004 | §7.3 checklist | TBD | TBD |
| NFR-005 | §7.3 checklist | TBD | TBD |
| NFR-006 | §7.3 checklist | TBD | TBD |
| NFR-007 | §7.3 checklist | TBD | TBD |
| NFR-008 | §7.3 checklist | TBD | TBD |
| NFR-009 | §7.3 checklist | TBD | TBD |
| NFR-010 | §7.3 checklist | TBD | TBD |
| NFR-011 | §7.3 checklist | TBD | TBD |
| NFR-012 | §7.3 checklist | TBD | TBD |

### 7.4.3 Demonstration gate

A **minimum demonstration** **will** treat all **High** priority functional requirements and critical non-functional items (**NFR-001**, **NFR-005**, **NFR-008**, **NFR-009**, **NFR-011**) as **must-verify** before claiming overall satisfaction, subject to supervisor guidance.

---

## 7.5 Findings and results

### 7.5.1 Planned reporting structure

When evaluation **is** executed, results **will** be reported under the following headings:

1. **Functional summary** — pass/fail counts by FR; notable defects with severity.
2. **Non-functional summary** — inspection outcomes; platform-specific notes.
3. **Requirements coverage** — reference §7.4 matrices with final outcomes replacing **TBD**.
4. **Deviations** — requirements partially met or blocked by environment or vendor constraints.

### 7.5.2 Known limitations (anticipated)

Findings **will** acknowledge dependence on **third-party** uptime and behaviour (**NFR-011**), variability in **push** delivery across devices, and **manual** test coverage limits (**NFR-012**). **FR-017** **will** be reported as **UX compliance**, not cryptographic assurance.

### 7.5.3 Threats to validity

- **Manual execution** may miss edge cases covered by automated regression in industry practice.
- **Device and network** diversity may be limited for a student project.
- **Observer bias** **will** be mitigated by using predefined test cases and requirement IDs.

Interpretation of results **will** belong primarily to **Chapter 8 (Discussion)**; this chapter **will** supply **factual** testing outcomes and structured matrices.

---

## Closing alignment

Testing and evaluation **will** close the loop from Chapter 4’s requirement set through design and implementation to **evidence-backed** statements suitable for academic assessment, without overstating automation or security guarantees.
