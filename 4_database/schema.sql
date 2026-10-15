CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL
);

INSERT OR IGNORE INTO orders (id, product, quantity, price)
VALUES
    (1, 'Laptop', 1, 1200.00),
    (2, 'Mouse', 2, 25.50),
    (3, 'Keyboard', 1, 75.00);
