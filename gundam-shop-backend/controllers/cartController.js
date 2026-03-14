const cartService = require('../services/cartService')

const getAllCarts = async (req, res) => {
    try {
        const carts = await cartService.getCarts();
        res.json(carts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCartById = async (req, res) => {
    try {
        const cart = await cartService.getCartById(req.params.id);
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createCart = async (req, res) => {
    try {
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateCart = async (req, res) => {
    try {
        const cart = await cartService.updateCart(req.params.id, req.body);
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteCart = async (req, res) => {
    try {
        const cart = await cartService.deleteCart(req.params.id);
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json({ message: 'Cart deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllCarts, getCartById, createCart, updateCart, deleteCart };