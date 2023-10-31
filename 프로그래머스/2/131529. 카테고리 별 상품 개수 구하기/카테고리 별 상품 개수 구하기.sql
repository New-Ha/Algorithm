SELECT LEFT(product_code, 2) as category, count(*) FROM product
GROUP BY category
ORDER BY category