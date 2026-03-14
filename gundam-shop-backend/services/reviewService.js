const Review = require('../models/Review');

const getReviews = async () => {
    return await Review.find().populate('user').populate('product');
}

const getReviewById = async (id) => {
    return await Review.findById(id).populate('user').populate('product');
}

const createReview = async (data) => {
    const review = new Review(data);
    return await review.save();
}

const updateReview = async (id, data) => {
    return await Review.findByIdAndUpdate(id, data, { new: true }).populate('user').populate('product');
}

const deleteReview = async (id) => {
    return await Review.findByIdAndDelete(id);
}

module.exports = { getReviews, getReviewById, createReview, updateReview, deleteReview };