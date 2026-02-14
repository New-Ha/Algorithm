SELECT u.user_id, 
       u.nickname, 
       u.city || ' ' || u.street_address1 || ' ' || u.street_address2 AS 전체주소, 
       SUBSTR(u.tlno, 1, 3) || '-' || SUBSTR(u.tlno, 4, 4) || '-' || SUBSTR(u.tlno, 8) AS 전화번호
FROM used_goods_user u
INNER JOIN (
    SELECT writer_id
    FROM used_goods_board
    GROUP BY writer_id
    HAVING COUNT(board_id) >= 3
) b ON u.user_id = b.writer_id
ORDER BY u.user_id DESC;