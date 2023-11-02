SELECT I.animal_id, I.name
FROM animal_ins AS I INNER JOIN animal_outs AS O ON I.animal_id = O.animal_id
WHERE I.datetime > O.datetime
ORDER BY I.datetime