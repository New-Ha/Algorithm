function solution(my_string, is_suffix) {
    const suffix = [];
    for(let i in my_string){
        suffix.push(my_string.slice(i))
    }
    return +(suffix.includes(is_suffix))
}