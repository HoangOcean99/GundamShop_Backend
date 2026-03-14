const reviewService = require('../services/reviewService')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewService.getReviews();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getReviewById = async (req, res) => {
    try {
        const review = await reviewService.getReviewById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createReview = async (req, res) => {
    try {
        const review = await reviewService.createReview(req.body);
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateReview = async (req, res) => {
    try {
        const review = await reviewService.updateReview(req.params.id, req.body);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteReview = async (req, res) => {
    try {
        const review = await reviewService.deleteReview(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview };