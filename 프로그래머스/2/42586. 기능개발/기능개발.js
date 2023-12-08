function solution(progresses, speeds) {
    const diploy = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]))
    
    const result = [];
    let count = 0;
    let temp = diploy[0];
    for(let i = 0; i < diploy.length; i++){
        if(temp < diploy[i]){
            result.push(count);
            temp = diploy[i]
            count = 1;
        }else{
            count++
        }
    }
    if(count > 0) result.push(count)
    return result
}