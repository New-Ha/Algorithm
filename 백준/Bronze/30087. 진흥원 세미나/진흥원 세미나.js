const fs = require('fs');
const [N, ...seminarList] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const classroom = {
    'Algorithm' : '204',
    'DataAnalysis' : '207',
    'ArtificialIntelligence' : '302',
    'CyberSecurity' : 'B101',
    'Network' : '303',
    'Startup' :	'501',
    'TestStrategy' : '105'
}

for(const seminar of seminarList){
    console.log(classroom[seminar])
}