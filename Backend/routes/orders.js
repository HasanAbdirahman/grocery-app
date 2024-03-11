const express = require('express');
const router = express.Router()
const orderCtrl = require('../controllers/orders')

router.post('/order/create',orderCtrl.createOrder);
router.get('/orders/all', orderCtrl.getAllOrders);
router.put('/order/edit/:orderId', orderCtrl.editOrder);
router.delete('/order/delete/:deleteId', orderCtrl.deleteOrder);

module.exports = router