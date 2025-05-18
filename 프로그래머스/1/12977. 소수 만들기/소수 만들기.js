function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let count = 0;

    function makeCombination(start = 0, depth = 0, sum = 0) {
        if (depth === 3) {
            if (isPrime(sum)) count++;
            return;
        }

        for (let i = start; i < nums.length; i++) {
            makeCombination(i + 1, depth + 1, sum + nums[i]);
        }
    }

    makeCombination();

    return count;
}
