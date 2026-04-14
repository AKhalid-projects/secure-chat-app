# Requirements Analysis

## 1. Introduction

After **Gathering Requirements** ([`gathering-requirements.md`](gathering-requirements.md)), the notes from **workshops and interviews** were reviewed together with the **reference app** in [`repository root`](../). The aim was to produce a **single, tidy requirements list** for the **Secure Chat Application** bachelor’s project: no duplicate IDs, clear wording, and priorities that match what matters most for the thesis and the demo.

This chapter fits the usual **Requirements Analysis** section of an undergraduate report: **classification** (functional vs non-functional), **refinement** (one “shall” statement per requirement), **priorities**, and **traceability** to files in the repository.

## 2. Requirement Classification

| Class | Question it answers | IDs |
|-------|---------------------|-----|
| **Functional** | What must the app **do**? | `FR-001` … `FR-017` |
| **Non-functional** | How must the app **behave** (quality, platform, security posture, etc.)? | `NFR-001` … `NFR-012` |

**Rule of thumb**: if it is a **user-visible action** or **integration step**, it is usually functional; if it is about **performance, security, compatibility, maintainability**, it is usually non-functional.

## 3. Requirement Refinement

Interview and workshop notes were turned into formal lines, one per requirement:

- Each requirement has a **short title** and a **“The Secure Chat Application shall …”** statement in its detail file.
- **Inputs, behavior, outputs**, and **pre/postconditions** are filled in to make requirements **testable** when you run the app or walk through the code.
- **Explicit / inferred / assumed** labels show how directly the requirement is supported by the repo (see the index **Status** column).

Similar ideas (e.g. “register for push” and “refresh token”) were **combined** into one requirement where they describe one feature from the user’s point of view.

## 4. Requirement Prioritization

Priorities **High**, **Medium**, and **Low** were assigned for the project report:

| Priority | Typical content |
|----------|-----------------|
| **High** | Login, messaging, calls, push, core navigation—what the demo and supervisor care about first. |
| **Medium** | Search, threads, group admin, encryption banner, extra polish. |
| **Low** | Items with thinner evidence or nice-to-have quality points. |

Your department may use **MoSCoW** or other labels; you can **map** High/Medium/Low to those if required.

## 5. Traceability and Evidence

Every requirement detail file points to **concrete paths** under the repository root. The **index** ([`requirements-index.md`](requirements-index.md)) gives a **one-line summary** and a link to each file.

**Chain**: Interview theme → requirement ID → detail file → source files.

This helps markers see that requirements are **grounded in the actual project**, not copied from a textbook only.

## 6. Consistency and De-duplication

Examples of how overlap was removed:

- One FR for **SDK initialization**, not one per screen.
- One NFR for **how credentials are stored**, not repeated for every screen that uses them.
- **Push** split only where the **user-visible result** differs (register token vs open chat from notification).

## 7. Analysis Outcome

The final set has **17 FRs** and **12 NFRs**, **no duplicate IDs**, and honest gaps (e.g. **no automated tests** in the repo) noted in **Coverage Summary** in [`requirements-index.md`](requirements-index.md)). That is suitable for an **undergraduate** thesis: clear scope, traceable requirements, and realistic limits.
