function solution(wallpaper) {
    const firstIndexs = wallpaper.map(el => el.indexOf('#'))
    const lux = firstIndexs.findIndex(el => el >= 0)
    
    const filterdFirstIndexs = firstIndexs.filter(el => el >= 0)
    const luy = Math.min(...filterdFirstIndexs)
    
    const lastIndexs = wallpaper.map(el => el.lastIndexOf('#')).reverse();
    const rdx = wallpaper.length - lastIndexs.findIndex(el => el >= 0)
    
    const filteredLastIndexs = lastIndexs.filter(el => el >= 0)
    const rdy = Math.max(...filteredLastIndexs) + 1

    return [lux, luy, rdx, rdy]
}