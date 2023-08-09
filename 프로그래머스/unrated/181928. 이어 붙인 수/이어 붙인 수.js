function solution(num_list) {
    let oddX = '';
    let evenX = '';
    for(let i of num_list){
        i % 2 === 0 ? evenX += String(i) : oddX += String(i)
    }
    return Number(oddX) + Number(evenX)
}