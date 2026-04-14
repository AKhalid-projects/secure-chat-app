# Requirements Analysis

## 1. Introduction

Requirements analysis follows requirements gathering and concerns the transformation of initial observations into a coherent, minimally redundant, and usable specification. In software engineering practice, analysis serves to clarify scope, resolve ambiguities, align statements with verifiable evidence, and prepare requirements for downstream activities such as architectural review, implementation assessment, test planning, and project evaluation.

Within this undergraduate project, analysis was applied to the **candidate requirements** produced through **stakeholder workshops**, **user interviews**, and related elicitation activities. Those candidates were then **reconciled** with the **reference implementation** at the **repository root** so that each obligation could be expressed precisely and linked to repository evidence. The analysis addressed **classification** into functional and non-functional categories, **refinement** into formal “shall”-oriented statements with supporting structure (inputs, behaviour, outputs, and conditions), **consolidation** to remove duplication, **prioritisation** using High, Medium, and Low levels, and **traceability** from each requirement to concrete paths in the codebase. The outcome is summarised in the project requirements index and detailed in individual requirement records.

## 2. Classification of Requirements

Requirements were divided into **functional** and **non-functional** classes. Functional requirements describe **services, actions, and responses** that the Secure Chat Application is expected to provide or perform: for example, initialising the communications SDK, authenticating users, exchanging messages, managing groups, handling calls, and processing notifications. Non-functional requirements describe **qualities** and **constraints** that govern how those functions are delivered: portability across mobile platforms, reliability mechanisms such as error containment, configurability of runtime settings, compatibility with declared dependencies and platform capabilities, security posture at the client boundary, and dependencies on third-party services.

The distinction matters because functional statements typically map to **user-visible workflows** and **integration obligations**, whereas non-functional statements map to **engineering properties** that cut across many modules. This separation supports clearer evaluation: a feature can be present functionally while still being weak on a non-functional dimension (for example, modularity without automated tests).

## 3. Refinement of Raw Findings

Notes and themes from elicitation were **not** retained as unstructured commentary. Each requirement was rewritten into a **formal requirement statement** framed so that the Secure Chat Application is described as an obligation-bearing system (conceptually: what the system **shall** do or **shall** support). Where workshop statements were vague, they were sharpened using **implementation review** so that acceptance could be checked against identifiable behaviour, without confusing **user intent** with **specific function names** in source code.

Supporting detail was standardised through repeatable subsections: inputs and triggers, processing and behaviour, outputs and state changes, preconditions and postconditions, and error-handling notes where relevant. This refinement reduced ambiguity and supported the later definition of acceptance-oriented criteria for functional requirements and verification approaches for non-functional requirements, as recorded in the detailed requirement files.

## 4. De-duplication and Consolidation

Repeated themes from different elicitation sessions, or overlapping technical observations, were merged where they represented a **single obligation** from a system perspective. For example, SDK initialisation appears as a distinct requirement rather than being duplicated for every screen that depends on the SDK. Similarly, client credential handling is consolidated into a non-functional requirement rather than being restated for every feature that reads stored credentials. Push-related behaviour was separated only where the **user-visible outcome** differed materially (for instance, token registration versus notification presentation and deep navigation).

This consolidation improved internal consistency and prevented the specification from inflating artificially with redundant statements that would obscure underlying responsibilities.

## 5. Prioritisation of Requirements

Priorities were assigned at three levels—**High**, **Medium**, and **Low**—to reflect relative importance for the Secure Chat Application as a communication-oriented client, **guided by elicitation** (what participants emphasised most strongly) and by **feasibility** within project constraints. **High** priority was assigned to core bootstrap and integration obligations, primary messaging and calling workflows, push token registration, notification handling, and foundational navigation structure. **Medium** priority was assigned to important but secondary capabilities such as threaded replies (where classified as inferred relative to explicit evidence in the index), message search, group administration features beyond basic chat, and privacy-oriented user-interface messaging. **Low** priority was used sparingly where a quality attribute was evidenced weakly or represented a limitation rather than a delivered capability (for example, observability beyond console logging).

Prioritisation supports academic discussion of scope: it clarifies which obligations are central to demonstrating the system’s purpose versus which obligations represent supporting or refinement-level characteristics.

## 6. Traceability and Evidence

Each requirement was linked to **repository-relative evidence**, typically file paths under the repository root. Traceability therefore operates in **two directions**: from **elicitation themes** to formal identifiers, and from **identifiers** to implementation locations that demonstrate how those themes were addressed in software.

Traceability supports **verification** (where to look to confirm satisfaction), **maintenance** (impact of change against stated obligations), and **academic credibility** (requirements are not detached from the artefact under study). The requirements index provides a compact mapping from identifier to summary and to the corresponding detailed requirement file, which enumerates evidence references.

## 7. Acceptance and Verification Criteria

The analysed specification was paired with **acceptance-style criteria** for functional requirements and **verification approaches** for non-functional requirements, as documented in the detailed requirement records. Functional criteria were expressed in a scenario-oriented style (preconditions, action, expected outcome) suitable for manual validation during demonstration on devices or simulators. Non-functional criteria emphasised **inspection** (for example, reviewing manifests and dependency declarations), **code review** of cross-cutting concerns, and **operational checks** where applicable, while acknowledging that **automated regression testing** was not evidenced in the repository.

This pairing ensured that analysis did not stop at classification: it also prepared requirements for practical evaluation within the constraints of the project.

## 8. Analytical Outcome

The analysis yielded a **stable** requirement set comprising **seventeen** functional requirements and **twelve** non-functional requirements, each with a unique identifier and consistent documentation structure. Duplication was reduced through consolidation, and priorities reflected both **elicitation emphasis** and **technical centrality** of communication workflows. Areas of weaker evidence (for example, comprehensive observability tooling or automated test coverage) were not overstated; instead, they were captured as limitations or as non-functional positions consistent with what the repository supports.

