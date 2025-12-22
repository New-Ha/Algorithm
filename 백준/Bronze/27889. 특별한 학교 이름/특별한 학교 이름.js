const fs = require('fs'); 
const abbreviation = fs.readFileSync(0, 'utf-8').toString().trim();
const schoolName = {
    'NLCS': 'North London Collegiate School',
    'BHA': 'Branksome Hall Asia',
    'KIS': 'Korea International School',
    'SJA': 'St. Johnsbury Academy'
}

console.log(schoolName[abbreviation])