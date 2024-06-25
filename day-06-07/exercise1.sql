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



