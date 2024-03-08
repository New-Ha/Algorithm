# 부서별 평균 연봉(소수점 첫째자리 반올림) AS AVG_SAL (DESC)

SELECT E.DEPT_ID, D.DEPT_NAME_EN, ROUND(AVG(SAL)) AS AVG_SAL 
FROM HR_EMPLOYEES AS E JOIN HR_DEPARTMENT AS D ON E.DEPT_ID = D.DEPT_ID
GROUP BY DEPT_ID
ORDER BY AVG_SAL DESC