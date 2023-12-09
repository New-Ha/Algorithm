function solution(answers) {
    const one = [1, 2, 3, 4, 5]
    const two = [2, 1, 2, 3, 2, 4, 2, 5]
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
     
    const counts = [0, 0, 0];
    for(let i = 0 ; i < answers.length; i++){
        if(answers[i] === (one[i % one.length])) counts[0]++
        if(answers[i] === (two[i % two.length])) counts[1]++
        if(answers[i] === (three[i % three.length])) counts[2]++
    }

    const result = counts.map((el, idx) => [el, idx])
                        .filter(([n, i]) => n === Math.max(...counts))
                        .sort((a, b) => b[0] - a[0])
                        .map(([_, idx]) => idx + 1)
    return result
}