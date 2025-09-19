const fs = require("fs");
const [d, m] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const idx = new Date(2009, m - 1, d).getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[idx])