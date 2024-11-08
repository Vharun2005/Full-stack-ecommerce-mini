const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    _id:String,
    src:String,
    ProductName:String,
    price:Number,
    prodDetails:String,
    qty:Number,
    CreatedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('order',orderSchema)
