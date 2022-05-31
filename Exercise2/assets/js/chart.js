function createPieChart(data) {
  // highchart options for pie chart
  var charOptions = {
      chart: {
        type: 'pie',
        styledMode: true,
      },
      title: {
        text: 'Pie chart by category'
      },
      subtitle: {
        text: 'The color mode follows the OS setting'
      },                
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },                
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            // style: {
            //     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            // }
          }
        }
      },
      series: [{
        name: 'Category',
        colorByPoint: true,
        data: data,
      }]
  }

  Highcharts.chart('containerPie', charOptions);
}

function createLineChart(data) {
  // highchart options for line chart
  var charOptions = {
      chart: {
        type: 'line',
        styledMode: true,
      },
      title: {
        text: 'Line chart by category and time'
      },
      subtitle: {
        text: 'The color mode follows the OS setting'
      },
      xAxis:{
       type: 'datetime',
       format: '{value:%Y-%b-%e}'
      },   
      yAxis: {
        title: {
          text: 'Value'
        }
      },                             
      // plotOptions: {
      //   line: {
      //     dataLabels: {
      //       enabled: true
      //     },
      //     enableMouseTracking: false
      //   }
      // },
      series: data
  }

  Highcharts.chart('containerLine', charOptions);
}