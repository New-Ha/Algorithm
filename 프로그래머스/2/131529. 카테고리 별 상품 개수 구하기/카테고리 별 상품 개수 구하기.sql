-- SUBSTRING()
# SELECT SUBSTRING(product_code, 1, 2) AS category,
#        COUNT(*) AS products
# FROM product
# GROUP BY SUBSTRING(product_code, 1, 2) 
# ORDER BY category;

-- LEFT()
SELECT LEFT(product_code, 2) AS category, COUNT(*) AS products FROM product
GROUP BY LEFT(product_code, 2)
ORDER BY category;