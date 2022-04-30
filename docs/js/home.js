console.log('home');


//console.log(data);

var workingData;


//var now = moment("20190510", "YYYYMMDD").fromNow(true);


// moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
// moment().startOf('day').fromNow();        // 19 hours ago
// moment().endOf('day').fromNow();          // in 5 hours
// moment().startOf('hour').fromNow();  

//.format('MMMM Do YYYY, h:mm:ss a');

window.setInterval(updateElapsed, 1000);


function updateElapsed() {
  var now = moment();
  var start = moment("20190510", "YYYYMMDD");
  var elapsed = now.diff(start, 'months', true);
  $("#myName").text(elapsed.toFixed(6));
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

console.log(workingData);

function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData);
  let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

  let exportFileDefaultName = '../jackcohen/jc-squared/docs/Resources/data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}