const mongoose = require('mongoose')



const connectDatabase = async() =>{
    await mongoose.connect("mongodb://localhost/ecommerce")
    console.log(`the database is running on : localhost`)
}

module.exports = connectDatabase