use sakila;
/*1. Display the first and last name of each actor in a single column in upper case
letters. Name the column Actor Name.*/
select concat(upper(first_name),' ',upper(last_name)) as 'ACTOR NAME' from actor;
/*2. You need to find the ID number, first name, and last name of an actor, of
whom you know only the first name, "Joe."*/
select actor_id,first_name,last_name from actor where first_name = 'joe';
/*3. Find all actors whose last name contain the letters GEN.*/
select * from actor where last_name like '%GEN%';
/*4. Find all actors whose last names contain the letters "LI". This time, order the
rows by last name and first name, in that order.*/
select * from actor where last_name like '%LI%' order by last_name,first_name;
/*5. Using IN, display the country_id and country columns of the following
countries: Afghanistan, Bangladesh, and China.*/
select * from country where country in('Afghanistan', 'Bangladesh','China');
/*6. List last names of actors and the number of actors who have that last name,
but only for names that are shared by at least two actors*/
select distinct last_name,count(last_name) from actor 
GROUP BY last_name;
/*7. The actor HARPO WILLIAMS was accidentally entered in the actor table
as GROUCHO WILLIAMS. Write a query to fix the record, and another to verify
the change.*/
update actor
set first_name = "HARPO"
WHERE first_name="GROUCHO";
select * from actor where last_name='williams';
/*8. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out
that GROUCHO was the correct name after all! In a single query, if the first name
of the actor is currently HARPO, change it to GROUCHO. Then write a query to
verify your change.*/
update actor
set first_name = "GROUCHO"
WHERE first_name="HARPO" AND last_name='williams';
select * from actor where last_name='williams';
#9.same as 7
#10. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
select s.first_name,s.last_name,sum(p.amount) from staff as s
INNER JOIN payment as p on p.staff_id = s.staff_id
WHERE MONTH(p.payment_date) = 8 AND YEAR(p.payment_date) = 2005
GROUP BY p.staff_id;
/*11. List each film and the number of actors who are listed for that film. Use
tables film_actor and film. Use inner join.*/
select f.title, count(fa.actor_id) from film f
inner join film_actor as fa on fa.film_id = f.film_id
GROUP BY fa.film_id;
/*12. How many copies of the film Hunchback Impossible exist in the inventory
system?*/
select f.title, count(i.film_id) as 'Count' from film as f
inner join inventory as i on i.film_id = f.film_id
where f.title = 'Hunchback Impossible' 
group by 'f.title';
/*13. The music of Queen and Kris Kristofferson have seen an unlikely resurgence.
As an unintended consequence, films starting with the letters K and Q have
also soared in popularity. Use subqueries to display the titles of movies
starting with the letters K and Q whose language is English.*/
select f.title from film as f
inner join language as l on l.language_id = f.language_id
where f.title LIKE 'k%' or f.title LIKE 'q%';
/*14. Insert a record to represent Mary Smith renting the movie
‘Academy Dinosaur’ from Mike Hillyer at Store 1 today. Then write a
query to capture the exact row you entered into the rental table.*/




