const express= require('express');
const router= express.Router();
const productCtrl = require('../controllers/products')


router.get('/products', productCtrl.getAllProducts);
router.get('/product/:id', productCtrl.detailProduct);
router.post('/product/create', productCtrl.createProduct);
router.put('/product/:id/edit', productCtrl.editProduct);
router.delete('product/:id/delete', productCtrl.deleteProduct);

module.exports = router