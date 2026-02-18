const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const symbolMap = {
    'animal': 'Panthera tigris',
    'tree': 'Pinus densiflora',
    'flower': 'Forsythia koreana'
}

for(const line of input){
    if(line === 'end') break;
    console.log(symbolMap[line])
}