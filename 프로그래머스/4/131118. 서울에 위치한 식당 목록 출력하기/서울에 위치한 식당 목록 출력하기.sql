# SELECT rest_id, rest_name, food_type, favorites, address, (
#     SELECT ROUND(AVG(review_score), 2) FROM rest_review WHERE review_score IS NOT NULL AND rest_info.rest_id = rest_review.rest_id ) AS score FROM rest_info
# WHERE SUBSTRING(address, 1, 2) = '서울' 
# ORDER BY score DESC, favorites

SELECT R.rest_id, I.rest_name, I.food_type, I.favorites, I.address, ROUND(AVG(R.review_score), 2) AS score FROM rest_info AS I INNER JOIN rest_review AS R ON I.rest_id = R.rest_id
WHERE SUBSTRING(I.address, 1, 2) = '서울'
GROUP BY R.rest_id
ORDER BY score DESC, I.favorites DESC