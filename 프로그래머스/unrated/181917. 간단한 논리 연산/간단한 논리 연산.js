function solution(x1, x2, x3, x4) {
    //ver1
    // const x1x2 = x1 === false && x2 === false ? false : true;
    // const x3x4 = x3 === false && x4 === false ? false : true;
    // return x1x2 === true && x3x4 === true
    
    //ver2
    return (x1 || x2) && (x3 || x4)
}