function solution(my_string, num1, num2) {
    const change = [my_string[num1], my_string[num2]]
    return my_string.split('').map((el, idx) =>  idx === num1 ? el = change[1] : idx === num2 ? el = change[0] : el).join('')
}