SELECT history_id,
    (CASE
        WHEN days < 7 THEN FLOOR(daily_fee * days)
        ELSE FLOOR(daily_fee * days * ((100 - discount_rate) * 0.01))
    END) AS fee
FROM (SELECT history_id, car_id, (DATEDIFF(end_date, start_date) + 1) AS days,
    (CASE 
        WHEN DATEDIFF(end_date, start_date) + 1 BETWEEN 7 AND 29 THEN '7일 이상'
        WHEN DATEDIFF(end_date, start_date) + 1 BETWEEN 30 AND 89 THEN '30일 이상'
        WHEN DATEDIFF(end_date, start_date) + 1 >= 90 THEN '90일 이상'
        ELSE null
    END) AS duration_type
    FROM car_rental_company_rental_history) AS H
LEFT JOIN car_rental_company_car AS C
ON H.car_id = C.car_id
LEFT JOIN car_rental_company_discount_plan AS P
ON C.car_type = P.car_type AND H.duration_type = P.duration_type
WHERE C.car_type = '트럭'
GROUP BY history_id
ORDER BY fee DESC, history_id DESC;