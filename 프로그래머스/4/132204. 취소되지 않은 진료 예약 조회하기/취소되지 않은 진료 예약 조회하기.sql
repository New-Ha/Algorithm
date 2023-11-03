SELECT A.apnt_no, P.pt_name, P.pt_no, A.mcdp_cd, D.dr_name, A.apnt_ymd
FROM patient AS P INNER JOIN appointment AS A ON P.pt_no = A.pt_no
INNER JOIN doctor AS D ON D.dr_id = A.mddr_id
WHERE A.apnt_ymd LIKE '2022-04-13%' AND A.mcdp_cd = 'CS'AND A.apnt_cncl_yn = 'N'
ORDER BY A.apnt_ymd