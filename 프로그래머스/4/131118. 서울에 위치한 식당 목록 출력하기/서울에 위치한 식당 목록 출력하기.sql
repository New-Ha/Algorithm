SELECT R.rest_id, I.rest_name, I.food_type, I.favorites, I.address, ROUND(AVG(R.review_score), 2) AS score FROM rest_info AS I INNER JOIN rest_review AS R ON I.rest_id = R.rest_id
WHERE SUBSTRING(I.address, 1, 2) = '서울'
GROUP BY R.rest_id
ORDER BY score DESC, I.favorites DESC