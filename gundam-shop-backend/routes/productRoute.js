var express = require("express");
var router = express.Router();
const { verifyFirebaseToken } = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");

// Require valid Firebase ID token for all product endpoints
// router.use(verifyFirebaseToken);

/* GET all products */
router.get("/", productController.getAllProducts);

/* GET product by ID */
router.get("/:id", productController.getProductById);

/* POST create product */
router.post("/", productController.createProduct);

/* PUT update product */
router.put("/:id", productController.updateProduct);

/* DELETE product */
router.delete("/:id", productController.deleteProduct);

module.exports = router;
