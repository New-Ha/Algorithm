SELECT O.animal_id, O.name
FROM animal_outs O LEFT JOIN animal_ins I ON O.animal_id = I.animal_id
ORDER BY (CAST(o.datetime AS DATE) - CAST(i.datetime AS DATE)) DESC NULLS LAST
FETCH FIRST 2 ROWS ONLY;