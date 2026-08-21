#!/usr/bin/env python3
"""Create a non-identifying review pack for the Advanced Degrees logo panels."""

import argparse
import csv
from collections import Counter
from pathlib import Path


PANELS = {
    "Computer Science BS": "Computer Science BS/BA Pursuing MS",
    "Computer Science BA": "Computer Science BS/BA Pursuing MS",
    "Informatics BS": "Informatics BS Pursuing MS",
}

PUBLIC_SCHOOLS = {
    "Computer Science BS/BA Pursuing MS": {
        "UMass Amherst", "Northeastern University", "Georgia Institute of Technology",
        "Duke University", "Columbia University", "University of Illinois Urbana-Champaign",
        "NYU", "Harvard Graduate School of Education", "Carnegie Mellon University",
    },
    "Informatics BS Pursuing MS": {
        "UMass Amherst", "University of Texas at Dallas",
        "University Of North Carolina - Chapel Hill", "Duke University",
    },
}

UNRESOLVED_SCHOOLS = {"", "NEU Or JHU", "Masters In Business Analytics"}


def decision_for(panel, school):
    if school in UNRESOLVED_SCHOOLS:
        return "retain_unassigned"
    if school in PUBLIC_SCHOOLS[panel]:
        return "already_represented"
    return "review_for_addition"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True, help="Private cleaned CSV")
    parser.add_argument("--output", type=Path, required=True, help="Private aggregate CSV")
    args = parser.parse_args()

    with args.input.open(newline="", encoding="utf-8") as handle:
        rows = list(csv.DictReader(handle))

    counts = Counter()
    for row in rows:
        panel = PANELS.get(row["major_report"])
        if not panel or row["program"] != "Undergraduate":
            continue
        if row["outcome_report"] != "Continuing Education" or row["degree_report"] not in {"MS", "MSBA"}:
            continue
        counts[(panel, row["school_report"])] += 1

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=["report_panel", "school", "record_count", "review_decision"])
        writer.writeheader()
        for (panel, school), count in sorted(counts.items()):
            writer.writerow({
                "report_panel": panel,
                "school": school or "[not provided]",
                "record_count": count,
                "review_decision": decision_for(panel, school),
            })


if __name__ == "__main__":
    main()
