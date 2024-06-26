use northwind;
/*1. what is the name of the table that holds items north winds cells?
ans:product*/
#2.Write a query to list the product id, product name, and unit price of every produc
SELECT ProductID,ProductName,UnitPrice from products;
#3.Write a query to list the product id, product name, and unit price of everyproduct. Except this time, order then in ascending order by price
SELECT ProductID,ProductName,UnitPrice from products 
ORDER BY unitprice ASC;
#4.What are the products that we carry where the unit price is $7.50 or less?
SELECT productName,unitprice FROM
products WHERE unitprice <=7.5;
#5.What are the products that we carry where we have at least 100 units on hand?Order them in descending order by price
SELECT * FROM products WHERE unitsinstock >=100
ORDER BY unitsinstock DESC;
/*6.What are the products that we carry where we have at least 100 units on hand?
Order them in descending order by price. If two or more have the same price, list
those in ascending order by product name*/
SELECT * FROM products
WHERE unitsinstock >=100
ORDER BY unitprice DESC , productname ASC;
#7.What are the products that we carry where we have no units on hand, but 1 or more units of them on backorder? Order them by product name.
SELECT * FROM products
WHERE unitsinstock=0 AND unitsonorder > 0 
ORDER BY productname;
/*8.What is the name of the table that holds the types (categories) of the items Northwind sells?
Ans:Categories
9.Write a query that lists all of the columns and all of the rows of the categories
table? What is the category id of seafood?*/
SELECT * FROM categories;
SELECT * FROM categories
WHERE categoryname = 'seafood';
/*10. Examine the Products table. How does it identify the type (category) of each item
sold? Write a query to list all of the seafood items we carry.*/
SELECT products.productname,categories.categoryname FROM products
INNER JOIN categories 
WHERE categories.categoryid = products.categoryid AND categories.categoryname='seafood';
#11What are the first and last names of all of the Northwind employees?
SELECT concat(firstname,' ',lastname) AS Name from employees;
#12What employees have "manager" in their titles?
SELECT * from employees where title LIKE '%manager%';
#13.List the distinct job titles in employees?
SELECT DISTINCT title from employees;
#14. What employees have a salary that is between $200 0 and $2500?
SELECT * from employees WHERE salary BETWEEN 2000 AND 2500;
#15.List all of the information about all of Northwind's suppliers
SELECT * FROM SUPPLIERS;
/*16.Examine the Products table. How do you know what supplier supplies each
product? Write a query to list all of the items that "Tokyo Traders" supplies to
Northwind*/
select p.* from products as p
INNER JOIN suppliers as s
WHERE s.supplierid = p.supplierid AND s.companyname='Tokyo Traders';
#ex-2 
#1.How many suppliers are there? Use a query!
SELECT COUNT(*) AS SUPPLIERS FROM suppliers;
#2. What is the sum of all the employee's salaries?
SELECT CAST(SUM(salary) AS DECIMAL(10,2)) AS salary FROM employees;
#3. What is the price of the cheapest item that Northwind sells?
#SELECT * FROM products as p WHERE unitprice = (select MIN(unitprice) FROM products)
SELECT MIN(unitprice) FROM products;
#4. What is the average price of items that Northwind sells?
SELECT AVG(unitprice) AS AVERAGEPRICE FROM products;
#5. What is the price of the most expensive item that Northwind sells?
SELECT MAX(unitprice) AS Expensive_product from products;
#6. What is the supplier ID of each supplier and the number of items they supply? You can answer this query by only looking at the Products table.
SELECT supplierid,COUNT(productid) AS ItemCount from products
GROUP By supplierid;
#7. What is the category ID of each category and the average price of each item in the category? You can answer this query by only looking at the Products table.
SELECT categoryid,AVG(unitprice) AS AVERAGE_PRICE from products
GROUP BY categoryid;
/*8. For suppliers that provide at least 5 items to Northwind, what is the supplier ID of
each supplier and the number of items they supply? You can answer this query
by only looking at the Products table.*/
SELECT supplierid,COUNT(productid) FROM products
GROUP BY supplierid having COUNT(productid)>=5;
/*9. List the product id, product name, and inventory value (calculated by multiplying
unit price by the number of units on hand). Sort the results in descending order
by value. If two or more have the same value, order by product name.*/
SELECT productid,productname, (unitprice* unitsinstock) AS inventory 
from products ORDER BY inventory DESC , productname ASC;
#exersice 3
#1. What is the product name(s) of the most expensive products?
SELECT * FROM prsoducts where unitprice = (select max(unitprice) from products);
#2. What is the order id, shipping name and shipping address of all orders shipped via "Federal Shipping"?
SELECT orderid,shipname,shipaddress from orders
WHERE shipvia = (select shipperid FROM shippers WHERE companyname = 'federal shipping');
#3.What are the order ids of the orders that ordered "Sasquatch Ale"?
SELECT orderid from `order details`
where productid = (select productid from products where productname = 'Sasquatch Ale');
#4. What is the name of the employee that sold order 10266?
select concat(firstname,' ',lastname) as `Employee Name` from employees
where employeeid = (select employeeid from orders where orderid = 10266);
#5. What is the name of the customer that bought order 10266?
SELECT companyname from customers where customerid = (select customerid from orders where orderid = 10266);
#exercise 4 (joins)
#1. List the product id, product name, unit price and category name of all products.Order by category name and within that, by product name.
select p.productid,p.productname,p.unitprice,c.categoryname from products as p
LEFT JOIN categories as c on c.categoryid = p.categoryid order by c.categoryname, productname;
#2. List the product id, product name, unit price and supplier name of all products that cost more than $75. Order by product name.
select p.productid,p.productname,p.unitprice,s.companyname as supplier from products as p
INNER JOIN suppliers as s on s.supplierid = p.supplierid AND p.unitprice > 75 order by p.productname;
#3. List the product id, product name, unit price, category name, and supplier name of every product. Order by product name.
SELECT p.productid,p.productname,p.unitprice,c.categoryname ,s.companyname from products p
LEFT JOIN categories c on c.categoryid = p.categoryid
LEFT JOIN suppliers s on s.supplierid = p.supplierid order by p.productname;
#4.What is the product name(s) and categories of the most expensive products?
select p.productname, c.categoryname from products p
LEFT JOIN categories c on c.categoryid = p.categoryid
where p.unitprice = (select max(unitprice) from products);
#5. List the order id, ship name, ship address, and shipping company name of every order that shipped to Germany.
select o.orderid,s.address,s.companyname,s.country from orders o
INNER join suppliers s on s.supplierid=o.shipvia
where s.country = 'germany'; 
#6. List the order id, order date, ship name, ship address of all orders that ordered "Sasquatch Ale"?
select o.orderid,o.orderdate,o.shipname,o.shipaddress,p.productname from orders o
INNER JOIN products p
where p.productid = (select productid from products where productname='Sasquatch Ale');
#exercise 5 (insert update delete)
#1. Add a new supplier.
INSERT INTO suppliers (companyname,address,city,country)
VALUES('deccancompany','13/2 h.s.r layout','bangalore','india'); 
#2. Add a new product provided by tINSERT INTO `northwind`.`Products`
select * from products;
INSERT INTO products (productname,supplierid,categoryid,unitprice,discontinued)
VALUES('potato wedges',30,2,18.0,0);
#3. List all products and their suppliers.
SELECT * FROM products p
LEFT JOIN suppliers s ON s.supplierid = p.supplierid
UNION ALL
SELECT * FROM products p
RIGHT JOIN suppliers s ON s.supplierid = p.supplierid;
#4.Raise the price of your new product by 15%
UPDATE products
set unitprice = unitprice+(15/100*unitprice)
where productname='potato wedges';
#5. List the products and prices of all products from that supplier.
select * from products where supplierid = 30;
#6. Delete the new product.
DELETE FROM products where supplierid = 30;
#7. Delete the new supplier.
DELETE FROM suppliers WHERE supplierID = 30;
#8. List all products.
select * from products;
#9. List all suppliers.
select * from suppliers;











