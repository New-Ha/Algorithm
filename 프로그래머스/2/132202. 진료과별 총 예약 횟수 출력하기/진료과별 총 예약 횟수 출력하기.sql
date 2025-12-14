SELECT mcdp_cd AS '진료과코드', COUNT(*) AS '5월예약건수' FROM appointment
WHERE apnt_ymd >= '2022-05-01'
  AND apnt_ymd <  '2022-06-01'
GROUP BY mcdp_cd
ORDER BY `5월예약건수`, `진료과코드` -- 혹은 2, 1