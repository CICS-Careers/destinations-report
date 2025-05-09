ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // DEFINE DATA
// -----------------------------
let chartData = [{
    id: 'Industries',
    text: ' ',
    parent: ''
}, {
    id: 'Tech',
    text: 'Tech',
    parent: 'Industries',
    value: 74
}, {
    id: 'Healthcare',
    text: 'Healthcare',
    parent: 'Industries',
    value: 1
}, {
    id: 'FinTech',
    text: 'FinTech',
    parent: 'Industries',
    value: 13
}, {
    id: 'Public Interest Technology',
    text: 'Public Interest Technology (PIT)',
    parent: 'Industries',
    value: 3
}, {
    id: 'SW',
    text: 'Software',
    parent: 'Tech',
    value: 44
}, {
    id: 'HW',
    text: 'Hardware',
    parent: 'Tech',
    value: 6
}, {
    id: 'Robotics',
    text: 'Robotics',
    parent: 'Tech',
    value: 2
}, {
    id: 'Retail',
    text: 'Retail',
    parent: 'Tech',
    value: 11
}, {
    id: 'Communications',
    text: 'Communications',
    parent: 'Tech',
    value: 5
},
    {
        id: 'Entertainment',
        text: 'Entertainment',
        parent: 'Tech',
        value: 0
    }, {
        id: 'Networking',
        text: 'Networking',
        parent: 'Tech',
        value: 0
    }, {
        id: 'Consulting',
        text: 'Consulting',
        parent: 'Tech',
        value: 3
    }, {
        id: 'Cybersecurity',
        text: 'Cybersecurity',
        parent: 'Tech',
        value: 3
    }, {
        id: 'Software',
        text: 'Software',
        parent: 'Healthcare',
        value: 0
    }, {
        id: 'Life Sciences',
        text: 'Life Sciences',
        parent: 'Healthcare',
        value: 1
    }, {
        id: 'Pharmaceuticals',
        text: 'Pharmaceuticals',
        parent: 'Healthcare',
        value: 0
    }, {
        id: 'Insurance',
        text: 'Insurance',
        parent: 'FinTech',
        value: 10
    }, {
        id: 'Investment Banking',
        text: 'Investment Banking',
        parent: 'FinTech',
        value: 3
    }, {
        id: 'Government',
        text: 'Government',
        parent: 'Public Interest Technology',
        value: 1
    }, {
        id: 'Government Contractors',
        text: 'Government Contractors',
        parent: 'Public Interest Technology',
        value: 0
    }, {
        id: 'GreenTech',
        text: 'GreenTech',
        parent: 'Public Interest Technology',
        value: 0
    }, {
        id: '“Common Good”',
        text: '“Common Good”',
        parent: 'Public Interest Technology',
        value: 2
    }
];
// full ZingChart schema can be found here:
// https://www.zingchart.com/docs/api/json-configuration/
let chartConfig = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Industries',
        // widths: [5, 100, 130],
        palette: ['#ffffff', '#3F51B5', '#42A5F5', '#5C6BC0', '#64B5F6']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartData,
};

zingchart.render({
    id: 'sunburstChart',
    data: chartConfig,
    height: '100%',
    width: '100%'
});

// UGRAD //

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // DEFINE DATA
// -----------------------------
let chartDataUG = [{
    id: 'Industries',
    text: ' ',
    parent: ''
}, {
    id: 'Tech',
    text: 'Tech',
    parent: 'Industries',
    value: 153
}, {
    id: 'Healthcare',
    text: 'Healthcare',
    parent: 'Industries',
    value: 23
}, {
    id: 'FinTech',
    text: 'FinTech',
    parent: 'Industries',
    value: 56
}, {
    id: 'Public Interest Technology',
    text: 'Public Interest Technology (PIT)',
    parent: 'Industries',
    value: 20
}, {
    id: 'SW',
    text: 'Software',
    parent: 'Tech',
    value: 49
}, {
    id: 'HW',
    text: 'Hardware',
    parent: 'Tech',
    value: 18
}, {
    id: 'Robotics',
    text: 'Robotics',
    parent: 'Tech',
    value: 0
}, {
    id: 'Retail',
    text: 'Retail',
    parent: 'Tech',
    value: 40
}, {
    id: 'Communications',
    text: 'Communications',
    parent: 'Tech',
    value: 12
},
    {
        id: 'Gaming',
        text: 'Gaming',
        parent: 'Tech',
        value: 6
    }, {
        id: 'Networking',
        text: 'Networking',
        parent: 'Tech',
        value: 0
    }, {
        id: 'Consulting',
        text: 'Consulting',
        parent: 'Tech',
        value: 20
    }, {
        id: 'Cybersecurity',
        text: 'Cybersecurity',
        parent: 'Tech',
        value: 8
    }, {
        id: 'Software',
        text: 'Software',
        parent: 'Healthcare',
        value: 11
    }, {
        id: 'Life Sciences',
        text: 'Life Sciences',
        parent: 'Healthcare',
        value: 12
    }, {
        id: 'Pharmaceuticals',
        text: 'Pharmaceuticals',
        parent: 'Healthcare',
        value: 0
    }, {
        id: 'Insurance',
        text: 'Insurance',
        parent: 'FinTech',
        value: 16
    }, {
        id: 'Investment Banking',
        text: 'Investment Banking',
        parent: 'FinTech',
        value: 40
    }, {
        id: 'Government',
        text: 'Government',
        parent: 'Public Interest Technology',
        value: 6
    }, {
        id: 'Contractors',
        text: 'Contractors',
        parent: 'Public Interest Technology',
        value: 2
    }, {
        id: 'GreenTech',
        text: 'GreenTech',
        parent: 'Public Interest Technology',
        value: 0
    }, {
        id: '“Common Good”',
        text: '“Common Good”',
        parent: 'Public Interest Technology',
        value: 12
    }];
