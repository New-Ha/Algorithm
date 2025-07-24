const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [n, k] = input[i].split(' ').map(Number);
    let total = n;
    let coupon = n;

    while (coupon >= k) {
        let exchange = Math.floor(coupon / k);
        total += exchange;
        coupon = coupon % k + exchange;
    }

    console.log(total);
}
