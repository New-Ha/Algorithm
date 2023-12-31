-- 코드를 입력하세요
SELECT COUNT(name) FROM (SELECT name FROM animal_ins GROUP BY name)