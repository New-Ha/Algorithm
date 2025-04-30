const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const words = input.slice(1);

function isGoodWord(word){
	const stack = [];
	
	for(const char of word){
		const top = stack[stack.length -1];
		top === char ? stack.pop() : stack.push(char);
	}
	return !stack.length;	
}

const count = words.filter(isGoodWord).length;
console.log(count)