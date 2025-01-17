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
    GRAY:"#808080"
}

const LabelBackgroundColor = 'rgba(0, 0, 0, 0.2)';

const Labels = [
    'Working',
    'Continuing Education',
    'Still Looking',
    'Unknown'
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
    'Still Looking',
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

const MSdataKR = {
    labels: LabelsKR,
    datasets: [{
        label: ' Number of Students',
        data: [209, 51],
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
        data: [368, 138],
        backgroundColor: [
            UMassColors.LIGHTGRAY,
            UMassColors.GRAY
            // UMassColors.MAROON,
            // UMassColors.LIGHTGRAY
        ],
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

const PhDdata = {
    labels: PhDLabels,
    datasets: [{
        label: ' Number of Students',
        data: [17, 8,2],
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

const MSChartKR = document.getElementById('MSChartKR') && new Chart(
    document.getElementById('MSChartKR'),
    configMSKR
);

const UGRADChartKR = document.getElementById('UGRADChartKR') && new Chart(
    document.getElementById('UGRADChartKR'),
    configUGRADKR
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

    $(".nav-link").on("click", function(e) {
        e.preventDefault();
        // returns "undergraduate" from "https://destinations.ltseng.me/#undergraduate"
        window.top.postMessage({
            "setAnchor": $(this).attr('href').split('/').pop().substring(1)
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


