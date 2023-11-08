SELECT COUNT(name) FROM (SELECT name FROM animal_ins
GROUP BY name) AS name_table

