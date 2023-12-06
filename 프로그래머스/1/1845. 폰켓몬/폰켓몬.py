def solution(nums):
    monNum = len(nums) // 2
    monKind = set(nums)
    
    return monNum if monNum <= len(monKind) else len(monKind)
