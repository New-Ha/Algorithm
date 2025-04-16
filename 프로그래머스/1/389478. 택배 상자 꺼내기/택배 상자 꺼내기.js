function solution(n, w, num) {
    const h = Math.ceil(n / w)
    const boxs = Array.from({ length: h }, () => Array(w).fill(0));
    let findX;
    let findY;
    
    for(let i = 0; i < h; i++){
        for(let j = 0; j < w; j++){
            if(i % 2 === 0){
                let temp = i * w + j + 1
                if(temp <= n ){
                    boxs[i][j] = i * w + j + 1
                }
                if(temp === num){
                    findX = j;
                    findY = i;
                }
            } else {
                let temp = i * w + (w - j)
                if(temp <= n){
                    boxs[i][j] = i * w + (w - j)
                }
                if(temp === num){
                    findX = j;
                    findY = i;
                }
            }
        }
    }
    let count = 0;
    for(let i = findY; i < h; i++){
        if(boxs[i][findX] !== 0) count++
    }
    return count
}
