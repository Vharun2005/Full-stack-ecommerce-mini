const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    src:String,
    price:Number,
    createdAt:{
        
    }
})

module.exports = mongoose.model('tshirts',productSchema)