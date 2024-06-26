SELECT PRODUCT_CODE, (PRICE * SALES_AMOUNT) AS SALES 
FROM PRODUCT A, (SELECT PRODUCT_ID, SUM(SALES_AMOUNT) AS SALES_AMOUNT 
                 FROM OFFLINE_SALE GROUP BY PRODUCT_ID) B
WHERE A.PRODUCT_ID = B.PRODUCT_ID
ORDER BY SALES DESC, PRODUCT_CODE;