const Order = require('../models/Order');

const getOrders = async () => {
    return await Order.find().populate('user').populate('items.product');
}

const getOrderById = async (id) => {
    return await Order.findById(id).populate('user').populate('items.product');
}

const createOrder = async (data) => {
    const order = new Order(data);
    return await order.save();
}

const updateOrder = async (id, data) => {
    return await Order.findByIdAndUpdate(id, data, { new: true }).populate('user').populate('items.product');
}

const deleteOrder = async (id) => {
    return await Order.findByIdAndDelete(id);
}

const getOrdersByUserId = async (userId) => {
    return await Order.find({ user: userId }).populate('user').populate('items.product');
}

module.exports = { getOrders, getOrderById, getOrdersByUserId, createOrder, updateOrder, deleteOrder };