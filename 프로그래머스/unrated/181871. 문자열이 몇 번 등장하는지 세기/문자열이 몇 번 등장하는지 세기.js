function solution(myString, pat) {
    const pats = [];
    for(let i = 0; i <= myString.length - pat.length; i++){
        pats.push([...myString].splice(i, pat.length).join(''))
    }
    return pats.filter(el => el === pat).length
}