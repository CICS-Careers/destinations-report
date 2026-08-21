# Destinations Report data pipeline

## Purpose and scope

This process turns the approved CICS outcomes workbook into publication-safe aggregate figures for the Destinations Report. The workbook and all row-level outputs are sensitive operational data. Keep them in `private/` (ignored by Git) or an approved access-controlled location. Do not commit or deploy them.

The website remains a static GitHub Pages site. Only reviewed public HTML, JavaScript, CSS, and image assets may be deployed.

## Roles

| Role | Responsibility |
|---|---|
| Data owner | Supplies and approves the workbook snapshot and cohort rules. |
| Data steward | Runs cleanup, resolves quality flags, and maintains review decisions. |
| Report reviewer | Approves the public metrics, narrative, maps, and employer/logo selections. |
| Publisher | Opens the release PR and deploys only the approved change. |

No one person should silently change both source data and public figures without recorded review.

## Release stages

1. **Freeze the ground truth.** Save the approved workbook under `private/source/` with a release label, for example `private/source/2026-08-21-approved.xlsx`. Record owner, as-of date, cohort definition, and known limitations in the release ticket.
2. **Validate and clean into a private working folder.** Install dependencies, then run:

   ```sh
   python3 -m pip install -r requirements.txt
   python3 scripts/clean_2026_report_data.py \
     --input private/source/2026-08-21-approved.xlsx \
     --output-dir private/releases/2026-08-21
   ```

   The run first validates the workbook contract (`TRACKER` sheet and required headers). It then creates a cleaned row export, aggregate dashboard summary, cleanup summary, review queue, normalization audit, and a manifest containing the source SHA-256 checksum.
3. **Compare the candidate with the current production baseline.** Preserve the prior approved `dashboard_summary_cleaned.csv` in the protected release archive. Then run:

   ```sh
   python3 scripts/compare_dashboard_summaries.py \
     --baseline private/releases/<previous>/dashboard_summary_cleaned.csv \
     --candidate private/releases/<candidate>/dashboard_summary_cleaned.csv \
     --output private/releases/<candidate>/metric_changes.csv
   ```

   This creates an aggregate before/after report. It answers *what changed in the data*; it does not automatically decide what must change on the public site.
   For the non-chart sections, also run:

   ```sh
   python3 scripts/compare_public_dimensions.py \
     --baseline private/releases/<previous>/report_data_cleaned.csv \
     --candidate private/releases/<candidate>/report_data_cleaned.csv \
     --output private/releases/<candidate>/section_deltas.csv
   ```

   This produces count deltas for employers, roles, states, and continuing-education schools, by program and overall. It stays private because it is derived from row-level data.

   For the major-specific Advanced Degrees panels, create a separate non-identifying review pack. It excludes no records by itself; the report reviewer must explicitly decide how to handle incomplete or ambiguous school entries.

   ```sh
   python3 scripts/build_advanced_degrees_review.py \
     --input private/releases/<candidate>/report_data_cleaned.csv \
     --output private/releases/<candidate>/advanced_degrees_review.csv
   ```

   When a salary range is eligible for refresh, calculate it through a separate private aggregate. The current policy includes only working records with annual base salaries from $30,000 through $500,000 and displays the 25th–50th percentile only when coverage is reviewed and approved.

   ```sh
   python3 scripts/build_salary_review.py \
     --input private/source/<candidate-workbook>.xlsx \
     --output private/releases/<candidate>/salary_review.csv
   ```
4. **Assess and approve every report section.** Copy `templates/release-change-plan.md` into the private release folder. Use both `metric_changes.csv` and `section_deltas.csv`. For every report section, record: its candidate data delta; whether the delta merits a public change; the decision to **update, retain, remove, or defer**; exact presentation/cutoff changes; any manual file or asset work; and the verification needed after rendering. The requester and report reviewer approve this plan before any web assets are edited. A partial refresh is valid: for example, retain a December-based top outcomes section while updating approved maps, role groupings, and logos.

   ### Partial-refresh policy

   A release may intentionally freeze some sections while refreshing others. The approved plan must name the frozen baseline and each eligible section. For an **additions-only** refresh, do not remove an existing public employer, logo, state, role, or school merely because it is absent or lower-count in the candidate file. Add or update only items whose inclusion is supported by the candidate and explicitly approved in the section plan.

   To establish true record-level additions or removals, compare protected extracts using a stable internal key (for example, student email or student ID). Aggregate deltas alone show net count changes, not which individual records were added or removed. Use:

   ```sh
   python3 scripts/reconcile_workbooks.py \
     --previous private/source/<previous-approved-workbook>.xlsx \
     --current private/source/<candidate-workbook>.xlsx \
     --output-dir private/releases/<candidate>/reconciliation
   ```

   Keep the keyed detail output only in the protected release archive; never publish or commit it. Review the aggregate `reconciliation_summary.json` before approving any additions-only front-end change.

   Then create a non-identifying section review pack from the two private cleaned exports:

   ```sh
   python3 scripts/build_section_additions_review.py \
     --baseline private/releases/<previous>/report_data_cleaned.csv \
     --candidate private/releases/<candidate>/report_data_cleaned.csv \
     --output private/releases/<candidate>/section_additions_review.csv
   ```

   Only `new_record` and `newly_reported_on_existing_record` entries are additions candidates. `changed_existing_value_review` entries require an explicit reviewer decision before updating a public map, role, or logo.
