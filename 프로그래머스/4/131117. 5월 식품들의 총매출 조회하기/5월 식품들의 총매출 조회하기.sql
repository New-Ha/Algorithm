SELECT P.product_id, P.product_name, SUM(P.price * O.amount) AS total_sales
FROM food_product AS P INNER JOIN food_order AS O ON P.product_id = O.product_id
WHERE O.produce_date LIKE '2022-05%'
GROUP BY P.product_id
ORDER BY total_sales DESC, P.product_id;
