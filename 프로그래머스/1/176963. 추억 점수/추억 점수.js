function solution(name, yearning, photo) {
    return photo.map(el => {
        return el.reduce((acc, cur) => name.indexOf(cur) > -1 ? acc + yearning[name.indexOf(cur)] : acc + 0, 0)
    })
}