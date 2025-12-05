const fs = require('fs');
const [N, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

const rank = input
  .map(line => line.split(' ').map(Number))
  .sort((a, b) => b[2] - a[2]);

const result = [];
const countryCount = {};

for (const [countryId, studentId, score] of rank) {
  if (!countryCount[countryId]) countryCount[countryId] = 0;

  if (countryCount[countryId] >= 2) continue;
  countryCount[countryId]++;
  result.push([countryId, studentId]);

  if (result.length === 3) break;
}

for (const [countryId, studentId] of result) {
  console.log(countryId + ' ' + studentId);
}