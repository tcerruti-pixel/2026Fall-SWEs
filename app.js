const express = require("express");
const orderController = require("./0_request/orderController.js");
const db = require("./3_config/db.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Shop API is running!",
        endpoints: ["/orders", "/orders/1"]
    });
});

app.get("/orders", orderController.getAllOrders);
app.get("/orders/:id", orderController.getOrder);

db.initialize()
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database initialization failed:", err);
        process.exit(1);
    });
