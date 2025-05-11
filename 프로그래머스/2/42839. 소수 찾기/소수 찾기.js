function isPrime(n){
	if(n < 2) return false;
	for(let i = 2; i <= Math.sqrt(n); i++) {
		if(n % i === 0) return false;
	}
	return true
}

function solution(numbers) {
    const result = new Set();
    
    function getPermutations(nums, len, temp=''){
        if(temp.length === len){
            const n = Number(temp);
            if(isPrime(n)) result.add(n);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            const nextNums = nums.slice(0, i).concat(nums.slice(i+1));
            getPermutations(nextNums, len, temp + nums[i]);
        }
    }
    
    for(let i = 1; i <= numbers.length; i++){
        getPermutations(numbers.split(''), i)
    }
    
    return result.size;
}