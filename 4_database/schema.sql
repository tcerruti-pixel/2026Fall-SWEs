drop table if exists orders;

--SQL grammar (script)
create table orders (
    id interger primary key AUTOINCREMENT,
    product text,
    quanity integer,
    price real
);

--random data
-- customer 1
insert into orders (id, product, quantity, price)
values (1, 'Laptop', 1, 1200.00);

-- customer 2
insert into orders (id, product, quantity, price)
values (2, 'Mouse', 2, 25.50);

-- customer 3
insert into orders (id, product, quantity, price)
values (3, 'Keyboard', 1, 75.00);