5. **Review the cleaning and normalization rules.** Review `normalization_audit.csv`, which lists every raw-to-normalized value change and its record count. Copy `templates/normalization-review.csv` into the private release folder. A data steward and a second reviewer must approve, reject, or amend every new/changed mapping. Update the documented alias/rule in the cleaner, then rerun; do not silently hand-edit the cleaned output.
6. **Annotate and resolve record exceptions.** Review `review_queue.csv`. Copy `templates/review-decisions.csv` into the private release folder and record each decision. Keep the source checksum in every decision row; source-row references are valid only for that frozen workbook. Correct the approved source or update the cleaning rules, then rerun until the queue is understood and signed off.
7. **Create publication-safe aggregates.** Derive only the approved cohort totals, chart values, employer lists, role groups, salary ranges, and maps. Never transfer identifiers, emails, LinkedIn links, notes, survey timestamps, or row-level records to the web repository.
8. **Review Career Spotlights separately.** A spotlight is a qualitative illustration, not evidence for a chart. Before adding it, verify that the person appears in the frozen report-year cohort and that their degree-confer date, program, employer, role, and work type support the public story. Classify each candidate as **include**, **hold for verification**, or **exclude as a different/older cohort**. Do not infer report-year eligibility from a story’s publication date, employer tenure, or an old alumni lookup. Keep the private evidence and decision in the release folder; publish only the approved narrative and public story link.
9. **Reconcile before publishing.** For every public number, record its calculation, denominator, source checksum, and reviewer approval in the release ticket. Check that chart totals equal the stated cohort; check text, chart arrays, maps, logos, and spotlight decisions against the approved front-end scope.
10. **Publish through a pull request.** Change only public assets authorized by the approved front-end scope. Review the rendered report, mobile layout, links, chart labels, accessibility text, and all revised cohort language. Merge only after data-owner and report-reviewer approval.
11. **Verify production.** Confirm the deployed URL, archive the PR and source checksum, and add a visible “data as of” date to the report.

## Required release evidence

- Workbook name, owner, as-of date, and SHA-256 checksum.
- Baseline-versus-candidate `metric_changes.csv`, any section-specific review packs (including `advanced_degrees_review.csv` and `salary_review.csv` when relevant), and an approved front-end scope plan.
- Signed normalization-review file, including any new aliases or rule changes.
- Cohort and denominator definitions for every outcome chart.
- A spotlight decision record for every included, held, or excluded candidate, tied to the frozen workbook checksum.
- Completed exception/review decisions file in the protected release folder.
- A public aggregate workbook/CSV stored in an approved shared location, not in Git when it can be re-identified.
- PR link, reviewer approvals, deployment URL, and post-deploy check.

## Quality gates

Block publication when any of these is unresolved:

- The workbook does not have the required `TRACKER` sheet and expected columns.
- A normalization change has not received two-person approval, or its approved mapping does not match the cleaner code.
- A public report area changes without a section-level delta assessment and approved front-end decision, or a requested retention/defer decision is not honored.
- An additions-only release removes or downgrades a prior public item without an approved exception and protected stable-key reconciliation.
- The review queue contains an unexplained record or a decision references a different source checksum.
- A public chart total does not equal its stated numerator/denominator.
- `index.html` and the current-year report differ unintentionally.
- The artifact includes `private/`, `data/`, `scripts/`, a workbook, or row-level CSV data.

## Current limitations to remove next

The cleaner produces reviewable outputs, but the published chart arrays and text are still manually maintained in `2026.html` and `js/index.js`. The next implementation step should generate a small public aggregate JSON file and render all report totals/charts from it, with a reconciliation test in CI.
