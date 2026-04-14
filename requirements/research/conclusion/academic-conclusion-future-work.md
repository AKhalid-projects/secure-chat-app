# Conclusion and Future Work

## Introduction

This chapter **closes** the report by summarising the **Secure Chat Application** project in relation to its **requirements** (Chapter 4, [`../requirements-tables.md`](../requirements-tables.md)), **design** (Chapter 5, [`../design/academic-system-design.md`](../design/academic-system-design.md)), **implementation** (Chapter 6, [`../implementation/academic-implementation.md`](../implementation/academic-implementation.md)), **testing and evaluation** (Chapter 7, [`../evaluation/academic-testing-evaluation.md`](../evaluation/academic-testing-evaluation.md)), and **discussion** (Chapter 8, [`../discussion/academic-discussion.md`](../discussion/academic-discussion.md)). The **deliverable software** is centred on [`repository root`](../../../).

**Convention:** Final **requirement-level** verdicts **will** depend on Chapter 7 §7.4–§7.5. Where outcomes remain **to be determined (TBD)**, this chapter **will** state **what** **will** be claimed **once** evidence is recorded, without fabricating pass rates or metrics.

Traceability from requirement themes to subsections appears in [`academic-requirements-traceability-conclusion.md`](academic-requirements-traceability-conclusion.md).

---

## 9.1 Conclusion

The project **addresses** the need for a **cross-platform mobile client** that **integrates** third-party secure communications services (CometChat UIKit and SDK), platform **push** notifications, and **native-oriented** call presentation, within an undergraduate **scope** defined by **seventeen** functional requirements (**FR-001–FR-017**) and **twelve** non-functional requirements (**NFR-001–NFR-012**). Elicitation and analysis (Chapter 4) **established** stakeholder-led needs; system design (Chapter 5) **specified** a **thin client** architecture **without** a first-party chat server; implementation (Chapter 6) **described** how the reference codebase **will** realise that architecture in **Expo** / **React Native**; evaluation (Chapter 7) **sets out** manual and inspection-based verification; discussion (Chapter 8) **frames** interpretation, limitations, and lessons.

**Conditional achievement:** The thesis **will** argue that the project **targets** satisfaction of **High** priority requirements—including core bootstrap, messaging, calls, notifications, and cross-platform delivery—subject to evidence recorded in Chapter 7 §7.4 and the demonstration considerations in §7.4.3. **Final** statements that requirements are **met** **will** align with completed evaluation matrices, not with assumptions.

The **student contribution** **will** be understood as **engineering integration** and **traceable documentation** around vendor-mediated services (**NFR-011**), not as proof of correctness of CometChat’s cloud semantics. **FR-017** **will** be understood as **in-app** privacy and encryption **communication**, consistent with Chapters 4 and 8, **not** as novel end-to-end cryptography implemented by the student.

---

## 9.2 Contributions of the project

### 9.2.1 Academic and documentation contributions

The work **contributes** a **coherent requirements package** with identifiers traceable through design, implementation, evaluation, and discussion chapters, suitable for **final-year** reporting. The repository **supports** appendix-style export of requirement tables (Appendix 11.1) and evidence-oriented referencing (Appendix 11.3).

### 9.2.2 Practical engineering contributions

The reference path [`repository root`](../../../) **embodies** an intended **integration** of CometChat UIKit, calls, Firebase messaging, and platform-specific notification and call hooks within a **single** client codebase. The contribution **will** be framed as **demonstrable client behaviour** and **maintainable module structure** (navigation, configuration store, feature folders, utilities), not as a replacement for vendor backends.

### 9.2.3 Explicit non-contributions

The project **does not** claim a **custom** application server, **formal verification** of vendor protocols, or **student-authored** end-to-end encryption. Those boundaries **will** remain explicit in assessment and in any future commercial reading of the thesis.

---

## 9.3 Recommendations

**For future students undertaking similar projects:** begin **traceability** early (requirement IDs in design and test plans); treat **secrets** and **tenant configuration** as **process risks**, not afterthoughts; scope **push** and **VoIP** early because platform variance **will** dominate integration time.

**For academic supervisors:** align **expectations** with **thin client** realities—success **will** mean defensible integration and evaluation under **NFR-012** constraints, not parity with mass-market products.

**For practitioners evaluating the codebase:** assume **prototype** credential posture until **NFR-005**-grade hardening **is** applied; review vendor documentation for production deployment.

---

## 9.4 Future enhancements

Future work **will** be **forward-looking** and **distinct** from repeating Chapter 8 limitations: it **proposes** improvements rather than only stating constraints.

- **Automated testing and CI:** introduce regression tests and pipeline checks to address **NFR-012** and reduce reliance on manual runs alone.
- **Observability:** extend beyond console diagnostics (**NFR-010**) where project resources allow.
- **Secret and configuration management:** move toward environment-specific secret injection and rotation strategies suitable beyond demonstrations (**NFR-005**).
- **Device and OS coverage:** broaden manual and automated coverage across manufacturers and OS versions for push and calls.
- **Product features:** optional features **outside** the current FR catalogue—only after core obligations **are** verified—could include richer admin tooling or analytics, subject to scope and ethics review.

These enhancements **will** exceed the minimum undergraduate deliverable; they **will** serve as a roadmap rather than commitments implied by the current thesis submission.

---

## Closing

The Secure Chat Application project **will** be positioned as a **requirements-driven**, **vendor-integrated** mobile client with **documented** design, implementation, evaluation, and discussion, **closing** the arc from Chapter 4 through Chapter 8 and opening **future work** in §9.4. **Final** evaluative certainty **will** follow Chapter 7 completion.
