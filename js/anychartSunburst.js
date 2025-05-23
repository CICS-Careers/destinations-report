ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
anychart.onDocumentReady(function () {
  function createSunburstChart(containerId, chartData) {
    // var palette1 = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'];
    var palette2 = ['#955251', '#B565A7', '#92A8D1', '#009B77', '#DD4324', '#45B8AC', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9'];

    var chart = anychart.sunburst(chartData, "as-tree");
    chart.calculationMode("ordinal-from-leaves");
    chart.labels().format("{%name}").fontSize(13).wordWrap("break-word");
    chart.tooltip().format("{%name}");
    chart.level(0).thickness("10%");
    chart.level(1).thickness("25%");
    chart.level(2).thickness("50%");
    chart.palette(palette2)
    chart.container(containerId);
    chart.draw();
    return chart;
  }

  var rolesDataMS2025 = [
    {
      name: "Roles",
      children: [
        {
          name: "Software",
          children: [
            { name: "Software Development Engineer" },
            // { name: "Senior Software Engineer" },
            // { name: "Senior Software Developer" },
            // { name: "Software Developer" },
            { name: "Cloud Solutions Engineer" },
            { name: "Platform Engineer" },
            { name: "Security Researcher" },
            { name: "Full Stack Developer" }
          ]
        },
        {
          name: "Data",
          children: [
            { name: "Data Scientist" },
            { name: "Quantitative Strategist" },
            { name: "Applied Scientist I" }
          ]
        },
        {
          name: "AI",
          children: [
            // { name: "AI Software Engineer" },
            { name: "Applied AI/ML Engineer" },
            { name: "ML Engineer" },
            { name: "ML Researcher" },
            // { name: "Research And Development Engineer" }
          ]
        },
        // {
        //   name: "Academics",
        //   children: [
        //     { name: "Computer Science Teacher" }
        //   ]
        // }
      ]
    }
  ];


  var rolesDataUG2025 = [
    {
      name: "Roles",
      children: [
        {
          name: "Software",
          children: [
            // { name: "Software Reverse Engineer" },
            { name: "Software Engineer" },
            // { name: "Software Development Engineer" },
            // { name: "Software Developer" },
            { name: "Embedded Software Engineer" },
            // { name: "React Native Developer" },
            // { name: "Security Engineer" },
            { name: "Cyber Security Engineer" },
            { name: "Network & Security Engineer" },
            { name: "Cloud Engineer" },
            { name: "Infrastructure as Code Engineer" }
            // { name: "Technology Development Associate" },
          ]
        },
        {
          name: "Data",
          children: [
            { name: "Data Analyst" },
            { name: "Data Engineer" },
            { name: "Investment Banking Analyst" },
            { name: "Quantitative Systems Analyst" }
          ]
        },
        {
          name: "AI",
          children: [
            { name: "AI Engineer" },
            { name: "ML Engineer" },
            { name: "Research Associate" }
          ]
        },
        {
          name: "Product",
          children: [
            { name: "Product Manager" },
            // { name: "Technology Analytics Analyst" },
            // { name: "Analyst" },
            { name: "Technical Business Analyst " }
            // { name: "Prime Brokerage Analyst" },

          ]
        }
      ]
    }
  ];
  // Create both charts with the same data but in different containers
  createSunburstChart("chartContainer1", rolesDataUG2025);
  createSunburstChart("chartContainer2", rolesDataMS2025);
});