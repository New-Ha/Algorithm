function solution(str1, str2) {
    return str1.split('').map((el, idx) => el + str2[idx]).join('')
}