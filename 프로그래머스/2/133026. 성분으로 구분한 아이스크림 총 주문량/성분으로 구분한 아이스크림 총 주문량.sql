SELECT I.ingredient_type, sum(F.total_order) as TOTAL_ORDER
FROM first_half F
    INNER JOIN icecream_info I
    ON F.flavor = I.flavor
GROUP BY I.ingredient_type
ORDER BY TOTAL_ORDER