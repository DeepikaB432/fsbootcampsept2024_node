select * from departments;

select * from employees;

-- to show common data from both the tables
select employees.first_name, employees.last_name, departments.department_name from employees
Inner JOIN departments
ON employees.department_id = departments.department_id;