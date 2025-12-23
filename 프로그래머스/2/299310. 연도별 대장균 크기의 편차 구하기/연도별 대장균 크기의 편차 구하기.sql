# SELECT YEAR(A.differentiation_date) AS year,
#        (B.max_size - A.size_of_colony) AS year_dev,
#        A.id
# FROM ecoli_data A
#     JOIN (SELECT YEAR(differentiation_date) AS year, MAX(size_of_colony) AS max_size
#           FROM ecoli_data
#           GROUP BY YEAR(differentiation_date)) B
#     ON YEAR(A.differentiation_date) = B.year
# ORDER BY year, year_dev

WITH max_size_per_year AS (
     SELECT YEAR(differentiation_date) AS year, MAX(size_of_colony) AS max_size
     FROM ecoli_data
     GROUP BY YEAR(differentiation_date)
)
    
SELECT YEAR(A.differentiation_date) AS year,
       (B.max_size - A.size_of_colony) AS year_dev,
       A.id
FROM ecoli_data A
    JOIN max_size_per_year B
    ON YEAR(A.differentiation_date) = B.year
ORDER BY year, year_dev