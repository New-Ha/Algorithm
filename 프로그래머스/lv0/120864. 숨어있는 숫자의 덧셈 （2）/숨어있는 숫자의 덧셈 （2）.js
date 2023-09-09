function solution(my_string) {
    return my_string.replace(/[a-zA-Z]/g, "a").split('a').reduce((acc, cur) => acc + Number(cur), 0)
}