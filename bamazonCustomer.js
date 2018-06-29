var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

//MAIN CHECK AND BUY FUNCTION WHICH DISPLAYS ALL ITEMS FROM MY SQL AND THEN ADDS FUNCTIONALITY TO BUY AN ITEM WITH QUANTITIY CHOICES. 
var checkAndBuy = function() {
  connection.query('SELECT * FROM products', function(err, res) {
      //CREATES A NEW TABLE IN THE COOL CLI VIEW 
      var table = new Table({
          head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
      });

      //DISPLAYS ALL ITEMS FOR SALE (product_name, department_name, price, stock_quantity)
      console.log("HERE ARE ALL THE ITEMS AVAILABLE FOR SALE: ");
      console.log("===========================================");
      for (var i = 0; i < res.length; i++) {
          table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
      }
      console.log("-----------------------------------------------");
      //LOGS THE  TABLE WITH ITEMS IN FOR PURCHASE. 
      console.log(table.toString());
      inquirer.prompt([{
          name: "itemId",
          type: "input",
          message: "What is the item ID you would like to buy?",
          validate: function(value) {
              if (isNaN(value) == false) {
                  return true;
              } else {
                  return false;
              }
          }
      }, {
          name: "Quantity",
          type: "input",
          message: "How many of this item would you like to buy?",
          validate: function(value) {
              if (isNaN(value) == false) {
                  return true;
              } else {
                  return false;
              }
          }
      }]).then(function(answer) {
          var chosenId = answer.itemId - 1
          var chosenProduct = res[chosenId]
          var chosenQuantity = answer.Quantity
          if (chosenQuantity < res[chosenId].stock_quantity) {
              console.log("Your total for " + "(" + answer.Quantity + ")" + " " + res[chosenId].product_name + "s" + " is: " + "$" + res[chosenId].price.toFixed(2) * chosenQuantity);
              connection.query("UPDATE products SET ? WHERE ?", [{
                  StockQuantity: res[chosenId].stock_quantity - chosenQuantity
              }, {
                  id: res[chosenId].item_id
              }], function(err, res) {
                  //console.log(err);
                  connection.end();
              });

          } else {
              console.log("Whomp whomp! All we have is " + res[chosenId].stock_quantity + " in our inventory.");
              connection.end();
          }
      })
  })
}


checkAndBuy();