let UGchartConfig = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Industries',
        // widths: [30, 115, 115],
        palette: ['#ffffff', '#fe3b1f', '#c4d600', '#ff9e1b', '#6ba539']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#000',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartDataUG,
};
zingchart.render({
    id: 'sunburstChartUG',
    data: UGchartConfig,
    height: '100%',
    width: '100%',
});

// PhD //

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // DEFINE DATA
// -----------------------------
let chartDataPhD = [{
    id: 'Roles',
    text: ' ',
    parent: ''
}, {
    id: 'Research Scientist',
    text: 'Research Scientist',
    parent: 'Roles',
    value: 7
}, {
    id: 'Software Engineer',
    text: 'Software Engineer',
    parent: 'Roles',
    value: 3
}, {
    id: 'Applied Scientist',
    text: 'Applied Scientist',
    parent: 'Roles',
    value: 2
}, {
    id: 'Applied and Data Scientist',
    text: 'Applied and Data Scientist',
    parent: 'Roles',
    value: 1
}, {
    id: 'Post Doctoral Researcher',
    text: 'Post Doctoral Researcher',
    parent: 'Roles',
    value: 8
},{
    id: 'Senior Researcher',
    text: 'Senior Researcher',
    parent: 'Roles',
    value: 1
},{
    id: 'Researcher',
    text: 'Researcher',
    parent: 'Roles',
    value: 1
}];
let PhDchartConfig = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Roles',
        //widths: [30, 115, 115],
        palette: ['#ffffff', '#fe3b1f', '#c4d600', '#ff9e1b', '#6ba539','#FEBE10','#E32636','#32de84']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#000',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartDataPhD,
};
zingchart.render({
    id: 'sunburstChartPhD',
    data: PhDchartConfig,
    height: '100%',
    width: '100%',
});
let chartDataPhD2023 = [{
    id: 'Roles',
    text: ' ',
    parent: ''
}, {
    id: 'AI/ML Research Scientist',
    text: 'AI/ML Research Scientist',
    parent: 'Roles',
    value: 1
}, {
    id: 'Applied Scientist',
    text: 'Applied Scientist',
    parent: 'Roles',
    value: 4
},{
    id: 'Applied Scientist II',
    text: 'Applied Scientist II',
    parent: 'Roles',
    value: 1
}, {
    id: 'Architect',
    text: 'Architect',
    parent: 'Roles',
    value: 1
}, {
    id: 'Research Scientist',
    text: 'Research Scientist',
    parent: 'Roles',
    value: 7
}, {
    id: 'Health Sensing ML Scientist',
    text: 'Health Sensing ML Scientist',
    parent: 'Roles',
    value: 1
}, {
    id: 'Postdoctoral Scientist',
    text: 'Postdoctoral Scientist',
    parent: 'Roles',
    value: 2
}, {
    id: 'Research Data Scientist & Technical Group Lead',
    text: 'Research Data Scientist & Technical Group Lead',
    parent: 'Roles',
    value: 1
}, {
    id: 'Senior Researcher',
    text: 'Senior Researcher',
    parent: 'Roles',
    value: 1
}, {
    id: 'Young Investigator',
    text: 'Young Investigator',
    parent: 'Roles',
    value: 1
}];

let PhDchartConfig2023 = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Roles',
        //widths: [30, 115, 115],
        palette: ['#ffffff', '#fe3b1f', '#c4d600', '#ff9e1b', '#6ba539','#FEBE10','#E32636','#32de84']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#000',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartDataPhD2023,
};

zingchart.render({
    id: 'sunburstChartPhD2023',
    data: PhDchartConfig2023,
    height: '100%',
    width: '100%',
});

