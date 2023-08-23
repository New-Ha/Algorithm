function solution(myString) {
    return myString.split('x').sort().filter(el => el.length !== 0)
}