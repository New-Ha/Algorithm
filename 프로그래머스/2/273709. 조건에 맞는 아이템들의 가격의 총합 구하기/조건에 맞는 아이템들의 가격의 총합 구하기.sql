# 1
# SELECT SUM(price) AS 'TOTAL_PRICE' FROM item_info
# WHERE rarity = 'LEGEND';

# 2
SELECT SUM(price) AS 'TOTAL_PRICE' FROM item_info
GROUP BY rarity
HAVING rarity = 'LEGEND'