
/* simple solution with OR */
SELECT name, population, area FROM World
WHERE area >= 3000000 
OR population >= 25000000;

/* faster solution with UNION */
SELECT name, population, area 
FROM World
WHERE area >= 3000000 

UNION
SELECT name, population, area
FROM Worlds
WHERE population >= 25000000;