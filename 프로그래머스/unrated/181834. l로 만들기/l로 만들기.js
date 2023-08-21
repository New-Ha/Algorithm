function solution(myString) {
    // const goL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    // return myString.split('').map(el => goL.includes(el) ? 'l' : el).join('')
    
    return myString.split('').map(el => el < 'l' ? 'l' : el).join('')
}