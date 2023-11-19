function solution(s) {
    return s.toLowerCase().split(' ')
            .map(el => typeof el[0] === 'string' ? el[0].toUpperCase() + el.slice(1) : el)
            .join(' ')
}