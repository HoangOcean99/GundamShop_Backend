var express = require('express');
var router = express.Router();
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');

// Require valid Firebase ID token for all order endpoints
router.use(verifyFirebaseToken);

/* GET all orders */
router.get('/', orderController.getAllOrders);

/* GET order by ID */
router.get('/:id', orderController.getOrderById);

/* POST create order */
router.post('/', orderController.createOrder);

/* PUT update order */
router.put('/:id', orderController.updateOrder);

/* DELETE order */
router.delete('/:id', orderController.deleteOrder);

module.exports = router;