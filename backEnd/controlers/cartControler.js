const cartsSchema = require("../model/cartsSchema")






const getCarts = async(req,res,next) =>{
    const getObj = await cartsSchema.find({})
    res.status(200).json(getObj)
    next()
}
const postCarts = async(req,res,next) =>{
    const recievedObj = req.body
    if(!recievedObj.price || !recievedObj.qty ){
        return res.status(500).send('post not recived')
    }
    const user = await cartsSchema.create(recievedObj)
    res.json(user).status(200)
    console.log(user)
    next()
    
}
const updateCarts = async(req,res,next) =>{
    const recievedObj = req.body
    const quantity = req.body.qty
    if(!recievedObj._id || !recievedObj.qty ){
        return res.status(500).send('post not recived')
    }
    const updateObj = await cartsSchema.findById(recievedObj._id)
    console.log(updateObj)
    updateObj.qty = quantity
    updateObj.save()
    console.log(updateObj)
    res.json(updateObj).status(200)
    next()
}
const deleteCarts = async(req,res,next) =>{
    const recievedObj = req.body
    id = req.body._id
    if(!id){
        return res.status(500).send('post not recived')
    }
    await cartsSchema.deleteOne({_id:id})
    res.send("deleted").status(200)
    next()
}

module.exports = {getCarts,postCarts,updateCarts,deleteCarts}