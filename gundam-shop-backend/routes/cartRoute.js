var express = require('express');
var router = express.Router();
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

// Require valid Firebase ID token for all cart endpoints
router.use(verifyFirebaseToken);

/* GET all carts */
router.get('/', cartController.getAllCarts);

/* GET cart by ID */
router.get('/:id', cartController.getCartById);

/* POST create cart */
router.post('/', cartController.createCart);

/* PUT update cart */
router.put('/:id', cartController.updateCart);

/* DELETE cart */
router.delete('/:id', cartController.deleteCart);

module.exports = router;