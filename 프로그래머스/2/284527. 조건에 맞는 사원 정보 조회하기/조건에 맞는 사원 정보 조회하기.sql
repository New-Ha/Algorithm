SELECT 
    SUM(g.score) AS score,
    e.emp_no,
    e.emp_name,
    e.position,
    e.email
FROM hr_grade g
JOIN hr_employees e 
  ON g.emp_no = e.emp_no
WHERE g.year = 2022
GROUP BY 
    e.emp_no, e.emp_name, e.position, e.email
ORDER BY score DESC
LIMIT 1;
