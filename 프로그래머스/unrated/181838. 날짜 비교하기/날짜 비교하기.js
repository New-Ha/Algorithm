function solution(date1, date2) {
    const [y1, m1, d1] = date1;
    const [y2, m2, d2] = date2;
    
    return +(y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 < d2))
}