const productService = require('../services/productService')

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };