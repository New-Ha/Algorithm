def solution(slice, n):
    pizza = n // slice;
    return pizza if pizza == n / slice else pizza + 1