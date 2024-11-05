SELECT * FROM fsbootcamp24.departments;

Insert into departments values (4, 'HR',1);

Create table test_employees as
select * from fsbootcamp24.employees;

select * from fsbootcamp24.test_employees;

-- truncate command to delete data from table
TRUNCATE table test_employees;

-- drop command to delete the data and the table 
drop table test_employees;

-- add a salary column to employee table
alter table employees 
	ADD column salary INT NOT NULL default '10000';
    
alter table employees
add column age int not null;

alter table employees
drop column age;

-- add a new column and a foreign key constraint
alter table employees
	add department_id int not null;
alter table employees
	add FOREIGN KEY (department_id) REFERENCES departments(department_id);
    
    -- update department_id in employees table
    SET SQL_SAFE_UPDATES = 0;
    UPDATE employees
    SET department_id = 2
    where employee_id =2 or employee_id =4; 
    SET SQL_SAFE_UPDATES = 1;
    
-- To add a primary key or existing table

ALTER TABLE employees
	ADD PRIMARY KEY (employee_id);
    
SET SQL_SAFE_UPDATES = 0;
Update employees
SET last_name = 'B'
where employee_id = 4;
SET SQL_SAFE_UPDATES = 1;
    
select * from employees;

select * from departments;