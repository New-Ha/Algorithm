# 2022년도 평가 점수가 가장 높은(MAX) 사원 정보
# 사원들의 점수, 사번(EMP_NO), 성명(EMP_NAME), 직책(POSITION), 이메일(EMAIL)
# 평가점수 : 상, 하반기 점수의 합 AS SCORE

SELECT SUM(SCORE) AS SCORE ,E.EMP_NO, EMP_NAME, POSITION, EMAIL 
FROM HR_EMPLOYEES AS E JOIN HR_GRADE AS G ON E.EMP_NO = G.EMP_NO
WHERE POSITION = '팀원' AND G.YEAR = 2022
GROUP BY E.EMP_NO
ORDER BY SCORE DESC
LIMIT 1