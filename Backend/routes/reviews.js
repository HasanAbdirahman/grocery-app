const express= require('express');
const router= express.Router();
const reviewsCtrl = require('../controllers/products')

// reviews
router.get('/product/:id/reviews', reviewsCtrl.getAllReviews);
router.get('/product/:id/review/review:id', reviewsCtrl.specificReviews);
router.post('/product/:id/createReview', reviewsCtrl.creeateReview);
router.put('/product/:id/review/review:id/edit', reviewsCtrl.editReview);
router.delete('/product/:id/review/review:id/delete', reviewsCtrl.deleteReview)

module.exports = router