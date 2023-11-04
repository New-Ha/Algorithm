SELECT cart_id FROM cart_products
WHERE name = 'Yogurt' AND cart_id In (SELECT cart_id FROM cart_products
WHERE name = 'Milk')
ORDER BY cart_id
