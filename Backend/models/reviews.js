const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const reviewSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product:{type:mongoose.Schema.Types.ObjectId, ref: 'Product', required:true},
    rating: { type: Number, min: 1, max: 5, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Reviews', reviewSchema)