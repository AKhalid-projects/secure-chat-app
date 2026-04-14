# Requirements Gathering

## 1. Introduction

Requirements gathering constitutes a foundational activity within software engineering, in which the expected behaviour, constraints, and quality expectations of a system are identified and documented prior to structured design, implementation assessment, or evaluation. Within the context of this undergraduate final-year project, requirements gathering addressed the **Secure Chat Application**, a cross-platform mobile client realised at the **repository root** (this Expo application). The system integrates third-party communication services (CometChat UIKit and SDK), push notification infrastructure (including Firebase Cloud Messaging and platform-specific notification handlers), and native telephony-oriented components for voice and video interaction.

The principal mode of inquiry was **stakeholder-led elicitation**. Requirements were gathered through **facilitated workshops**, **semi-structured user interviews**, and **informal observation** of tasks and comparable applications, in order to capture needs, expectations, and quality concerns before they were consolidated into a formal specification. The **existing implementation** in the repository was then used to **validate** candidate requirements, to attach **traceability** to concrete modules, and to ensure that documented obligations remained **feasible** within the chosen technical stack. This sequence—**elicitation first, validation against the artefact second**—distinguishes the approach from one that derives requirements solely by reading source code in isolation from user and sponsor input.

The outcome was a traceable requirements package comprising **seventeen** functional requirements (FR-001 to FR-017) and **twelve** non-functional requirements (NFR-001 to NFR-012), as recorded in the project requirements index.

## 2. Approach to Requirements Gathering

The approach combined **participatory elicitation** with **technical validation**.

**Workshops** with the project supervisor and, where applicable, peer or domain participants were used to agree on **scope**: secure messaging, real-time calls, group collaboration, push notifications, and clear **in-app** communication of privacy and encryption messaging. Sessions employed structured agendas (vision, feature clusters, risks) and produced shared notes that were later synthesised into candidate requirements.

**Semi-structured user interviews** with a limited number of prospective users explored everyday expectations: reliability of calls, behaviour of notifications when the application is not in the foreground, ease of navigation between chats, groups, and call history, and trust associated with encryption or privacy labels. Open-ended and probing questions were prepared in advance; responses were summarised and cross-checked for recurring themes.

**Task observation** (for example, walkthroughs of prototypes or comparable chat applications) supported identification of usability expectations such as search, threaded replies, and deep linking from alerts.

Following elicitation, **consolidation** reduced duplication across sessions, and **initial prioritisation** (High, Medium, Low) was applied to focus the project on core communication workflows.

**Supporting technical review** of the reference implementation was conducted **after** candidate themes were established, in order to map needs to screens, navigators, and integration points, and to record **evidence paths** for academic traceability. Configuration files (`app.json`, `package.json`, application configuration data) and README material were consulted to interpret platform permissions, dependency choices, and deployment assumptions (for example, Firebase configuration for push). The repository does **not** contain a bespoke first-party application server for this sample; backend semantics are delegated to CometChat services, which constrains which requirements can be stated at the client boundary. Automated test suites and continuous integration pipelines were **not** evidenced as primary project artefacts; where verification is discussed, it relies on **manual** or **device-based** validation within the constraints of an undergraduate project.

## 3. Sources of Evidence

**Primary sources** for requirement statements were **stakeholder workshops**, **user interviews**, and **observation**, as described above. These sources supplied the substantive content of **what** users and sponsors expected from a secure chat client and **which** quality attributes mattered in discussion (reliability, cross-platform availability, configurability for demonstration, client-side handling of credentials in a prototype context).

**Secondary sources** supported **validation, precision, and auditability**:

- **Reference source code**  confirmed which behaviours were implemented and where (navigation, authentication, messaging, calls, notifications).
- **User interface structure** (registered routes, tab composition, modals and banners) clarified which elicited capabilities were exposed in the user interface.
- **Configuration and manifests** clarified operational and platform constraints not always visible in a single module.
- **Documentation** (sample and repository README) clarified setup steps and external dependencies.

**Tests** were not available as executable specifications in the examined repository; therefore, expected behaviour could not be cross-validated through automated test cases. Maintainability and testability were instead discussed in relation to modular structure and the **absence** of an automated regression suite, where relevant to non-functional requirements.

## 4. Functional Requirements Identification

Functional requirements were identified by **translating elicited user goals and stakeholder scope decisions** into statements of what the Secure Chat Application **must do**. Workshop and interview themes included: configuring application credentials and signing in; engaging in one-to-one and group conversations; using threads and search; managing users and groups; placing and receiving calls with acceptable handling of concurrent calls; receiving push notifications and opening the correct conversation; and presenting **understandable** privacy or encryption-related messaging in the interface (distinct from implementing cryptography from scratch).

These themes were refined into formal functional requirements covering SDK initialisation, credential lifecycle, UID-based login, builder-style configuration (including optional QR-assisted import), navigation structure, messaging and threads, search, user directory and profiles, group administration, call logs and ongoing sessions, incoming call handling, native call integration, push token registration, notification presentation and deep linking, and encryption-related user experience. Features that remained **vendor-internal** without user-facing manifestation in the application were not elevated to standalone requirements unless they corresponded to an elicited need that was visibly implemented.

## 5. Non-Functional Requirements Identification

Non-functional requirements were identified from **stakeholder and supervisor discussion** of risks and constraints (for example, avoiding unhandled crashes where possible, supporting iOS and Android within an Expo-oriented workflow, and acknowledging reliance on third-party services), supplemented by **review** of cross-cutting implementation characteristics. Categories included portability, error containment, maintainability (including vendor adaptation through controlled patches), configurability, client-side credential and token handling, usability of theming, internationalisation hooks, technology compatibility, native capability declarations, observability limitations in a prototype, integrability with CometChat and Firebase stacks, and testability given the **lack** of automated tests in the repository.

## 6. Explicit, Inferred, and Assumed Requirements

The requirements package distinguishes **explicit** requirements (clearly supported by implementation, configuration, or documentation), **inferred** requirements (strongly suggested by architecture or patterns, such as certain thread behaviours), and **assumed** requirements (used sparingly where evidence is thin). This classification applies to how requirements are **documented after** elicitation and validation; it does not replace the **primary** origin of needs in workshops and interviews.

## 7. Challenges and Limitations

Several limitations are typical of **stakeholder-led** undergraduate projects. **Sample size** in user interviews was necessarily small; findings are **indicative** rather than statistically generalisable. **Recall and social desirability bias** may affect what participants report compared with long-term behaviour. **Alignment** between user expectations and the capabilities of the CometChat-centred architecture must be managed explicitly: some elicited ideals may be only partially realisable without custom backend development, which lies outside the stated scope.

**Triangulation** between interviews, workshops, and the reference implementation reduces but does not remove ambiguity. **Encryption** requirements in the specification are framed around **user-facing** explanations (FR-017); they do not, by themselves, constitute a claim of independently verified end-to-end cryptographic design within this project. Finally, **without automated tests**, regression behaviour cannot be guaranteed through continuous verification; manual demonstration remains the principal validation mode unless additional testing is introduced later.

## 8. Summary

The requirements gathering process produced a **structured and traceable** catalogue of **seventeen** functional requirements and **twelve** non-functional requirements for the Secure Chat Application. Needs were **elicited** through workshops, user interviews, and observation, then **consolidated**, **prioritised**, and **validated** against the reference implementation and supporting configuration. This catalogue provided the basis for requirements analysis, in which statements were classified, refined further, and prepared for use in design discussion, verification planning, and academic evaluation.
