console.log('home');


const data = require('../Resources/movies.json');
console.log(data);

var workingData;

// fetch("../../Resources/movies.json")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .then(data => saveData(data));
  

function saveData(data) {
  workingData = data;
}

console.log(workingData);

function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData);
  let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

  let exportFileDefaultName = 'data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}