## 9. Tabular summary of analysed requirements

The following tables consolidate the analysed requirement set for ease of reference. **Confidence** indicates whether support in the reference implementation is **explicit** (directly observable) or **inferred** (strongly indicated by structure or patterns), consistent with the master index. Short **summaries** restate each obligation at a glance. Per-identifier links point to **research narratives** (academic prose) and to **engineering specifications** (full structured templates) maintained alongside this report.

### 9.1 Functional requirements (FR-001–FR-017)

| ID | Requirement | Domain | Priority | Confidence | Summary |
|----|-------------|--------|----------|------------|---------|
| FR-001 | CometChat SDK initialisation | Integration / Bootstrap | High | Explicit | Initialise UIKit with app id, auth key, region, and all-users subscription before authenticated use. |
| FR-002 | Application credentials lifecycle | Authentication / Bootstrap | High | Explicit | Capture, persist, and re-initialise SDK with CometChat credentials; route users when credentials are incomplete. |
| FR-003 | UID-based user login | Authentication | High | Explicit | Authenticate end users via CometChat UID and navigate to the primary tabbed experience. |
| FR-004 | Builder configuration and theming | Configuration | High | Explicit | Load feature flags, tab order, colours, and typography from JSON and store; apply CometChat theme tokens. |
| FR-005 | QR configuration import | Configuration | Medium | Explicit | Scan QR, fetch builder configuration, persist it, and update global configuration. |
| FR-006 | Application navigation structure | Navigation | High | Explicit | Stack and dynamic tab navigation; deferred navigation when the container is not ready. |
| FR-007 | Conversations and messaging | Messaging | High | Explicit | Conversation lists and real-time messaging for users and groups via UIKit integration. |
| FR-008 | Thread replies | Messaging | Medium | Inferred | Thread views for parent messages and thread-scoped history. |
| FR-009 | Message search | Messaging | Medium | Explicit | Search within a conversation context; navigate to message or thread context from results. |
| FR-010 | User directory and profiles | User management | Medium | Explicit | List users and show profile screens; open chats from directory actions. |
| FR-011 | Group management and moderation | Group management | Medium | Explicit | Create and join groups; manage members, bans, ownership, and group information screens. |
| FR-012 | Call history and ongoing session | Calls | High | Explicit | Call logs, call details, and ongoing voice/video session UI. |
| FR-013 | Incoming call handling | Calls | High | Explicit | Incoming call UI, decline, and busy rejection when another call is active. |
| FR-014 | Native call UI and VoIP lifecycle | Calls / Platform | High | Explicit | CallKeep and VoIP handler integration; platform-consistent call presentation. |
| FR-015 | Push token registration | Notifications | High | Explicit | Obtain FCM/APNs/VoIP tokens and register with CometChat using provider identifiers. |
| FR-016 | Notifications and deep linking | Notifications | High | Explicit | Local notifications and foreground/background handling; navigate from payload data. |
| FR-017 | Encryption and privacy messaging UX | Privacy / UX | Medium | Explicit | Banner and modal explaining encryption and privacy (user-facing copy, not custom cryptography). |



### 9.2 Non-functional requirements (NFR-001–NFR-012)

| ID | Requirement | Category | Priority | Confidence | Summary |
|----|-------------|----------|----------|------------|---------|
| NFR-001 | Cross-platform deployment | Portability | High | Explicit | Deployable on iOS and Android via Expo dev client and shared React Native codebase. |
| NFR-002 | Error containment | Reliability | High | Explicit | Root error boundary and global handlers to limit unhandled JavaScript failures. |
| NFR-003 | Maintainability and vendor adaptation | Maintainability | Medium | Explicit | Modular layout; controlled `patch-package` fixes for UIKit edge cases. |
| NFR-004 | Runtime configurability | Configurability | High | Explicit | JSON defaults and AsyncStorage overrides for settings and theming without full rebuild for many parameters. |
| NFR-005 | Client credential and token handling | Security | High | Explicit | Local storage of app credentials and push provider identifiers; prototype-appropriate posture. |
| NFR-006 | Visual theme alignment | Usability | Medium | Explicit | Brand and text colours mapped into CometChat theme; system light/dark where applicable. |
| NFR-007 | Internationalisation support | Localisation | Medium | Explicit | CometChat i18n provider; vendor strings translatable; custom copy may remain English. |
| NFR-008 | Technology stack compatibility | Compatibility | High | Explicit | Declared Expo, React Native, and dependency versions for reproducible builds. |
| NFR-009 | Native capability declarations | Compatibility | High | Explicit | Permissions and background modes in Expo config for camera, audio, notifications, VoIP. |
| NFR-010 | Operational observability | Observability | Low | Inferred | Console-oriented diagnostics; no integrated APM evidenced in repository. |
| NFR-011 | Third-party service integration | Integrability | High | Explicit | Dependence on CometChat and Firebase messaging; client as thin layer over external services. |
| NFR-012 | Testability posture | Testability | Medium | Inferred | Modular structure supports future tests; no automated test suite in repository. |



## 10. Summary

Requirements analysis refined the **gathered** material into a **structured specification** suitable for an undergraduate final-year project: clear classification, formalised statements, consolidated obligations, prioritisation, and traceability to implementation evidence. The resulting requirement set provides a defensible basis for subsequent work, including architectural interpretation of the Secure Chat Application as a thin client over external services, assessment of implementation coverage against **user- and stakeholder-driven** obligations, and discussion of verification approaches under the project’s practical constraints. It also establishes a foundation for evaluating future improvements, such as stronger automated testing or enhanced operational monitoring, should those lie outside the scope of the present implementation.
