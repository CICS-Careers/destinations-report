ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let ugWordcloud = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            //fontSize: 14,
            "style": {
                "tooltip": {
                    visible: true,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Software Engineer",
                    "count": "4"
                },
                {
                    "text": "Product Manager",
                    "count": "2"
                },
                {
                    "text": "Data Engineer",
                    "count": "2"
                },
                {
                    "text": "Associate Consultant",
                    "count": "2"
                },
                {
                    "text": "UI/UX Designer/Researcher",
                    "count": "1"
                },
                {
                    "text": "Technology and Data Leadership Development Program",
                    "count": "1"
                },
                {
                    "text": "Statistical Programmer",
                    "count": "1"
                },
                {
                    "text": "Investment Analyst ",
                    "count": "1"
                },
                {
                    "text": "Global Markets Analyst",
                    "count": "1"
                },
                {
                    "text": "Database Analyst",
                    "count": "1"
                }
            ]
        }
    }]
};

zingchart.render({
    id: 'ug-roles-wordcloud',
    data: ugWordcloud,
    //width: 1315,
    output: "auto",
    minHeight: 100,
    maxHeight: 480,
});

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let msWordcloudData = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            // maxFontSize: 100,
            // minFontSize: 10,
            colorType: 'palette',
            palette: ['#6ba539', '#00aec7', '#00aec7', '#6ba539', '#00aec7', '#00aec7', '#6ba539', '#6ba539', '#00aec7', '#00aec7'],
            "style": {
                "tooltip": {
                    visible: true,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Data Scientist",
                    "count": "7"
                },
                {
                    "text": "Member of Technical Staff",
                    "count": "3"
                },
                {
                    "text": "Junior Data Scientist",
                    "count": "3"
                },
                {
                    "text": "Software Development Engineer",
                    "count": "2"
                },
                {
                    "text": "Senior Software Engineer",
                    "count": "2"
                },
                {
                    "text": "Machine Learning Engineer",
                    "count": "2"
                },
                {
                    "text": "Data and Applied Scientist",
                    "count": "1"
                },
                {
                    "text": "Systems Engineer",
                    "count": "1"
                },
                {
                    "text": "Software Engineer",
                    "count": "35"
                },
                {
                    "text": "Software Engineer 2",
                    "count": "1"
                }
            ]
        }
    }]
};

zingchart.render({
    id: 'ms-roles-wordcloud',
    data: msWordcloudData,
});

let ms2023WordcloudData = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            colorType: 'palette',
            palette: ['#6ba539', '#00aec7', '#6ba539', '#00aec7', '#00aec7', '#6ba539', '#6ba539', '#00aec7', '#6ba539', '#00aec7'],
            "style": {
                "tooltip": {
                    visible: false,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Data Scientist",
                    "count": "3"
                },
                {
                    "text": "Member of Technical Staff",
                    "count": "3"
                },
                {
                    "text": "Junior Data Scientist",
                    "count": "3"
                },
                {
                    "text": "Software Development Engineer",
                    "count": "3"
                },
                {
                    "text": "Senior Software Engineer",
                    "count": "3"
                },
                {
                    "text": "Machine Learning Engineer",
                    "count": "3"
                },
                {
                    "text": "Data and Applied Scientist",
                    "count": "3"
                },
                {
                    "text": "Systems Engineer",
                    "count": "3"
                },
                {
                    "text": "Computer Vision Engineer",
                    "count": "3"
                },
                {
                    "text": "Research Fellow",
                    "count": "3"
                },
                {
                    "text": "UX Designer",
                    "count": "3"
                }
            ]
        }
    }]
}

zingchart.render({
    id: 'ms2023-roles-wordcloud',
    data: ms2023WordcloudData,
});

let ug2023WordcloudData = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            colorType: 'palette',
            //palette: ['#6ba539', '#00aec7', '#6ba539', '#00aec7', '#00aec7', '#6ba539', '#6ba539', '#00aec7', '#6ba539', '#00aec7'],
            "style": {
                "tooltip": {
                    visible: false,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Data Scientist",
                    "count": "3"
                },
                {
                    "text": "Software Development Engineer",
                    "count": "3"
                },
                {
                    "text": "Data Analyst",
                    "count": "3"
                },
                {
                    "text": "Backend Software Developer",
                    "count": "3"
                },
                {
                    "text": "Application Developer",
                    "count": "3"
                },
                {
                    "text": "Algorithms Engineer",
                    "count": "3"
                },
                {
                    "text": "Solutions Engineer",
                    "count": "3"
                },
                {
                    "text": "Staff Assistant",
                    "count": "3"
                },
                {
                    "text": "Vulnerability Researcher",
                    "count": "3"
                },
                {
                    "text": "Technology Development Program Associate",
                    "count": "3"
                },
                {
                    "text": "Business Intelligence Consultant",
                    "count": "3"
                },
                {
                    "text": "Risk and Regulatory Consultant ",
                    "count": "3"
                }
                ,
                {
                    "text": "Researcher",
                    "count": "3"
                },
                {
                    "text": "Founder",
                    "count": "3"
                }
            ]
        }
    }]
}

