import  jwt from "jsonwebtoken";
import users from "../Modals/AuthModals.js"
import bcrypt from 'bcrypt'

const signUpController = async(req , res) =>{
    const data =req.body;
    const password=data.password
    const isExist = await users.findOne({userEmail : data.userEmail})
    if(isExist){
        res.json({
            data : null,
            message : "user Already exist"
        })
        return
    }
    
    const hashPass =await bcrypt.hash(password , 10)
    const userData = {...data , password : hashPass}

    const signUp =await users.create(userData)

    res.json({
      data : signUp,
      message : "got API"
    })

}



const loginController = async(req,res) =>{
    const data = req.body;
    const verify = await users.findOne({userEmail : data.userEmail})
    if(!verify){
        res.json({
            data:null,
            message: "Invalid Email or Password"
        })
        return
    }
    const verifyPass = await bcrypt.compare(data.password , verify.password)
    if(!verifyPass){
        res.json({
            data :null,
            message : "Invalid Email or Password"
        })
        return
    }
    const token = jwt.sign({id:verify._id} , process.env.privateKey)

    res.json({
        data : data,
        message:"loggedIn",
        token: token
    })
}

export {
     signUpController, 
     loginController
    }