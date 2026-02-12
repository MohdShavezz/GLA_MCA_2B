use db_grp_b;
show tables;
desc users;
select * from users;

insert into users  values
('sahil',22,'s@gmail.com','M'),
('raj',21,'r@gmail.com','M'),
('tiya',23,'tgmail.com','F');

select count(*) from users;
select distinct (name) from users;
select avg(age) as avrg_age from users;

select * from users 
order by age desc
limit 2;

select concat(name,' ',age) as cnct from users;

-- select * from users
-- -- where name>1;
-- group by name 
-- having name>1;

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2),
    dept_id INT,
    email VARCHAR(100) UNIQUE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
desc departments;
desc employees;

INSERT INTO departments VALUES
(1, 'HR'),
(2, 'Engineering'),
(3, 'Sales');
INSERT INTO employees VALUES
(101, 'Aman', 25, 40000, 2, 'aman@mail.com'),
(102, 'Riya', 28, 50000, 2, 'riya@mail.com'),
(103, 'Karan', 35, 60000, 1, 'karan@mail.com'),
(104, 'Sneha', 30, 45000, 3, 'sneha@mail.com'),
(105, 'Rohit', 26, 38000, NULL, 'rohit@mail.com');

select * from departments;
select * from employees;

select employees.emp_name, employees.age, employees.salary, departments.dept_name
from employees join departments
on employees.dept_id=departments.dept_id;


-- avg salary of emp in each dept.
select avg(salary) as avg_salary from employees
group by dept_id
having avg_salary>50000;
-- Employee names whose salaries are above than average salary of employee.
select emp_name from employees 
where salary > (select avg(salary) from employees);

-- Second highest salary
select salary from employees 
where salary<(select max(salary) from employees) limit 1;
