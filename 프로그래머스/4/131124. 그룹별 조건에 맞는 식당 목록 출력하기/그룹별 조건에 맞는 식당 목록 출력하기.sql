SELECT M.member_name, R.review_text, 
    DATE_FORMAT(R.review_date, '%Y-%m-%d') AS review_date
FROM member_profile AS M INNER JOIN rest_review AS R 
ON M.member_id = R.member_id
WHERE R.member_id = (SELECT R.member_id
    FROM member_profile AS M INNER JOIN rest_review AS R 
    ON M.member_id = R.member_id
    GROUP BY R.member_id
    ORDER BY count(R.member_id) DESC
    LIMIT 1)
ORDER BY R.review_date, R.review_text