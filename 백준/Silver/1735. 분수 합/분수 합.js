const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const fractions = input.map(f => f.split(' ').map(Number));

const getLCM = (num1, num2) =>{
  let lcm = 1;
   
  while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)) break;
    lcm++;
  }
  return lcm
}

const getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i = 2;i <= Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  
  return gcd;
}

let denominator = getLCM(fractions[0][1], fractions[1][1]);
let numerator = (fractions[0][0] * (denominator / fractions[0][1])) + (fractions[1][0] * (denominator / fractions[1][1]))
let gcd = getGCD(denominator, numerator)

console.log(`${numerator / gcd} ${denominator/gcd}`)
