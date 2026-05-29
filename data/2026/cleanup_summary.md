# 2026 Report Data Cleanup Summary

Source workbook: `/Users/rohanpandey/Desktop/CICS/Hypercare 2026 Dashboard Enhanced.xlsx`
Cleaned row-level export: `data/2026/report_data_cleaned.csv`
Dashboard summary export: `data/2026/dashboard_summary_cleaned.csv`

## Coverage

- Total rows: 828
- Working rows with report-ready employer: 196 / 213
- Working rows with report-ready role: 188 / 213
- Working rows with report-ready state: 36 / 213
- Continuing education rows with report-ready school: 82 / 128

## Cleanup Flags

| Flag | Count |
|---|---:|
| working_missing_state | 177 |
| continuing_ed_missing_school | 46 |
| working_missing_role | 25 |
| working_missing_employer | 17 |

### Outcome Names

| Value | Count |
|---|---:|
| Looking | 244 |
| Unknown | 239 |
| Working | 213 |
| Continuing Education | 128 |
| Not Seeking | 4 |

### Top Employers

| Value | Count |
|---|---:|
| Fidelity Investments | 14 |
| Amazon | 7 |
| Meta | 7 |
| Google | 6 |
| Oracle | 5 |
| IBM | 5 |
| Liberty Mutual | 5 |
| Travelers | 4 |
| Dell | 3 |
| Apple | 3 |
| NVIDIA | 3 |
| Capital One | 3 |
| Chewy | 2 |
| Pfizer | 2 |
| Citizens Bank | 2 |
| Schneider Electric | 2 |
| EY | 2 |
| Dell Technologies | 2 |
| Microsoft | 2 |
| Walmart Global Tech | 2 |

### Top Roles

| Value | Count |
|---|---:|
| Software Engineer | 58 |
| Software Engineer Intern | 6 |
| Research Scientist | 5 |
| AI Engineer | 5 |
| Machine Learning Engineer | 4 |
| Data Analyst | 4 |
| Data Engineer | 4 |
| Associate Software Engineer | 3 |
| Senior Software Engineer | 3 |
| Applied Scientist II | 2 |
| Assistant Professor | 2 |
| Actuarial Analyst | 2 |
| AI Software Engineer | 2 |
| Customer Success Sales Engineer | 1 |
| Associate | 1 |
| Engineer | 1 |
| Product Manager | 1 |
| Senior Applied AI/ML Associate | 1 |
| Cybersecurity Engineer | 1 |
| Search ML Intern | 1 |

### Continuing Education Schools

| Value | Count |
|---|---:|
| UMass Amherst | 69 |
| Duke University | 2 |
| University of Texas at Dallas | 1 |
| Northeastern University | 1 |
| Boston University | 1 |
| Georgia Institute of Technology | 1 |
| Columbia University | 1 |
| University of Illinois Urbana-Champaign | 1 |
| NYU | 1 |
| NEU Or JHU | 1 |
| Harvard Graduate School Of Education | 1 |
| Carnegie Mellon University | 1 |
| Simon Fraser University | 1 |

### Working States

| Value | Count |
|---|---:|
| CA | 10 |
| MA | 10 |
| WA | 5 |
| NH | 2 |
| VA | 2 |
| CO | 1 |
| MD | 1 |
| MN | 1 |
| TX | 1 |
| CT | 1 |
| NY | 1 |
| RI | 1 |
