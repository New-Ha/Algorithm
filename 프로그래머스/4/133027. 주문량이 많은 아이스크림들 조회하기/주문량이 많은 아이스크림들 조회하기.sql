SELECT FLAVOR FROM first_half AS F RIGHT OUTER JOIN july AS J USING(flavor)
GROUP BY flavor
ORDER BY SUM(F.total_order + J.total_order) DESC
LIMIT 3;
