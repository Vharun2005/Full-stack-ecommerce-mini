const LoginUserSchema = require("../model/LoginUserSchema")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secretkey = 'radhka06'


const SignupUser = async(req,res) => {
    try{
        const {username,password,email} = req.body
        const Users = await LoginUserSchema.find({})
        if(Users){
         const ifExists = Users.find((user)=>user.email === email)
        if(ifExists){
            return res.status(500).send('user Aldready exists please login')
        }
      }
        const hashPass = await bcrypt.hash(password,10)
        const newObj = {username:username,password:hashPass,email:email}
        await LoginUserSchema.create(newObj)
        res.status(200).send('User Created successfully')
    }catch(err){
        res.send(err.message)
    }
}


const LoginUser = async(req,res) => {
    try{
        const {username,password} = req.body
        const User = await LoginUserSchema.findOne({username:username})
        if(!User){
            return res.status(404).send('User Not Found please Sign Up')
        }
        const validityPassword = await bcrypt.compare(password, User.password)
        if(!validityPassword){
            return res.status(401).send('Incorrect Password')
        } 
        
        const token = jwt.sign({username:username},secretkey)
        res.status(200).send(token) 
    }catch(err){
        res.send(err.message)
    }
}   

const validateUser = async(req,res) => {
    try{
         const gettoken = req.headers.authorization
         const validate = jwt.verify(gettoken,secretkey)
         if(!validate){
            return res.status(404).send('User not Macthed')
         }
         res.status(200).send(`${validate.username}`)
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {SignupUser,LoginUser,validateUser}