def solution(numbers, direction):
    numbers.insert(0, numbers.pop()) if direction == 'right' else numbers.append(numbers.pop(0))
    return numbers 

    # return [numbers.pop()] + numbers if direction=='right' else numbers + [numbers.pop(0)]