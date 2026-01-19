const categoryService = require('../services/categoryService')

const getAllCategories = async () => {
    try {
        const categories = await categoryService.getCategories();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = { getAllCategories }; 