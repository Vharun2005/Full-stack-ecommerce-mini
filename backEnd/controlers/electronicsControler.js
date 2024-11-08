const electronicsSchema = require('../model/ElectronicsSchema')

const getElectronics = async(req,res,next) =>{
    const getObj = await electronicsSchema.find()
    res.status(200).json(getObj)
    next()
}
const getSingleElectronics = async(req,res,next) =>{
    const id = req.params.id
    const getObj = await electronicsSchema.findById(id)
    res.status(200).json(getObj)
    next()
}

module.exports = {getElectronics,getSingleElectronics}