const category = require('../models/Category');

const getAllCategories = async () => {
    return await category.find();
}
module.exports = getAllCategories;