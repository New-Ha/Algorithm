function solution(my_string, queries) {
   
    // queries.forEach(el => {
    //     let preStr = my_string.slice(0, el[0])
    //     let reversed = my_string.substring(el[0], el[1]+1).split('').reverse().join('')
    //     let lastStr = my_string.slice(el[1]+1)
    //     my_string = preStr+reversed+lastStr
    // })
    // return my_string
    
    let str = my_string.split('')
    queries.forEach(el => {
        const query = str.slice(el[0], el[1]+1);
        str.splice(el[0], query.length, ...query.reverse())
    })
    return str.join('')

}