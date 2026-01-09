SELECT I.name, I.datetime
FROM animal_ins I LEFT JOIN animal_outs O ON I.animal_id = O.animal_id
WHERE O.animal_id IS NULL
ORDER BY I.datetime
FETCH FIRST 3 ROWS ONLY;