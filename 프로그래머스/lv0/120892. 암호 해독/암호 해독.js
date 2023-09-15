function solution(cipher, code) {
    cipher = cipher.slice(code - 1);
    let result = '';
    for(let i = 0; i < cipher.length; i += code){
        result += cipher[i];
    }
    return result
}