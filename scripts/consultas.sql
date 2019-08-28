SELECT * FROM production.brands;
SELECT * FROM production.stocks;

SELECT brand_name FROM production.brands;

SELECT * FROM sales.customers;

SELECT * FROM sales.customers
WHERE state = 'NY';

SELECT * FROM sales.customers
WHERE zip_code = 11550;

SELECT * FROM sales.customers
WHERE zip_code = 11550 AND first_name = 'Robby';

SELECT * FROM sales.customers
ORDER BY city asc;

SELECT * FROM sales.customers
ORDER BY city desc;

SELECT * FROM sales.customers
ORDER BY first_name, last_name;

SELECT * FROM sales.customers
ORDER BY first_name asc, last_name desc;

SELECT state, count(*) FROM sales.customers
GROUP BY state