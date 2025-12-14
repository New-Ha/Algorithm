SELECT board_id, writer_id, title, price, 
       (CASE status WHEN 'SALE' THEN '판매중'
             WHEN 'RESERVED' THEN '예약중'
             ELSE '거래완료'
       END) AS status
FROM used_goods_board
WHERE created_date >= DATE '2022-10-05'
  AND created_date <  DATE '2022-10-06'
ORDER BY board_id DESC;