-- ver1
# SELECT count(DISTINCT(name)) FROM animal_ins

-- ver 2
SELECT COUNT(name) FROM (SELECT name FROM animal_ins GROUP BY name) AS name_table