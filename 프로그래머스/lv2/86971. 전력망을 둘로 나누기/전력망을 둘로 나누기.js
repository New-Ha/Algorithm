function getDifference(arr, n){
    // splice한 wires로 tree 만들기
    const tree = new Map();
    arr.forEach(([a, b]) =>{
        tree.has(a) ? tree.get(a).push(b) : tree.set(a, [b]);
        tree.has(b) ? tree.get(b).push(a) : tree.set(b, [a]);
    })
    // 순회
    const checked = [];
    const queue = [];
    queue.push(arr[0][0]);
    
    while(queue.length){
        const node = queue.pop();
        if(!checked.includes(node)){
            checked.push(node);
            queue.push(...tree.get(node));
        }
    }
    // 순회길이를 이용해 차이 구하기
    // console.log(checked)
    return Math.abs(checked.length- (n - checked.length))
}

function solution(n, wires) {
    const difference = wires.map((el, idx) => {
        const temp = [...wires];
        temp.splice(idx, 1);
        return getDifference(temp, n)
    })
    return Math.min(...difference)
}