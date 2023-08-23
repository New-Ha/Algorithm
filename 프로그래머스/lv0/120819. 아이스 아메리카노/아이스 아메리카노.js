function solution(money) {
    const ame = Math.floor(money / 5500);
    return [ame, money - (ame * 5500)]
}