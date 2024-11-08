const mongoose = require('mongoose')

const jeanproductSchema = new mongoose.Schema({
    src:String,
    price:Number
})

module.exports = mongoose.model('jean',jeanproductSchema)