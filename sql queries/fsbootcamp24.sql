Create database fsbootcamp24;

CREATE TABLE fsbootcamp24.employees (
	employee_id int NOT NULL,
    first_name varchar(225) Not NULL,
	last_name varchar(225) Not NULL,
	status tinyint(1) default 1
);

select * from fsbootcamp24.employees;

-- insert query to insert data without column names
-- in this case we need to provide value for all the column
INSERT INTO fsbootcamp24.employees(employee_id,first_name,last_name) VALUES (4, 'Caffy', 'bansal');

INSERT INTO fsbootcamp24.employees(employee_id,first_name) VALUES (5, 'Test5');

show create table employees;

select first_name,last_name from employees;

-- to arrange the result in specific order we use oder by clause
select * from employees
order by employee_id DESC;

-- filteration of data is using where clause

select *
from employees
where first_name = 'Deepika';

-- employees whose first name starts with D
select * from employees
where first_name LIKE 'D%';

-- select all employees whose first name contains a letter
select * from employees
where first_name LIKE '%a%';

-- select all employees whose last name is empty
select * from employees
where last_name IS NULL;

-- select all employees whose employee_id is greater than 3 and last_name is empty
select * from employees
where employee_id >3 OR last_name IS NULL;

-- update query
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET first_name = 'Harry', last_name = 'Gurm', status = 0
WHERE employee_id = 2;
SET SQL_SAFE_UPDATES = 1;

-- delete query
SET SQL_SAFE_UPDATES = 0;
delete from employees where employee_id = 3;
SET SQL_SAFE_UPDATES = 1;


CREATE TABLE `employees` (
  `employee_id` int NOT NULL,
  `first_name` varchar(225) NOT NULL,
  `last_name` varchar(225) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
