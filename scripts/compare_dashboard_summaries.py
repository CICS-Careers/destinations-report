#!/usr/bin/env python3
"""Compare two publication-safe dashboard summaries for release planning."""

import argparse
import csv
from pathlib import Path


KEY_FIELDS = ("section", "group")
METRIC_FIELDS = (
    "total",
    "Working",
    "Looking",
    "Continuing Education",
    "Unknown",
    "Not Seeking",
)
REQUIRED_FIELDS = set(KEY_FIELDS + METRIC_FIELDS)


def read_summary(path):
    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        headers = set(reader.fieldnames or [])
        missing = REQUIRED_FIELDS - headers
        if missing:
            raise ValueError(f"{path} is missing required columns: {', '.join(sorted(missing))}")
        return {
            tuple(row[field] for field in KEY_FIELDS): {
                metric: int(row[metric] or 0) for metric in METRIC_FIELDS
            }
            for row in reader
        }


def main():
    parser = argparse.ArgumentParser(
        description="Create an aggregate before/after change report for release planning."
    )
    parser.add_argument("--baseline", type=Path, required=True, help="Approved production summary CSV")
    parser.add_argument("--candidate", type=Path, required=True, help="Candidate summary CSV from the new workbook")
    parser.add_argument("--output", type=Path, required=True, help="Private output CSV for the comparison")
    args = parser.parse_args()

    if not args.baseline.is_file() or not args.candidate.is_file():
        parser.error("both --baseline and --candidate must be existing summary CSV files")

    baseline = read_summary(args.baseline)
    candidate = read_summary(args.candidate)
    args.output.parent.mkdir(parents=True, exist_ok=True)

    fields = ["section", "group"]
    for metric in METRIC_FIELDS:
        fields.extend([f"{metric}_before", f"{metric}_after", f"{metric}_change"])

    with args.output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        for key in sorted(set(baseline) | set(candidate)):
            before = baseline.get(key, {})
            after = candidate.get(key, {})
            row = dict(zip(KEY_FIELDS, key))
            for metric in METRIC_FIELDS:
                before_value = before.get(metric, 0)
                after_value = after.get(metric, 0)
                row[f"{metric}_before"] = before_value
                row[f"{metric}_after"] = after_value
                row[f"{metric}_change"] = after_value - before_value
            writer.writerow(row)


if __name__ == "__main__":
    main()
