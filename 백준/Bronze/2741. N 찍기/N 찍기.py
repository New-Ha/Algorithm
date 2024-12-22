# input()으로 받아오는 값은 str이기 때문에
# 형변환을 해주어야 숫자로 사용할 수 있다!

num = int(input());
for i in range(1, num + 1):
	print(i)