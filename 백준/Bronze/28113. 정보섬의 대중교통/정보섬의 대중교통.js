const fs = require('fs'); 
const [N, A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const subwayT = Math.max(N, B);
if(A > subwayT){
    console.log("Subway")
}else if(A < subwayT){
    console.log("Bus")
}else{
    console.log("Anything")
}