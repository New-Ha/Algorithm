function solution(num_list) {
    const sumPow = num_list.reduce((acc, cur) => acc + cur, 0)**2
    const multi = num_list.reduce((acc, cur) => acc * cur, 1)
    return +(multi < sumPow) 
}