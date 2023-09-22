function solution(s) {
    // const numArr = s.split(' ').map(el => Number(el)).sort((a, b) => a - b);
    // return `${numArr[0]} ${numArr[numArr.length - 1]}`
    
    const splited = s.split(' ');
    return Math.min(...splited)+ ' ' + Math.max(...splited)
}