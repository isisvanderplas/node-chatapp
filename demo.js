const fs = require('fs');
const _ = require('lodash');
// var data = require('./data.json');

// console.log(_.random(1,10));
//
// console.log(data.name);
//
// fs.readFile('./data.json', 'utf-8', (err, data) => {
//   var data = JSON.parse(data);
//   console.log(data.name);
// })

// fs.readdir('/', (err, data) => {
//   console.log(data);
// })

var data = {
  "name": "Isis van der Plas"
};

fs.writeFile('data.json', JSON.stringify(data), (err) => {
  console.log("write finished", (err));
});
