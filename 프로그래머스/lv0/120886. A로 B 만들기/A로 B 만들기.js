function solution(before, after) {
    // ver 1
    // const str1 = before.split('').sort()
    // const str2 = after.split('').sort()
    // for(let i = 0; i < str1.length; i++){
    //     if(str1[i] !== str2[i]) return 0
    // }
    // return 1
    
    //ver 2
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
}