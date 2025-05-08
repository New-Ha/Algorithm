function solution(people, limit) {
    const sorted = people.sort((a, b) => a - b);
    
    let boat = 0;
    let left = 0;
    let right = sorted.length - 1;
    
    while(left <= right){
        if(sorted[left] + sorted[right] <= limit){
            boat++;
            left++;
            right--;
        } else {
            boat++;
            right--;
        }
    }
    
    return boat;
}