function solution(box, n) {
    // const [w, d, h] = box;
    // return Math.floor(w / n) * Math.floor(d / n) * Math.floor(h / n)
    return box.map(el => Math.floor(el / n)).reduce((acc, cur) => acc * cur)
}