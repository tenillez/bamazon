# bamazon :moneybag: 

## Synopsis

An interactive shopping node app where MySQL and Node.JS are used to allow users to purchase items as a customer.


### **Bamazon Customer Portal**
The Bamazon Customer Portal allows users to view the current items available for purchase. The user will be prompted to enter the item id# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase.

![Available Items] (./CustomerAvailable.png)
![Insufficient Stock] (/images/CustomerUnavailable.png)

The first option allows the user to see the list of products that are currently for sale, what department the item belongs to, the price of the product and how much stock is left for that product.

The second option allows the user to see a list of all inventory items that have less than 5 items in stock. If there are no products that meet this criteria, the user will see a message stating so. 

### **Technologies Used:**
* Javascript
* nodeJS
* MySQL
* npm packages:
    * mysql
    * cli-table
    * inquirer 
