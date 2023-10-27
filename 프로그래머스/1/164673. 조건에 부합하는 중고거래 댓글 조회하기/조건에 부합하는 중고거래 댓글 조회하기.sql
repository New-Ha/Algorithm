SELECT B.title, B.board_id, R.reply_id, R.writer_id, R.contents, DATE_FORMAT(R.created_date, "%Y-%m-%d") as created_date
FROM used_goods_board B
  JOIN used_goods_reply R
  ON B.board_id = R.board_id
WHERE year(B.created_date) = 2022 AND month(B.created_date) = 10
ORDER BY R.created_date, B.title