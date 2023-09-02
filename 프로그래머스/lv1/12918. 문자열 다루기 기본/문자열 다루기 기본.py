def solution(s):
    # 문자열.isdigit() -> 숫자로만 되어 있는 지 확인하는 함수
    
    return s.isdigit() and len(s) in [4,6]