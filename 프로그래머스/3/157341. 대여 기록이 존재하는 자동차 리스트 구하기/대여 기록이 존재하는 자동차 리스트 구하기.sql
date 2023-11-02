SELECT DISTINCT C.car_id
FROM car_rental_company_car AS C INNER JOIN car_rental_company_rental_history AS H ON C.car_id = H.car_id
WHERE C.car_type = '세단' AND MONTH(H.start_date) = 10
ORDER BY C.car_id DESC