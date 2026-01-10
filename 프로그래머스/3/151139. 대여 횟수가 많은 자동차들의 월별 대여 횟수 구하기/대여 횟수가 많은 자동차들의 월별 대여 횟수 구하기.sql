WITH the_car_rental_history AS (
    SELECT * FROM car_rental_company_rental_history
    WHERE start_date >= DATE'2022-08-01'
      AND start_date < DATE'2022-11-01'
)

SELECT EXTRACT(MONTH FROM start_date) AS month, car_id, COUNT(history_id) AS records
FROM the_car_rental_history
WHERE car_id IN (SELECT car_id FROM the_car_rental_history
                 GROUP BY car_id
                 HAVING COUNT(history_id) >= 5)
GROUP BY EXTRACT(MONTH FROM start_date), car_id
HAVING COUNT(history_id) > 0
ORDER BY month, car_id DESC;