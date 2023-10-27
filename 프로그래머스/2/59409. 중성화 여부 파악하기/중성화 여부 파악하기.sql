SELECT animal_id, name, 
    CASE WHEN sex_upon_intake LIKE 'Neutered%'
        OR sex_upon_intake LIKE 'Spayed%'THEN 'O'ELSE 'X'
    END sex_upon_intake
FROM animal_ins
ORDER BY animal_id