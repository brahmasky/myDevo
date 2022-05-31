// global var for array of all three data source and sum
let allData=[];
let sumAllData=0;

let dataUrls = [
'http://s3.amazonaws.com/logtrust-static/test/test/data1.json',
'http://s3.amazonaws.com/logtrust-static/test/test/data2.json',
'http://s3.amazonaws.com/logtrust-static/test/test/data3.json',
]
Promise.all(dataUrls.map(url => fetch(url))).then(responses =>
Promise.all(responses.map(response => 
  response.json())).then((res) => {
    // console.log(res);
    

    // data sample from first serie
    // {
    //     "d": 1435708800000,
    //     "cat": "Cat 1",
    //     "value": 832.803815816826
    // },
    data1 = Object.values(res[0]);
    // console.log(data1)
    data1.forEach(element => {
      let category = element.cat.toUpperCase();
      let dateTime = element.d;
      let value = element.value;
      
      allData.push({'category': category, 'dateTime': dateTime, 'value': value});
    });

    // data sample from second serie
    // {
    //     "myDate": "2015-06-02",
    //     "categ": "CAT 1",
    //     "val": 46.300059172697175
    // },  
    data2 = Object.values(res[1]);
    data2.forEach(element => {
      let date = new Date(element.myDate);
      
      const category = element.categ.toUpperCase();
      const dateTime = date.getTime();
      const value = element.val;

      allData.push({'category': category, 'dateTime': dateTime, 'value': value});
    });


    // data sample from third serie
    // {
    //     "raw": "9OHbc9 O1 WHTxiBPa auwZIVD6 j8jMWWVH UdB6hy 2015-06-18 XF 5xhcx15DD sbYFRPn dyoH1OOIF 6meHw pANknwa2h T imhs24gR5 #CAT 1#",
    //     "val": 39.38690127513058
    // },
    data3 = Object.values(res[2]);
    data3.forEach(element => {
      let raw = element.raw;

      // capture the date and category with regex
      let rawDate = raw.match(/(\d{4})-(\d{2})-(\d{2})/)[0];
      let newDate = new Date(rawDate);
      let rawCategory = raw.match(/#(.*)#/);

      let category = rawCategory[1];
      let dateTime = newDate.getTime();
      let value = element.val;                            
      
      allData.push({'category': category, 'dateTime': dateTime, 'value': value});
    });

    // sum values by category and date with reducer function
    let summedDataArray = allData.reduce(sumByCategoryDate, []);

    // Sort array by dateTime
    summedDataArray.sort(function (a, b) {
        if (a.dateTime > b.dateTime) {
            return 1;
        }
        if (a.dateTime < b.dateTime) {
            return -1;
        }
        return 0;
    });
    // console.log(summedDataArray)
    return summedDataArray

}).then((final) => {
  // prepare line chart data series

  // group the data series by category with reducer
  let lineChartSeries = final.reduce(groupByCategory, []);
  console.log('lineChartSeries',lineChartSeries);
  createLineChart(lineChartSeries);

  // prepare pie char series
  let pieChartSeries = [];
  // sum up the value with reducer, then calculate the percentage of each category
  final.reduce(sumByCategory, []).forEach(item => {
    pieChartSeries.push({name: item.category, y: item.value*100/sumAllData})
  });
  console.log('pieChartSeries', pieChartSeries);

  createPieChart(pieChartSeries);



})
).catch((err) => {
  console.log(err);
})