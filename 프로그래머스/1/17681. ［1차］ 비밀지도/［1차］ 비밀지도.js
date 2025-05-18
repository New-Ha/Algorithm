function solution(n, arr1, arr2) {
    const decodedMap = [];
    
    const map1 = arr1.map((num) => num.toString(2).padStart(n, '0').split(''));
    const map2 = arr2.map((num) => num.toString(2).padStart(n, '0').split(''));
    for(let i = 0; i < n; i++){
        let line = '';
        for(let j = 0; j < n; j++){
            if(map1[i][j] === '1' || map2[i][j] === '1'){
                line += '#';
            } else {
                line += ' ';
            }
        }
        decodedMap.push(line)
    }
    return decodedMap;
}