zingchart.render({
    id: 'ug2023-roles-wordcloud',
    data: ug2023WordcloudData,
});

let phdWordcloudData = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            // maxFontSize: 100,
            // minFontSize: 10,
            colorType: 'palette',
            palette: ['#6ba539', '#00aec7', '#00aec7', '#6ba539', '#00aec7', '#00aec7', '#6ba539', '#6ba539', '#00aec7', '#00aec7'],
            "style": {
                "tooltip": {
                    visible: true,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Post Doctoral Researcher",
                    "count": "7"
                },
                {
                    "text": "Research Scientist",
                    "count": "7"
                },
                {
                    "text": "Assistant Professor",
                    "count": "1"
                },
                {
                    "text": "Software Engineer",
                    "count": "3"
                },
                {
                    "text": "Applied Scientist",
                    "count": "2"
                }
            ]
        }
    }]
};

zingchart.render({
    id: 'phd-roles-wordcloud',
    data: phdWordcloudData,
});

let phdWordcloudData2023 = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            //fontSize: 14,
            "style": {
                "tooltip": {
                    visible: true,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "AI/ML Research Scientist",
                    "count": "1"
                },
                {
                    "text": "Applied Scientist",
                    "count": "1"
                },
                {
                    "text": "Applied Scientist II",
                    "count": "1"
                },
                {
                    "text": "Health Sensing ML Scientist",
                    "count": "1"
                },
                {
                    "text": "Professor",
                    "count": "1"
                },
                {
                    "text": "Postdoctoral Scientist",
                    "count": "1"
                },
                {
                    "text": "Research Data Scientist & Technical Group Lead",
                    "count": "1"
                },
                {
                    "text": "Research Scientist",
                    "count": "1"
                },
                {
                    "text": "Senior Researcher",
                    "count": "1"
                },
                {
                    "text": "Young Investigator",
                    "count": "1"
                }
            ]
        }
    }]
};

zingchart.render({
    id: 'phd-roles-wordcloud-2023',
    data: phdWordcloudData2023,
    //width: 1315,
    output: "auto",
    minHeight: 100,
    maxHeight: 480,
});

let ms2024WordcloudData = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            colorType: 'palette',
            palette: ['#6ba539', '#00aec7', '#6ba539', '#00aec7', '#00aec7', '#6ba539', '#6ba539', '#00aec7', '#6ba539', '#00aec7'],
            "style": {
                "tooltip": {
                    visible: false,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Senior Machine Learning Engineer",
                    "count": "3"
                },
                {
                    "text": "Machine Learning Engineer",
                    "count": "3"
                },
                {
                    "text": "Data Scientist",
                    "count": "3"
                },
                {
                    "text": "Senior Data Engineer",
                    "count": "3"
                },
                {
                    "text": "Data Engineer",
                    "count": "3"
                },
                {
                    "text": "Associate Data Engineer",
                    "count": "3"
                },
                {
                    "text": "Business Technology Associate Consultant",
                    "count": "3"
                },
                {
                    "text": "Software Development Engineer II",
                    "count": "3"
                },
                {
                    "text": "Software Engineer II",
                    "count": "3"
                },
                {
                    "text": "Software Engineering MTS",
                    "count": "3"
                },
                {
                    "text": "Software Engineer",
                    "count": "3"
                }
            ]
        }
    }]
}

zingchart.render({
    id: 'ms2024-roles-wordcloud',
    data: ms2024WordcloudData,
});

let phdWordcloudData2024 = {
    "graphset": [{
        "type": "wordcloud",
        "options": {
            //fontSize: 14,
            "style": {
                "tooltip": {
                    visible: true,
                    text: '%text: %hits'
                }
            },
            "words": [
                {
                    "text": "Research Scientist",
                    "count": "1"
                },
                {
                    "text": "Applied Research Scientist",
                    "count": "1"
                },
                {
                    "text": "Assistant Professor",
                    "count": "1"
                },
                {
                    "text": "ML Research Scientist",
                    "count": "1"
                },
                {
                    "text": "Research Engineer",
                    "count": "1"
                },
                {
                    "text": "Research Scientist",
                    "count": "11"
                },
                {
                    "text": "Senior Researcher",
                    "count": "1"
                },
                {
                    "text": "Tenure-track assistant professor",
                    "count": "1"
                }
            ]
        }
    }]
};

zingchart.render({
    id: 'phd-roles-wordcloud-2024',
    data: phdWordcloudData2024,
    //width: 1315,
    output: "auto",
    minHeight: 100,
    maxHeight: 480,
});


