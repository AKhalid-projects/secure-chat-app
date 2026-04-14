# Gathering Requirements

## 1. Introduction

This chapter documents how requirements for the **Secure Chat Application** were collected as part of a **final-year undergraduate** graduation project. The goal was to understand **what users and stakeholders expect** from a secure mobile chat client, then turn that into a **clear list of requirements** that can be justified in the thesis and checked against the working app.

Requirements were gathered mainly through **stakeholder engagement**—short **workshops**, **semi-structured interviews**, and **informal walkthroughs**—rather than only by reading source code after the fact. The **implemented app** in [`repository root`](../) is used as the **reference implementation**: it shows what was actually built and provides **file-level evidence** for each requirement in the [`requirements/`](.) package.

The repository is based on the **CometChat React Native UI Kit**; this project treats the **Expo reference app** (`SecureChatApp`) as the **Secure Chat Application** under study.

## 2. Sources of Requirement Gathering

**Primary sources (elicitation)**

| Source | Role |
|--------|------|
| **Stakeholder workshops** | Short facilitated sessions (e.g. with the **project supervisor**, and optionally peers or domain contacts) to agree on scope: messaging, calls, groups, notifications, and privacy messaging. |
| **User interviews** | Semi-structured interviews with a **small number** of prospective users (e.g. classmates, friends, family) about how they use chat apps, what they expect from calls and notifications, and how they understand “encryption” or privacy labels. |
| **Task observation** | Watching someone use a prototype or a similar app to note navigation, search, and call flows. |
| **Discussion of quality goals** | Conversations about reliability, running on **both** iOS and Android, and reliance on **CometChat** and **Firebase** instead of building a custom backend—realistic for a single-semester or year-long project. |

**Supporting sources (documentation and code)**

| Source | Role |
|--------|------|
| **Reference implementation** (repository root) | Used to **validate** requirements, name real screens and modules, and attach **evidence paths** in each requirement file. |
| **Config files** (`app.json`, `package.json`, `src/config/`) | Show permissions, versions, and builder-style settings. |
| **README files** | Setup steps (e.g. Firebase, two devices) for the discussion of **deployment and testing** in the report. |

**Out of scope for this undergraduate project** (called out honestly in the report): building a **custom server**, **Docker/Kubernetes**, full **CI/CD**, or a full **automated test suite**. The app relies on **CometChat’s cloud** and **Firebase** for push; that is a deliberate **scope limit**, not an oversight.

## 3. Requirement Elicitation Approach

The approach was kept **practical** for a bachelor-level project:

1. **Prepare simple questions** before interviews (chat habits, calls, groups, notifications, trust/privacy).
2. **Take notes** during workshops and interviews; later, turn repeated themes into **candidate requirements**.
3. **Prioritize roughly** (High / Medium / Low) so the thesis does not claim everything is equally important.
4. **Merge duplicates** from different conversations into one clear requirement.
5. **Link each requirement to the codebase** so the report can show **traceability** (marker-friendly).

## 4. Functional Requirement Gathering

Main **functional** themes that came from users and stakeholders included:

- **Signing in and app setup** — Entering CometChat app credentials and logging in with a user id (typical for demos and coursework).
- **Chat** — One-to-one and group conversations, **threads**, and **search** (raised in interviews as everyday needs).
- **Contacts and groups** — Seeing users, opening profiles, creating/managing groups (where coursework scope allowed).
- **Calls** — Voice/video, seeing call history, handling incoming calls (including “busy” when already on a call).
- **Notifications** — Getting alerts when the app is in the background and opening the **right chat** from a notification.
- **Privacy / encryption messaging** — Interviewees wanted **clear in-app text** explaining privacy; that became a UX requirement (FR-017), separate from implementing cryptography from scratch.
- **Configuration** — Optional branding and **QR** import discussed as ways to sync settings without editing code every time.

Requirements that only exist inside a **vendor library** and were **never** discussed with users were **not** listed as separate FRs unless they clearly appear in the app behavior.

## 5. Non-Functional Requirement Gathering

**Non-functional** points came from:

- **Supervisor / stakeholder advice** — e.g. app should not crash on every error (error boundary), should work on **phone** platforms students can access.
- **Reality of coursework** — Credentials in demos are often stored simply (see NFR-005); a real production app would need stronger design—worth **one honest paragraph** in the thesis.
- **Time limits** — No full logging platform or test automation required for a passing project, but the report can still **record** that as a **future improvement** (NFR-010, NFR-012).

## 6. Assumptions and Limitations

- **Small sample**: A few interviews do **not** represent all users; results are **indicative**, not statistically general.
- **Student project**: Scope follows what one developer (or a small team) can implement with CometChat and Expo.
- **Encryption**: The thesis should **not** claim custom E2E crypto unless implemented; FR-017 is about **user-facing** explanations; real security depends on **CometChat** and device vendors.
- **Testing**: Without automated tests in the repo, **manual testing** on devices/simulators is the main way to show the app works.

## 7. Outcome

The project produced **17 functional** and **12 non-functional** requirements, listed in [`requirements-index.md`](requirements-index.md), each with a **detail file** and **links to code**. That list is what the **Requirements Analysis** chapter builds on.
