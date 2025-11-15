function solution(dots) {
    // note )
    // 기울기 비교는 (y2 - y1) / (x2 - x1) === (y4 - y3) / (x4 - x3) 이지만,
    // 0과 부동소수점 때문에 나눗셈은 피하는 게 좋으므로
    // (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1) 로
    // 곱셈비교를 한다!
    
    const isParallel = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
        return (y2 - y1)*(x4 - x3) === (y4 - y3)*(x2 - x1)
    }
    
    const isSameVector = isParallel(dots[0], dots[1], dots[2], dots[3]) ||
                         isParallel(dots[0], dots[2], dots[1], dots[3]) ||
                         isParallel(dots[0], dots[3], dots[1], dots[2])

    return isSameVector ? 1 : 0
}
