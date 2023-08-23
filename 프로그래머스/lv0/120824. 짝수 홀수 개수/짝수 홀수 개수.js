function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach(el => el % 2 === 0 ? even++ : odd++)
    return [even, odd]
}