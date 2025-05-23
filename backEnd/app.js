const express = require('express')
const path = require('path')
const PORT = 3500
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const tshirtRoutes = require('./routes/tshirtRoutes')
const jeanRoutes = require('./routes/jeansRoutes')
const ElectronicRoutes = require('./routes/electronicsRoutes')
const Loginroutes = require('./routes/Loginroute')
const cartsRoutes = require('./routes/cartsRoutes')
const connectDatabase = require('./data/database')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(cors())
app.use('/api',tshirtRoutes)
app.use('/api',jeanRoutes)
app.use('/api',ElectronicRoutes)
app.use('/api',cartsRoutes)
app.use('/api',Loginroutes)


connectDatabase().catch((err)=>{
    console.log(err.message)
})



app.listen(PORT,(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(`server is running on ${PORT}`)
    }

})




