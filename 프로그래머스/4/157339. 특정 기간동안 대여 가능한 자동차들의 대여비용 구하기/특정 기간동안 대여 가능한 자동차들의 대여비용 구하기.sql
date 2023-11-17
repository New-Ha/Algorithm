SELECT car_id, C.car_type, FLOOR(daily_fee * 30 * ((100 - discount_rate) * 0.01)) AS fee
FROM car_rental_company_car AS C
LEFT OUTER JOIN car_rental_company_discount_plan AS P
ON C.car_type = P.car_type
WHERE C.car_type IN ('세단', 'SUV')
    AND P.duration_type = '30일 이상'
    AND FLOOR(daily_fee * 30 * ((100 - discount_rate) * 0.01)) BETWEEN 500000 AND 2000000
    AND car_id NOT IN (SELECT car_id FROM car_rental_company_rental_history
                    WHERE start_date <= '2022-11-30' AND end_date >= '2022-11-01'
                    GROUP BY car_id)
ORDER BY fee DESC, C.car_type, car_id DESC;
                

