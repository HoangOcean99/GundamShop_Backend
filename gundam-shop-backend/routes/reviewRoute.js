var express = require('express');
var router = express.Router();
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');
const reviewController = require('../controllers/reviewController');

// Require valid Firebase ID token for all review endpoints
router.use(verifyFirebaseToken);

/* GET all reviews */
router.get('/', reviewController.getAllReviews);

/* GET review by ID */
router.get('/:id', reviewController.getReviewById);

/* POST create review */
router.post('/', reviewController.createReview);

/* PUT update review */
router.put('/:id', reviewController.updateReview);

/* DELETE review */
router.delete('/:id', reviewController.deleteReview);

module.exports = router;