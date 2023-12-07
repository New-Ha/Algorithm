function solution(participant, completion) {
    const newObj = {};
    participant.map(el => newObj[el] ? newObj[el] += 1 : newObj[el] = 1)
    completion.forEach(el => newObj[el] -= 1)
    return Object.keys(newObj).find(key => newObj[key] === 1)
}