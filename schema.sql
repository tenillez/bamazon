-- bamazon 
 
DROP DATABASE IF EXISTS bamazon;
DROP TABLE products;

CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE products (  
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (13,2),
  stock_quantity INTEGER NULL,
  PRIMARY KEY (item_id)
 );
  
SELECT * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rain boots", "Shoes", 20, 7),
		("Espresso machine", "Kitchen", 75.35, 10),
		("Necklace", "Jewelry", 100.55, 10),
		("Shampoo", "Bath", 10.25, 25),
		("Conditioner", "Bath", 11.65, 29),
		("Dehumidifier", "Home", 250.50, 3),
		("Rug", "Home", 300.00, 3),
		("Legos", "Toys", 15, 13),
		("Television", "Home", 1000, 10),
		("Ladder", "Home", 50, 5);
