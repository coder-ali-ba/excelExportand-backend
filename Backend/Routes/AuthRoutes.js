import express from "express";
import { loginController, signUpController } from "../Controllers/AuthControllers.js";


const authRouter = express.Router()

authRouter.post("/signup" , signUpController)
authRouter.post("/login" , loginController)

export default authRouter