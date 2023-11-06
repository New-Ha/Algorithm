function solution(s) {
    return s.split(' ').map(el => el.split('')
        .map((word, idx) => idx % 2 === 0 ? word.toUpperCase() : word.toLowerCase()).join('')).join(' ')
    
}