function solution(my_string, indices) {
    // return my_string.split('').map((el, idx) => indices.includes(idx) ? el = '' : el).join('')
    return my_string.split('').filter((_, idx) => !indices.includes(idx)).join('')
}