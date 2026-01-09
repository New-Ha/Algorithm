-- SELECT O.animal_id, O.name
-- FROM animal_outs O 
-- LEFT JOIN animal_ins I
--     ON O.animal_id = I.animal_id
-- WHERE I.animal_id IS NULL
-- ORDER BY O.animal_id

SELECT O.animal_id, O.name
FROM animal_outs O, animal_ins I
WHERE O.animal_id = I.animal_id(+)
    AND I.animal_id IS NULL
ORDER BY O.animal_id;