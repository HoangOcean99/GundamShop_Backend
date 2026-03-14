const Category = require('../models/Category');

const getCategories = async () => {
    return await Category.find();
}

const getCategoryById = async (id) => {
    return await Category.findById(id);
}

const createCategory = async (data) => {
    const category = new Category(data);
    return await category.save();
}

const updateCategory = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, { new: true });
}

const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
}

module.exports = { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };