#!/usr/bin/env python3
"""Create a non-identifying, private review pack for additions-only report updates."""

import argparse
import csv
from collections import Counter
from pathlib import Path


REQUIRED_FIELDS = {
    "record_key",
    "program",
    "outcome_report",
    "employer_report",
    "role_report",
    "state_report",
}
SECTIONS = (
    ("employer_logo", "employer_report"),
    ("role_chart", "role_report"),
    ("work_location_map", "state_report"),
)


def read_rows(path):
    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        missing = REQUIRED_FIELDS - set(reader.fieldnames or [])
        if missing:
            raise ValueError(f"{path} is missing required columns: {', '.join(sorted(missing))}")
        return {row["record_key"]: row for row in reader if row["record_key"]}


def classify(previous, current, field):
    current_value = current[field]
    if current["outcome_report"] != "Working" or not current_value:
        return None
    if previous is None:
        return "new_record"
    previous_value = previous[field] if previous["outcome_report"] == "Working" else ""
    if not previous_value:
        return "newly_reported_on_existing_record"
    if previous_value != current_value:
        return "changed_existing_value_review"
    return None


def main():
    parser = argparse.ArgumentParser(
        description="Create a private, non-identifying additions review CSV from two cleaned exports."
    )
    parser.add_argument("--baseline", type=Path, required=True, help="Earlier private cleaned export")
    parser.add_argument("--candidate", type=Path, required=True, help="Candidate private cleaned export")
    parser.add_argument("--output", type=Path, required=True, help="Private review CSV path")
    args = parser.parse_args()
    if not args.baseline.is_file() or not args.candidate.is_file():
        parser.error("both --baseline and --candidate must be existing cleaned CSV files")

    baseline = read_rows(args.baseline)
    candidate = read_rows(args.candidate)
    counts = Counter()
    for key, current in candidate.items():
        previous = baseline.get(key)
        for section, field in SECTIONS:
            evidence = classify(previous, current, field)
            if evidence:
                counts[(section, current["program"], current[field], evidence)] += 1

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["report_section", "program", "candidate_value", "evidence_type", "record_count"],
        )
        writer.writeheader()
        for (section, program, value, evidence), count in sorted(counts.items()):
            writer.writerow({
                "report_section": section,
                "program": program,
                "candidate_value": value,
                "evidence_type": evidence,
                "record_count": count,
            })


if __name__ == "__main__":
    main()
