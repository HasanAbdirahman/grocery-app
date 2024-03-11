const Order = require('../models/order');

async function getAllOrders(req, res, next){
    try {
        const order = await Order.find({});
        if (!order){
            return res.status(404).json({success: false, error: 'Order(s) was not found'})
        }
        res.status(200).json({success: true, order})
    } catch (error) {
        next(error)
    }
}

async function createOrder(req, res, next){
    try {
        let orders = await Order.create({
            
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllOrders,createOrder
}