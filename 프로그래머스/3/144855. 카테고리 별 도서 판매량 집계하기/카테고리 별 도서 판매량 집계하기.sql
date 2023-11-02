SELECT B.category, sum(S.sales) AS total_sales
FROM book AS B LEFT OUTER JOIN book_sales AS S ON B.book_id = S.book_id
WHERE S.sales_date LIKE '2022-01%'
GROUP BY B.category
ORDER BY B.category