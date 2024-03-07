const Review= require('../models/review');

async function getAllReviews(req, res, next){
    try{
        let productId = req.params.productId
        let reviews = await Review.find({product: productId});
        if (!reviews.length)  throw new Error('No reviews available');
        res.status(200).json({success: true, reviews})
    }catch(error){
        return next(error)
    }
}
async function creeateReview(req, res, next){
    try {
        let productId = req.params.productId
        let review =  await Review.create({
            user: req.params._id,
            product:  productId,
            rating: req.body.rating,
            description: req.body.description
        })
        if(!review){
            res.status(404).json({success:false, error:'Review is not created'})
        }
        res.status(201).json({ success: true, data: review });
    } catch (error) {
        next(error)
    }
}
async function editReview(req, res, next){
    try {
        const reviewId = req.params.reviewId;
        let review =await Review.findByIdAndUpdate(reviewId, {
            rating: req.body.rating,
            description: req.body.description
        }, {new: true})
        if(!review){
            res.status(404).json({success:false, error:'Review is not edited'})
        }
        res.status(200).json({ success: true, data: review });
    } catch (error) {
        next(error)
    }
}
async function deleteReview(req, res, next){
    try {
        const reviewId = req.params.reviewId; //  the reviewId from req.params.reviewId comes from the name that I gave at the routes same with productId
        let review = await Review.findByIdAndDelete(reviewId)
        if(!review){
            res.status(404).json({success:false, error:'Review is not deleted'})
        }
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        next(error)
    }
}
module.exports={specificReviews,getAllReviews,creeateReview,editReview,deleteReview}