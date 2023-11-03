SELECT A.author_id, A.author_name, B.category, sum(S.sales * B.price) AS total_sales
FROM book AS B INNER JOIN book_sales AS S ON B.book_id = S.book_id
INNER JOIN author AS A ON B.author_id = A.author_id
WHERE S.sales_date LIKE '2022-01%'
GROUP BY A.author_id, B.category
ORDER BY A.author_id, B.category DESC;
