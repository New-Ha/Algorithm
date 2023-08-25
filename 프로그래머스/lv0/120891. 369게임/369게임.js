function solution(order) {
    const clap = ['3', '6', '9'];
    return String(order).split('').filter(el => clap.includes(el)).length
}