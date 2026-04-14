# Requirements Documentation Package

## Purpose

This folder supports the **final-year undergraduate project** (bachelor’s graduation project) for the **Secure Chat Application**—the mobile client implemented in [`repository root`](../).

It contains the **requirements specification**: what was learned from **stakeholder discussions** (see [`gathering-requirements.md`](gathering-requirements.md)), how those needs were **analyzed and written up** (see [`requirements-analysis.md`](requirements-analysis.md)), and how each requirement **links to actual code** so your report can show **evidence** of implementation. Typical report sections **Gathering Requirements** and **Requirements Analysis** can draw directly from these files.

The product name **Secure Chat Application** refers to that client. Paths such as `...` are used in the detailed requirement files so markers (or you) can **check** requirements against the repository.

## Folder Structure

| Path | Description |
|------|-------------|
| [`README.md`](README.md) | This file: purpose, how to use the package in your thesis. |
| [`gathering-requirements.md`](gathering-requirements.md) | How requirements were gathered (workshops, interviews) and checked against the app. |
| [`requirements-analysis.md`](requirements-analysis.md) | How requirements were sorted, worded, and prioritized. |
| [`requirements-index.md`](requirements-index.md) | Tables of all FRs and NFRs with links to each detail file. |
| [`functional/`](functional/) | One file per functional requirement: `FR-001.md` … `FR-017.md`. |
| [`non-functional/`](non-functional/) | One file per non-functional requirement: `NFR-001.md` … `NFR-012.md`. |

## Requirement Types (quick reference)

- **Functional requirements (FR)** — What the app **must do** (login, chat, calls, notifications, etc.).
- **Non-functional requirements (NFR)** — **Quality** and constraints (runs on iOS and Android, handles errors, uses third-party services, etc.).

Each detail file lists **evidence** (which files in the repo), **acceptance criteria** (FR), or **how to verify** (NFR).

## Traceability (for your report)

- **Forward**: Need → requirement ID → detail file → code paths.
- **Backward**: A source file → which requirement(s) it helps satisfy (see the index and detail files).
- **Status** in the index (**Explicit / Inferred / Assumed**) shows how strongly the requirement is supported by what is in the repo.

## How to Use This in Your Graduation Report

1. **Copy or paraphrase** the gathering and analysis chapters to match your department’s format; cite this folder as an appendix or artefact.
2. **Use the index** for a summary table of all requirements in the main body.
3. **Be honest about limits**: this project does **not** include automated tests or CI in the repo—verification is mostly **running the app** and **reading the code**, unless you add tests yourself.
4. **Check with your supervisor** whether interview/workshop details should name participants or stay anonymized.

## Academic report sections (research outputs)

Formal, report-ready prose for an undergraduate final-year project is maintained under [`research/`](research/).

- Chapter drafts: [`research/academic-requirements-gathering.md`](research/academic-requirements-gathering.md), [`research/academic-requirements-analysis.md`](research/academic-requirements-analysis.md), and [`research/academic-requirements-section-combined.md`](research/academic-requirements-section-combined.md)
- Per-requirement **research narratives**: [`research/functional/`](research/functional/), [`research/non-functional/`](research/non-functional/)
- **Tabular overviews** (same research layer): [`research/functional/requirements-table.md`](research/functional/requirements-table.md), [`research/non-functional/requirements-table.md`](research/non-functional/requirements-table.md), combined [`research/requirements-tables.md`](research/requirements-tables.md)
- Index: [`research/README.md`](research/README.md)

## Related Documentation

- App setup: [`README.md`](../README.md)
- Repository overview: [`README.md`](../README.md)
