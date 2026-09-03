#!/usr/bin/env python3
"""Compare publication-safe employer, role, location, and school aggregates."""

import argparse
import csv
from collections import Counter
from pathlib import Path


REQUIRED_FIELDS = {
    "program",
    "outcome_report",
    "employer_report",
    "role_report",
    "state_report",
    "school_report",
}
DIMENSIONS = (
    ("employer", "employer_report", "Working"),
    ("role", "role_report", "Working"),
    ("state", "state_report", "Working"),
    ("continuing_education_school", "school_report", "Continuing Education"),
)


def read_dimensions(path):
    counts = Counter()
    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        headers = set(reader.fieldnames or [])
        missing = REQUIRED_FIELDS - headers
        if missing:
            raise ValueError(f"{path} is missing required columns: {', '.join(sorted(missing))}")

        for row in reader:
            for dimension, field, required_outcome in DIMENSIONS:
                value = row[field]
                if row["outcome_report"] != required_outcome or not value:
                    continue
                counts[(dimension, "All", value)] += 1
                counts[(dimension, row["program"], value)] += 1
    return counts


def main():
    parser = argparse.ArgumentParser(
        description="Create section-level aggregate deltas for a Destinations Report release."
    )
    parser.add_argument("--baseline", type=Path, required=True, help="Approved production cleaned CSV")
    parser.add_argument("--candidate", type=Path, required=True, help="Candidate cleaned CSV")
    parser.add_argument("--output", type=Path, required=True, help="Private output CSV for section deltas")
    parser.add_argument(
        "--include-unchanged",
        action="store_true",
        help="Include values whose aggregate count did not change",
    )
    args = parser.parse_args()

    if not args.baseline.is_file() or not args.candidate.is_file():
        parser.error("both --baseline and --candidate must be existing cleaned CSV files")

    baseline = read_dimensions(args.baseline)
    candidate = read_dimensions(args.candidate)
    args.output.parent.mkdir(parents=True, exist_ok=True)

    with args.output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "report_section", "program", "value", "count_before",
                "count_after", "count_change", "change_type",
            ],
        )
        writer.writeheader()
        for dimension, program, value in sorted(set(baseline) | set(candidate)):
            before = baseline[(dimension, program, value)]
            after = candidate[(dimension, program, value)]
            change = after - before
            if not args.include_unchanged and change == 0:
                continue
            change_type = "added" if before == 0 else "removed" if after == 0 else "changed"
            writer.writerow({
                "report_section": dimension,
                "program": program,
                "value": value,
                "count_before": before,
                "count_after": after,
                "count_change": change,
                "change_type": change_type,
            })


if __name__ == "__main__":
    main()
