const Cart = require('../models/Cart');

const getCarts = async () => {
    return await Cart.find().populate('user').populate('items.product');
}

const getCartById = async (id) => {
    return await Cart.findById(id).populate('user').populate('items.product');
}

const createCart = async (data) => {
    const cart = new Cart(data);
    return await cart.save();
}

const updateCart = async (id, data) => {
    return await Cart.findByIdAndUpdate(id, data, { new: true }).populate('user').populate('items.product');
}

const deleteCart = async (id) => {
    return await Cart.findByIdAndDelete(id);
}

module.exports = { getCarts, getCartById, createCart, updateCart, deleteCart };