SELECT O.animal_id, O.name
FROM animal_ins AS I RIGHT OUTER JOIN animal_outs AS O ON I.animal_id = O.animal_id
GROUP BY O.animal_id
ORDER BY DATEDIFF(O.datetime, I.datetime) DESC
LIMIT 2;