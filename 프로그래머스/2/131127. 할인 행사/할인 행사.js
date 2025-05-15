function solution(want, number, discount) {
    const list = [];
    
    want.forEach((item, idx) => {
        for(let i = 0; i < number[idx]; i++){
            list.push(item)
        }
    })   

    let count = 0;

    for(let i = 0; i < discount.length - 9; i++){
        const membership = discount.slice(i, i + 10);
        const myList = [...list];
        for(const item of membership){
            if(myList.indexOf(item) > -1){
                myList.splice(myList.indexOf(item), 1);
            } else {
                continue;
            }
        }

        if(myList.length === 0) count++;
    }
    
    return count
}