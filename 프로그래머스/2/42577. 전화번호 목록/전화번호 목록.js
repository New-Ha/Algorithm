function solution(phone_book) {
    // case 1. sort & startsWith()
    const sorted = phone_book.sort();
    for(let i = 0; i < phone_book.length - 1; i++){
        if(sorted[i+1].startsWith(sorted[i])) return false;
    }
    return true;
    
    // case 2. hash
//     const set = new Set(phone_book);

//     for(const phone of phone_book) {
//         let prefix = "";
//         for(let i = 0; i < phone.length - 1; i++) {
//             prefix += phone[i];
//             if(set.has(prefix)) return false;
//         }
//     }
//     return true;
}