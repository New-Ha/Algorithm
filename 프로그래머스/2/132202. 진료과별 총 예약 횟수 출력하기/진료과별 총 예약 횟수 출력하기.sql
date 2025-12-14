SELECT mcdp_cd AS "진료과코드", COUNT(*) AS "5월예약건수" FROM appointment
WHERE apnt_ymd >= TIMESTAMP '2022-05-01 00:00:00'
  AND apnt_ymd <  TIMESTAMP '2022-06-01 00:00:00'
GROUP BY mcdp_cd
ORDER BY "5월예약건수", "진료과코드"