const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { getOrders, getUserOrders, createOrder, updateOrder } = require('../controllers/orderController');

router.get('/', getOrders);
router.get('/:id', getUserOrders);
router.post('/',  createOrder);
router.patch('/', updateOrder);

module.exports = router;