var fsdata = [{
    "id": "breakdown",
    "text": "Industry Breakdown",
    "parent": ""
   },
  {
    "id": "tech",
    "text": "Tech",
    "parent": "breakdown",
    "value": 10
  },
  {
    "id": "healthcare",
    "text": "Health Care",
    "parent": "breakdown",
    "value": 9
  },
  {
    "id": "fintech",
    "text": "FinTech",
    "parent": "breakdown",
    "value": 8
  },
  {
    "id": "retail",
    "text": "Retail",
    "parent": "breakdown",
    "value": 7
  },
  {
    "id": "lifesciences",
    "text": "Life Sciences",
    "parent": "breakdown",
    "value":6
  },
  {
    "id": "hardware",
    "text": "Hardware",
    "parent": "breakdown",
    "value": 6
  },
  {
    "id": "robotics",
    "text": "Robotics",
    "parent": "breakdown",
    "value": 5
  },
  {
    "id": "investmentbanking",
    "text": "Investment Banking",
    "parent": "breakdown",
    "value": 7
  },
  {
    "id": "consulting",
    "text": "Consulting",
    "parent": "breakdown",
    "value": 3
  }
];
var cdata2023 = {
    "background-color": "#fff",//"#eee #ddd",
    "type": "bubble-pack",
    "plotarea": {
      "margin": 5
    },
    "options": {
      "active": true,
      "padding": 1,
      "min-size": 1,
      "max-items": 999,
      "min-level": 1,
      "max-level": 1,
      palette: ['#ffab40']
    },
    "series": fsdata,
  };
  zingchart.render({
    id: 'sunburstChart2023',
    width: 550,
    height: 550,
    output: 'svg',
    data: cdata2023
  });




let chartMSData2025 = [{
    id: 'Industries',
    text: ' ',
    parent: ''
}, {
    id: 'Software',
    text: 'Software',
    parent: 'Industries',
    value: 8
}, {
    id: 'Data',
    text: 'Data',
    parent: 'Industries',
    value: 3
}, {
    id: 'Machine Learning',
    text: 'Machine Learning',
    parent: 'Industries',
    value: 5
},{
    id: 'Academics',
    text: 'Academics',
    parent: 'Industries',
    value: 1
},{
    id: 'Computer Science Teacher',
    text: 'Computer Science Teacher',
    parent: 'Academics',
    value: 1
},
{
    id: 'AI SWE',
    text: 'AI Software Engineer ',
    parent: 'Machine Learning',
    value: 1
}, {
    id: 'Software Development Engineer',
    text: 'Software Development Engineer',
    parent: 'Software',
    value: 1
}, {
    id: 'Senior Software Engineer',
    text: 'Senior Software Engineer',
    parent: 'Software',
    value: 1
},{
    id: 'Senior Software Developer',
    text: 'Senior Software Developer',
    parent: 'Software',
    value: 1
}, {
    id: 'Software Developer',
    text: 'Software Developer',
    parent: 'Software',
    value: 1
},  {
    id: 'Cloud Technical Solutions Engineer',
    text: 'Cloud Technical Solutions Engineer',
    parent: 'Software',
    value: 1
},  {
    id: 'Platform Engineer',
    text: 'Platform Engineer',
    parent: 'Software',
    value: 1
},  {
    id: 'Security Researcher',
    text: 'Security Researcher',
    parent: 'Software',
    value: 1
}, {
    id: 'Full Stack Developer',
    text: 'Full Stack Developer',
    parent: 'Software',
    value: 1
}, {
    id: 'Data Scientist',
    text: 'Data Scientist',
    parent: 'Data',
    value: 1
}, {
    id: 'Quantitative Strategist',
    text: 'Quantitative Strategist',
    parent: 'Data',
    value: 1
},  {
    id: 'Applied Scientist I',
    text: 'Applied Scientist I',
    parent: 'Data',
    value: 1
},  {
    id: 'Senior Associate Applied AI/ML Engineer',
    text: 'Senior Associate Applied AI/ML Engineer',
    parent: 'Machine Learning',
    value: 1
},{
    id: 'Machine Learning Engineer',
    text: 'Machine Learning Engineer',
    parent: 'Machine Learning',
    value: 1
},
{
    id: 'Machine Learning Researcher',
    text: 'Machine Learning Researcher',
    parent: 'Machine Learning',
    value: 1
},{
    id: 'Research And Development Engineer',
    text: 'Research And Development Engineer',
    parent: 'Machine Learning',
    value: 1
},
];
// full ZingChart schema can be found here:
// https://www.zingchart.com/docs/api/json-configuration/
let MSchartConfig2025 = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 1,
        space: 0,
        root: 'Industries',
        // widths: [5, 100, 130],
        //palette: ['#ffffff', '#3F51B5', '#42A5F5', '#5C6BC0', '#64B5F6']
        palette: ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#45B8AC']

    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartMSData2025,
};

zingchart.render({
    id: 'sunburstChartMS2025',
    data: MSchartConfig2025,
    height: '100%',
    width: '100%'
});
