const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    _id:String,
    src:String,
    ProductName:String,
    price:Number,
    prodDetails:String,
    qty:Number,
    CreatedAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    } 
})



module.exports = mongoose.model('cart',cartSchema)