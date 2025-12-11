SELECT B.title, B.board_id, R.reply_id, R.writer_id, R.contents, 
       TO_CHAR(R.created_date, 'YYYY-MM-DD') AS created_date
FROM used_goods_board B
  JOIN used_goods_reply R
  ON B.board_id = R.board_id
WHERE TO_CHAR(B.created_date, 'YYYY') = 2022 AND TO_CHAR(B.created_date, 'MM') = 10
ORDER BY R.created_date, B.title;