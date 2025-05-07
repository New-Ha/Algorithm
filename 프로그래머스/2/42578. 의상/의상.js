function solution(clothes) {
    const wardrobe = new Map();
    
    for(const [name, type] of clothes){
        if(!wardrobe.has(type)) wardrobe.set(type, []);
        wardrobe.get(type).push(name);
    }
    
    let result = 1;
    for(const item of wardrobe.values()){
        result *= (item.length + 1);
    }
    
    return result - 1
}