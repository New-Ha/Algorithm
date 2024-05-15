-- 코드를 입력하세요
SELECT COUNT(name) AS COUNT FROM (SELECT name FROM animal_ins GROUP BY name)