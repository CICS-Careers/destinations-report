# CICS Destinations Report

Static destination-outcomes reports, published through GitHub Pages. The report is embedded from `https://destinations.ltseng.me`.

## Release workflow

Use the documented [data pipeline](docs/data-pipeline.md) for every data refresh. In short:

1. Freeze an approved sensitive workbook outside Git.
2. Clean it to a private, ignored release folder.
3. Compare the candidate data with the current production baseline and approve the front-end scope.
4. Review and approve every cleaning/normalization rule and record-level exception.
5. Reconcile publication-safe aggregates with every chart and callout.
6. Publish a reviewed pull request to `main` and verify the deployed report.

The GitHub Pages workflow intentionally deploys only web assets. It must never deploy source workbooks, `private/`, row-level outputs, or operational notes.

## Local data preparation

```sh
python3 -m pip install -r requirements.txt
python3 scripts/clean_2026_report_data.py \
  --input private/source/<approved-workbook>.xlsx \
  --output-dir private/releases/<release-date>

python3 scripts/build_advanced_degrees_review.py \
  --input private/releases/<release-date>/report_data_cleaned.csv \
  --output private/releases/<release-date>/advanced_degrees_review.csv

python3 scripts/build_salary_review.py \
  --input private/source/<approved-workbook>.xlsx \
  --output private/releases/<release-date>/salary_review.csv
```

The `private/` directory is ignored on purpose. See [data-pipeline.md](docs/data-pipeline.md) for required review evidence, quality gates, and roles.

## Repository layout

- `index.html`, `2022.html`–`2026.html`: published report pages.
- `js/`, `css/`, `img/`, `iframe/`: published assets.
- `scripts/`: local data-preparation tooling; never deployed.
- `templates/`: safe, empty review templates.
- `docs/`: release and governance documentation.

## Deployment

Pushes to `main` run `.github/workflows/preprod.yml`, which builds a restricted Pages artifact from the report pages and published asset folders. Use a pull request for every production update; do not push draft data directly to `main`.
