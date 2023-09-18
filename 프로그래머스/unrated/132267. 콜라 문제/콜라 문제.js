function solution(a, b, n) {
    let cokes = 0;
    while (n >= a){
        cokes += Math.floor(n / a) * b;
        n = (n % a) + Math.floor(n / a) * b;
    }
    return cokes
}