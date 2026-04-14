# Traceability: requirements, design use cases, and testing (Chapter 7)

This document links the analysed requirements ([`../requirements-tables.md`](../requirements-tables.md)), design use cases from [`../design/academic-system-design.md`](../design/academic-system-design.md) (§5.2), and the testing chapter [`academic-testing-evaluation.md`](academic-testing-evaluation.md).

**Legend:** **P** = primary subsection; **S** = secondary.

---

## Functional requirements → Chapter 7 subsections

| ID | §7.1 | §7.2 | §7.3 | §7.4 | §7.5 |
|----|------|------|------|------|------|
| FR-001 | P | P | | P | S |
| FR-002 | P | P | | P | S |
| FR-003 | P | P | | P | S |
| FR-004 | P | P | S | P | S |
| FR-005 | P | P | | P | S |
| FR-006 | P | P | | P | S |
| FR-007 | P | P | | P | S |
| FR-008 | P | P | | P | S |
| FR-009 | P | P | | P | S |
| FR-010 | P | P | | P | S |
| FR-011 | P | P | | P | S |
| FR-012 | P | P | | P | S |
| FR-013 | P | P | | P | S |
| FR-014 | P | P | S | P | S |
| FR-015 | P | P | S | P | S |
| FR-016 | P | P | S | P | S |
| FR-017 | P | P | S | P | S |

---

## Non-functional requirements → Chapter 7 subsections

| ID | §7.1 | §7.2 | §7.3 | §7.4 | §7.5 |
|----|------|------|------|------|------|
| NFR-001 | P | S | P | P | S |
| NFR-002 | S | S | P | P | S |
| NFR-003 | S | | P | P | S |
| NFR-004 | S | S | P | P | S |
| NFR-005 | P | S | P | P | S |
| NFR-006 | S | S | P | P | S |
| NFR-007 | S | S | P | P | S |
| NFR-008 | P | S | P | P | S |
| NFR-009 | P | S | P | P | S |
| NFR-010 | P | | P | P | S |
| NFR-011 | P | S | P | P | S |
| NFR-012 | P | | P | P | S |

---

## Design use cases (§5.2) → test themes

| Use case (Ch 5) | Test theme in §7.2 |
|-----------------|-------------------|
| UC-01 Configure CometChat application credentials | Bootstrap / credentials |
| UC-02 Sign in with UID | Authentication |
| UC-03 Browse primary areas via dynamic tabs | Configuration and navigation |
| UC-04 Exchange messages in conversations and threads | Messaging |
| UC-05 Search messages in context | Messaging (search) |
| UC-06 Discover users and open profiles | Users |
| UC-07 Create or join groups and moderate membership | Groups |
| UC-08 Review call history and join ongoing session | Calls |
| UC-09 Handle incoming call with decline and busy rules | Calls (incoming) |
| UC-10 Register device for push and open app from notification | Notifications |
| UC-11 Import builder configuration via QR | Configuration (QR) |
| UC-12 View encryption and privacy messaging | Privacy UX |
