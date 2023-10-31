SELECT (FLOOR(price * 0.0001) * 10000) as price_group, count(*) as products FROM product
GROUP BY FLOOR(price * 0.0001)
ORDER BY price_group