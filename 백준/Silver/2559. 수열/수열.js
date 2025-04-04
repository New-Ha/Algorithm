const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0].split(' ')[0]);
const K = Number(input[0].split(' ')[1]);
const temperatures = input[1].split(' ').map(temperature => Number(temperature));

let result = 0;

// 처음 K까지의 합을 먼저 구합니다.
for(let i = 0; i < K; i++) {
	result += temperatures[i];
}

let curSum = result;

// 합을 구한 다음 수부터 구해야 하므로 i는 K부터 순회합니다.
for(let i = K; i < N; i++) {
	curSum += temperatures[i]; // 새로운 값을 추가하고
	curSum -= temperatures[i - K]; // 가장 왼쪽의 값을 뺴줍니다.
	result = Math.max(result, curSum); // 기존의 값과 비교하여 큰 수를 저장합니다.
}

console.log(result);
