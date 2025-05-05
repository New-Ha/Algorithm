function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    let sec = 0;
    let totalWeight = 0;

    while (truck_weights.length > 0 || totalWeight > 0) {
        sec++;
        totalWeight -= bridge.shift(); 

        if (truck_weights.length > 0) {
            if (totalWeight + truck_weights[0] <= weight) {
                let truck = truck_weights.shift();
                bridge.push(truck);
                totalWeight += truck;
            } else {
                bridge.push(0); 
            }
        }
    }

    return sec;
}