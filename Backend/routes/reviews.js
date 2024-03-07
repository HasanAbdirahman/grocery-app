const express= require('express');
const router= express.Router();
const reviewsCtrl = require('../controllers/products')

// reviews
router.get('/product/:productId/reviews', reviewsCtrl.getAllReviews);
router.post('/product/:productId/createReview', reviewsCtrl.creeateReview);
router.put('/product/:productId/review/:reviewId/edit', reviewsCtrl.editReview);
router.delete('/product/:productId/review/:reviewId/delete', reviewsCtrl.deleteReview)

module.exports = router