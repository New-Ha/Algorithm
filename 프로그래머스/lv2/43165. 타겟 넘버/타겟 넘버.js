function solution(numbers, target) {
    let cases = [0];
    for(let i of numbers){
        const temp = [];
        for(let j of cases){
            temp.push(j + i);
            temp.push(j - i);
        }
        cases = temp;
    }
    let count = 0;
    for(let i of cases){
        if(i === target) count++;
    }
    return count
}