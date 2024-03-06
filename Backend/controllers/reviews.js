const Reviews= require('../models/review');

// review side
async function getAllReviews(req, res, next){
    try{
        let reviews = await Reviews.find({});
        if (!reviews.length)  throw new Error('No reviews available');
        res.status(200).json({success: true, reviews})
    }catch(error){
        return next(error)
    }
}

async function specificReviews(req,res, next){
   
}


module.exports={specificReviews,getAllReviews}