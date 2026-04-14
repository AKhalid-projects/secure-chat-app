# Requirements traceability to system design (Chapter 5)

This document maps each functional requirement (**FR-001**–**FR-017**) and non-functional requirement (**NFR-001**–**NFR-012**) from [`../requirements-tables.md`](../requirements-tables.md) to the subsections of [`academic-system-design.md`](academic-system-design.md): **§5.1** Architectural design, **§5.2** Use case design, **§5.3** Data flow / process design, **§5.4** Database / data structure design, **§5.5** Interface design, **§5.6** Security design considerations.

**Legend:** **P** = primary subsection for that requirement; **S** = secondary / supporting coverage.

---

## Functional requirements

| ID | Summary | §5.1 | §5.2 | §5.3 | §5.4 | §5.5 | §5.6 |
|----|---------|------|------|------|------|------|------|
| FR-001 | CometChat SDK initialisation | P | | P | | | S |
| FR-002 | Application credentials lifecycle | P | P | P | P | S | P |
| FR-003 | UID-based user login | P | P | P | S | P | S |
| FR-004 | Builder configuration and theming | P | P | P | P | P | |
| FR-005 | QR configuration import | S | P | P | S | P | |
| FR-006 | Application navigation structure | P | P | P | | P | |
| FR-007 | Conversations and messaging | P | P | P | S | P | |
| FR-008 | Thread replies | S | P | P | | P | |
| FR-009 | Message search | S | P | P | | P | |
| FR-010 | User directory and profiles | S | P | P | | P | |
| FR-011 | Group management and moderation | S | P | P | S | P | |
| FR-012 | Call history and ongoing session | P | P | P | | P | |
| FR-013 | Incoming call handling | P | P | P | | P | S |
| FR-014 | Native call UI and VoIP lifecycle | P | P | P | S | P | S |
| FR-015 | Push token registration | P | P | P | P | | P |
| FR-016 | Notifications and deep linking | P | P | P | S | P | P |
| FR-017 | Encryption and privacy messaging UX | | P | | | P | P |

---

## Non-functional requirements

| ID | Summary | §5.1 | §5.2 | §5.3 | §5.4 | §5.5 | §5.6 |
|----|---------|------|------|------|------|------|------|
| NFR-001 | Cross-platform deployment | P | | S | | S | |
| NFR-002 | Error containment | P | | | | S | P |
| NFR-003 | Maintainability and vendor adaptation | P | | | | S | S |
| NFR-004 | Runtime configurability | P | | S | P | P | |
| NFR-005 | Client credential and token handling | S | | S | P | | P |
| NFR-006 | Visual theme alignment | S | | | S | P | |
| NFR-007 | Internationalisation support | S | | | | P | |
| NFR-008 | Technology stack compatibility | P | | | | | S |
| NFR-009 | Native capability declarations | P | | S | | S | P |
| NFR-010 | Operational observability | S | | | | | S |
| NFR-011 | Third-party service integration | P | P | P | S | S | P |
| NFR-012 | Testability posture | P | S | | | | S |

---

## Coverage notes

- **§5.1** carries the overall decomposition (layers, external systems, major modules) and therefore lists **P** for most integration-heavy FRs and structural NFRs.
- **§5.2** concentrates on **actor–system** behaviour; requirements without a distinct user-visible scenario (for example **FR-001**) may appear only indirectly through bootstrap use cases.
- **§5.4** focuses on **local** and **client-held** data; remote conversation state remains under CometChat (**NFR-011**), so several messaging FRs receive only **S** in §5.4.
- **FR-017** is primarily **UX disclosure** and **security positioning**; it is emphasised in §5.5 and §5.6 rather than in core architecture tables.
