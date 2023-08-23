function solution(arr1, arr2) {
    arr1.map((el, idx) => {
        for(let i in el){
            el[i] += arr2[idx][i]
        }
    })
    return arr1
}