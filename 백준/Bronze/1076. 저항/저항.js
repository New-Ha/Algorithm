const fs = require('fs');
const inputColors = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const colorTable = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const colorValues = inputColors.map(color => colorTable.findIndex(entry => entry === color));

const resistanceValue = Number(String(colorValues[0]) + String(colorValues[1])) * Math.pow(10, colorValues[2]);
console.log(resistanceValue);
