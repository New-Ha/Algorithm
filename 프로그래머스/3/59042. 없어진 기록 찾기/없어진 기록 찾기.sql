SELECT O.animal_id, O.name FROM animal_ins AS I RIGHT OUTER JOIN animal_outs AS O ON I.animal_id = O.animal_id
WHERE I.animal_id IS NULL
ORDER BY O.animal_id