const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema= new Schema({
    productId: {type:  mongoose.Schema.Types.ObjectId, ref: 'Product'},
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
            state: String,
            zipcode: String,

        },
    shippingPrice:  {type: Number, default: 3.90},
    tax: Number,
    Discount: {type: Number, default: 0.1},
    coupon: String,
    orderNotes: String,
    orderHistory: String,
    TotalPrice: Number, // this is tax + orderItemsPrice - discount + shipping 
    orderItems: [orderItemSchema]
})


mongoose.exports = module.model('Order',orderSchema)