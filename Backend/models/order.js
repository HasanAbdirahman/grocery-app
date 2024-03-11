const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema= new Schema({
    product: {type:  mongoose.Schema.Types.ObjectId, ref: 'Product'},
    price: Number,
    quantity: Number
})

const orderSchema = new Schema({
    user: {type:  mongoose.Schema.Types.ObjectId, ref: 'User' },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    orderStatus: {
        type:String,
        enum: ['Delivered', 'Shipped', 'Placed Order']
    },
    shippingAddress: 
        {
            addresss: String,
            country: String,
            zipcode: String,

        },
    tax: Number,
    Discount: Number,
    coupon: String,
    orderNotes: String,
    orderHistory: String,
    TotalPrice: Number,
    orderItems: [orderItemSchema]
})


mongoose.exports = module.model('Order',orderSchema)