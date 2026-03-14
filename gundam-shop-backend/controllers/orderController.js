const orderService = require('../services/orderService')

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateOrder = async (req, res) => {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await orderService.deleteOrder(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json({ message: 'Order deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };