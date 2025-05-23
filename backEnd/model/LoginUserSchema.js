const mongoose = require('mongoose')

const LoginedUserSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    number:Number,
    cartitems:[{
        id:String,
        src:String,
        ProductName:String,
        price:Number,
        prodDetails:String,
        qty:Number
    }],
    favitems:[{
        id:String,
        src:String,
        ProductName:String,
        price:Number,
        prodDetails:String,
        qty:Number
    }]
})

module.exports = mongoose.model('loginuserdata',LoginedUserSchema)