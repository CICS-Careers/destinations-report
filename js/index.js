// Register the Chart.js data labels plugin
Chart.register(ChartDataLabels);

const UMassColors = {
    MAROON: 'rgb(136, 28, 28)',
    BLACK: 'rgb(33, 39, 33)',
    LIGHTGRAY: 'rgb(162, 170, 173)',
    ORANGE: 'rgb(255, 158, 27)',
    YELLOW: 'rgb(255, 199, 44)',
    DARKBLUE: 'rgb(0, 27, 84)',
    BROWN: 'rgb(94, 75, 60)',
    LIMEGREEN: 'rgb(196, 214, 0)',
    AQUA: 'rgb(134, 200, 188)',
    TEAL: 'rgb(0, 174, 199)',
    GREEN: 'rgb(46,139,87)',
    DARKORANGE: '#cb6015',
    GRAY: "#808080"
}

const LabelBackgroundColor = 'rgba(0, 0, 0, 0.2)';

const Labels = [
    'Working',
    'Continuing Education',
    'Looking',
    'Unknown',
    'Not Seeking'
];
const LabelsKR = [
    'Known',
    'Unknown'
];
const PhDLabels = [
    'Working in Industry',
    'Post-Doc',
    'Working in Academia'
];

const PhDLabels2023 = [
    'Unknown',
    'Post-Doc',
    'Working'
];

const UGradLabels2024 = [
    'Working',
    'Continuing Education',
    'Looking',
    'Unknown',
    'Not Seeking'
];

const MSdata = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [96, 12, 13, 3],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};

const MSdata2023 = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [199, 18, 36, 14],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};

const MSdata2024 = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [151, 17, 71, 10],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};

const MSdata2025 = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [213, 9, 87, 13, 4],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY,
            UMassColors.ORANGE
        ],
        hoverOffset: 4
    }]
};


const MSdata2026 = { //TODO: UPDATE THIS
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [56, 11, 60, 34, 3],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY,
            UMassColors.ORANGE
        ],
        hoverOffset: 4
    }]
};

