const fs = require('fs'); 
const slogan = fs.readFileSync(0, 'utf-8').toString().trim();
const sloganMap = {
    'SONGDO': 'HIGHSCHOOL',
    'CODE': 'MASTER',
    '2023': '0611',
    'ALGORITHM': 'CONTEST'
}
console.log(sloganMap[slogan])