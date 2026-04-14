# Methodology

## Introduction

This chapter describes the **research approach** and **project methodology** used to develop and assess the **Secure Chat Application** as a final-year undergraduate artefact. The account **will** align with the requirements narrative in [`../academic-requirements-gathering.md`](../academic-requirements-gathering.md): **stakeholder-led elicitation** first, followed by **consolidation**, **analysis**, and **technical validation** against a reference implementation in [`repository root`](../../../). Downstream chapters **will** document specification (**Chapter 4**), design (**Chapter 5**), implementation (**Chapter 6**), testing (**Chapter 7**), discussion and conclusion (**Chapters 8–9**), references (**Chapter 10**), and appendices (**Chapter 11**).

Where activities remain **in progress**, phrasing **will** distinguish **method** (how work **will be** or **was** conducted) from **outcomes** (reported in evaluation and later chapters).

Traceability from methodology subsections to later chapters appears in [`academic-requirements-traceability-methodology.md`](academic-requirements-traceability-methodology.md).

---

## 3.1 Research approach

The inquiry **combines**:

1. **Qualitative, participatory elicitation** — workshops, semi-structured interviews, and observation of tasks or comparable applications, in order to capture user and sponsor expectations before formalising requirements.
2. **Technical artefact review** — structured examination of the reference codebase, configuration, and dependencies to **validate** feasibility, attach **evidence paths**, and avoid purely speculative requirements.

This mixed approach **will** suit a **software-building** project where the deliverable is a **mobile client** integrating vendor services (CometChat, Firebase, platform APIs) rather than a hypothesis tested by controlled experiments with large samples. Generalisation **will** be **limited** by design; limits **will** be stated in §3.7 and revisited in Chapters 7–8.

---

## 3.2 Project methodology

The project **will** follow a **phased** structure aligned with the thesis outline:

| Phase | Report mapping | Purpose |
|-------|----------------|---------|
| Elicitation and consolidation | Informs Chapter 4 (gathering themes) | Capture needs and priorities |
| Requirements analysis and specification | Chapter 4 (analysis, FR/NFR) | Formalise obligations and traceability |
| System design | Chapter 5 | Define intended architecture and interfaces |
| Implementation | Chapter 6 | Realise the design in software |
| Testing and evaluation | Chapter 7 | Verify against requirements |
| Discussion and conclusion | Chapters 8–9 | Interpret results and state contributions |

Iterations between implementation and specification are **expected** when discovery reveals gaps; the report **will** present a **logical** sequence even if the work **revisits** earlier steps.

---

## 3.3 Data collection methods

**Primary data** **will** include facilitator notes and summaries from **workshops**, **interview** responses, and **observation** memos, synthesised into candidate requirements before analysis.

**Secondary validation data** **will** include **repository artefacts**: source files under [`repository root`](../../../), `app.json`, `package.json`, builder configuration JSON, and README material. These **will** support **traceability** from requirement identifiers to concrete paths, consistent with Chapter 4 and Appendix 11.3.

**Quantitative** survey instruments **will** **not** be positioned as the main engine of requirements capture for this project; any informal numeric prioritisation **will** remain subordinate to thematic synthesis and supervisor-led scope decisions.

---

## 3.4 Tools and technologies used

Development **will** target a **cross-platform** **Expo** workflow with the **development client** so that native modules (push, calls, WebRTC-related components) **will** be usable. The stack **will** centre on **React Native**, **TypeScript**, **CometChat** UIKit and SDKs, **React Navigation**, **Firebase** messaging integration, **Notifee** (and platform notification APIs), **Zustand** and **AsyncStorage** for client state, and **patch-package** where vendor fixes **will** be required. Representative version pins **will** be taken from [`package.json`](../../../package.json) at submission time.

Official documentation URLs **will** be consolidated in [`../references/academic-references.md`](../references/academic-references.md) (Chapter 10).

---

## 3.5 Repository analysis approach

Technical validation **will** proceed **after** elicitation themes exist, not as a substitute for them. The student **will**:

- Map major **folders** (application shell, navigation, configuration store, feature components, utilities for push and VoIP) to **obligation clusters** in the requirements catalogue.
- Use **configuration** and **manifest** data to interpret platform permissions and capabilities relevant to calls and notifications.
- Record **evidence paths** in requirement records for academic auditability.

The analysis **will** **not** claim insight into **CometChat server-side** internals beyond what public APIs and documentation support (**NFR-011**). Vendor cloud behaviour **will** be treated as **external** to this project’s methodology.

---

## 3.6 Ethical considerations

- **Participants** in workshops or interviews **will** be informed of the **academic purpose**; notes **will** be handled responsibly and anonymised in reporting where appropriate.
- **Credentials** for CometChat and Firebase **will** be treated as **sensitive**; the thesis **will** avoid embedding live secrets and **will** follow prototype-appropriate storage practices discussed under **NFR-005**.
- **Privacy and encryption** user-facing copy (**FR-017**) **will** be **honest** about what the student application does **not** implement (for example bespoke end-to-end cryptography), consistent with Chapters 4 and 8.
- **Evaluation** **will** respect platform terms and **will** not stress third-party services beyond reasonable demonstration needs.

---

## 3.7 Limitations of the methodology

The methodology **will** carry typical **constraints** for an undergraduate build-and-evaluate project:

- **Sample size** for user input **will** be **small**; findings **will** not be statistically generalised to all mobile users.
- **Verification** **will** rely heavily on **manual** execution and **inspection**, consistent with **NFR-012** and the absence of a primary automated regression suite in the repository (**NFR-010**).
- **Vendor dependence** **will** mean that some failures or quirks **will** sit outside the student’s control; interpretation **will** distinguish client integration defects from upstream service behaviour.
- **Time-boxing** **will** limit breadth of device coverage and depth of security analysis.

These limitations **will** **foreshadow** threats to validity in Chapter 7 and limitations discussion in Chapter 8 without duplicating their final wording.

---

## Closing alignment

Chapter 3 **will** provide the **methodological warrant** for Chapters 4–11: how requirements **will** be grounded in stakeholder input **and** technical evidence, how the stack **will** be chosen, and how evaluation **will** remain proportionate to project constraints.
