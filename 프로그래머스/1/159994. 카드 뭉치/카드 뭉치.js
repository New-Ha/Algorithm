function solution(cards1, cards2, goal) {
    for(const word of goal){
        console.log(word, cards1, cards2)
        if(cards1[0] === word){
            cards1.shift();
        }else if(cards2[0] === word){
            cards2.shift();
        }else{
            return "No"
        }
    }
    return "Yes"
}