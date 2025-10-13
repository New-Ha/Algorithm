const fs = require('fs');
const playing = fs.readFileSync('/dev/stdin').toString().trim().split(' ').join('');
const ascending = '12345678';
const descending = '87654321';

if(playing === ascending){
    console.log('ascending')
}else if(playing === descending){
    console.log('descending')
}else{
    console.log('mixed')
}