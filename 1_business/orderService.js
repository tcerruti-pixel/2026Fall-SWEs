const orderRepo = require("../2_persinetce/orderRepository.js");

const getOrderById = async (id) => {
    return await orderRepo.findById(id);
};

const getAllOrders = async () => {
    return await orderRepo.findAll();
};

module.exports = { getOrderById, getAllOrders };
