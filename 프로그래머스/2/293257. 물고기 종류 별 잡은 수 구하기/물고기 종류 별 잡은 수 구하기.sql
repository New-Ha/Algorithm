SELECT COUNT(id) AS fish_count, fish_name
FROM fish_info I JOIN fish_name_info N USING (fish_type)
GROUP BY fish_type, fish_name
ORDER BY fish_count DESC