function solution(chicken) {
      let cupon = Math.floor(chicken / 10) + (chicken % 10)
    let total = Math.floor(chicken / 10);
    
    while(cupon >= 10){
        total += Math.floor(cupon/10)
        cupon = Math.floor(cupon/10) + (cupon % 10)
    }
    return total;
}