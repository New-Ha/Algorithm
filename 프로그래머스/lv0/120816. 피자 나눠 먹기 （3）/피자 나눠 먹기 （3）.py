def solution(slice, n):
    pizza = n // slice;
    return pizza if pizza == n / slice else pizza + 1

    # return ((n - 1) // slice) + 1