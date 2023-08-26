function solution(age) {
    const translate = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return String(age).split('').map(el => translate[Number(el)]).join('')
}