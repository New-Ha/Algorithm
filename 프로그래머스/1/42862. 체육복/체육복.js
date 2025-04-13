function solution(n, lost, reserve) {
    const both = lost.filter(student => reserve.includes(student));
    const realLost = lost.filter(student => !both.includes(student)).sort((a, b) => a - b);
    const realReserve = new Set(reserve.filter(student => !both.includes(student)));
    
    let count = realLost.length;
    for(let student of realLost) {
	    if(realReserve.has(student - 1)) {
		    realReserve.delete(student - 1);
		    count--;
	    } else if (realReserve.has(student + 1)){
		    realReserve.delete(student + 1);
		    count--;
	    }
    }
    
    return n - count;
}