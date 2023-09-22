function solution(polynomial) {
    const variable = polynomial.split(' + ');
    
    let xnum = 0;
    let n = 0;
    
    variable.forEach(el => {
        if(el.includes('x')){
            xnum += Number(el.slice(0, -1) || 1)
        }else n += Number(el);
    })
    
    if(xnum === 0) return `${n}`;
    else if(xnum === 1) return n === 0 ? 'x' : `x + ${n}`;
    else return n === 0 ? `${xnum}x` : `${xnum}x + ${n}`;
}