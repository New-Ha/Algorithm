class MinHeap {
    constructor() {
        this.arr = [];
    }
    
    push(val) {
        this.arr.push(val);
        let idx = this.arr.length - 1;
        
        while (idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.arr[idx] >= this.arr[parentIdx]) break;
            [this.arr[idx], this.arr[parentIdx]] = [this.arr[parentIdx], this.arr[idx]];
            idx = parentIdx;
        }
    }
    
    pop() {
        if(this.arr.length === 1) return this.arr.pop();
        let min = this.arr[0];
        this.arr[0] = this.arr.pop();
        let cur = 0;
        
        while(cur * 2 + 1 < this.arr.length) {
            let minChild = cur * 2 + 2 < this.arr.length 
            && this.arr[cur * 2 + 2] < this.arr[cur * 2 + 1] ? 
            cur * 2 + 2 : cur * 2 + 1;
            
            if(this.arr[cur] < this.arr[minChild]) break;
        
            [this.arr[cur], this.arr[minChild]] = [this.arr[minChild], this.arr[cur]];
            cur = minChild;
        }
        return min;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    scoville.forEach(el => minHeap.push(el))
    
    let count = 0;
    while(minHeap.arr[0] < K && minHeap.arr.length > 1) {
        let fir = minHeap.pop();
        let sec = minHeap.pop();
        let mix = fir + (sec * 2);
        
        minHeap.push(mix);
        count++;
    }
    return minHeap.arr[0] >= K ? count : -1
}