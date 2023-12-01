function solution(sizes) {
    const row = [];
    const column = [];
    // sizes.forEach(([r, c]) => {
    //     if(r > c){
    //         row.push(r)
    //         column.push(c)
    //     }
    //     else{
    //         row.push(c)
    //         column.push(r)
    //     }
    // })
    
    sizes.forEach(el => {
        row.push(Math.max(...el));
        column.push(Math.min(...el));
    })
    
    return Math.max(...row) * Math.max(...column)
}