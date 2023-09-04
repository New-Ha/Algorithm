def solution(chicken):
    cupon = (chicken // 10) + (chicken % 10)
    total = (chicken // 10);
    
    while cupon >= 10:
        total += cupon // 10
        cupon = (cupon // 10) + (cupon % 10)
    return total;