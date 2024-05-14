# SELECT QUARTER, COUNT(ID) AS ECOLI_COUNT
# FROM (SELECT ID, (CASE WHEN MONTH(DIFFERENTIATION_DATE) IN (1, 2, 3) THEN '1Q'
#                 WHEN MONTH(DIFFERENTIATION_DATE) IN (4, 5, 6) THEN '2Q'
#                 WHEN MONTH(DIFFERENTIATION_DATE) IN (7, 8, 9) THEN '3Q'
#                 WHEN MONTH(DIFFERENTIATION_DATE) IN (10, 11, 12 ) THEN '4Q'
#             END) AS QUARTER
#     FROM ECOLI_DATA) A
# GROUP BY QUARTER
# ORDER BY QUARTER;

SELECT (CASE WHEN MONTH(DIFFERENTIATION_DATE) IN (1, 2, 3) THEN '1Q'
                WHEN MONTH(DIFFERENTIATION_DATE) IN (4, 5, 6) THEN '2Q'
                WHEN MONTH(DIFFERENTIATION_DATE) IN (7, 8, 9) THEN '3Q'
                WHEN MONTH(DIFFERENTIATION_DATE) IN (10, 11, 12 ) THEN '4Q'
            END) AS QUARTER, COUNT(ID) AS ECOLI_COUNT
FROM ECOLI_DATA
GROUP BY QUARTER
ORDER BY QUARTER;