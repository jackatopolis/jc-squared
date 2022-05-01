console.log('home');


var baliHaiTimes = ['x', '20220104', '20220110', '20220124', '20220131', '20220221', '20220228', '20220314', '20220321', '20220328', '20220404', '20220411'];
var baliHaiWeights = ['Combined Weight', 2.76, 2.71, 3.22, 3.14, 3.33, 3.16, 3.03, 3.27, 3.33, 3.08];

var chart = c3.generate({
  bindto: '#baliHai',
  title: {
    text: 'Bali Hai Weight',
    position: 'top-center'
  },
  width: 400,
  height: 200,
  data: {
    x: 'x',
    xFormat: '%Y%m%d',
    columns: [
      baliHaiTimes,
      baliHaiWeights
    ]
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    format: {
      value: function (value, ratio, id) {
        return value + " lbs.";
      }
      //            value: d3.format(',') // apply this format to both y and y2
    }
  }
});

//var now = moment("20190510", "YYYYMMDD").fromNow(true);


// moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
// moment().startOf('day').fromNow();        // 19 hours ago
// moment().endOf('day').fromNow();          // in 5 hours
// moment().startOf('hour').fromNow();  

//.format('MMMM Do YYYY, h:mm:ss a');

window.setInterval(updateElapsed, 500);


function updateElapsed() {
  var now = moment();
  var start = moment("20190510", "YYYYMMDD");
  var monthsElapsed = now.diff(start, 'months', true);
  var yearsElapsed = now.diff(start, 'years', true);
  var minutesElapsed = now.diff(start, 'minutes', true);
  var hpElapsed = minutesElapsed / 1180;
  var lightElapsed = minutesElapsed * 1.799e+10;
  $("#monthsElapsed b").text(monthsElapsed.toFixed(6));
  $("#yearsElapsed b").text(yearsElapsed.toFixed(4));
  $("#minutesElapsed b").text(minutesElapsed.toLocaleString("en-US"));
  $("#hpElapsed b").text(hpElapsed.toFixed(1));
  $("#lightElapsed b").text(lightElapsed.toLocaleString("en-US"));
}


setInterval(myTimer, 1000);

function myTimer() {  
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}





fetch('./Resources/movies.json')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
// .then(data => exportToJsonFile(data))


function saveData(data) {
  workingData = data;
}


function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData);
  let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

  let exportFileDefaultName = '../jackcohen/jc-squared/docs/Resources/data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}