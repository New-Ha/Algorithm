SELECT CONCAT('/home/grep/src/', F.board_id, '/', file_id, file_name, file_ext) AS file_path
FROM used_goods_board AS B 
    INNER JOIN used_goods_file AS F 
    ON B.board_id = F.board_id
WHERE F.board_id = (SELECT F.board_id 
                    FROM used_goods_board AS B 
                        INNER JOIN used_goods_file AS F 
                        ON B.board_id = F.board_id
                    GROUP BY F.board_id
                    ORDER BY MAX(B.views) DESC
                    LIMIT 1)
ORDER BY F.file_id DESC;