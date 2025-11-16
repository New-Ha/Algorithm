function solution(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while(num <= n * n){
        for(let col = left; col <= right && num <= n * n; col++){
            result[top][col] = num++;
        }
        top++;
        
        for(let row = top; row <= bottom && num <= n * n; row++){
            result[row][right] = num++;
        }
        right--;
        
        for(let col = right; col >= left && num <= n * n; col--){
            result[bottom][col] = num++;
        }
        bottom--;
        
        for(let row = bottom; row >= top && num <= n * n; row--){
            result[row][left] = num++;
        }
        left++;
    }
    
    return result
}