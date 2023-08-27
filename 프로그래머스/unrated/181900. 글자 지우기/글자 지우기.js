function solution(my_string, indices) {
    return my_string.split('').map((el, idx) => indices.includes(idx) ? el = '' : el).join('')
}