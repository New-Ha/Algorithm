function solution(code) {
    let ret = '';
    let mode = 0;
    
    //ver 1
//     for(let i in code){
//         if(code[i] === '1'){
//             mode += 1;
//             continue;
//         }
        
//         if(mode%2 === 0){
//             if(i%2 === 0) ret += code[i]
//         }else{
//             if(i%2 === 1) ret += code[i]
//         }
//     }   
//    return ret.length === 0 ? "EMPTY" : ret;
    
   // ver2
    return [...code].reduce((acc, cur, idx) => {
        if(cur !== '1'){
            if(!mode && idx%2 === 0 || mode && idx%2 === 1) return acc + cur;
            return acc;
        }
        else mode = !mode
        return acc;
    },'') || 'EMPTY'
    
}