SELECT mcdp_cd as 진료과코드, count(mcdp_cd) as 5월예약건수 FROM appointment
WHERE APNT_YMD LIKE '2022-05%'
GROUP BY 진료과코드
ORDER BY 5월예약건수, 진료과코드