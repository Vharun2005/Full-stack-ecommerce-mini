const JeanSchema = require('../model/jeanSchema')


const getJeans = async(req,res,next) =>{
    const jeanObj = await JeanSchema.find()
    res.json(jeanObj)
    next()
}

const getSinglejeans = async(req,res,next) =>{
    const id = req.params.id
    const getobj = await JeanSchema.findById(id)
    res.json(getobj)
    next()
}

module.exports = {getJeans,getSinglejeans}