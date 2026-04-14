# Discussion

## Introduction

This chapter **discusses** the Secure Chat Application in light of the requirements (Chapter 4, [`../requirements-tables.md`](../requirements-tables.md)), the system design (Chapter 5, [`../design/academic-system-design.md`](../design/academic-system-design.md)), the intended implementation (Chapter 6, [`../implementation/academic-implementation.md`](../implementation/academic-implementation.md)), and testing and evaluation (Chapter 7, [`../evaluation/academic-testing-evaluation.md`](../evaluation/academic-testing-evaluation.md)). The reference artefact for implementation detail remains [`repository root`](../../../).

**Convention while evaluation is incomplete:** Chapter 7 records **to be determined (TBD)** outcomes in its summary matrices. This chapter **does not** invent pass/fail results. **§8.1** and **§8.2** therefore adopt **scaffolding**: they state **questions** the discussion **will** answer **once** §7.4 and §7.5 are populated, and they identify **themes** (bootstrap, messaging, calls, notifications, privacy UX) that **will** structure the final interpretation. **§8.3** and **§8.4** address limitations and lessons that **already** follow from scope and methodology, independent of final test scores.

Traceability from requirement themes to subsections appears in [`academic-requirements-traceability-discussion.md`](academic-requirements-traceability-discussion.md).

---

## 8.1 Interpretation of results

### 8.1.1 Inputs and boundaries

The principal inputs **will** be the evaluation summaries in Chapter 7 §7.4 (requirement-level outcomes) and §7.5 (findings, deviations, threats to validity). Interpretation **will** treat **success** as **satisfactory client-side integration** with CometChat and platform services, not as proof of correctness of vendor cloud internals (**NFR-011**). Claims **will** remain at the level of **observed behaviour** during manual runs and inspection.

### 8.1.2 Questions the interpretation will answer (scaffolding)

Once results are recorded, the discussion **will** address, for each **theme** below, how outcomes align with **design use cases** UC-01–UC-12 (Chapter 5, §5.2) and with **test cases** TC-FR-* (Chapter 7, §7.2):

1. **Bootstrap and credentials** — Did initialisation and credential lifecycle behave consistently with **FR-001** and **FR-002**?
2. **Authentication** — Did UID login meet **FR-003** and support navigation to the primary experience?
3. **Configuration and navigation** — Did builder-driven tabs, stack routes, and deferred navigation satisfy **FR-004**–**FR-006** (and **FR-016** where linked)?
4. **Messaging** — Did conversations, threads, and search meet **FR-007**–**FR-009**, noting **FR-008**’s inferred confidence where relevant?
5. **Users and groups** — Did directory and group administration flows meet **FR-010** and **FR-011**?
6. **Calls** — Did history, incoming handling, and native presentation meet **FR-012**–**FR-014**?
7. **Notifications** — Did token registration and payload-driven behaviour meet **FR-015** and **FR-016**?
8. **Privacy UX** — Was **FR-017** satisfied as **user-facing explanation** without implying custom cryptography?

### 8.1.3 Interpreting partial or failed outcomes

Where outcomes **will** be **partial** or **fail**, interpretation **will** distinguish **defects in client integration** from **environmental limits** (network, test credentials, device-specific push behaviour) and **will** avoid overstating student responsibility for vendor outages.

### 8.1.4 Privacy messaging (FR-017)

Discussion **will** consistently frame **FR-017** as compliance with **communication** requirements about encryption and privacy, aligned with Chapter 4’s distinction from student-implemented end-to-end encryption.

---

## 8.2 Comparison with project objectives

### 8.2.1 Objectives derived from requirements (placeholder for Chapter 1)

The formal **aim and objectives** of the thesis **will** appear in **Chapter 1** (Introduction). In their absence in this repository, the following **themes** **will** serve as **stand-in objectives** traceable to **High** priority items in [`../requirements-tables.md`](../requirements-tables.md):

| Thematic objective | Representative requirements |
|---------------------|----------------------------|
| Deliver a cross-platform secure chat **client** | **NFR-001**, **FR-006**, **FR-007** |
| Support real-time **messaging** and **group** collaboration | **FR-007**, **FR-011** |
| Support **voice/video** calling with acceptable native behaviour | **FR-012**–**FR-014** |
| Integrate **push** notifications and **deep** navigation | **FR-015**, **FR-016** |
| Present understandable **privacy/encryption** messaging in-app | **FR-017** |
| Maintain **client-boundary** security and reproducible **stack** | **NFR-005**, **NFR-008**, **NFR-009** |

### 8.2.2 Mapping objectives to evaluation (scaffolding)

Once Chapter 7 is complete, this subsection **will**:

- State which thematic objectives **will** be judged **met**, **partially met**, or **not met**, using §7.4 matrices as evidence.
- Relate **High** priority FRs/NFRs to demonstration readiness, consistent with Chapter 7 §7.4.3.
- Identify **gaps** that **will** feed **§8.3** (limitations).

---

## 8.3 Limitations of the final system

### 8.3.1 Architectural and technical limitations

The system **will** remain a **thin client**: chat and call semantics **will** depend on **CometChat** cloud services; push delivery **will** depend on **Firebase** and platform providers (**NFR-011**). The project **does not** include a student-built application server whose behaviour **is** evaluated as part of this thesis.

**Credential and token storage** **will** follow a **prototype-appropriate** posture suitable for demonstration, not production hardening (**NFR-005**). **Observability** **will** be limited primarily to **console** diagnostics (**NFR-010**). **Automated regression testing** **will** not form the primary evidence base (**NFR-012**).

### 8.3.2 Verification limitations

Manual testing on a **finite** set of devices and simulators **will** limit generalisation. **Push** and **VoIP** behaviour **will** vary by OS version and manufacturer policy; findings **will** not extend to all deployment contexts. These limits **will** already have been flagged as threats to validity in Chapter 7 §7.5.3; Discussion **will** reinforce their implications for claims of robustness.

### 8.3.3 Scope of “security” in this project

The application **will not** implement bespoke **end-to-end encryption** protocols; **FR-017** **will** cover **UX disclosure** only. Academic claims **will** remain aligned with that boundary, consistent with Chapters 4–7.

---

## 8.4 Lessons learned

### 8.4.1 Process lessons

Structured **requirements** (**FR/NFR** identifiers) and **traceability** matrices across design, implementation, and evaluation **will** support clearer thesis argumentation than ad hoc feature lists. Producing **design** before claiming implementation completeness **will** reduce ambiguity about module boundaries and vendor responsibilities.

### 8.4.2 Technical lessons

Integration of **Expo**, **native modules** (calls, push, VoIP), and **vendor SDKs** **will** require ongoing **dependency alignment** and occasional **patch-package** maintenance (**NFR-003**). **Navigation readiness** and **deferred routing** **will** matter for notification-driven entry (**FR-016**, **FR-006**). **Platform differences** between iOS and Android **will** remain a recurring cost for notifications and calls.

### 8.4.3 Bridge to conclusion (Chapter 9)

Chapter 9 **will** consolidate **conclusions**, **contributions**, and **future enhancements**; here it suffices to note that plausible extensions **will** include automated tests, stronger secret management, broader device coverage, and deeper observability—without duplicating Chapter 9’s full treatment.

---

## Closing note

This Discussion **will** be revised once Chapter 7 outcomes are finalised, replacing scaffolding in **§8.1** and **§8.2** with substantive interpretation while preserving the limitations and lessons that remain valid regardless of individual test passes.
