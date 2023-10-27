SELECT F.flavor
FROM first_half F
  INNER JOIN icecream_info I
  ON F.flavor = I.flavor
WHERE F.total_order > 3000 AND I.ingredient_type = 'fruit_based'
ORDER BY F.total_order DESC