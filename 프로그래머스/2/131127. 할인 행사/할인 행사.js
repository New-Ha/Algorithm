function solution(want, number, discount) {
// case 1. simulation
//     const list = [];
    
//     want.forEach((item, idx) => {
//         for(let i = 0; i < number[idx]; i++){
//             list.push(item)
//         }
//     })   

//     let count = 0;

//     for(let i = 0; i < discount.length - 9; i++){
//         const membership = discount.slice(i, i + 10);
//         const myList = [...list];
//         for(const item of membership){
//             if(myList.indexOf(item) > -1){
//                 myList.splice(myList.indexOf(item), 1);
//             } else {
//                 continue;
//             }
//         }

//         if(myList.length === 0) count++;
//     }
    
// case 2
    const list = new Map();
    for(let i = 0; i < want.length; i++){
        list.set(want[i], number[i]);
    }
      
    const isMatch = (discountMap) => {
        for(const [key, val] of list){
            if(!discountMap.has(key) || discountMap.get(key) < val) return false;
        }
        return true;
    }
    
    let count = 0;  
    const discountMap = new Map();
    for(let i = 0; i < 10; i++){
        const item = discount[i];
        discountMap.set(item, (discountMap.get(item) || 0 ) + 1);
    }
    if(isMatch(discountMap)) count++;

    
    for(let i = 1; i < discount.length - 9; i++){
        const outItem = discount[i - 1];
        const inItem = discount[i + 9];

        discountMap.set(outItem, discountMap.get(outItem) - 1);
        if(discountMap.get(outItem) === 0) discountMap.delete(outItem);

        discountMap.set(inItem, (discountMap.get(inItem) || 0) + 1);

        if(isMatch(discountMap)) count++;
    }
    
    return count
}