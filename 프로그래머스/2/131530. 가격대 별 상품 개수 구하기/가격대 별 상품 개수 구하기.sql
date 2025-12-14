# case 1
# SELECT (FLOOR(price / 10000) * 10000) AS price_group, COUNT(*) AS products
# FROM product
# GROUP BY (FLOOR(price / 10000) * 10000)
# ORDER BY price_group;

# case 2
SELECT TRUNCATE(price, -4) AS price_group, COUNT(*) AS products
FROM product
GROUP BY TRUNCATE(price, -4)
ORDER BY price_group;