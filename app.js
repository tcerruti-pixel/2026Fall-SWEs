const express = require("express");
const orderController = request("./0_request/orderController.js"); //loading 0_request layer
const orderService = request("../1_business/orderController.js"); //loading 0_request layer

const app = express();
const PORT = 3000;

//start server 
app.listen(PORT, ()=> {
    console.log('server running at https://localhost${PORT}')
});

app.get("/orders/:id", orderController.getOrders);
