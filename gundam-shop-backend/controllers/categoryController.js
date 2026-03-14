const categoryService = require('../services/categoryService')

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json(category);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory }; 