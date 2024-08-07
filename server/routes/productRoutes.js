const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { addProduct, getProducts, deleteProduct, getProductById, updateProduct,getTagProducts,getAdminProducts,getProductsClient } = require('../controllers/productController');
const { upload } = require('../middlewares/multer');

router.post('/', upload.array('images', 10), addProduct);
router.get('/', getProducts);
router.get('/adminProducts', getAdminProducts);
router.get('/tagProducts', getTagProducts);
router.get('/client', getProductsClient);
router.delete('/:id',  deleteProduct);
router.get('/:id', getProductById);
router.patch('/', upload.array('images', 10), updateProduct);

module.exports = router;
