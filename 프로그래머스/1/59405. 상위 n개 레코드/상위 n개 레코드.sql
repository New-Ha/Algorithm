-- case 1
-- SELECT * FROM (
--     SELECT NAME
--     FROM ANIMAL_INS
--     ORDER BY DATETIME
-- )
-- WHERE ROWNUM = 1

-- case2
SELECT NAME FROM ANIMAL_INS
ORDER BY DATETIME
FETCH FIRST 1 ROWS ONLY;