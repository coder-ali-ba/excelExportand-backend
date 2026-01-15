import express, { json } from "express";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRouter from "./Routes/AuthRoutes.js";

const app =express()
app.use(cors())
dotenv.config()
app.use(express.json())

const PORT = 5000;
const uri = process.env.URI

mongoose.connect(uri)
.then(()=>console.log("connected"))
.catch((error)=>console.log(error))



app.get("/" , (req , res )=>{
    res.send("hit the api")
})
app.use("/api/auth" , authRouter)

app.listen(PORT , ()=>{
    console.log( `Server is running at http://localhost:${PORT}`);    
})