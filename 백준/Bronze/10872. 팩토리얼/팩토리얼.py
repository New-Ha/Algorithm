# 1. 반복문으로 모두 곱하기
# num = int(input());
# result = 1;
# for i in range(2, num + 1):
# 	result *= i;
# print(result);

# 2. 재귀 함수 사용
def factorial(n):
	result = 1;
	if n > 0 :
		result = n * factorial(n - 1);
	return result;

num = int(input());
print(factorial(num))
