# try-except : JavaScript의 try-catch문과 비슷하다.
# try - except - else - finally 구문으로 구체적으로 에러 대비 가능!
# try: 에러가 발생할 수 있는 코드
# except: 에러 발생시에 처리할 코드
# else: 에러가 발생하지 않았을 경우 실행할 코드
# finally: 무조건 실행할 코드

# 1. 간단한 버전
# while True:
# 	try:
# 		a, b = map(int, input().split())
# 		print(a + b);
# 	except:
# 		break;

# 2. 구체적인 버전
while True:
	try:
		a, b = map(int, input().split());
	except:
		break;
	else:
		print(a + b);