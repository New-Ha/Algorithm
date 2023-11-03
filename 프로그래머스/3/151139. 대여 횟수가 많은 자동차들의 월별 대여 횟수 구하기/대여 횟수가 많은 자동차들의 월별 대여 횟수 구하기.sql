SELECT MONTH(start_date) AS month, car_id, count(history_id) AS records
FROM car_rental_company_rental_history
WHERE (YEAR(start_date) = 2022) AND (MONTH(start_date) BETWEEN 8 AND 10) AND (car_id IN (SELECT car_id FROM car_rental_company_rental_history
    WHERE (YEAR(start_date) = 2022) AND (MONTH(start_date) BETWEEN 8 AND 10)
    GROUP BY car_id
    HAVING count(history_id) >= 5))
GROUP BY month, car_id
HAVING records > 0
ORDER BY month, car_id DESC;