SELECT YEAR(sales_date) AS year, MONTH(sales_date) AS month, gender, count(DISTINCT S.user_id) AS users 
FROM online_sale AS S 
    INNER JOIN (SELECT user_id, gender FROM user_info WHERE gender IS NOT NULL) AS U 
    ON S.user_id = U.user_id
GROUP BY year, month, gender
ORDER BY year, month, gender

