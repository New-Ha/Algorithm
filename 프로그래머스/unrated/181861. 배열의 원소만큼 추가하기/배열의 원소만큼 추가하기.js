function solution(arr) {
    const X = [];
    arr.map(el => {
        for(let i = 1; i <= el; i++){
            X.push(el);
        }
    })
    return X
}