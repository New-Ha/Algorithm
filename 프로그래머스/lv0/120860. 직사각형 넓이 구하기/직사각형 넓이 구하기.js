function solution(dots) {
    let x = [];
    let y = [];
    
    for(let i in dots){
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    
    return Math.abs((Math.max(...x) - Math.min(...x))*(Math.max(...y)-Math.min(...y)))
}