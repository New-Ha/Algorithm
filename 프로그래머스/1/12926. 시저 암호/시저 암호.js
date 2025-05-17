function solution(s, n) {
    const alpabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const indexS = s.split('').map(char => alpabet.indexOf(char))
    const result = indexS.map(idx => idx === -1 ? " ":alpabet[idx + n])
    return result.join('')
}