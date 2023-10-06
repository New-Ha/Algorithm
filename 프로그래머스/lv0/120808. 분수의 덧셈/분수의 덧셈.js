function getGCD(n1, n2){
    if(n2 === 0) return n1;
    return getGCD(n2, n1 % n2)
}


function solution(numer1, denom1, numer2, denom2) {
    const [numer, denom] = [(numer1 * denom2) + (numer2 * denom1) , (denom1 * denom2)];
    const gcd = getGCD(numer, denom);
    return [numer/gcd, denom/gcd]
}