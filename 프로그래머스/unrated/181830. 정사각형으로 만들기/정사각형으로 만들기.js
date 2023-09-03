function solution(arr) {
    const row = arr.length;
    const column = arr[0].length;
    
    if(row > column){
        return arr.map(el => [...el, ...Array(row - column).fill(0)]);
    }else if(row < column){
        return [...arr, ...Array(column - row).fill(Array(column).fill(0))];
    }else return arr;
    
}