SELECT U.user_id, U.nickname, sum(B.price) AS total_sales
FROM used_goods_board AS B INNER JOIN used_goods_user AS U ON B.writer_id = U.user_id
WHERE B.status = 'DONE'
GROUP BY U.user_id, U.nickname
HAVING sum(B.price) >= 700000
ORDER BY total_sales