SELECT B.category, SUM(S.sales) AS total_sales
FROM book B JOIN book_sales S ON B.book_id = S.book_id
WHERE sales_date >= DATE'2022-01-01'
  AND sales_date <  DATE'2022-02-01'
GROUP BY B.category
ORDER BY category