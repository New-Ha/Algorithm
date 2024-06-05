SELECT EMP_NO, EMP_NAME, CASE WHEN AVG(SCORE) >= 96 THEN 'S'
                              WHEN AVG(SCORE) >= 90 THEN 'A'
                              WHEN AVG(SCORE) >= 80 THEN 'B'
                              ELSE 'C' END AS GRADE,
                        CASE WHEN AVG(SCORE) >= 96 THEN SAL * 0.2
                             WHEN AVG(SCORE) >= 90 THEN SAL * 0.15
                             WHEN AVG(SCORE) >= 80 THEN SAL * 0.1
                             ELSE SAL * 0 END AS BONUS
FROM HR_EMPLOYEES HE INNER JOIN HR_GRADE HG USING (EMP_NO)
GROUP BY EMP_NO
ORDER BY EMP_NO;