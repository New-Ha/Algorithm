function solution(my_strings, parts) {
    return parts.reduce((acc, cur, idx) => acc + my_strings[idx].slice(cur[0], cur[1] + 1) ,'')
}