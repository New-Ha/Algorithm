function solution(food) {
    let result = '';
    const foods = food.map(el => el % 2 === 1 ? (el - 1) / 2 : el / 2);
    foods.forEach((el, idx) => el !== 0 ? result += String(idx).repeat(el) : result += '')

    return result + '0' + result.split('').reverse().join('')
}