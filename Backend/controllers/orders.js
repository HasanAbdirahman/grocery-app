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
    let {orderItems, orderNotes, user}= req.body;
    try {
        if (!orderItems || orderItems.length === 0 || !Array.isArray(orderItems)){
            return res.status(400).json({success: false, error: 'Invalid order Items'})
        }
        let order = await Order.create({
            orderItems:  orderItems.map(item => {
               productId =  item.product,
               price= item.price,
               quantity = item.quantity
            }), 
            orderNotes,
            user,
            shippingAddress : {
                address: req.body.address,
                country: req.body.country,
                state: req.body.state,
                zipcode: req.body.zipcode
            }
        })
        if (!order){
            return res.status(404).json({success: false, error: 'Failed to create Order'})
        }
        res.status(200).json({success: true, order})
    } catch (error) {
        next(error)
    }
}

async function editOrder(req, res, next){
    let {orderItems, orderNotes} = req.body;
    try {
        if (!Array.isArray(orderItems) || !orderItems.length) {
            return res.status(400).json({ success: false, error: 'Invalid order items data' });
        }
        let options = {
            shippingAddress : {
                address: req.body.address,
                country: req.body.country,
                state: req.body.state,
                zipcode: req.body.zipcode
            },
            orderItems:  orderItems.map(item => {
                productId =  item.product,
                price= item.price,
                quantity = item.quantity
             }), 
             orderNotes
        }
        
        let order = await Order.findByIdAndUpdate(req.params.orderId, options, {new: true})
        if (!order){
            return res.status(404).json({success: false, error: 'Failed to create Order'})
        }
        res.status(200).json({success: true, order})

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllOrders,createOrder,editOrder
}