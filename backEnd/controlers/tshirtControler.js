const tshirtSchema = require('../model/tshirtSchema')


const getTshirt = async(req,res,next) =>{
    const TshirtObj = await tshirtSchema.find({})
    console.log(TshirtObj)
    res.json(TshirtObj)
    next()
}

const getSingleTshirt = async(req,res,next) =>{
    const id = req.params.id
    const getobj = await tshirtSchema.findById(id)
    res.json(getobj)
    next()
}

module.exports = {getSingleTshirt,getTshirt}