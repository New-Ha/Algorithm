function solution(a, b, c, d) {
    //sort 정렬을 한다.
    const dice = [a, b, c, d].sort((a, b) => a-b)
    
    //Set을 사용해 중복숫자를 빼서 몇개가 중복되는지를 확인한다.
    const set = new Set(dice)

    //만약 set에 숫자가 1개 뿐이라면, a,b,c,d 모두 같은 숫자라는 것이다.
    if(set.size === 1) return 1111 * dice[0]
    //만약에 set에 숫자가 2개라면, 3:1 혹은 2:2라는 것이다.
    else if(set.size === 2) {
        //dice에 a,b,c,d를 sort해놓았기 때문에 3개씩 같은 경우의 수를 제외하고 나면 2개씩 같은 경우의 수가 된다.
        if(dice[0] === dice[1] && dice [1] === dice[2]) return (10 * dice[1] + dice[3])**2
        else if(dice [1] === dice[2] && dice[2] === dice[3]) return (10 * dice[1] + dice[0])**2
        else return (dice[0]+dice[3]) * Math.abs(dice[0]-dice[3])
    }
    //만약에 set에 숫자가 3개라면, 2:1:1 인 경우이다.
    else if(set.size === 3){
        //2개씩 같은 경우의 수에 따라 나머지 q * r을 계산한다.
        if(dice[0]===dice[1]) return dice[2]*dice[3]
        else if(dice[1]===dice[2]) return dice[0]*dice[3]
        else if(dice[2]===dice[3]) return dice[0]*dice[1]
    }
    //전부아니라면 a,b,c,d 모두 다른 경우로, 0번째 인덱스(===가장 작은 수)의 점수를 준다.
    else return dice[0]
}