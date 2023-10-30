SELECT B.book_id, A.author_name, DATE_FORMAT(B.published_date, '%Y-%m-%d') as published_date
FROM book B
  INNER JOIN author A
  ON B.author_id = A.author_id
WHERE B.category = '경제'
ORDER BY published_date