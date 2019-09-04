SELECT * FROM sales.customers WHERE email  LIKE '%gmail.com';
SELECT store_id from sales.stores where store_name = 'rowlett bikes';
select first_name from sales.staffs where store_id in 
(
	SELECT store_id from sales.stores where store_name = 'rowlett bikes'
);

select * from sales.orders where customer_id in
(
	select customer_id from sales.customers where first_name = 'adelle' and last_name = 'larsen'
);
select product_name from production.products where brand_id in
(
	select brand_id from production.brands where brand_name = 'surly'
)and model_year = 2016;
select quantity from production.stocks where product_id in
(
	select product_id from production.products where product_name = 'Surly Krampus - 2018'
);
select * from sales.customers where state = 'NY' and street like '%ave.%';

select first_name from sales.customers where phone is null;

select * from sales.orders where (month(shipped_date) >1 and month(shipped_date) <4) and (year(shipped_date) = 2017)