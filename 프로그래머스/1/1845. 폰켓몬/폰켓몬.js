function solution(nums) {
    const monNum = Math.floor(nums.length / 2)
    const monKind = new Set(nums)
    
    if(monNum <= monKind.size) return monNum
    if(monNum > monKind.size) return monKind.size
}