const mongoose = require('mongoose')

const electronicsSchema = new mongoose.Schema({
    imgsrc:String,
    Productname:String,
    price:Number,
    prodDetails:String
})

module.exports = mongoose.model('electronic',electronicsSchema)