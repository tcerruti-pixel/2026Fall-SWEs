const orderService = require("../1_business/orderService.js");

const getOrder = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isSafeInteger(id) || id <= 0) {
            return res.status(400).json({
                error: "Order ID must be a positive integer"
            });
        }

        const order = await orderService.getOrderById(id);

        if (!order) {
            return res.status(404).json({
                error: "Order not found"
            });
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = { getOrder, getAllOrders };
