var express = require('express');
var router = express.Router();
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');
const categoryController = require('../controllers/categoryController');

// Require valid Firebase ID token for all category endpoints
router.use(verifyFirebaseToken);

/* GET all categories */
router.get('/', categoryController.getAllCategories);

/* GET category by ID */
router.get('/:id', categoryController.getCategoryById);

/* POST create category */
router.post('/', categoryController.createCategory);

/* PUT update category */
router.put('/:id', categoryController.updateCategory);

/* DELETE category */
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
