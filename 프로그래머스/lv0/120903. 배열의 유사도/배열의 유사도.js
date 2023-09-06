function solution(s1, s2) {
    if(s1.length > s2.length){
        return s1.filter(el => s2.includes(el)).length;
    }else return s2.filter(el => s1.includes(el)).length;
}