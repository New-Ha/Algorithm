function solution(myString, pat) {
    console.log(myString.lastIndexOf(pat))
    return myString.slice(0, myString.lastIndexOf(pat)) + pat
}