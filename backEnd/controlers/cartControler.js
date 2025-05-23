const cartsSchema = require("../model/cartsSchema")
const loginSchema = require("../model/LoginUserSchema")






const getCarts = async(req,res,next) =>{
    const username = req.body.username
    const getObj = await loginSchema.findOne({username:username})
    const cartitems = getObj.cartitems
    res.status(200).json(cartitems)
}
const postCarts = async(req,res,next) =>{
    const recievedObj = req.body
    const username = recievedObj.username
    if(!recievedObj.price || !recievedObj.qty || !username){
        return res.status(500).send('post not recieved')
    }
    const getUser = await loginSchema.findOne({username:username})
    const oldArray = getUser.cartitems
    getUser.cartitems = [...oldArray,recievedObj]
    getUser.save()
    res.json(getUser).status(200)
}
const updateCarts = async (req, res) => {
    try {
        const { _id, qty, username } = req.body;
        
        // Validate the input
        if (!_id || !qty || !username) {
            return res.status(400).send('Invalid request: Missing required fields');
        }

        // Find the user by username
        const getuser = await loginSchema.findOne({ username: username })
        if (!getuser) {
            return res.status(404).send('User not found');
        }


        // Update the cart items
        const Updatedarr = getuser.cartitems.map((item) =>
            item._id.toString() === _id ? { ...item, qty:qty } : item
        );
        

        // Save the updated user document
        getuser.cartitems = Updatedarr;
        await getuser.save(); // Ensure changes are saved to the database

        // Send success response
        return res.status(200).send('Cart updated successfully');
    } catch (error) {
        // Handle unexpected errors
        console.error('Error updating cart:', error);
        return res.status(500).send('Internal server error');
    }
};

const deleteCarts = async(req,res,next) =>{
    const recievedObj = req.body
    const username = req.body.username
    let id = req.body._id
    if(!id||!username){
        return res.status(500).send('post not recived')
    }
    const User = await loginSchema.findOne({username:username})
    const DeletedArr = User.cartitems.filter((item) => item._id.toString() !== id)
    User.cartitems = DeletedArr
    await User.save()
    res.send("deleted").status(200)
    next()
}

module.exports = {getCarts,postCarts,updateCarts,deleteCarts}