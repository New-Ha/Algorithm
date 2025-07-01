const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const files = input[1].split(' ').map(Number);
const clusterSize = Number(input[2]);

let disk = 0;
for(let file of files){
    if(file === 0){
        continue;
    } else if(file <= clusterSize){
        disk += clusterSize;
    } else if(file > clusterSize){
        disk += clusterSize * Math.ceil(file / clusterSize);
    }
}

console.log(disk)