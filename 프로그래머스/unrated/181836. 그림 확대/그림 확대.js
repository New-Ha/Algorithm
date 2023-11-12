function solution(picture, k) {
    const result = []
    const row = picture.map(el => el.split('').map(pix => pix.repeat(k)).join(''));
    row.forEach(el => {
        for(let i = 0; i < k; i++){
            result.push(el)
        }
    })
    return result
}