function solution(nums) {
    const monNum = Math.floor(nums.length / 2)
    const monKind = new Set(nums)
    
    return monNum <= monKind.size ? monNum : monKind.size
}