function solution(n, lost, reserve) {
// case 1
//     const both = lost.filter(student => reserve.includes(student));
//     const realLost = lost.filter(student => !both.includes(student)).sort((a, b) => a - b);
//     const realReserve = new Set(reserve.filter(student => !both.includes(student)));
    
//     let count = realLost.length;
//     for(let student of realLost) {
// 	    if(realReserve.has(student - 1)) {
// 		    realReserve.delete(student - 1);
// 		    count--;
// 	    } else if (realReserve.has(student + 1)){
// 		    realReserve.delete(student + 1);
// 		    count--;
// 	    }
//     }
    
//     return n - count;
    
// case 2
    const student = new Array(n + 2).fill(0); 

    for (let r of reserve) {
        student[r]++;
    }

    for (let l of lost) {
        student[l]--;
    }

    for (let i = 1; i <= n; i++) {
        if (student[i] === -1) {
            if (student[i - 1] === 1) {
                student[i]++;
                student[i - 1]--;
            } else if (student[i + 1] === 1) {
                student[i]++;
                student[i + 1]--;
            }
        }
    }

    return student.slice(1, n + 1).filter(x => x >= 0).length;

}