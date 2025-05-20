function solution(topping) {
    const rightKinds = new Map();
    for(const t of topping) {
        rightKinds.set(t, (rightKinds.get(t) || 0) + 1);
    }
    
    const leftKinds = new Map();
    let count = 0;
    
    for(let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        leftKinds.set(t, (leftKinds.get(t) || 0) + 1);
        rightKinds.set(t, rightKinds.get(t) - 1);
        if(rightKinds.get(t) === 0) rightKinds.delete(t);

        if(leftKinds.size === rightKinds.size) count++;
    }
    return count
}