const signUpController = (req , res) =>{
    const data =req.body
res.json({
    data : data,
    message : "got API"
})
}

export default signUpController