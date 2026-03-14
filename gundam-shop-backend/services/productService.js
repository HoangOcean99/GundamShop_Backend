const Product = require('../models/Product');

const getProducts = async () => {
    return await Product.find().populate('category');
}

const getProductById = async (id) => {
    return await Product.findById(id).populate('category');
}

const createProduct = async (data) => {
    const product = new Product(data);
    return await product.save();
}

const updateProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true }).populate('category');
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };