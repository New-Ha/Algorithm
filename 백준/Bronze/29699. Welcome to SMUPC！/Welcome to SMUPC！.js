const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

const message = "WelcomeToSMUPC";
// 인덱스를 계산하기 위해 N에서 1을 빼줍니다.
// 인덱스는 0-based이고 N은 1-based이기 때문입니다.(시작이 0인지, 1인지가 다름)
const idx = (N - 1) % message.length;

console.log(message[idx])