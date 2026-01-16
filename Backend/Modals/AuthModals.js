import moongose from 'mongoose'


const allUsers = new moongose.Schema({
    name : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        required :true,
        default : Date.now()
    }
})
const users = moongose.model("allUsers" , allUsers)
export default users