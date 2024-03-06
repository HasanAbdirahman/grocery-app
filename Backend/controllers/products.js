const Product = require('../models/product');

// product side 
async function getAllProducts(req, res, next){
    try{
        let products = await Product.find({});
        if (!products.length)  throw new Error('No products available');
        res.status(200).json({success: true, products})
    }catch(error){
        return next(error)
    }
}

async function detailProduct(req, res, next){
    try {
        let specificProduct = await Product.findById(req.params.id);
        if (!specificProduct){
        return  res.status(404).json({success: false, error: 'No product found'})
        } 
        res.status(200).json({success: true, specificProduct})
    } catch (error) {
        return next(error)
    }
}
async function create(req, res, next){
    try {
        let product = Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category
        })
        if (!product){
            return res.status(404).json({success:false, error:'Product not created'})
        }
        res.status(200).json({success: true, product})
    } catch (error) {
        next(error)
    }
}


async function editProduct(req, res, next){
    try {
        let product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category
        }, {new:true})//returns the edited object rather than the original
        if (!product){
          return res.status(404).json({success: false, error: 'Product not found'})          
        }
        res.status(200).json({success:true, product})
    } catch (error) {
        console.error('Error in editProduct:', error);
        return next(error)
    }
}

async function deleteProduct(req, res, next){
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        if (!product){
          return  res.status(404).json({success:false, error: 'Product to be deleted '})
        }
        res.status(200).json({success: true, product})
    } catch (error) {
        return next(error)
    }
}



module.exports={
    getAllProducts, detailProduct,editProduct,deleteProduct,create,getAllReviews
}