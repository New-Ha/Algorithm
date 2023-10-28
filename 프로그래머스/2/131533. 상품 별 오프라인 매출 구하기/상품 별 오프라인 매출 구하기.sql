SELECT P.product_code, sum(P.price * O.sales_amount) as sales 
FROM product P JOIN offline_sale O
  ON P.product_id = O.product_id
GROUP BY P.product_code
ORDER BY sales DESC, P.product_code