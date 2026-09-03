# Destinations Report release change plan

## Release identity

- Release label:
- Requester and date:
- Current-production source SHA-256:
- Candidate-workbook source SHA-256:
- Data owner:
- Report reviewer:
- Release mode: full refresh / partial refresh / additions-only
- Frozen baseline sections:

## What changed in the data

Attach `metric_changes.csv` (outcomes/cohorts) and `section_deltas.csv` (employers, roles, states, and schools) from the baseline/candidate comparison. Summarize only material changes here.

| Metric or cohort | Before | Candidate | Change | Explanation / data owner confirmation |
|---|---:|---:|---:|---|
| | | | | |

Also identify meaningful employer, role, location, and salary changes from the protected review outputs.

## Section-by-section impact and approval

Complete every row. The data delta identifies what *could* change; it does not require a front-end change. A section may be retained because its cohort is intentionally frozen, its data is incomplete, or the delta is not meaningful. For additions-only releases, record whether a stable-key reconciliation supports each proposed addition; aggregate count changes alone are not evidence of a specific new placement.

| Report section | Candidate data delta and affected cohort | Stable-key reconciliation / addition evidence | Does the delta merit a public change? Why? | Decision: update / retain / remove / defer | Exact approved public change, including denominator/cutoff | Manual work required | Validation after implementation | Owner/reviewer |
|---|---|---|---|---|---|---|---|---|
| **Shared report shell:** current-year entry page, navigation, data-as-of label, responsive behavior | | | | | | | | |
| **Undergraduate:** program title and cohort/cutoff language | | | | | | | | |
| Undergraduate: top outcomes and knowledge-rate narrative | | | | | | | | |
| Undergraduate: salary range and salary footnote | | | | | | | | |
| Undergraduate: employer count, logo carousel, and tooltip/alt text | | | | | | | | |
| Undergraduate: work-location map and map alt text | | | | | | | | |
| Undergraduate: Massachusetts employer carousel | | | | | | | | |
| Undergraduate: roles-breakdown chart | | | | | | | | |
| Undergraduate: featured career-pathway cards | | | | | | | | |
| Undergraduate: advanced-degrees panel | | | | | | | | |
| Undergraduate: job-roles panel | | | | | | | | |
| Undergraduate: career-fair employers panel | | | | | | | | |
| Undergraduate: notes and footnotes | | | | | | | | |
| **Master's:** program title and status/banner language | | | | | | | | |
| Master's: top outcomes and knowledge-rate narrative | | | | | | | | |
| Master's: salary range and salary footnote | | | | | | | | |
| Master's: employer count, logo carousel, and tooltip/alt text | | | | | | | | |
| Master's: work-location map and map alt text | | | | | | | | |
| Master's: Massachusetts employer carousel | | | | | | | | |
| Master's: popular-job-roles panel and roles-breakdown chart | | | | | | | | |
| Master's: featured career-pathway cards | | | | | | | | |
| Master's: notes and footnotes | | | | | | | | |
| **PhD:** program title and cohort/cutoff language | | | | | | | | |
| PhD: top outcomes and knowledge-rate narrative | | | | | | | | |
| PhD: employer/institution count, curation message, summary text, logo carousel, and tooltip/alt text | | | | | | | | |
| PhD: roles-breakdown chart | | | | | | | | |
| PhD: featured career-pathway cards | | | | | | | | |
| PhD: notes and footnotes | | | | | | | | |

**Manual-work rule:** when manual changes are needed, identify the exact file/asset and the reviewer who will check the final rendered result. Never change a section merely because a new workbook exists.

## Example: pre-classes refresh

**Request:** “Update Destinations Report prior to start of classes — not December data in the first section, but update everything else (map, roles, logos).”

Interpret and confirm the request before editing: retain the existing December-based figures and language in the first/top outcome section; update only approved maps, role groupings, and employer/logo content from the candidate data. For each of those three sections, record the actual delta, why it merits a change, the exact manual asset/code work, and how it will be validated. Record any exception explicitly rather than allowing the candidate totals to alter the first section indirectly.

## Approval

- Data/normalization review complete:
- Front-end scope approved:
- Reconciliation complete:
- PR reviewed:
- Production verification complete:
