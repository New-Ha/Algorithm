function solution(myStr) {
    const remove = ['a', 'b', 'c'];
    const separate =  myStr.split('').map(el => remove.includes(el) ? el = '/' : el).join('').split('/').filter(el => el !== '')
    return separate.length === 0 ? ["EMPTY"] : separate
    
    //ver 2
    // const arr = myStr.split(/[abc]/).filter(el => el);
    // return arr.length == 0 ? ["EMPTY"] : arr;
}