const MSdataKR = {
    labels: LabelsKR,
    datasets: [{
        label: ' Number of Students',
        // 2026 MS knowledge rate: 130 known, 34 unknown
        data: [130, 34],
        backgroundColor: [
            UMassColors.LIGHTGRAY,
            UMassColors.GRAY
            // UMassColors.MAROON,
            // UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};
const UGRADdataKR = {
    labels: LabelsKR,
    datasets: [{
        label: ' Number of Students',
        // 2026 UG knowledge rate: 328 known, 344 unknown
        data: [328, 344],
        backgroundColor: [
            UMassColors.LIGHTGRAY,
            UMassColors.GRAY
            // UMassColors.MAROON,
            // UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};

const SurveyResponseLabels = ['Responded', 'Not responded'];

// #TODO: Survey response rate donut is hidden in HTML until totals are finalized post-graduation.
// When ready, add the canvases back in `index.html` / `2026.html` and set these counts.
const UG_SURVEY_RESPONDED_2026 = 0;
const UG_TOTAL_2026 = 0;
const MS_SURVEY_RESPONDED_2026 = 0;
const MS_TOTAL_2026 = 0;

const UGRADSurveyResponse2026 = {
    labels: SurveyResponseLabels,
    datasets: [{
        label: ' Number of Students',
        data: [UG_SURVEY_RESPONDED_2026, Math.max(UG_TOTAL_2026 - UG_SURVEY_RESPONDED_2026, 0)],
        backgroundColor: [UMassColors.TEAL, UMassColors.LIGHTGRAY],
        hoverOffset: 4
    }]
};

const MSSurveyResponse2026 = {
    labels: SurveyResponseLabels,
    datasets: [{
        label: ' Number of Students',
        data: [MS_SURVEY_RESPONDED_2026, Math.max(MS_TOTAL_2026 - MS_SURVEY_RESPONDED_2026, 0)],
        backgroundColor: [UMassColors.TEAL, UMassColors.LIGHTGRAY],
        hoverOffset: 4
    }]
};

const UGdata = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [261, 85, 61, 33],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const UGdata2023 = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [260, 104, 85, 50],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const UGdata2024 = {
    labels: UGradLabels2024,
    datasets: [{
        label: ' Number of Students',
        data: [153, 131, 114, 68, 4],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY,
            UMassColors.ORANGE
        ],
        hoverOffset: 5
    }],
    legend: {
        display: false,
    },
};

const UGdata2025 = {
    labels: UGradLabels2024,
    datasets: [{
        label: ' Number of Students',
        data: [210, 165, 85, 54, 3],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY,
            UMassColors.ORANGE
        ],
        hoverOffset: 5
    }],
    legend: {
        display: false,
    },
};

const UGdata2026 = {
    labels: UGradLabels2024,
    datasets: [{
        label: ' Number of Students',
        data: [95, 99, 133, 344, 1],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY,
            UMassColors.ORANGE
        ],
        hoverOffset: 5
    }],
    legend: {
        display: false,
    },
};

const PhDdata = {
    labels: PhDLabels,
    datasets: [{
        label: ' Number of Students',
        data: [17, 8, 2],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.DARKORANGE
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const PhDdata2023 = {
    labels: PhDLabels2023,
    datasets: [{
        label: ' Number of Students',
        data: [2, 5, 22],
        backgroundColor: [
            UMassColors.GRAY,
            UMassColors.TEAL,
            UMassColors.GREEN
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const PhDdata2024 = {
    labels: PhDLabels2023,
    datasets: [{
        label: ' Number of Students',
        data: [2, 5, 19],
        backgroundColor: [
            UMassColors.GRAY,
            UMassColors.TEAL,
            UMassColors.GREEN
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const PhDdata2025 = {
    labels: PhDLabels2023,
    datasets: [{
        label: ' Number of Students',
        data: [3, 2, 8],
        backgroundColor: [
            UMassColors.GRAY,
            UMassColors.TEAL,
            UMassColors.GREEN
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const configMS = {
    type: 'doughnut',
    data: MSdata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configMS2023 = {
    type: 'doughnut',
    data: MSdata2023,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configMS2024 = {
    type: 'doughnut',
    data: MSdata2024,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configMS2025 = {
    type: 'doughnut',
    data: MSdata2025,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff", // adjust if needed
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                },
                anchor: 'center', // keep labels inside arcs
                align: (ctx) => {
                    const index = ctx.dataIndex;
                    const total = ctx.chart.data.labels.length;
                    if (index === total - 1) return 'top';        // last label on top
                    if (index === total - 2) return 'bottom';     // second last label on bottom
                    return 'center'; // default alignment for the rest
                },
                offset: 4
            }

        }
    }
};

const configMS2026 = {
    type: 'doughnut',
    data: MSdata2026,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff", // adjust if needed
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                },
                anchor: 'center', // keep labels inside arcs
                align: (ctx) => {
                    const index = ctx.dataIndex;
                    const total = ctx.chart.data.labels.length;
                    if (index === total - 1) return 'top';        // last label on top
                    if (index === total - 2) return 'bottom';     // second last label on bottom
                    return 'center'; // default alignment for the rest
                },
                offset: 4
            }

        }
    }
};


const configMSKR = {
    type: 'doughnut',
    data: MSdataKR,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUGRADKR = {
    type: 'doughnut',
    data: UGRADdataKR,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUGRADSurvey2026 = {
    type: 'doughnut',
    data: UGRADSurveyResponse2026,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                formatter: (value, ctx) => value + "\n" + ctx.chart.data.labels[ctx.dataIndex],
                color: "#fff",
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configMSSurvey2026 = {
    type: 'doughnut',
    data: MSSurveyResponse2026,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                formatter: (value, ctx) => value + "\n" + ctx.chart.data.labels[ctx.dataIndex],
                color: "#fff",
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUG = {
    type: 'doughnut',
    data: UGdata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUG2023 = {
    type: 'doughnut',
    data: UGdata2023,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUG2024 = {
    type: 'doughnut',
    data: UGdata2024,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUG2025 = {
    type: 'doughnut',
    data: UGdata2025,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};


const configUG2026 = {
    type: 'doughnut',
    data: UGdata2026,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configPhD = {
    type: 'doughnut',
    data: PhDdata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configPhD2023 = {
    type: 'doughnut',
    data: PhDdata2023,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};


const configPhD2024 = {
    type: 'doughnut',
    data: PhDdata2024,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configPhD2025 = {
    type: 'doughnut',
    data: PhDdata2025,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};
const PhDChart = document.getElementById('PhDChart') && new Chart(
    document.getElementById('PhDChart'),
    configPhD
);
const PhDChart2023 = document.getElementById('PhDChart2023') && new Chart(
    document.getElementById('PhDChart2023'),
    configPhD2023
);
const PhDChart2024 = document.getElementById('PhDChart2024') && new Chart(
    document.getElementById('PhDChart2024'),
    configPhD2024
);
const PhDChart2025 = document.getElementById('PhDChart2025') && new Chart(
    document.getElementById('PhDChart2025'),
    configPhD2025
);
const MSChart = document.getElementById('MSChart') && new Chart(
    document.getElementById('MSChart'),
    configMS
);
const MSChart2023 = document.getElementById('MSChart2023') && new Chart(
    document.getElementById('MSChart2023'),
    configMS2023
);
const MSChart2024 = document.getElementById('MSChart2024') && new Chart(
    document.getElementById('MSChart2024'),
    configMS2024
);
const MSChart2025 = document.getElementById('MSChart2025') && new Chart(
    document.getElementById('MSChart2025'),
    configMS2025
);
const MSChart2026 = document.getElementById('MSChart2026') && new Chart(
    document.getElementById('MSChart2026'),
    configMS2026
);



const UGChart = document.getElementById('UGChart') && new Chart(
    document.getElementById('UGChart'),
    configUG
);
const UGChart2023 = document.getElementById('UGChart2023') && new Chart(
    document.getElementById('UGChart2023'),
    configUG2023
);

const UGChart2024 = document.getElementById('UGChart2024') && new Chart(
    document.getElementById('UGChart2024'),
    configUG2024
);

const UGChart2025 = document.getElementById('UGChart2025') && new Chart(
    document.getElementById('UGChart2025'),
    configUG2025
);

const UGChart2026 = document.getElementById('UGChart2026') && new Chart(
    document.getElementById('UGChart2026'),
    configUG2026
);

const MSChartKR = document.getElementById('MSChartKR') && new Chart(
    document.getElementById('MSChartKR'),
    configMSKR
);

const UGRADChartKR = document.getElementById('UGRADChartKR') && new Chart(
    document.getElementById('UGRADChartKR'),
    configUGRADKR
);

const UGRADSurveyChart2026 = document.getElementById('UGRADSurveyChart2026') && new Chart(
    document.getElementById('UGRADSurveyChart2026'),
    configUGRADSurvey2026
);

const MSSurveyChart2026 = document.getElementById('MSSurveyChart2026') && new Chart(
    document.getElementById('MSSurveyChart2026'),
    configMSSurvey2026
);


// Use GAPI for Google Sheets
// https://github.com/google/google-api-javascript-client/blob/master/docs/start.md


/** Data for Headlines */
const headlines = [

]

// https://www.geeksforgeeks.org/how-to-adjust-the-width-and-height-of-iframe-to-fit-with-content-in-it/
// https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site
// http://shorts.jeffkreeftmeijer.com/2014/scroll-to-anchors-in-iframes/#anchor-5
window.addEventListener("load", (e) => {
    // if (e.origin !== "https://www.cics.umass.edu") {
    //     console.log("DEBUG: Website is not https://www.cics.umass.edu, so not posting message.");
    //     return;
    // }

    const message = {
        height: window.document.body.scrollHeight,
        width: window.document.body.scrollWidth
    }

    window.top.postMessage(message, "*");

    $(".nav-link").on("click", function (e) {
        // Only intercept real links with an href.
        // In newer pages (e.g. 2026) tabs are <button.nav-link> and Bootstrap needs the click.
        const href = $(this).attr("href");
        if (!href) return;

        e.preventDefault();
        // returns "undergraduate" from "https://destinations.ltseng.me/#undergraduate"
        window.top.postMessage({
            "setAnchor": href.split('/').pop().substring(1)
        }, "*")
    });
});

window.addEventListener("message", (e) => {
    let anchor = e.data["findElement"];
    if (anchor !== undefined) {
        let element = $(`#${anchor}`);
        window.top.postMessage({
            "offset": element.offset().top
        }, "*")
    }
})

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".logo-scroll-wrapper").forEach(wrapper => {
    const scrollContainer = wrapper.querySelector(".logo-scroll");
    const row = scrollContainer.querySelector(".row");
    const leftBtn = wrapper.querySelector(".scroll-btn.left");
    const rightBtn = wrapper.querySelector(".scroll-btn.right");

    if (!scrollContainer || !row) return;

    /* ---------- CONFIG ---------- */
    const AUTO_SCROLL_SPEED = 1;
    const AUTO_SCROLL_INTERVAL = 20;
    const CLICK_SCROLL_AMOUNT = 450;
    const PAUSE_AFTER_CLICK = 2500;
    /* ---------------------------- */

    // 🔁 DUPLICATE CONTENT (triple for seamless loop)
    const originalContent = row.innerHTML;
    row.innerHTML = originalContent + originalContent + originalContent;

    let autoScrollTimer = null;
    let resumeTimeout = null;
    let isUserScrolling = false;
    const sectionWidth = row.scrollWidth / 3;

    // Start in middle section
    scrollContainer.scrollLeft = sectionWidth;

    function checkAndResetPosition() {
      // Only reset if we're auto-scrolling (not during user interaction)
      if (isUserScrolling) return;
      
      const currentScroll = scrollContainer.scrollLeft;
      
      // If we've scrolled past 2/3, reset to 1/3
      if (currentScroll >= sectionWidth * 2) {
        scrollContainer.scrollLeft = sectionWidth;
      }
      // If we've scrolled before 1/3 (going backwards), reset to 2/3
      else if (currentScroll <= 0) {
        scrollContainer.scrollLeft = sectionWidth * 2;
      }
    }

    function startAutoScroll() {
      stopAutoScroll();
      isUserScrolling = false;
      
      autoScrollTimer = setInterval(() => {
        scrollContainer.scrollLeft += AUTO_SCROLL_SPEED;
        checkAndResetPosition();
      }, AUTO_SCROLL_INTERVAL);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }

    function pauseAndResume() {
      stopAutoScroll();
      isUserScrolling = true;
      clearTimeout(resumeTimeout);
      
      resumeTimeout = setTimeout(() => {
        isUserScrolling = false;
        // Reset position if needed before resuming
        checkAndResetPosition();
        startAutoScroll();
      }, PAUSE_AFTER_CLICK);
    }

    // Arrow controls
    leftBtn.addEventListener("click", () => {
      pauseAndResume();
      scrollContainer.scrollBy({
        left: -CLICK_SCROLL_AMOUNT,
        behavior: "smooth"
      });
    });

    rightBtn.addEventListener("click", () => {
      pauseAndResume();
      scrollContainer.scrollBy({
        left: CLICK_SCROLL_AMOUNT,
        behavior: "smooth"
      });
    });

    // Hover pause
    scrollContainer.addEventListener("mouseenter", () => {
      stopAutoScroll();
      isUserScrolling = true;
    });
    
    scrollContainer.addEventListener("mouseleave", () => {
      isUserScrolling = false;
      checkAndResetPosition();
      startAutoScroll();
    });

    // Handle scroll end (for smooth scroll from buttons)
    let scrollTimeout;
    scrollContainer.addEventListener("scroll", () => {
      if (!isUserScrolling) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        checkAndResetPosition();
      }, 150);
    });

    startAutoScroll();
  });
});
