SELECT name 
FROM Employee
WHERE id
IN (
    SELECT DISTINCT managerId
    FROM Employee
    GROUP BY managerId
    HAVING managerId IS NOT NULL 
    AND COUNT(managerId) >= 5
);