const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');;
const [L, C] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();

const vowel = ['a', 'e', 'i', 'o', 'u'];

function getCombinations(start, comb) {
	if(comb.length === L){
		const vowelCount = comb.filter(ch => vowel.includes(ch)).length;
		const consonantCount = comb.length - vowelCount;
		if (vowelCount >= 1 && consonantCount >= 2){
			console.log(comb.join(''));
		}
		return;
	}
	
	for(let i = start; i < C; i++) {
		getCombinations(i + 1, [...comb, letters[i]])
	}
}

getCombinations(0, [])
