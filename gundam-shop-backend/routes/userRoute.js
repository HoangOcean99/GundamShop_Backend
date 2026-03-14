var express = require('express');
var router = express.Router();
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Require valid Firebase ID token for all user endpoints
router.use(verifyFirebaseToken);

/* GET all users */
router.get('/', userController.getAllUsers);

/* GET user by ID */
router.get('/:id', userController.getUserById);

/* POST create user */
router.post('/', userController.createUser);

/* POST login or register user */
router.post('/login', userController.loginOrRegister);

/* PUT update user */
router.put('/:id', userController.updateUser);

/* DELETE user */
router.delete('/:id', userController.deleteUser);

module.exports = router;