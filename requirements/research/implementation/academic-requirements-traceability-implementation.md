# Traceability: design (Chapter 5), requirements, and implementation (Chapter 6)

This document links the system design in [`../design/academic-system-design.md`](../design/academic-system-design.md) and the analysed requirements in [`../requirements-tables.md`](../requirements-tables.md) to the implementation chapter [`academic-implementation.md`](academic-implementation.md).

---

## Chapter 5 → Chapter 6 mapping

| Design section (Ch 5) | Primary implementation subsection (Ch 6) | Notes |
|-----------------------|--------------------------------------------|--------|
| §5.1 Architectural design | §6.2 System modules; §6.1 Development environment; parts of §6.4 | Layers and components become folder-level responsibilities and toolchain |
| §5.2 Use case design | §6.3 Frontend implementation; §6.5 Notification and calling features | Actor-facing behaviour realised in screens and platform hooks |
| §5.3 Data flow and process design | §6.4 Backend / service integration; §6.5 | Vendor APIs and navigation side effects |
| §5.4 Database and data structure design | §6.2; §6.3 (config store and persistence) | Local entities implemented via store + AsyncStorage |
| §5.5 Interface design | §6.3 Frontend implementation | Navigation and screen inventory |
| §5.6 Security design considerations | §6.4; §6.6 Challenges | Credentials, vendor trust, anticipated risks |

---

## Functional requirements → implementation subsections

**Legend:** **P** = primary coverage; **S** = secondary.

| ID | §6.1 | §6.2 | §6.3 | §6.4 | §6.5 | §6.6 |
|----|------|------|------|------|------|------|
| FR-001 | S | P | S | P | | |
| FR-002 | S | P | S | P | | S |
| FR-003 | | P | P | P | | |
| FR-004 | | P | P | S | | |
| FR-005 | | P | P | | | |
| FR-006 | | P | P | | S | |
| FR-007 | | P | P | S | | |
| FR-008 | | P | P | S | | |
| FR-009 | | P | P | S | | |
| FR-010 | | P | P | S | | |
| FR-011 | | P | P | S | | |
| FR-012 | | P | P | S | P | |
| FR-013 | | P | S | S | P | |
| FR-014 | S | P | S | S | P | S |
| FR-015 | S | P | | P | P | S |
| FR-016 | | P | P | S | P | S |
| FR-017 | | S | P | | | |

---

## Non-functional requirements → implementation subsections

| ID | §6.1 | §6.2 | §6.3 | §6.4 | §6.5 | §6.6 |
|----|------|------|------|------|------|------|
| NFR-001 | P | S | S | | | |
| NFR-002 | | S | P | | | S |
| NFR-003 | S | P | S | S | S | P |
| NFR-004 | | P | P | S | | |
| NFR-005 | | P | S | P | P | P |
| NFR-006 | | S | P | S | | |
| NFR-007 | | S | P | | | |
| NFR-008 | P | S | S | S | S | |
| NFR-009 | P | S | | S | P | S |
| NFR-010 | | S | | | | P |
| NFR-011 | S | S | S | P | P | S |
| NFR-012 | | S | S | | | P |
