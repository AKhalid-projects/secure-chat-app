# Non-functional requirements (research) — tabular overview

The same tables appear under **Section 9** of [`../academic-requirements-analysis.md`](../academic-requirements-analysis.md) (Requirements Analysis).

This table summarises **NFR-001** through **NFR-012** for the Secure Chat Application in a compact form. **Narrative** links point to the academic prose file in this folder; **Specification** links point to the full engineering template under [`../../non-functional/`](../non-functional/).

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

## Per-requirement links

| ID | Research narrative | Engineering specification |
|----|---------------------|---------------------------|
| NFR-001 | [NFR-001.md](NFR-001.md) | [NFR-001.md](../../non-functional/NFR-001.md) |
| NFR-002 | [NFR-002.md](NFR-002.md) | [NFR-002.md](../../non-functional/NFR-002.md) |
| NFR-003 | [NFR-003.md](NFR-003.md) | [NFR-003.md](../../non-functional/NFR-003.md) |
| NFR-004 | [NFR-004.md](NFR-004.md) | [NFR-004.md](../../non-functional/NFR-004.md) |
| NFR-005 | [NFR-005.md](NFR-005.md) | [NFR-005.md](../../non-functional/NFR-005.md) |
| NFR-006 | [NFR-006.md](NFR-006.md) | [NFR-006.md](../../non-functional/NFR-006.md) |
| NFR-007 | [NFR-007.md](NFR-007.md) | [NFR-007.md](../../non-functional/NFR-007.md) |
| NFR-008 | [NFR-008.md](NFR-008.md) | [NFR-008.md](../../non-functional/NFR-008.md) |
| NFR-009 | [NFR-009.md](NFR-009.md) | [NFR-009.md](../../non-functional/NFR-009.md) |
| NFR-010 | [NFR-010.md](NFR-010.md) | [NFR-010.md](../../non-functional/NFR-010.md) |
| NFR-011 | [NFR-011.md](NFR-011.md) | [NFR-011.md](../../non-functional/NFR-011.md) |
| NFR-012 | [NFR-012.md](NFR-012.md) | [NFR-012.md](../../non-functional/NFR-012.md) |

**Confidence** reflects how directly the requirement is supported by the reference implementation (*explicit* vs *inferred*), consistent with [`../../requirements-index.md`](../../requirements-index.md).
