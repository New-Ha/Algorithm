function solution(quiz) {
    return quiz.map(el => el.split(' '))
        .map(([x, d, y, _, z]) => d === '+' && Number(x) + Number(y) === Number(z)           ? "O" : d === '-' && Number(x) - Number(y) === Number(z) ? "O" : "X")
}