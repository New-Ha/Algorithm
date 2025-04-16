function solution(n, w, num) {
    const h = Math.ceil(n / w)

// case 1. simulation
//     const boxs = Array.from({ length: h }, () => Array(w).fill(0));
//     let findX;
//     let findY;
    
//     for(let i = 0; i < h; i++){
//         for(let j = 0; j < w; j++){
//             if(i % 2 === 0){
//                 let curN = i * w + j + 1
//                 if(curN <= n ){
//                     boxs[i][j] = i * w + j + 1
//                 }
//                 if(curN === num){
//                     findX = j;
//                     findY = i;
//                 }
//             } else {
//                 let curN = i * w + (w - j)
//                 if(curN <= n){
//                     boxs[i][j] = i * w + (w - j)
//                 }
//                 if(curN === num){
//                     findX = j;
//                     findY = i;
//                 }
//             }
//         }
//     }
//     let count = 0;
//     for(let i = findY; i < h; i++){
//         if(boxs[i][findX] !== 0) count++
//     }
//     return count
    
// case 2
    let row = Math.floor((num - 1) / w);
    let col;
    if(row % 2 === 0){
        col = (num - 1) % w
    } else {
        col = w - 1 - (num - 1) % w
    }
    let count = 0;
    for(let i = row; i < h; i++){
        if(i % 2 === 0 && (i * w + col) <= n){
            count++
        } else if(i % 2 !== 0 && (i * w + (w - col)) <= n){
            count++
        }
    }
    return count
}
