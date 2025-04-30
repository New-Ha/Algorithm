const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const words = input.slice(1);

function isGoodWord(word){
	const chars = word.split('');
	const stack = [];
	
	for(const char of chars){
		const top = stack[stack.length -1];
		if(top === char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	
	return stack.length === 0;
}

let count = 0;
for(const word of words){
    if(isGoodWord(word)) count++;
}

console.log(count)