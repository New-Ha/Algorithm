SELECT hour(datetime) as hour, count(*) as count FROM animal_outs
WHERE hour(datetime) BETWEEN 9 AND 19
GROUP BY hour
ORDER BY hour