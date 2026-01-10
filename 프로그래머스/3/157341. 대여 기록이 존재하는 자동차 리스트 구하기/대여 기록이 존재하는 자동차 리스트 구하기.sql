SELECT C.car_id
FROM car_rental_company_car C
WHERE C.car_type = '세단'
  AND EXISTS (
      SELECT 1 FROM car_rental_company_rental_history H
      WHERE C.car_id = H.car_id
        AND H.start_date >= '2022-10-01' AND H.start_date < '2022-11-01'
  )
ORDER BY C.car_id DESC