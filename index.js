var express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));


var orders=[
  {
    name:"Boosted Back Pack",
    originalAmount:1499.00,
    discountedAmount:1499.00,
    quantity:2,
    orderedImage:"//cdn.shopify.com/s/files/1/0325/7933/products/backpack_2x_d056789b-dddd-44b7-999a-1bb4d449d497.png?v=1517416003"
  }
  
];
 




app.get('/', function(req,res){
res.sendFile(__dirname + '/public/app/index.html');

});


app.get("/orders", function(req, res) {
  res.json(orders);
});


console.log("Server is starting at localhost:3000");
app.listen(process.env.PORT || 3000);
