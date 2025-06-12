function solution(routes) {
    const sorted = routes.sort((a, b) => a[1] - b[1]);
    
    let camera = 1;
    let lastCamera = sorted[0][1];
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i][0] > lastCamera){
            lastCamera = sorted[i][1];
            camera++;
        }
    }
    return camera
}