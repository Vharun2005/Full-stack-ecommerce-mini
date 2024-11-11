const mongoose = require('mongoose')



const connectDatabase = async() =>{
    await mongoose.connect("mongodb+srv://vharun06:vharun%402005@vharundatabase.myfuz.mongodb.net/ecommerce")
    console.log(`the database is running on : localhost`)
}

module.exports = connectDatabase