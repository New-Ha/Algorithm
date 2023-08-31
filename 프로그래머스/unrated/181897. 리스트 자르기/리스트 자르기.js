function solution(n, slicer, num_list) {
    // const [a, b, c] = slicer;
    // if(n === 1) return num_list.slice(0, b + 1)
    // else if(n === 2) return num_list.slice(a)
    // else if(n === 3) return num_list.slice(a, b + 1)
    // else return num_list.filter((_, idx) => idx >= a && idx <= b && idx % c - 1 === 0)
    
    const [a, b, c] = slicer;
    return n === 1 ? num_list.slice(0, b + 1) : n === 2 ? num_list.slice(a) : n === 3 ? num_list.slice(a, b + 1) : num_list.slice(a, b + 1).filter((_,idx) => idx % c - 1)
}